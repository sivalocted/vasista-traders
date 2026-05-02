import { CheckCircle, MapPin } from "lucide-react";
import { Link } from "wouter";

export default function AboutPage() {
  return (
    <div>
      {/* Header */}
      <div className="relative py-20 overflow-hidden" style={{ backgroundColor: "#13223C" }}>
        <img src="https://images.unsplash.com/photo-1494412651409-8963ce7935a7?w=1400&q=80" alt="" className="absolute inset-0 w-full h-full object-cover" style={{ opacity: 0.18 }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <div className="text-xs font-black tracking-widest mb-3" style={{ color: "#FBD903" }}>WHO WE ARE</div>
          <h1 className="font-black text-5xl text-white mb-4">About Us</h1>
          <div className="flex items-center justify-center gap-2 text-sm text-white/60">
            <Link href="/" className="hover:text-[#FBD903] transition-colors">Home</Link>
            <span>›</span>
            <span>About Us</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-14 items-start">
            <div>
              <div className="text-xs font-black tracking-widest mb-3 flex items-center gap-3" style={{ color: "#FBD903" }}>
                <span className="w-8 h-0.5 inline-block" style={{ backgroundColor: "#FBD903" }} />
                ABOUT VASISTA TRADING
              </div>
              <h2 className="font-black text-4xl leading-tight mb-5" style={{ color: "#13223C" }}>
                Your Trusted Partner<br />in Global Trade
              </h2>
              <div className="w-14 h-1 mb-6" style={{ backgroundColor: "#FBD903" }} />
              <p className="text-gray-600 leading-relaxed mb-4">
                Vasista Trading Services Pvt. Ltd. is a dynamic import &amp; export company headquartered in Mumbai, Maharashtra. We specialize in delivering excellence in global trading &amp; industrial supply, serving clients across India and international markets.
              </p>
              <p className="text-gray-600 leading-relaxed mb-7">
                Operating across six key Indian states with a trusted network of verified suppliers and buyers, we are committed to quality, compliance, and timely delivery in every transaction.
              </p>
              <ul className="space-y-3">
                {[
                  "GST Registered: 37AALCV9169R1ZY",
                  "Operational in 6 major Indian states",
                  "Committed to quality & timely delivery",
                  "Transparent and compliant trade practices",
                ].map(item => (
                  <li key={item} className="flex items-start gap-3 text-sm text-gray-700">
                    <CheckCircle size={15} className="mt-0.5 shrink-0" style={{ color: "#FBD903" }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <img src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=700&q=85" alt="Trading" className="w-full h-80 object-cover mb-5" style={{ borderRadius: "2px" }} />
              {/* Company details card */}
              <div className="p-6" style={{ backgroundColor: "#f4f7fa", borderLeft: "4px solid #FBD903", borderRadius: "2px" }}>
                <h3 className="font-black text-sm tracking-widest mb-4" style={{ color: "#13223C" }}>COMPANY DETAILS</h3>
                <div className="space-y-3">
                  {[
                    { label: "Company",  value: "Vasista Trading Services Pvt. Ltd." },
                    { label: "GST",      value: "37AALCV9169R1ZY" },
                    { label: "Email",    value: "info@vasistatradingservices.com" },
                    { label: "Mobile",   value: "+91 85919 38908" },
                    { label: "Based In", value: "Mumbai, Maharashtra, India" },
                  ].map(({ label, value }) => (
                    <div key={label} className="flex flex-col sm:flex-row sm:gap-3">
                      <span className="text-xs font-black tracking-wider w-20 shrink-0" style={{ color: "#FBD903" }}>{label}</span>
                      <span className="text-sm text-gray-700">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16" style={{ backgroundColor: "#13223C" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <div className="text-xs font-black tracking-widest mb-2" style={{ color: "#FBD903" }}>OUR PROMISE</div>
          <h2 className="font-black text-3xl text-white mb-10">Trust. Quality. Commitment.</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Trust",      desc: "Transparent, honest business relationships with clients and partners at every step." },
              { title: "Quality",    desc: "Rigorous quality assurance ensuring every transaction meets agreed specifications." },
              { title: "Commitment", desc: "On-time delivery, accurate documentation, and responsive service always." },
            ].map(({ title, desc }) => (
              <div key={title} className="p-8" style={{ border: "1px solid rgba(251,217,3,0.25)", borderRadius: "2px" }}>
                <div className="font-black text-2xl mb-3" style={{ color: "#FBD903" }}>{title}</div>
                <p className="text-white/65 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* States */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <div className="text-xs font-black tracking-widest mb-2" style={{ color: "#FBD903" }}>WHERE WE OPERATE</div>
          <h2 className="font-black text-3xl mb-8" style={{ color: "#13223C" }}>Operational States</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {["Andhra Pradesh","Maharashtra","Gujarat","Odisha","Telangana","Karnataka"].map(state => (
              <div key={state} className="flex items-center gap-2 px-5 py-2.5 text-sm font-bold" style={{ backgroundColor: "#f4f7fa", color: "#13223C", borderRadius: "2px", border: "1px solid #e5e7eb" }}>
                <MapPin size={13} style={{ color: "#FBD903" }} />
                {state}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
