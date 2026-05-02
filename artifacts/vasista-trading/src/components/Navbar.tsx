import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Search, Phone } from "lucide-react";
import logo from "/logo.png";

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
        backgroundColor: scrolled ? "rgba(255,255,255,0.98)" : "#ffffff",
        boxShadow: "0 2px 20px rgba(0,0,0,0.1)",
        borderBottom: "3px solid #FBD903",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <img
              src={logo}
              alt="Vasista Trading Services"
              className="h-14 w-auto object-contain"
            />
            <div className="leading-tight hidden sm:block">
              <div className="font-black text-sm tracking-wider" style={{ color: "#13223C" }}>VASISTA</div>
              <div className="text-[10px] font-bold tracking-widest" style={{ color: "#FBD903" }}>TRADING SERVICES</div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative px-4 py-2 text-xs font-bold tracking-widest transition-colors group"
                style={{ color: location === link.href ? "#FBD903" : "#13223C" }}
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
            <button className="transition-colors hover:text-[#FBD903]" style={{ color: "#13223C" }}>
              <Search size={18} />
            </button>
            <div className="flex items-center gap-2 text-sm">
              <div
                className="w-9 h-9 rounded-full flex items-center justify-center"
                style={{ backgroundColor: "#FBD903" }}
              >
                <Phone size={15} style={{ color: "#13223C" }} />
              </div>
              <div>
                <div className="text-[10px] opacity-50" style={{ color: "#13223C" }}>Call Anytime</div>
                <div className="font-black text-sm" style={{ color: "#13223C" }}>+91 85919 38908</div>
              </div>
            </div>
            <Link
              href="/contact"
              className="px-5 py-3 text-xs font-black tracking-widest transition-all hover:brightness-90 text-white"
              style={{ backgroundColor: "#FBD903", color: "#13223C" }}
            >
              GET A FREE QUOTE
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden"
            style={{ color: "#13223C" }}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="lg:hidden border-t py-4" style={{ borderColor: "#e5e7eb" }}>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-4 py-3 text-sm font-bold tracking-wider transition-colors"
                style={{ color: location === link.href ? "#FBD903" : "#13223C" }}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-4 px-4">
              <Link
                href="/contact"
                className="block text-center px-5 py-3 text-xs font-black tracking-widest"
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
