import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Search, Phone } from "lucide-react";

const navLinks = [
  { label: "HOME", href: "/" },
  { label: "ABOUT US", href: "/about" },
  { label: "OUR SERVICES", href: "/services" },
  { label: "CONTACT", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className="sticky top-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? "rgba(13,24,38,0.97)" : "#13223C",
        boxShadow: scrolled ? "0 4px 24px rgba(0,0,0,0.3)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div
                className="w-14 h-14 rounded-sm flex items-center justify-center font-black text-2xl"
                style={{ background: "linear-gradient(135deg, #13223C 0%, #1e3a5f 100%)", border: "2px solid #FBD903" }}
              >
                <span style={{ color: "#FBD903" }}>VE</span>
              </div>
            </div>
            <div className="leading-tight">
              <div className="font-bold text-white text-sm tracking-wider">VASISTA</div>
              <div className="text-[10px] tracking-widest" style={{ color: "#FBD903" }}>TRADING SERVICES</div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative px-4 py-2 text-xs font-semibold tracking-widest transition-colors group"
                style={{ color: location === link.href ? "#FBD903" : "rgba(255,255,255,0.85)" }}
              >
                {link.label}
                <span
                  className="absolute bottom-0 left-4 right-4 h-0.5 transition-transform origin-left"
                  style={{
                    backgroundColor: "#FBD903",
                    transform: location === link.href ? "scaleX(1)" : "scaleX(0)",
                  }}
                />
              </Link>
            ))}
          </div>

          {/* CTA + Search */}
          <div className="hidden lg:flex items-center gap-4">
            <button className="text-white hover:text-[#FBD903] transition-colors">
              <Search size={18} />
            </button>
            <div className="flex items-center gap-2 text-white text-sm">
              <div
                className="w-9 h-9 rounded-full flex items-center justify-center"
                style={{ backgroundColor: "#FBD903" }}
              >
                <Phone size={15} style={{ color: "#13223C" }} />
              </div>
              <div>
                <div className="text-[10px] opacity-60">Call Anytime</div>
                <div className="font-bold text-sm">+91 85919 38908</div>
              </div>
            </div>
            <Link
              href="/contact"
              className="px-5 py-2.5 text-xs font-bold tracking-widest transition-all hover:brightness-90"
              style={{ backgroundColor: "#FBD903", color: "#13223C" }}
            >
              GET A FREE QUOTE
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="lg:hidden border-t border-white/10 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-4 py-3 text-sm font-semibold tracking-wider transition-colors"
                style={{ color: location === link.href ? "#FBD903" : "rgba(255,255,255,0.85)" }}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-4 px-4">
              <Link
                href="/contact"
                className="block text-center px-5 py-3 text-xs font-bold tracking-widest"
                style={{ backgroundColor: "#FBD903", color: "#13223C" }}
                onClick={() => setIsOpen(false)}
              >
                GET A FREE QUOTE
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
