import { Link } from "wouter";
import { Mail, Phone, MapPin, Globe } from "lucide-react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import logo from "/logo.png";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#0A1520", color: "#8a9db5" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="Vasista Trading Services" className="h-12 w-auto object-contain brightness-0 invert" />
              <div>
                <div className="font-black text-white text-sm tracking-wider">VASISTA</div>
                <div className="text-[10px] tracking-widest" style={{ color: "#FBD903" }}>TRADING SERVICES</div>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-4">
              Delivering excellence in global trading &amp; industrial supply.
            </p>
            <p className="text-xs mb-1"><span style={{ color: "#FBD903" }}>GST:</span> 37AALCV9169R1ZY</p>
            <div className="flex gap-3 mt-5">
              {[
                { href: "https://www.facebook.com/share/1HWeDcLf9Q/?mibextid=wwXlfr", icon: <FaFacebookF size={12} /> },
                { href: "https://www.instagram.com/vasista_trading_services",           icon: <FaInstagram size={12} /> },
                { href: "https://www.linkedin.com/company/vasista-trading-services-private-limited", icon: <FaLinkedinIn size={12} /> },
              ].map(({ href, icon }) => (
                <a key={href} href={href} target="_blank" rel="noopener noreferrer"
                  className="w-8 h-8 flex items-center justify-center transition-all hover:bg-[#FBD903] hover:text-[#13223C]"
                  style={{ border: "1px solid rgba(255,255,255,0.15)", color: "#8a9db5", borderRadius: "2px" }}>
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-black text-white text-xs tracking-widest mb-5 pb-2" style={{ borderBottom: "2px solid #FBD903", display: "inline-block" }}>
              QUICK LINKS
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: "Home",         href: "/" },
                { label: "About Us",     href: "/about" },
                { label: "Our Services", href: "/services" },
                { label: "Contact",      href: "/contact" },
              ].map(link => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm hover:text-[#FBD903] transition-colors flex items-center gap-2">
                    <span style={{ color: "#FBD903" }}>›</span>{link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-black text-white text-xs tracking-widest mb-5 pb-2" style={{ borderBottom: "2px solid #FBD903", display: "inline-block" }}>
              CONTACT
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={14} className="mt-0.5 shrink-0" style={{ color: "#FBD903" }} />
                <span className="text-sm">Mumbai, Maharashtra, India</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={14} className="shrink-0" style={{ color: "#FBD903" }} />
                <a href="tel:+918591938908" className="text-sm hover:text-[#FBD903] transition-colors">+91 85919 38908</a>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={14} className="mt-0.5 shrink-0" style={{ color: "#FBD903" }} />
                <a href="mailto:info@vasistatradingservices.com" className="text-sm hover:text-[#FBD903] transition-colors break-all">
                  info@vasistatradingservices.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Globe size={14} className="shrink-0" style={{ color: "#FBD903" }} />
                <a href="http://www.vasistatradingservices.com" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-[#FBD903] transition-colors">
                  www.vasistatradingservices.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="text-xs">© 2025 Vasista Trading Services Pvt. Ltd. All rights reserved.</p>
          <p className="text-xs font-bold" style={{ color: "#FBD903" }}>Trust. Quality. Commitment.</p>
        </div>
      </div>
    </footer>
  );
}
