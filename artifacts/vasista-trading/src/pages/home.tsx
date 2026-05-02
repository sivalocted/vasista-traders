import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import {
  ArrowRight, CheckCircle, Globe, Package, TrendingUp,
  Award, MapPin, ChevronLeft, ChevronRight, Phone, Mail,
  Ship, Truck, FileCheck, Play,
} from "lucide-react";

const heroSlides = [
  {
    bg: "/hero-port.png",
    tag: "IMPORT & EXPORT SPECIALISTS",
    line1: "We move",
    highlight: "commodities",
    line3: "across borders",
    sub: "Trusted global trading partner delivering industrial supply solutions across India and worldwide markets",
  },
  {
    bg: "/hero-ship.png",
    tag: "GLOBAL TRADE SOLUTIONS",
    line1: "Bridging",
    highlight: "markets",
    line3: "beyond limits",
    sub: "Seamless import & export operations connecting suppliers and buyers across 6 Indian states",
  },
  {
    bg: "/hero-global.png",
    tag: "6 OPERATIONAL STATES",
    line1: "Building",
    highlight: "partnerships",
    line3: "that last",
    sub: "Andhra Pradesh · Maharashtra · Gujarat · Odisha · Telangana · Karnataka",
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
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setInView(true); },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, inView };
}

