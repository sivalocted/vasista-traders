import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import {
  ArrowRight,
  CheckCircle,
  Globe,
  Package,
  TrendingUp,
  Award,
  MapPin,
  ChevronLeft,
  ChevronRight,
  Phone,
  Mail,
  Ship,
  Truck,
  FileCheck,
} from "lucide-react";

const heroSlides = [
  {
    bg: "https://images.unsplash.com/photo-1494412651409-8963ce7935a7?w=1800&q=90",
    tag: "IMPORT & EXPORT SERVICES",
    line1: "Trade Everything",
    line2: "with Excellence",
    sub: "Delivering excellence in global trading & industrial supply",
  },
  {
    bg: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1800&q=90",
    tag: "GLOBAL TRADE SOLUTIONS",
    line1: "Connecting Markets",
    line2: "Across the Globe",
    sub: "Your trusted partner for bulk commodities across international markets",
  },
  {
    bg: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1800&q=90",
    tag: "6 OPERATIONAL STATES",
    line1: "Trust. Quality.",
    line2: "Commitment.",
    sub: "Serving Andhra Pradesh · Maharashtra · Gujarat · Odisha · Telangana · Karnataka",
  },
];

const stats = [
  { value: "5+",  label: "Years of Excellence" },
  { value: "13+", label: "Trade Categories" },
  { value: "6",   label: "Operational States" },
  { value: "50+", label: "Global Partners" },
];

const states = ["Andhra Pradesh", "Maharashtra", "Gujarat", "Odisha", "Telangana", "Karnataka"];

function useInView(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, inView };
}

