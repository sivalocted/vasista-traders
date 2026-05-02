import { Mail, Clock, Phone } from "lucide-react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

export default function TopBar() {
  return (
    <div className="hidden md:block py-2 px-4 text-sm" style={{ backgroundColor: "#0D1826", color: "#aab4c4" }}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-6">
          <a
            href="mailto:info@vasistatradingservices.com"
            className="flex items-center gap-2 hover:text-[#FBD903] transition-colors"
          >
            <Mail size={13} />
            <span>info@vasistatradingservices.com</span>
          </a>
          <div className="flex items-center gap-2">
            <Clock size={13} />
            <span>Mon - Sat 9:00 - 6:30, Sunday - CLOSED</span>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <a
            href="https://www.facebook.com/share/1HWeDcLf9Q/?mibextid=wwXlfr"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#FBD903] transition-colors"
          >
            <FaFacebookF size={12} />
          </a>
          <a
            href="https://www.instagram.com/vasista_trading_services"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#FBD903] transition-colors"
          >
            <FaInstagram size={12} />
          </a>
          <a
            href="https://www.linkedin.com/company/vasista-trading-services-private-limited"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#FBD903] transition-colors"
          >
            <FaLinkedinIn size={12} />
          </a>
          <a href="#" className="hover:text-[#FBD903] transition-colors">
            <FaTwitter size={12} />
          </a>
        </div>
      </div>
    </div>
  );
}