export default function HomePage() {
  const [slide, setSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [videoOpen, setVideoOpen] = useState(false);
  const aboutSec   = useInView();
  const whySec     = useInView();
  const statesSec  = useInView();
  const ctaSec     = useInView();

  useEffect(() => { const t = setTimeout(() => setLoaded(true), 80); return () => clearTimeout(t); }, []);
  useEffect(() => {
    const id = setInterval(() => setSlide(s => (s + 1) % heroSlides.length), 6000);
    return () => clearInterval(id);
  }, []);

  const cur = heroSlides[slide];

  return (
    <div className="overflow-x-hidden">

      {/* ═══ HERO ═══ */}
      <section className="relative" style={{ height: "calc(100vh - 108px)", minHeight: "580px" }}>
        {heroSlides.map((s, i) => (
          <div key={i} className="absolute inset-0 transition-opacity duration-1000" style={{ opacity: i === slide ? 1 : 0 }}>
            <img src={s.bg} alt="" className="w-full h-full object-cover" />
            <div className="absolute inset-0" style={{ background: "linear-gradient(90deg,rgba(13,24,38,0.92) 0%,rgba(13,24,38,0.6) 55%,rgba(13,24,38,0.25) 100%)" }} />
          </div>
        ))}

        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-6 w-full">
            <div
              className="max-w-2xl"
              style={{ opacity: loaded ? 1 : 0, transform: loaded ? "none" : "translateY(28px)", transition: "opacity .9s ease, transform .9s ease" }}
            >
              {/* Play button — like original */}
              <button
                onClick={() => setVideoOpen(true)}
                className="flex items-center gap-3 mb-6 group"
              >
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center transition-transform group-hover:scale-110"
                  style={{ backgroundColor: "#FBD903" }}
                >
                  <Play size={20} fill="#13223C" style={{ color: "#13223C", marginLeft: 3 }} />
                </div>
                <span className="text-white/70 text-xs font-bold tracking-widest group-hover:text-[#FBD903] transition-colors">
                  WATCH OUR STORY
                </span>
              </button>

              <div
                className="inline-block px-3 py-1 text-xs font-black tracking-widest mb-5"
                style={{ backgroundColor: "rgba(251,217,3,0.15)", color: "#FBD903", border: "1px solid rgba(251,217,3,0.4)" }}
              >
                {cur.tag}
              </div>

              <h1 className="font-black text-white leading-[1.05] mb-0" style={{ fontSize: "clamp(2.8rem,7vw,5.5rem)" }}>
                {cur.line1}
              </h1>

              {/* Highlighted word with SVG oval — like the original */}
              <div className="relative inline-block mb-0">
                <h1 className="font-black leading-[1.05]" style={{ fontSize: "clamp(2.8rem,7vw,5.5rem)", color: "#FBD903" }}>
                  {cur.highlight}
                </h1>
                <svg
                  className="absolute pointer-events-none"
                  style={{ top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: "110%", height: "160%" }}
                  viewBox="0 0 200 60"
                  fill="none"
                >
                  <ellipse cx="100" cy="30" rx="96" ry="26" stroke="#FBD903" strokeWidth="2.5" strokeLinecap="round"
                    strokeDasharray="4 2" opacity="0.9" />
                </svg>
              </div>

              <h1 className="font-black text-white leading-[1.05] mb-5" style={{ fontSize: "clamp(2.8rem,7vw,5.5rem)" }}>
                {cur.line3}
              </h1>

              <p className="text-white/70 text-base md:text-lg mb-8 max-w-xl leading-relaxed">{cur.sub}</p>

              <div className="flex flex-wrap gap-4">
                <Link href="/services"
                  className="flex items-center gap-2 px-8 py-3.5 font-black text-xs tracking-widest transition-all hover:brightness-90"
                  style={{ backgroundColor: "#FBD903", color: "#13223C" }}>
                  DISCOVER MORE <ArrowRight size={14} />
                </Link>
                <Link href="/contact"
                  className="flex items-center gap-2 px-8 py-3.5 font-black text-xs tracking-widest text-white transition-all hover:bg-white/10"
                  style={{ border: "2px solid rgba(255,255,255,0.4)" }}>
                  GET A FREE QUOTE <ChevronRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Arrows */}
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

        {/* Dots */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
          {heroSlides.map((_, i) => (
            <button key={i} onClick={() => setSlide(i)} className="rounded-full transition-all"
              style={{ width: i === slide ? 28 : 8, height: 8, backgroundColor: i === slide ? "#FBD903" : "rgba(255,255,255,0.35)" }} />
          ))}
        </div>
      </section>

      {/* Video modal */}
      {videoOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center"
          style={{ backgroundColor: "rgba(0,0,0,0.85)" }}
          onClick={() => setVideoOpen(false)}
        >
          <div className="text-center text-white p-10">
            <div className="text-5xl mb-4">🎬</div>
            <p className="text-lg font-bold mb-2">Company video coming soon</p>
            <p className="text-white/60 text-sm mb-6">Contact us to learn more about Vasista Trading Services</p>
            <button onClick={() => setVideoOpen(false)}
              className="px-6 py-2.5 font-black text-xs tracking-widest"
              style={{ backgroundColor: "#FBD903", color: "#13223C" }}>
              CLOSE
            </button>
          </div>
        </div>
      )}

      {/* ═══ STATS BAR ═══ */}
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

      {/* ═══ ABOUT ═══ */}
      <section className="py-24 relative overflow-hidden bg-white">
        <div className="absolute -left-6 top-1/2 -translate-y-1/2 font-black text-[120px] select-none pointer-events-none leading-none"
          style={{ color: "rgba(19,34,60,0.04)", writingMode: "vertical-rl", letterSpacing: "0.1em" }}>
          VASISTA
        </div>
        <div
          ref={aboutSec.ref}
          className="max-w-7xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-16 items-center relative z-10"
          style={{ opacity: aboutSec.inView ? 1 : 0, transform: aboutSec.inView ? "none" : "translateY(30px)", transition: "opacity .75s ease, transform .75s ease" }}
        >
          {/* Images */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-3">
              <img src="/about-handshake.png" alt="Business Partnership" className="w-full h-64 object-cover" style={{ borderRadius: "2px" }} />
              <img src="/warehouse.png" alt="Warehouse Operations" className="w-full h-64 object-cover mt-10" style={{ borderRadius: "2px" }} />
            </div>
            <div className="absolute -bottom-5 left-4 px-7 py-5 shadow-xl" style={{ backgroundColor: "#FBD903", borderRadius: "2px" }}>
              <div className="font-black text-4xl leading-none" style={{ color: "#13223C" }}>5+</div>
              <div className="text-[11px] font-black tracking-widest mt-1" style={{ color: "#13223C" }}>YEARS IN GLOBAL TRADE</div>
            </div>
          </div>

          {/* Text */}
          <div>
            <div className="text-xs font-black tracking-widest mb-3 flex items-center gap-3" style={{ color: "#FBD903" }}>
              <span className="w-8 h-0.5 inline-block" style={{ backgroundColor: "#FBD903" }} />
              WHO WE ARE
            </div>
            <h2 className="font-black leading-tight mb-5" style={{ fontSize: "clamp(2rem,4vw,3rem)", color: "#13223C" }}>
              Your Reliable<br />Gateway to<br />Global Commerce
            </h2>
            <p className="text-gray-500 leading-relaxed mb-4">
              Vasista Trading Services Pvt. Ltd. operates as a full-service import &amp; export company from Mumbai, Maharashtra. We connect Indian suppliers with international buyers and vice versa — managing the entire trade lifecycle from sourcing to delivery.
            </p>
            <p className="text-gray-500 leading-relaxed mb-7">
              With operations spanning six states and a network of verified partners worldwide, we bring speed, reliability and compliance to every shipment.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "End-to-end import & export management",
                "Verified supplier & buyer network across India",
                "GST registered: 37AALCV9169R1ZY",
                "Compliance-first approach at every transaction",
              ].map(item => (
                <li key={item} className="flex items-start gap-3 text-sm text-gray-600">
                  <CheckCircle size={16} className="mt-0.5 shrink-0" style={{ color: "#FBD903" }} />
                  {item}
                </li>
              ))}
            </ul>
            <Link href="/about"
              className="inline-flex items-center gap-2 px-7 py-3.5 font-black text-xs tracking-widest text-white transition-all hover:opacity-90"
              style={{ backgroundColor: "#13223C" }}>
              READ MORE <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ CORE SERVICES ═══ */}
      <section className="py-20" style={{ backgroundColor: "#f4f7fa" }}>
        <div
          ref={whySec.ref}
          className="max-w-7xl mx-auto px-4 sm:px-6"
          style={{ opacity: whySec.inView ? 1 : 0, transform: whySec.inView ? "none" : "translateY(24px)", transition: "opacity .7s ease, transform .7s ease" }}
        >
          <div className="text-center mb-14">
            <div className="text-xs font-black tracking-widest mb-2" style={{ color: "#FBD903" }}>WHAT WE DO</div>
            <h2 className="font-black text-4xl" style={{ color: "#13223C" }}>How We Serve You</h2>
            <p className="text-gray-500 max-w-xl mx-auto mt-3 text-sm leading-relaxed">
              From documentation to last-mile delivery, we handle every step of your cross-border trade
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Ship,       title: "Sea & Air Freight",   desc: "Full-service sea and air freight management — FCL, LCL, and express air cargo — with complete cargo tracking from origin to destination." },
              { icon: Truck,      title: "Domestic Logistics",  desc: "Pan-India inland transport across our 6 operational states with a trusted fleet and on-time delivery track record." },
              { icon: FileCheck,  title: "Trade Documentation", desc: "Accurate, compliant documentation handling — letters of credit, bills of lading, phytosanitary certificates, and customs clearance." },
              { icon: Globe,      title: "Global Sourcing",     desc: "We identify, vet and onboard quality suppliers from across the globe, securing the best pricing for your specific requirements." },
              { icon: Package,    title: "Bulk Trading",        desc: "Large-volume commodity trading with quality assurance at every stage — from inspection at source to receipt at destination." },
              { icon: TrendingUp, title: "Trade Advisory",      desc: "Strategic market intelligence, commodity price analysis and export-import advisory to keep your business ahead of the curve." },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="group p-8 bg-white transition-all hover:-translate-y-1 hover:shadow-xl" style={{ borderTop: "4px solid #FBD903" }}>
                <div className="w-14 h-14 flex items-center justify-center mb-5 transition-colors group-hover:bg-[#FBD903]"
                  style={{ backgroundColor: "#13223C", borderRadius: "2px" }}>
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
            <Link href="/services"
              className="inline-flex items-center gap-2 px-9 py-4 font-black text-xs tracking-widest transition-all hover:brightness-90"
              style={{ backgroundColor: "#FBD903", color: "#13223C" }}>
              VIEW ALL SERVICES <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ WIDE IMAGE BANNER ═══ */}
      <div className="relative h-64 md:h-80 overflow-hidden">
        <img src="/about2.png" alt="Trade Operations" className="w-full h-full object-cover" />
        <div className="absolute inset-0 flex items-center justify-center"
          style={{ background: "linear-gradient(135deg,rgba(13,24,38,0.88) 0%,rgba(13,24,38,0.5) 100%)" }}>
          <div className="text-center px-4">
            <div className="text-xs font-black tracking-widest mb-3" style={{ color: "#FBD903" }}>OUR PROMISE</div>
            <h3 className="font-black text-3xl md:text-4xl text-white mb-4">
              Every deal. Every delivery.<br />On time. Every time.
            </h3>
            <Link href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3 font-black text-xs tracking-widest transition-all hover:brightness-90"
              style={{ backgroundColor: "#FBD903", color: "#13223C" }}>
              START TRADING WITH US <ArrowRight size={13} />
            </Link>
          </div>
        </div>
      </div>

      {/* ═══ OPERATIONAL STATES ═══ */}
      <section className="py-20 relative overflow-hidden" style={{ backgroundColor: "#13223C" }}>
        <div className="absolute inset-0 opacity-5">
          <img src="/hero-global.png" alt="" className="w-full h-full object-cover" />
        </div>
        <div
          ref={statesSec.ref}
          className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10"
          style={{ opacity: statesSec.inView ? 1 : 0, transition: "opacity .8s ease" }}
        >
          <div className="text-center mb-12">
            <div className="text-xs font-black tracking-widest mb-2" style={{ color: "#FBD903" }}>WHERE WE OPERATE</div>
            <h2 className="font-black text-4xl text-white">Our Operational Presence</h2>
            <p className="text-white/50 mt-3 text-sm">Active trade operations across these 6 Indian states</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {states.map(state => (
              <div key={state}
                className="group flex items-center gap-2 px-6 py-3 text-sm font-bold transition-all hover:bg-[#FBD903] cursor-default"
                style={{ border: "1px solid rgba(251,217,3,0.4)", color: "#fff", borderRadius: "2px" }}>
                <MapPin size={14} className="group-hover:text-[#13223C]" style={{ color: "#FBD903" }} />
                <span className="group-hover:text-[#13223C]">{state}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
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
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-xs font-black tracking-widest mb-3" style={{ color: "#FBD903" }}>LET'S CONNECT</div>
              <h2 className="font-black text-4xl text-white mb-4 leading-tight">
                Got a trade<br />requirement?<br />
                <span style={{ color: "#FBD903" }}>We'll handle it.</span>
              </h2>
              <p className="text-white/60 leading-relaxed mb-6">
                Whether you're looking to import or export, we have the network, expertise and commitment to make it happen — on time and within budget.
              </p>
              <Link href="/contact"
                className="inline-flex items-center gap-2 px-9 py-4 font-black text-xs tracking-widest transition-all hover:brightness-90"
                style={{ backgroundColor: "#FBD903", color: "#13223C" }}>
                GET A FREE QUOTE <ArrowRight size={14} />
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {[
                { icon: Phone, label: "Call Anytime", value: "+91 85919 38908",                  href: "tel:+918591938908" },
                { icon: Mail,  label: "Email Us",     value: "info@vasistatradingservices.com",  href: "mailto:info@vasistatradingservices.com" },
                { icon: Globe, label: "Website",      value: "www.vasistatradingservices.com",   href: "http://www.vasistatradingservices.com" },
              ].map(({ icon: Icon, label, value, href }) => (
                <a key={label} href={href}
                  className="flex items-center gap-4 p-4 transition-colors hover:bg-white/5 group"
                  style={{ border: "1px solid rgba(255,255,255,0.08)", borderRadius: "2px" }}>
                  <div className="w-11 h-11 flex items-center justify-center shrink-0 group-hover:bg-[#FBD903] transition-colors"
                    style={{ backgroundColor: "rgba(251,217,3,0.15)", borderRadius: "2px" }}>
                    <Icon size={18} style={{ color: "#FBD903" }} />
                  </div>
                  <div>
                    <div className="text-[10px] font-black tracking-wider" style={{ color: "rgba(255,255,255,0.35)" }}>{label.toUpperCase()}</div>
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
