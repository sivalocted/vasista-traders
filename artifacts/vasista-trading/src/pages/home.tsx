import { useState, useEffect } from "react";
import { Link } from "wouter";
import { ArrowRight, CheckCircle, MapPin, Phone, Mail, Globe } from "lucide-react";

const states = ["Andhra Pradesh", "Maharashtra", "Gujarat", "Odisha", "Telangana", "Karnataka"];

export default function HomePage() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { const t = setTimeout(() => setLoaded(true), 80); return () => clearTimeout(t); }, []);

  return (
    <div className="overflow-x-hidden">

      {/* ── HERO ── */}
      <section className="relative" style={{ height: "calc(100vh - 108px)", minHeight: "520px" }}>
        <img
          src="https://images.unsplash.com/photo-1494412651409-8963ce7935a7?w=1800&q=90"
          alt="Cargo Port"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(90deg,rgba(13,24,38,0.88) 0%,rgba(13,24,38,0.5) 65%,rgba(13,24,38,0.15) 100%)" }}
        />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-6 w-full">
            <div
              className="max-w-xl"
              style={{
                opacity: loaded ? 1 : 0,
                transform: loaded ? "none" : "translateY(24px)",
                transition: "opacity .8s ease, transform .8s ease",
              }}
            >
              <div
                className="inline-block px-3 py-1 text-xs font-black tracking-widest mb-6"
                style={{ backgroundColor: "#FBD903", color: "#13223C" }}
              >
                IMPORT &amp; EXPORT SERVICES
              </div>
              <h1 className="font-black text-white leading-[1.05] mb-2" style={{ fontSize: "clamp(2.6rem,6.5vw,5rem)" }}>
                Trade Everything
              </h1>
              <div className="relative inline-block mb-7">
                <h1 className="font-black leading-[1.05]" style={{ fontSize: "clamp(2.6rem,6.5vw,5rem)", color: "#FBD903" }}>
                  with Excellence
                </h1>
                <svg className="absolute -bottom-3 left-0" width="240" height="12" viewBox="0 0 240 12" fill="none">
                  <path d="M2 8 Q30 2 58 8 Q86 14 114 8 Q142 2 170 8 Q198 14 226 8 Q234 5 238 3" stroke="#FBD903" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
                </svg>
              </div>
              <p className="text-white/70 text-base md:text-lg mb-8 leading-relaxed">
                Delivering excellence in global trading &amp; industrial supply.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="flex items-center gap-2 px-8 py-3.5 font-black text-xs tracking-widest transition-all hover:brightness-90"
                  style={{ backgroundColor: "#FBD903", color: "#13223C" }}
                >
                  GET A FREE QUOTE <ArrowRight size={13} />
                </Link>
                <Link
                  href="/about"
                  className="flex items-center gap-2 px-8 py-3.5 font-black text-xs tracking-widest text-white transition-all hover:bg-white/10"
                  style={{ border: "2px solid rgba(255,255,255,0.4)" }}
                >
                  ABOUT US
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ABOUT STRIP ── */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute -left-4 top-1/2 -translate-y-1/2 font-black select-none pointer-events-none" style={{ fontSize: "120px", color: "rgba(19,34,60,0.04)", writingMode: "vertical-rl", letterSpacing: "0.08em" }}>
          VASISTA
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-14 items-center relative z-10">
          <div className="relative">
            <div className="grid grid-cols-2 gap-3">
              <img src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=85" alt="" className="w-full h-60 object-cover" style={{ borderRadius: "2px" }} />
              <img src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=600&q=85" alt="" className="w-full h-60 object-cover mt-10" style={{ borderRadius: "2px" }} />
            </div>
          </div>
          <div>
            <div className="text-xs font-black tracking-widest mb-3 flex items-center gap-3" style={{ color: "#FBD903" }}>
              <span className="w-8 h-0.5 inline-block" style={{ backgroundColor: "#FBD903" }} />
              ABOUT COMPANY
            </div>
            <h2 className="font-black leading-tight mb-5" style={{ fontSize: "clamp(2rem,4vw,3rem)", color: "#13223C" }}>
              Empowering<br />Industries<br />Worldwide
            </h2>
            <p className="text-gray-500 leading-relaxed mb-4">
              Vasista Trading Services Pvt. Ltd. is a Mumbai-based import &amp; export company delivering excellence in global trading &amp; industrial supply across India and international markets.
            </p>
            <p className="text-gray-500 leading-relaxed mb-7">
              We serve clients across 6 operational states with a commitment to trust, quality, and timely delivery — building lasting relationships with buyers and suppliers worldwide.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "GST registered: 37AALCV9169R1ZY",
                "Operational across 6 major Indian states",
                "Committed to quality, compliance & on-time delivery",
              ].map(item => (
                <li key={item} className="flex items-start gap-3 text-sm text-gray-600">
                  <CheckCircle size={15} className="mt-0.5 shrink-0" style={{ color: "#FBD903" }} />
                  {item}
                </li>
              ))}
            </ul>
            <Link href="/about" className="inline-flex items-center gap-2 px-7 py-3.5 font-black text-xs tracking-widest text-white transition-all hover:opacity-90" style={{ backgroundColor: "#13223C" }}>
              READ MORE <ArrowRight size={13} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── OPERATIONAL STATES ── */}
      <section className="py-16" style={{ backgroundColor: "#13223C" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <div className="text-xs font-black tracking-widest mb-2" style={{ color: "#FBD903" }}>WHERE WE OPERATE</div>
          <h2 className="font-black text-3xl text-white mb-8">Operational States</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {states.map(state => (
              <div key={state} className="group flex items-center gap-2 px-6 py-3 text-sm font-bold transition-all hover:bg-[#FBD903] cursor-default" style={{ border: "1px solid rgba(251,217,3,0.4)", color: "#fff", borderRadius: "2px" }}>
                <MapPin size={13} className="group-hover:text-[#13223C]" style={{ color: "#FBD903" }} />
                <span className="group-hover:text-[#13223C]">{state}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT CTA ── */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="text-xs font-black tracking-widest mb-2" style={{ color: "#FBD903" }}>GET IN TOUCH</div>
          <h2 className="font-black text-3xl mb-4" style={{ color: "#13223C" }}>Ready to Trade with Us?</h2>
          <p className="text-gray-500 mb-8 max-w-lg mx-auto leading-relaxed">
            Partner with Vasista Trading Services for reliable, quality-assured import &amp; export solutions.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {[
              { icon: Phone, value: "+91 85919 38908",               href: "tel:+918591938908" },
              { icon: Mail,  value: "info@vasistatradingservices.com", href: "mailto:info@vasistatradingservices.com" },
              { icon: Globe, value: "www.vasistatradingservices.com", href: "http://www.vasistatradingservices.com" },
            ].map(({ icon: Icon, value, href }) => (
              <a key={href} href={href} className="flex items-center gap-2 text-sm font-semibold hover:text-[#FBD903] transition-colors" style={{ color: "#13223C" }}>
                <Icon size={15} style={{ color: "#FBD903" }} />
                {value}
              </a>
            ))}
          </div>
          <Link href="/contact" className="inline-flex items-center gap-2 px-9 py-4 font-black text-xs tracking-widest transition-all hover:brightness-90" style={{ backgroundColor: "#FBD903", color: "#13223C" }}>
            GET A FREE QUOTE <ArrowRight size={14} />
          </Link>
        </div>
      </section>

    </div>
  );
}
