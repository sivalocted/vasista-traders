import { useState, useEffect, useRef } from "react";
import { Link } from "wouter";
import { motion, useInView, useAnimation } from "framer-motion";
import { ArrowRight, CheckCircle, MapPin, Phone, Mail, Globe, Eye, Target } from "lucide-react";

const states = ["Andhra Pradesh", "Maharashtra", "Gujarat", "Odisha", "Telangana", "Karnataka"];

function FadeUp({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 36 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function Counter({ end, suffix = "" }: { end: number; suffix?: string }) {
  const [val, setVal] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = end / 40;
    const timer = setInterval(() => {
      start += step;
      if (start >= end) { setVal(end); clearInterval(timer); }
      else setVal(Math.floor(start));
    }, 35);
    return () => clearInterval(timer);
  }, [inView, end]);
  return <span ref={ref}>{val}{suffix}</span>;
}

export default function HomePage() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { const t = setTimeout(() => setLoaded(true), 80); return () => clearTimeout(t); }, []);

  return (
    <div className="overflow-x-hidden">

      {/* ── HERO ── */}
      <section className="relative" style={{ height: "calc(100vh - 108px)", minHeight: "520px" }}>
        <img src="https://images.unsplash.com/photo-1494412651409-8963ce7935a7?w=1800&q=90" alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(90deg,rgba(13,24,38,0.9) 0%,rgba(13,24,38,0.55) 65%,rgba(13,24,38,0.1) 100%)" }} />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-6 w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={loaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-xl"
            >
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={loaded ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-block px-3 py-1 text-xs font-black tracking-widest mb-6"
                style={{ backgroundColor: "#FBD903", color: "#13223C" }}
              >
                IMPORT &amp; EXPORT SERVICES
              </motion.div>
              <h1 className="font-black text-white leading-[1.05] mb-2" style={{ fontSize: "clamp(2.6rem,6.5vw,5rem)" }}>
                Trade Everything
              </h1>
              <div className="relative inline-block mb-7">
                <h1 className="font-black leading-[1.05]" style={{ fontSize: "clamp(2.6rem,6.5vw,5rem)", color: "#FBD903" }}>
                  with Excellence
                </h1>
                <motion.svg
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={loaded ? { pathLength: 1, opacity: 1 } : {}}
                  transition={{ duration: 1.2, delay: 0.6, ease: "easeInOut" }}
                  className="absolute -bottom-3 left-0" width="240" height="12" viewBox="0 0 240 12" fill="none"
                >
                  <motion.path d="M2 8 Q30 2 58 8 Q86 14 114 8 Q142 2 170 8 Q198 14 226 8 Q234 5 238 3" stroke="#FBD903" strokeWidth="2.5" strokeLinecap="round" fill="none"
                    initial={{ pathLength: 0 }} animate={loaded ? { pathLength: 1 } : {}} transition={{ duration: 1.2, delay: 0.6 }} />
                </motion.svg>
              </div>
              <motion.p
                initial={{ opacity: 0 }} animate={loaded ? { opacity: 1 } : {}} transition={{ delay: 0.5, duration: 0.6 }}
                className="text-white/70 text-base md:text-lg mb-8 leading-relaxed"
              >
                Delivering excellence in global trading &amp; industrial supply.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 16 }} animate={loaded ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.7, duration: 0.6 }}
                className="flex flex-wrap gap-4"
              >
                <Link href="/contact" className="flex items-center gap-2 px-8 py-3.5 font-black text-xs tracking-widest transition-all hover:brightness-90 hover:scale-105" style={{ backgroundColor: "#FBD903", color: "#13223C" }}>
                  GET A FREE QUOTE <ArrowRight size={13} />
                </Link>
                <Link href="/about" className="flex items-center gap-2 px-8 py-3.5 font-black text-xs tracking-widest text-white transition-all hover:bg-white/10" style={{ border: "2px solid rgba(255,255,255,0.4)" }}>
                  ABOUT US
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <div style={{ backgroundColor: "#FBD903" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 grid grid-cols-2 md:grid-cols-4 divide-x divide-[rgba(19,34,60,0.2)]">
          {[
            { end: 6,  suffix: "",  label: "Operational States" },
            { end: 50, suffix: "+", label: "Global Partners" },
            { end: 13, suffix: "+", label: "Trade Categories" },
            { end: 100,suffix: "%", label: "Client Satisfaction" },
          ].map(({ end, suffix, label }) => (
            <div key={label} className="flex flex-col items-center justify-center py-3 px-4">
              <span className="font-black text-3xl" style={{ color: "#13223C" }}>
                <Counter end={end} suffix={suffix} />
              </span>
              <span className="text-xs font-bold tracking-wider text-center mt-0.5" style={{ color: "rgba(19,34,60,0.65)" }}>{label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── ABOUT WITH VISION/MISSION ── */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* VASISTA watermark */}
        <div className="absolute left-0 top-0 bottom-0 flex items-center select-none pointer-events-none" style={{ width: "60px" }}>
          <span className="font-black text-[80px] leading-none" style={{ color: "rgba(19,34,60,0.06)", writingMode: "vertical-rl", letterSpacing: "0.12em", transform: "rotate(180deg)" }}>
            VASISTA
          </span>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-14 items-start relative z-10">
          {/* Image column */}
          <FadeUp>
            <div className="relative" style={{ paddingBottom: "40px" }}>
              {/* Large top image */}
              <div className="relative" style={{ width: "75%", zIndex: 2 }}>
                <img src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=700&q=85" alt="" className="w-full object-cover" style={{ height: "300px", borderRadius: "2px" }} />
                {/* Yellow badge */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="absolute -right-10 bottom-0 flex flex-col items-center justify-center text-center"
                  style={{ backgroundColor: "#FBD903", color: "#13223C", width: "130px", height: "130px", borderRadius: "2px", zIndex: 5 }}
                >
                  <div className="font-black text-4xl leading-none">5+</div>
                  <div className="text-[10px] font-black tracking-wider mt-1 leading-tight">YEARS OF<br/>EXCELLENCE</div>
                </motion.div>
              </div>
              {/* Second overlapping image */}
              <div className="absolute bottom-0 right-0" style={{ width: "60%", zIndex: 1 }}>
                <img src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=500&q=85" alt="" className="w-full object-cover" style={{ height: "220px", borderRadius: "2px", filter: "brightness(0.85)" }} />
              </div>
            </div>
          </FadeUp>

          {/* Text column */}
          <FadeUp delay={0.15}>
            <div className="text-xs font-black tracking-widest mb-2 flex items-center gap-3" style={{ color: "#FBD903" }}>
              About Company
            </div>
            <div className="w-10 h-0.5 mb-4" style={{ backgroundColor: "#FBD903" }} />
            <h2 className="font-black leading-tight mb-4" style={{ fontSize: "clamp(1.8rem,3.5vw,2.8rem)", color: "#13223C" }}>
              Empowering Industries<br />Worldwide
            </h2>
            <p className="text-gray-500 leading-relaxed mb-6 text-sm">
              Vasista Trading Services Pvt. Ltd. is a Mumbai-based import &amp; export company delivering excellence in global trading &amp; industrial supply across India and international markets. We serve clients across 6 operational states with a commitment to trust, quality, and timely delivery.
            </p>

            {/* Vision */}
            <div className="flex items-start gap-4 mb-5">
              <motion.div whileHover={{ scale: 1.08, backgroundColor: "#13223C" }} className="w-14 h-14 flex items-center justify-center shrink-0 transition-colors" style={{ backgroundColor: "#FBD903", borderRadius: "2px" }}>
                <Eye size={22} style={{ color: "#13223C" }} />
              </motion.div>
              <div>
                <div className="font-black text-sm tracking-wider mb-1" style={{ color: "#13223C" }}>OUR VISION</div>
                <p className="text-gray-500 text-sm leading-relaxed">
                  To establish Vasista Trading Services as a trusted global benchmark for excellence in import &amp; export trade solutions.
                </p>
              </div>
            </div>

            {/* Mission */}
            <div className="flex items-start gap-4 mb-7">
              <motion.div whileHover={{ scale: 1.08, backgroundColor: "#13223C" }} className="w-14 h-14 flex items-center justify-center shrink-0 transition-colors" style={{ backgroundColor: "#FBD903", borderRadius: "2px" }}>
                <Target size={22} style={{ color: "#13223C" }} />
              </motion.div>
              <div>
                <div className="font-black text-sm tracking-wider mb-1" style={{ color: "#13223C" }}>OUR MISSION</div>
                <p className="text-gray-500 text-sm leading-relaxed">
                  To continuously deliver reliable, quality-assured commodity trading while building long-term partnerships that empower our clients to thrive.
                </p>
              </div>
            </div>

            <Link href="/about" className="inline-flex items-center gap-2 px-7 py-3.5 font-black text-xs tracking-widest text-white transition-all hover:opacity-90 hover:scale-105 inline-block" style={{ backgroundColor: "#13223C" }}>
              READ MORE <ArrowRight size={13} />
            </Link>
          </FadeUp>
        </div>
      </section>

      {/* ── OPERATIONAL STATES ── */}
      <section className="py-16" style={{ backgroundColor: "#13223C" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <FadeUp>
            <div className="text-xs font-black tracking-widest mb-2" style={{ color: "#FBD903" }}>WHERE WE OPERATE</div>
            <h2 className="font-black text-3xl text-white mb-8">Operational States</h2>
          </FadeUp>
          <div className="flex flex-wrap justify-center gap-4">
            {states.map((state, i) => (
              <motion.div
                key={state}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                whileHover={{ backgroundColor: "#FBD903", scale: 1.04 }}
                className="group flex items-center gap-2 px-6 py-3 text-sm font-bold cursor-default"
                style={{ border: "1px solid rgba(251,217,3,0.4)", color: "#fff", borderRadius: "2px" }}
              >
                <MapPin size={13} style={{ color: "#FBD903" }} />
                <span>{state}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT CTA ── */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <FadeUp>
            <div className="text-xs font-black tracking-widest mb-2" style={{ color: "#FBD903" }}>GET IN TOUCH</div>
            <h2 className="font-black text-3xl mb-4" style={{ color: "#13223C" }}>Ready to Trade with Us?</h2>
            <p className="text-gray-500 mb-8 max-w-lg mx-auto leading-relaxed text-sm">
              Partner with Vasista Trading Services for reliable, quality-assured import &amp; export solutions.
            </p>
            <div className="flex flex-wrap justify-center gap-6 mb-10">
              {[
                { icon: Phone, value: "+91 85919 38908",                href: "tel:+918591938908" },
                { icon: Mail,  value: "info@vasistatradingservices.com", href: "mailto:info@vasistatradingservices.com" },
                { icon: Globe, value: "www.vasistatradingservices.com",  href: "http://www.vasistatradingservices.com" },
              ].map(({ icon: Icon, value, href }) => (
                <a key={href} href={href} className="flex items-center gap-2 text-sm font-semibold hover:text-[#FBD903] transition-colors" style={{ color: "#13223C" }}>
                  <Icon size={14} style={{ color: "#FBD903" }} />{value}
                </a>
              ))}
            </div>
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <Link href="/contact" className="inline-flex items-center gap-2 px-9 py-4 font-black text-xs tracking-widest transition-all hover:brightness-90" style={{ backgroundColor: "#FBD903", color: "#13223C" }}>
                GET A FREE QUOTE <ArrowRight size={14} />
              </Link>
            </motion.div>
          </FadeUp>
        </div>
      </section>
    </div>
  );
}
