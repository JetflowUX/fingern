import { useState, useEffect } from "react";
import { Phone, MapPin, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Contact = () => {
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [workingHours, setWorkingHours] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const { toast } = useToast();

  useEffect(() => {
    const fetchSettings = async () => {
      const { data } = await supabase
        .from("site_settings")
        .select("key, value")
        .in("key", ["address", "phone", "email", "working_hours"]);

      if (data) {
        data.forEach(item => {
          if (item.key === "address") setAddress(item.value);
          if (item.key === "phone") setPhone(item.value);
          if (item.key === "email") setEmail(item.value);
          if (item.key === "working_hours") setWorkingHours(item.value);
        });
      }
    };
    fetchSettings();
  }, []);

  const displayAddress = address && !address.toLowerCase().includes("mission")
    ? address
    : "607 N Vermont Ave Suite, Los Angeles, CA, 90004 United States";
  const displayPhone = phone && !phone.toLowerCase().includes("@")
    ? phone
    : "+1 818 856 4873";
  const displayEmail = email || "info@fingren.com";
  const displayWorkingHours = workingHours || "Mon-Fri: 10AM-5PM\nSat-Sun: 10AM-1PM";

  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      content: displayPhone,
    },
    {
      icon: MapPin,
      title: "Visit Us",
      content: displayAddress,
    },
    {
      icon: Mail,
      title: "Mail Us",
      content: displayEmail,
    },
    {
      icon: Clock,
      title: "Working Hours",
      content: displayWorkingHours,
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Banner */}
      <section className="relative h-48 md:h-64 bg-navy flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-r from-navy to-navy-light opacity-90" />
        <h1 className="relative z-10 text-3xl md:text-4xl font-heading font-bold text-primary-foreground">
          Contact Us
        </h1>
      </section>

      {/* Contact Info Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {contactInfo.map((item) => (
            <div key={item.title} className="text-center p-6 bg-card border border-border rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground whitespace-pre-line">
                {item.content}
              </p>
            </div>
          ))}
        </div>

        {/* Contact Form Section */}
        <div className="grid md:grid-cols-2 gap-12 bg-secondary/30 p-8 md:p-12 rounded-xl">
          <div>
            <h2 className="text-3xl font-heading font-semibold text-foreground mb-4">
              Send Us A Message
            </h2>
            <p className="text-muted-foreground mb-6 text-lg">
              Send us a message. Our trained staff are available to provide you all information you need.
            </p>
            <div className="w-20 h-1.5 bg-primary mb-6" />
            <p className="text-foreground font-medium text-lg italic">"We Provide 24/7 Assistance"</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input
                placeholder="Name"
                className="bg-background border-border h-12"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
              <Input
                type="email"
                placeholder="Email"
                required
                className="bg-background border-border h-12"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
            <Input
              placeholder="Subject"
              className="bg-background border-border h-12"
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
            />
            <Textarea
              placeholder="Message"
              rows={4}
              required
              className="bg-background border-border resize-none"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            />
            <Button type="submit" className="bg-primary hover:bg-orange-dark text-white px-10 py-6 h-auto text-lg font-medium transition-all transform hover:scale-105">
              Send Message
            </Button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