export default function HomePage() {
  const [slide, setSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const aboutSec    = useInView();
  const whySec      = useInView();
  const statesSec   = useInView();
  const ctaSec      = useInView();

  useEffect(() => { const t = setTimeout(() => setLoaded(true), 80); return () => clearTimeout(t); }, []);
  useEffect(() => {
    const id = setInterval(() => setSlide(s => (s + 1) % heroSlides.length), 6000);
    return () => clearInterval(id);
  }, []);

  const cur = heroSlides[slide];

  return (
    <div className="overflow-x-hidden">

      {/* HERO */}
      <section className="relative" style={{ height: "calc(100vh - 108px)", minHeight: "560px" }}>
        {heroSlides.map((s, i) => (
          <div key={i} className="absolute inset-0 transition-opacity duration-1000" style={{ opacity: i === slide ? 1 : 0 }}>
            <img src={s.bg} alt="" className="w-full h-full object-cover" />
            <div className="absolute inset-0" style={{ background: "linear-gradient(90deg,rgba(13,24,38,0.88) 0%,rgba(13,24,38,0.55) 60%,rgba(13,24,38,0.2) 100%)" }} />
          </div>
        ))}

        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-6 w-full">
            <div
              className="max-w-2xl"
              style={{ opacity: loaded ? 1 : 0, transform: loaded ? "none" : "translateY(28px)", transition: "opacity .9s ease, transform .9s ease" }}
            >
              <div className="inline-block px-3 py-1 text-xs font-black tracking-widest mb-6" style={{ backgroundColor: "#FBD903", color: "#13223C" }}>
                {cur.tag}
              </div>
              <h1 className="font-black text-white leading-[1.05] mb-1" style={{ fontSize: "clamp(2.8rem,7vw,5.5rem)" }}>
                {cur.line1}
              </h1>
              <div className="relative inline-block mb-6">
                <h1 className="font-black leading-[1.05]" style={{ fontSize: "clamp(2.8rem,7vw,5.5rem)", color: "#FBD903" }}>
                  {cur.line2}
                </h1>
                <svg className="absolute -bottom-3 left-0" width="260" height="14" viewBox="0 0 260 14" fill="none">
                  <path d="M2 9 Q32 2 62 9 Q92 16 122 9 Q152 2 182 9 Q212 16 242 9 Q252 6 258 4" stroke="#FBD903" strokeWidth="3" strokeLinecap="round" fill="none"/>
                </svg>
              </div>
              <p className="text-white/75 text-base md:text-lg mb-9 max-w-xl leading-relaxed">{cur.sub}</p>
              <div className="flex flex-wrap gap-4">
                <Link href="/services" className="flex items-center gap-2 px-8 py-3.5 font-black text-xs tracking-widest transition-all hover:brightness-90" style={{ backgroundColor: "#FBD903", color: "#13223C" }}>
                  DISCOVER MORE <ArrowRight size={14} />
                </Link>
                <Link href="/contact" className="flex items-center gap-2 px-8 py-3.5 font-black text-xs tracking-widest text-white transition-all hover:bg-white/10" style={{ border: "2px solid rgba(255,255,255,0.45)" }}>
                  GET A FREE QUOTE <ChevronRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <button onClick={() => setSlide(s => (s - 1 + heroSlides.length) % heroSlides.length)}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 hidden md:flex items-center justify-center text-white transition-all hover:bg-[#FBD903] hover:text-[#13223C] rounded-full"
          style={{ border: "2px solid rgba(255,255,255,0.35)" }}>
          <ChevronLeft size={20} />
        </button>
        <button onClick={() => setSlide(s => (s + 1) % heroSlides.length)}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 hidden md:flex items-center justify-center text-white transition-all hover:bg-[#FBD903] hover:text-[#13223C] rounded-full"
          style={{ border: "2px solid rgba(255,255,255,0.35)" }}>
          <ChevronRight size={20} />
        </button>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
          {heroSlides.map((_, i) => (
            <button key={i} onClick={() => setSlide(i)} className="rounded-full transition-all"
              style={{ width: i === slide ? 28 : 8, height: 8, backgroundColor: i === slide ? "#FBD903" : "rgba(255,255,255,0.4)" }} />
          ))}
        </div>
      </section>

      {/* STATS BAR */}
      <div style={{ backgroundColor: "#FBD903" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 grid grid-cols-2 md:grid-cols-4 divide-x divide-[rgba(19,34,60,0.2)]">
          {stats.map(({ value, label }) => (
            <div key={label} className="flex flex-col items-center justify-center py-2 px-4">
              <span className="font-black text-3xl" style={{ color: "#13223C" }}>{value}</span>
              <span className="text-xs font-bold tracking-wider text-center" style={{ color: "rgba(19,34,60,0.65)" }}>{label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ABOUT */}
      <section className="py-24 relative overflow-hidden bg-white">
        <div className="absolute -left-6 top-1/2 -translate-y-1/2 font-black text-[120px] select-none pointer-events-none leading-none" style={{ color: "rgba(19,34,60,0.04)", writingMode: "vertical-rl", letterSpacing: "0.1em" }}>
          VASISTA
        </div>
        <div
          ref={aboutSec.ref}
          className="max-w-7xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-16 items-center relative z-10"
          style={{ opacity: aboutSec.inView ? 1 : 0, transform: aboutSec.inView ? "none" : "translateY(30px)", transition: "opacity .75s ease, transform .75s ease" }}
        >
          <div className="relative">
            <div className="grid grid-cols-2 gap-3">
              <img src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=85" alt="Cargo Port" className="w-full h-64 object-cover" style={{ borderRadius: "2px" }} />
              <img src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=600&q=85" alt="Global Trade" className="w-full h-64 object-cover mt-10" style={{ borderRadius: "2px" }} />
            </div>
            <div className="absolute -bottom-5 left-4 px-7 py-5 shadow-xl" style={{ backgroundColor: "#FBD903", borderRadius: "2px" }}>
              <div className="font-black text-4xl leading-none" style={{ color: "#13223C" }}>5+</div>
              <div className="text-[11px] font-black tracking-widest mt-1" style={{ color: "#13223C" }}>YEARS OF EXCELLENCE</div>
            </div>
          </div>

          <div>
            <div className="text-xs font-black tracking-widest mb-3 flex items-center gap-3" style={{ color: "#FBD903" }}>
              <span className="w-8 h-0.5 inline-block" style={{ backgroundColor: "#FBD903" }} />
              ABOUT COMPANY
            </div>
            <h2 className="font-black text-4xl md:text-5xl leading-tight mb-5" style={{ color: "#13223C" }}>
              Empowering<br />Industries<br />Worldwide
            </h2>
            <p className="text-gray-500 leading-relaxed mb-4">
              Vasista Trading Services Pvt. Ltd. is a dynamic import &amp; export company based in Mumbai, Maharashtra, delivering excellence in global trading &amp; industrial supply across India and international markets.
            </p>
            <p className="text-gray-500 leading-relaxed mb-7">
              We serve clients across 6 operational states with a commitment to trust, quality, and timely delivery — building long-term relationships with buyers and suppliers worldwide.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "Bulk commodity import & export expertise",
                "Operational across 6 major Indian states",
                "GST registered: 37AALCV9169R1ZY",
                "Trusted by industries across multiple sectors",
              ].map(item => (
                <li key={item} className="flex items-start gap-3 text-sm text-gray-600">
                  <CheckCircle size={16} className="mt-0.5 shrink-0" style={{ color: "#FBD903" }} />
                  {item}
                </li>
              ))}
            </ul>
            <Link href="/about" className="inline-flex items-center gap-2 px-7 py-3.5 font-black text-xs tracking-widest text-white transition-all hover:opacity-90" style={{ backgroundColor: "#13223C" }}>
              READ MORE <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* CORE SERVICES */}
      <section className="py-20" style={{ backgroundColor: "#f4f7fa" }}>
        <div
          ref={whySec.ref}
          className="max-w-7xl mx-auto px-4 sm:px-6"
          style={{ opacity: whySec.inView ? 1 : 0, transform: whySec.inView ? "none" : "translateY(24px)", transition: "opacity .7s ease, transform .7s ease" }}
        >
          <div className="text-center mb-14">
            <div className="text-xs font-black tracking-widest mb-2" style={{ color: "#FBD903" }}>WHAT WE DO</div>
            <h2 className="font-black text-4xl" style={{ color: "#13223C" }}>Our Core Services</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Ship,       title: "Sea & Air Freight",    desc: "End-to-end sea and air freight solutions for bulk shipments, ensuring timely delivery and full documentation compliance." },
              { icon: Truck,      title: "Domestic Logistics",   desc: "Reliable inland transportation across 6 operational states with a trusted network of logistics partners." },
              { icon: FileCheck,  title: "Trade Documentation",  desc: "Expert handling of all import-export documentation — LC, BL, certificates of origin, phytosanitary, and customs clearance." },
              { icon: Globe,      title: "Global Sourcing",      desc: "Sourcing premium commodities from certified suppliers worldwide with competitive pricing and quality assurance." },
              { icon: Package,    title: "Bulk Supply",          desc: "Specialised in high-volume bulk trading with consistent quality control and verified supply chains." },
              { icon: TrendingUp, title: "Market Intelligence",  desc: "Real-time commodity market insights, price forecasting, and trade advisory for informed business decisions." },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="group p-8 bg-white transition-all hover:-translate-y-1 hover:shadow-xl" style={{ borderTop: "4px solid #FBD903" }}>
                <div className="w-14 h-14 flex items-center justify-center mb-5 transition-colors group-hover:bg-[#FBD903]" style={{ backgroundColor: "#13223C", borderRadius: "2px" }}>
                  <Icon size={22} className="transition-colors group-hover:text-[#13223C]" style={{ color: "#FBD903" }} />
                </div>
                <h3 className="font-black text-lg mb-3" style={{ color: "#13223C" }}>{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                <div className="mt-5">
                  <Link href="/services" className="text-xs font-black tracking-wider flex items-center gap-1 transition-colors hover:text-[#FBD903]" style={{ color: "#13223C" }}>
                    READ MORE <ArrowRight size={12} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/services" className="inline-flex items-center gap-2 px-9 py-4 font-black text-xs tracking-widest transition-all hover:brightness-90" style={{ backgroundColor: "#FBD903", color: "#13223C" }}>
              VIEW ALL SERVICES <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* OPERATIONAL STATES */}
      <section className="py-20 relative overflow-hidden" style={{ backgroundColor: "#13223C" }}>
        <div className="absolute inset-0 opacity-5">
          <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1600&q=60" alt="" className="w-full h-full object-cover" />
        </div>
        <div
          ref={statesSec.ref}
          className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10"
          style={{ opacity: statesSec.inView ? 1 : 0, transition: "opacity .8s ease" }}
        >
          <div className="text-center mb-12">
            <div className="text-xs font-black tracking-widest mb-2" style={{ color: "#FBD903" }}>WHERE WE OPERATE</div>
            <h2 className="font-black text-4xl text-white">Operational States</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {states.map(state => (
              <div key={state} className="group flex items-center gap-2 px-6 py-3 text-sm font-bold transition-all hover:bg-[#FBD903] cursor-default" style={{ border: "1px solid rgba(251,217,3,0.45)", color: "#fff", borderRadius: "2px" }}>
                <MapPin size={14} className="group-hover:text-[#13223C]" style={{ color: "#FBD903" }} />
                <span className="group-hover:text-[#13223C]">{state}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        ref={ctaSec.ref}
        className="py-20"
        style={{
          background: "linear-gradient(135deg, #0D1826 0%, #1a3050 50%, #0D1826 100%)",
          opacity: ctaSec.inView ? 1 : 0,
          transition: "opacity .8s ease",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <div className="text-xs font-black tracking-widest mb-3" style={{ color: "#FBD903" }}>GET IN TOUCH</div>
              <h2 className="font-black text-4xl text-white mb-4 leading-tight">Ready to Trade<br />with Us?</h2>
              <p className="text-white/65 leading-relaxed mb-6">
                Partner with Vasista Trading Services for reliable, quality-assured import &amp; export solutions. We bring you the best commodities at competitive pricing.
              </p>
              <Link href="/contact" className="inline-flex items-center gap-2 px-9 py-4 font-black text-xs tracking-widest transition-all hover:brightness-90" style={{ backgroundColor: "#FBD903", color: "#13223C" }}>
                GET A FREE QUOTE <ArrowRight size={14} />
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {[
                { icon: Phone, label: "Call Anytime", value: "+91 85919 38908",                  href: "tel:+918591938908" },
                { icon: Mail,  label: "Email Us",     value: "info@vasistatradingservices.com",  href: "mailto:info@vasistatradingservices.com" },
                { icon: Globe, label: "Website",      value: "www.vasistatradingservices.com",   href: "http://www.vasistatradingservices.com" },
              ].map(({ icon: Icon, label, value, href }) => (
                <a key={label} href={href} className="flex items-center gap-4 p-4 transition-colors hover:bg-white/5 group" style={{ border: "1px solid rgba(255,255,255,0.08)", borderRadius: "2px" }}>
                  <div className="w-11 h-11 flex items-center justify-center shrink-0 group-hover:bg-[#FBD903] transition-colors" style={{ backgroundColor: "rgba(251,217,3,0.15)", borderRadius: "2px" }}>
                    <Icon size={18} style={{ color: "#FBD903" }} />
                  </div>
                  <div>
                    <div className="text-[10px] font-black tracking-wider" style={{ color: "rgba(255,255,255,0.4)" }}>{label.toUpperCase()}</div>
                    <div className="text-white font-bold text-sm break-all">{value}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
