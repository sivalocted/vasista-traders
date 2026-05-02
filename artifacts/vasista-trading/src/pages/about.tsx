import { CheckCircle, Award, Globe, Package, Users, MapPin } from "lucide-react";
import { Link } from "wouter";

export default function AboutPage() {
  return (
    <div>
      {/* Page Header */}
      <div className="relative py-24 overflow-hidden" style={{ backgroundColor: "#13223C" }}>
        <img src="/hero-port.png" alt="" className="absolute inset-0 w-full h-full object-cover" style={{ opacity: 0.25 }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <div className="text-xs font-black tracking-widest mb-3" style={{ color: "#FBD903" }}>WHO WE ARE</div>
          <h1 className="font-black text-5xl md:text-6xl text-white mb-4">About Us</h1>
          <div className="flex items-center justify-center gap-2 text-sm text-white/50">
            <Link href="/" className="hover:text-[#FBD903] transition-colors">Home</Link>
            <span>›</span>
            <span>About Us</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-14 items-center">
            <div className="relative">
              <div className="grid grid-cols-2 gap-3">
                <img src="/about-handshake.png" alt="Partnership" className="w-full h-64 object-cover" style={{ borderRadius: "2px" }} />
                <img src="/warehouse.png" alt="Warehouse" className="w-full h-64 object-cover mt-10" style={{ borderRadius: "2px" }} />
              </div>
              <div className="absolute -bottom-4 left-4 px-6 py-4 shadow-xl" style={{ backgroundColor: "#FBD903", borderRadius: "2px" }}>
                <div className="font-black text-3xl leading-none" style={{ color: "#13223C" }}>5+</div>
                <div className="text-xs font-black tracking-widest mt-1" style={{ color: "#13223C" }}>YEARS IN GLOBAL TRADE</div>
              </div>
            </div>

            <div>
              <div className="text-xs font-black tracking-widest mb-3 flex items-center gap-3" style={{ color: "#FBD903" }}>
                <span className="w-8 h-0.5 inline-block" style={{ backgroundColor: "#FBD903" }} />
                OUR STORY
              </div>
              <h2 className="font-black leading-tight mb-4" style={{ fontSize: "clamp(1.8rem,3.5vw,2.8rem)", color: "#13223C" }}>
                Built on Integrity.<br />Driven by Results.
              </h2>
              <div className="w-16 h-1 mb-5" style={{ backgroundColor: "#FBD903" }} />
              <p className="text-gray-600 mb-4 leading-relaxed">
                Vasista Trading Services Pvt. Ltd. was founded with a clear mission: to make international trade simpler, faster, and more reliable for businesses across India. Headquartered in Mumbai, Maharashtra, we serve as a bridge between Indian markets and the global economy.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our operational presence spans six key Indian states, supported by a network of verified suppliers, logistics partners, and trade finance professionals who share our commitment to excellence.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "GST Registered: 37AALCV9169R1ZY",
                  "Full import & export lifecycle management",
                  "Operational across 6 major Indian states",
                  "Compliance-driven with transparent practices",
                  "Verified global supplier & buyer network",
                ].map(item => (
                  <li key={item} className="flex items-start gap-3 text-sm text-gray-700">
                    <CheckCircle size={16} className="mt-0.5 shrink-0" style={{ color: "#FBD903" }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Wide Banner */}
      <div className="relative h-56 overflow-hidden">
        <img src="/about2.png" alt="Trade expertise" className="w-full h-full object-cover" />
        <div className="absolute inset-0 flex items-center"
          style={{ background: "rgba(13,24,38,0.82)" }}>
          <div className="max-w-7xl mx-auto px-6 w-full">
            <div className="max-w-2xl">
              <p className="font-black text-2xl md:text-3xl text-white leading-snug">
                "We don't just move cargo — <span style={{ color: "#FBD903" }}>we build trade relationships that stand the test of time."</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Core Values */}
      <section className="py-16" style={{ backgroundColor: "#f4f6f9" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <div className="text-xs font-black tracking-widest mb-2" style={{ color: "#FBD903" }}>WHAT GUIDES US</div>
            <h2 className="font-black text-4xl" style={{ color: "#13223C" }}>Our Core Principles</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Award,   title: "Trust First",       desc: "Every relationship we build is founded on complete transparency. Our clients know exactly what they're getting — no surprises, no shortcuts." },
              { icon: Package, title: "Uncompromising Quality", desc: "From sourcing verification to delivery, we maintain strict quality standards that protect our clients' interests at every stage." },
              { icon: Globe,   title: "Full Commitment",   desc: "We treat every trade transaction as our own — putting our expertise, network and energy into ensuring your success." },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="p-8 text-center bg-white" style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.06)", borderRadius: "2px" }}>
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5" style={{ backgroundColor: "#13223C" }}>
                  <Icon size={26} style={{ color: "#FBD903" }} />
                </div>
                <h3 className="font-black text-xl mb-3" style={{ color: "#13223C" }}>{title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16" style={{ backgroundColor: "#13223C" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { label: "Years of Excellence", value: "5+",  icon: Award },
              { label: "Trade Categories",    value: "13+", icon: Package },
              { label: "Operational States",  value: "6",   icon: MapPin },
              { label: "Trade Partners",      value: "50+", icon: Users },
            ].map(({ label, value, icon: Icon }) => (
              <div key={label}>
                <Icon size={32} className="mx-auto mb-3" style={{ color: "#FBD903" }} />
                <div className="font-black text-4xl text-white mb-1">{value}</div>
                <div className="text-sm text-white/55">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <div className="text-xs font-black tracking-widest mb-2" style={{ color: "#FBD903" }}>COMPANY DETAILS</div>
            <h2 className="font-black text-3xl" style={{ color: "#13223C" }}>Get to Know Us</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { label: "Company Name",  value: "Vasista Trading Services Pvt. Ltd." },
              { label: "GST Number",    value: "37AALCV9169R1ZY" },
              { label: "Email",         value: "info@vasistatradingservices.com" },
              { label: "Mobile",        value: "+91 85919 38908" },
              { label: "Website",       value: "www.vasistatradingservices.com" },
              { label: "Headquartered", value: "Mumbai, Maharashtra, India" },
            ].map(({ label, value }) => (
              <div key={label} className="p-6" style={{ backgroundColor: "#f4f6f9", borderLeft: "4px solid #FBD903", borderRadius: "2px" }}>
                <div className="text-[10px] font-black tracking-widest mb-1" style={{ color: "#FBD903" }}>{label.toUpperCase()}</div>
                <div className="font-bold text-sm" style={{ color: "#13223C" }}>{value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
