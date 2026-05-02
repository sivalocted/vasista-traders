import { Mail, Clock, Phone } from "lucide-react";

export default function TopBar() {
  return (
    <div className="hidden md:block py-2 px-4 text-xs" style={{ backgroundColor: "#0D1826", color: "#8a9db5" }}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-6">
          <a href="mailto:info@vasistatradingservices.com" className="flex items-center gap-2 hover:text-[#FBD903] transition-colors">
            <Mail size={12} />
            <span>info@vasistatradingservices.com</span>
          </a>
          <div className="flex items-center gap-2">
            <Clock size={12} />
            <span>Mon - Sat 9:00 – 6:30, Sunday CLOSED</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Phone size={12} style={{ color: "#FBD903" }} />
          <a href="tel:+918591938908" className="font-bold hover:text-[#FBD903] transition-colors" style={{ color: "#fff" }}>
            +91 85919 38908
          </a>
        </div>
      </div>
    </div>
  );
}
