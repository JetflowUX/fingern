import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MapPin, Mail, Phone, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { supabase } from "@/integrations/supabase/client";
import logo from "@/assets/logo.png";

const Footer = () => {
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    const fetchSettings = async () => {
      const { data } = await supabase
        .from("site_settings")
        .select("key, value")
        .in("key", ["address", "phone", "email"]);

      if (data) {
        data.forEach(item => {
          if (item.key === "address") setAddress(item.value);
          if (item.key === "phone") setPhone(item.value);
          if (item.key === "email") setEmail(item.value);
        });
      }
    };
    fetchSettings();
  }, []);

  // Use values from settings if they exist and aren't placeholders, otherwise use the found real details
  const displayAddress = address && !address.toLowerCase().includes("mission")
    ? address
    : "607 N Vermont Ave Suite, Los Angeles, CA, 90004 United States";
  const displayPhone = phone && !phone.toLowerCase().includes("@")
    ? phone
    : "+1 818 856 4873";
  const displayEmail = email || "info@fingren.com";

  return (
    <footer id="contact" className="bg-[#8d8d8d] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Column 1: Brand & Logo */}
          <div className="space-y-6">
            <Link to="/" className="inline-block">
              <img src={logo} alt="Fingren Logo" className="h-10 w-auto brightness-0 invert" />
            </Link>
            <p className="text-[14px] leading-relaxed opacity-90 font-light">
              Our mission is to deliver energy solutions for productive use by deploying products, services and systems that power business operations and improve economic outcomes for our clients.
            </p>
          </div>

          {/* Column 2: Contact Details */}
          <div>
            <h3 className="font-heading font-medium text-lg mb-8">
              Contact Details
            </h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-[#ff5722] shrink-0 mt-0.5" />
                <p className="text-[14px] leading-snug">
                  {displayAddress}
                </p>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="w-6 h-6 text-[#ff5722] shrink-0" />
                <a href={`tel:${displayPhone}`} className="text-[14px] hover:text-[#ff5722] transition-colors">
                  {displayPhone}
                </a>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="w-6 h-6 text-[#ff5722] shrink-0" />
                <a href={`mailto:${displayEmail}`} className="text-[14px] hover:text-[#ff5722] transition-colors">
                  {displayEmail}
                </a>
              </div>
            </div>
          </div>

          {/* Column 3: Get A Quote */}
          <div>
            <h3 className="font-heading font-medium text-lg mb-8">
              Get A Quote
            </h3>
            <form className="space-y-4">
              <Input
                type="email"
                placeholder="Email"
                className="bg-white border-none text-foreground placeholder:text-muted-foreground h-11 rounded"
              />
              <Textarea
                placeholder="Message"
                rows={4}
                className="bg-white border-none text-foreground placeholder:text-muted-foreground resize-none rounded"
              />
              <Button className="bg-[#ff5722] hover:bg-[#e64a19] text-white px-8 py-5 h-auto text-[15px] font-medium transition-colors rounded">
                Send Message
              </Button>
            </form>
          </div>

          {/* Column 4: Important Links */}
          <div>
            <h3 className="font-heading font-medium text-lg mb-8">
              Important Links
            </h3>
            <ul className="space-y-4">
              {[
                { name: "Who We Are", href: "/about" },
                { name: "About Company", href: "/about" },
                { name: "Services We Provide", href: "/services" },
                { name: "What We Have Done", href: "/projects" }
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="group flex items-center gap-2 text-[14px] hover:text-[#ff5722] transition-colors"
                  >
                    <ChevronRight className="w-4 h-4 text-[#ff5722] transition-transform group-hover:translate-x-1" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="bg-[#2d2d2d] py-8 text-center border-t border-white/5">
        <div className="container-section py-0 text-[13px] font-light tracking-wide opacity-70">
          Copyright © {new Date().getFullYear()} Fingren | Powered by Fingren
        </div>
      </div>
    </footer>
  );
};

export default Footer;
