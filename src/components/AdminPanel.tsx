import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { X, Settings, Phone, MapPin, Mail, Clock } from "lucide-react";

interface AdminPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

const AdminPanel = ({ isOpen, onClose }: AdminPanelProps) => {
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [workingHours, setWorkingHours] = useState("");
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    if (isOpen) {
      fetchSettings();
    }
  }, [isOpen]);

  const fetchSettings = async () => {
    const { data, error } = await supabase
      .from("site_settings")
      .select("key, value");

    if (data) {
      data.forEach(item => {
        if (item.key === "address") setAddress(item.value);
        if (item.key === "phone") setPhone(item.value);
        if (item.key === "email") setEmail(item.value);
        if (item.key === "working_hours") setWorkingHours(item.value);
      });
    }
  };

  const handleSave = async () => {
    setLoading(true);
    try {
      const updates = [
        { key: "address", value: address },
        { key: "phone", value: phone },
        { key: "email", value: email },
        { key: "working_hours", value: workingHours },
      ];

      for (const update of updates) {
        console.log("Updating:", update.key, update.value);
        const { error } = await supabase
          .from("site_settings")
          .upsert({ key: update.key, value: update.value }, { onConflict: 'key' });

        if (error) {
          console.error(`Error updating ${update.key}:`, error);
          throw error;
        }
      }

      toast({
        title: "Settings saved",
        description: "Your contact details have been updated correctly.",
      });

      // Reload the page to ensure all components get the new data
      setTimeout(() => {
        window.location.reload();
      }, 1000);

      onClose();
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Failed to save settings. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-foreground/50 z-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-lg shadow-2xl border-primary/20">
        <CardHeader className="flex flex-row items-center justify-between border-b bg-muted/30 pb-4">
          <CardTitle className="flex items-center gap-2 text-xl">
            <Settings className="w-6 h-6 text-primary animate-spin-slow" />
            Control Panel - Contact Info
          </CardTitle>
          <Button variant="ghost" size="icon" onClick={onClose} className="hover:rotate-90 transition-transform">
            <X className="w-5 h-5" />
          </Button>
        </CardHeader>
        <CardContent className="space-y-6 pt-6 max-h-[70vh] overflow-y-auto pr-2">
          <div className="grid gap-6">
            <div className="grid gap-2">
              <label className="text-sm font-semibold text-foreground flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#ff5722]" />
                Primary Phone Number
              </label>
              <Input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+1 818 856 4873"
                className="focus-visible:ring-[#ff5722]"
              />
            </div>

            <div className="grid gap-2">
              <label className="text-sm font-semibold text-foreground flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#ff5722]" />
                Official Email Address
              </label>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="info@fingren.com"
                className="focus-visible:ring-[#ff5722]"
              />
            </div>

            <div className="grid gap-2">
              <label className="text-sm font-semibold text-foreground flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#ff5722]" />
                Office Physical Address
              </label>
              <Textarea
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                rows={3}
                placeholder="607 N Vermont Ave Suite, Los Angeles, CA, 90004 United States"
                className="focus-visible:ring-[#ff5722] resize-none"
              />
            </div>

            <div className="grid gap-2">
              <label className="text-sm font-semibold text-foreground flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#ff5722]" />
                Operational Hours
              </label>
              <Textarea
                value={workingHours}
                onChange={(e) => setWorkingHours(e.target.value)}
                rows={2}
                placeholder="Mon-Fri: 10AM-5PM&#10;Sat-Sun: 10AM-1PM"
                className="focus-visible:ring-[#ff5722] resize-none"
              />
              <p className="text-[11px] text-muted-foreground italic">Use Shift+Enter for new lines</p>
            </div>
          </div>

          <div className="flex gap-3 justify-end pt-6 border-t mt-4">
            <Button variant="outline" onClick={onClose} className="px-6 h-11">
              Cancel
            </Button>
            <Button onClick={handleSave} disabled={loading} className="bg-[#ff5722] hover:bg-[#e64a19] text-white px-8 h-11 font-semibold transition-all shadow-md hover:shadow-lg active:scale-95">
              {loading ? "Processing..." : "Commit Changes"}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminPanel;
