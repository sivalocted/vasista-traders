import { motion } from "framer-motion";
import { Link } from "wouter";
import { CheckCircle, MapPin, Eye, Target, Award, Globe, Package, Users } from "lucide-react";

function FadeUp({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function AboutPage() {
  return (
    <div>
      {/* Header */}
      <div className="relative py-20 overflow-hidden" style={{ backgroundColor: "#13223C" }}>
        <img src="https://images.unsplash.com/photo-1494412651409-8963ce7935a7?w=1400&q=80" alt="" className="absolute inset-0 w-full h-full object-cover" style={{ opacity: 0.18 }} />
        {/* Yellow breadcrumb */}
        <div className="absolute right-0 top-0 bottom-0 hidden md:flex items-center">
          <div className="flex items-center gap-2 px-8 py-3 text-xs font-black tracking-wider" style={{ backgroundColor: "#FBD903", color: "#13223C", clipPath: "polygon(12% 0%, 100% 0%, 100% 100%, 0% 100%)", paddingLeft: "36px" }}>
            <Link href="/" className="hover:underline">HOME</Link>
            <span className="mx-1">›</span>
            <span>ABOUT US</span>
          </div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 text-center md:text-left">
          <div className="text-xs font-black tracking-widest mb-3" style={{ color: "#FBD903" }}>WHO WE ARE</div>
          <h1 className="font-black text-5xl text-white">About Us</h1>
        </div>
      </div>

      {/* About — image left, text right (matching screenshot) */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* VASISTA watermark */}
        <div className="absolute left-0 top-0 bottom-0 flex items-center select-none pointer-events-none" style={{ width: "60px" }}>
          <span className="font-black text-[80px] leading-none" style={{ color: "rgba(19,34,60,0.06)", writingMode: "vertical-rl", letterSpacing: "0.12em", transform: "rotate(180deg)" }}>
            VASISTA
          </span>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-16 items-start relative z-10">
          {/* Images */}
          <FadeUp>
            <div className="relative" style={{ paddingBottom: "50px" }}>
              <div className="relative" style={{ width: "75%", zIndex: 2 }}>
                <img src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=700&q=85" alt="" className="w-full object-cover" style={{ height: "320px", borderRadius: "2px" }} />
                <motion.div
                  whileHover={{ scale: 1.06 }}
                  className="absolute -right-8 bottom-0 flex flex-col items-center justify-center text-center shadow-xl"
                  style={{ backgroundColor: "#FBD903", color: "#13223C", width: "130px", height: "130px", borderRadius: "2px", zIndex: 5 }}
                >
                  <div className="font-black text-4xl leading-none">5+</div>
                  <div className="text-[10px] font-black tracking-wider mt-1 leading-tight">YEARS OF<br/>EXCELLENCE</div>
                </motion.div>
              </div>
              <div className="absolute bottom-0 right-0" style={{ width: "58%", zIndex: 1 }}>
                <img src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=500&q=85" alt="" className="w-full object-cover" style={{ height: "210px", borderRadius: "2px", filter: "brightness(0.8)" }} />
              </div>
            </div>
          </FadeUp>

          {/* Text */}
          <FadeUp delay={0.15}>
            <div className="text-xs font-black tracking-widest mb-1" style={{ color: "#FBD903" }}>About Company</div>
            <div className="w-10 h-0.5 mb-4" style={{ backgroundColor: "#FBD903" }} />
            <h2 className="font-black text-4xl leading-tight mb-4" style={{ color: "#13223C" }}>
              Empowering Industries<br />Worldwide
            </h2>
            <p className="text-gray-500 leading-relaxed mb-5 text-sm">
              Vasista Trading Services Pvt. Ltd. is a dynamic import &amp; export company headquartered in Mumbai, Maharashtra. We specialize in delivering excellence in global trading &amp; industrial supply, serving clients across India and international markets.
            </p>
            <p className="text-gray-500 leading-relaxed mb-7 text-sm">
              Operating across six key Indian states with a trusted network of verified suppliers and buyers, we are committed to quality, compliance, and timely delivery in every transaction.
            </p>

            {/* Vision */}
            <div className="flex items-start gap-4 mb-5">
              <motion.div whileHover={{ scale: 1.08 }} className="w-14 h-14 flex items-center justify-center shrink-0 transition-colors" style={{ backgroundColor: "#FBD903", borderRadius: "2px" }}>
                <Eye size={22} style={{ color: "#13223C" }} />
              </motion.div>
              <div>
                <div className="font-black text-sm tracking-wider mb-1" style={{ color: "#13223C" }}>OUR VISION</div>
                <p className="text-gray-500 text-sm leading-relaxed">
                  To establish Vasista Trading Services as a global benchmark for excellence in import &amp; export trade solutions.
                </p>
              </div>
            </div>

            {/* Mission */}
            <div className="flex items-start gap-4">
              <motion.div whileHover={{ scale: 1.08 }} className="w-14 h-14 flex items-center justify-center shrink-0 transition-colors" style={{ backgroundColor: "#FBD903", borderRadius: "2px" }}>
                <Target size={22} style={{ color: "#13223C" }} />
              </motion.div>
              <div>
                <div className="font-black text-sm tracking-wider mb-1" style={{ color: "#13223C" }}>OUR MISSION</div>
                <p className="text-gray-500 text-sm leading-relaxed">
                  To continuously deliver reliable, quality-assured commodity trading while building long-term partnerships that empower our clients to thrive.
                </p>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16" style={{ backgroundColor: "#13223C" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { label: "Trade Categories",   value: "13+", icon: Package },
              { label: "Operational States", value: "6",   icon: MapPin },
              { label: "Global Partners",    value: "50+", icon: Globe },
              { label: "Client Satisfaction",value: "100%",icon: Award },
            ].map(({ label, value, icon: Icon }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <Icon size={28} className="mx-auto mb-3" style={{ color: "#FBD903" }} />
                <div className="font-black text-4xl text-white mb-1">{value}</div>
                <div className="text-xs text-white/60">{label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <FadeUp className="text-center mb-12">
            <div className="text-xs font-black tracking-widest mb-2" style={{ color: "#FBD903" }}>OUR PROMISE</div>
            <h2 className="font-black text-4xl" style={{ color: "#13223C" }}>Trust. Quality. Commitment.</h2>
          </FadeUp>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Trust",      desc: "Transparent, honest business relationships with clients and partners at every step." },
              { title: "Quality",    desc: "Rigorous quality assurance ensuring every transaction meets agreed specifications." },
              { title: "Commitment", desc: "On-time delivery, accurate documentation, and responsive service always." },
            ].map(({ title, desc }, i) => (
              <FadeUp key={title} delay={i * 0.1}>
                <motion.div whileHover={{ y: -6, boxShadow: "0 12px 32px rgba(0,0,0,0.1)" }} className="p-8 transition-all" style={{ border: "1px solid #e5e7eb", borderTop: "4px solid #FBD903", borderRadius: "2px" }}>
                  <div className="font-black text-2xl mb-3" style={{ color: "#13223C" }}>{title}</div>
                  <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                </motion.div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Company details */}
      <section className="py-14" style={{ backgroundColor: "#f4f7fa" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <FadeUp className="text-center mb-10">
            <div className="text-xs font-black tracking-widest mb-2" style={{ color: "#FBD903" }}>COMPANY INFORMATION</div>
            <h2 className="font-black text-3xl" style={{ color: "#13223C" }}>Our Details</h2>
          </FadeUp>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { label: "Company Name",  value: "Vasista Trading Services Pvt. Ltd." },
              { label: "GST Number",    value: "37AALCV9169R1ZY" },
              { label: "Email",         value: "info@vasistatradingservices.com" },
              { label: "Mobile",        value: "+91 85919 38908" },
              { label: "Website",       value: "www.vasistatradingservices.com" },
              { label: "Headquartered", value: "Mumbai, Maharashtra, India" },
            ].map(({ label, value }, i) => (
              <FadeUp key={label} delay={i * 0.07}>
                <div className="p-5 bg-white" style={{ borderLeft: "4px solid #FBD903", borderRadius: "2px" }}>
                  <div className="text-[10px] font-black tracking-widest mb-1" style={{ color: "#FBD903" }}>{label.toUpperCase()}</div>
                  <div className="font-bold text-sm" style={{ color: "#13223C" }}>{value}</div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Operational States */}
      <section className="py-14" style={{ backgroundColor: "#13223C" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <FadeUp>
            <div className="text-xs font-black tracking-widest mb-2" style={{ color: "#FBD903" }}>WHERE WE OPERATE</div>
            <h2 className="font-black text-3xl text-white mb-8">Operational States</h2>
          </FadeUp>
          <div className="flex flex-wrap justify-center gap-3">
            {["Andhra Pradesh","Maharashtra","Gujarat","Odisha","Telangana","Karnataka"].map((state, i) => (
              <motion.div
                key={state}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.4 }}
                whileHover={{ backgroundColor: "#FBD903", color: "#13223C", scale: 1.05 }}
                className="flex items-center gap-2 px-5 py-2.5 text-sm font-bold text-white transition-all"
                style={{ border: "1px solid rgba(251,217,3,0.4)", borderRadius: "2px" }}
              >
                <MapPin size={12} style={{ color: "#FBD903" }} />
                {state}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
