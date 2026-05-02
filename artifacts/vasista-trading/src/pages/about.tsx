import { CheckCircle, Award, Globe, Package, Users, MapPin } from "lucide-react";
import { Link } from "wouter";

export default function AboutPage() {
  return (
    <div>
      {/* Page Header */}
      <div className="relative py-20 overflow-hidden" style={{ backgroundColor: "#13223C" }}>
        <img src="https://images.unsplash.com/photo-1494412651409-8963ce7935a7?w=1400&q=80" alt="" className="absolute inset-0 w-full h-full object-cover" style={{ opacity: 0.2 }} />
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

      {/* About Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-14 items-center">
            <div className="relative">
              <div className="grid grid-cols-2 gap-3">
                <img src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80" alt="Trading Operations" className="w-full h-60 object-cover" style={{ borderRadius: "2px" }} />
                <img src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=600&q=80" alt="Global Trade" className="w-full h-60 object-cover mt-10" style={{ borderRadius: "2px" }} />
              </div>
              <div className="absolute -bottom-4 left-4 px-6 py-4 shadow-xl" style={{ backgroundColor: "#FBD903", borderRadius: "2px" }}>
                <div className="font-black text-3xl leading-none" style={{ color: "#13223C" }}>5+</div>
                <div className="text-xs font-black tracking-widest mt-1" style={{ color: "#13223C" }}>YEARS IN GLOBAL TRADE</div>
              </div>
            </div>

            <div>
              <div className="text-xs font-black tracking-widest mb-3 flex items-center gap-3" style={{ color: "#FBD903" }}>
                <span className="w-8 h-0.5 inline-block" style={{ backgroundColor: "#FBD903" }} />
                ABOUT VASISTA TRADING
              </div>
              <h2 className="font-black text-4xl leading-tight mb-4" style={{ color: "#13223C" }}>
                Your Trusted Partner in<br />Global Trade
              </h2>
              <div className="w-16 h-1 mb-6" style={{ backgroundColor: "#FBD903" }} />
              <p className="text-gray-600 mb-4 leading-relaxed">
                Vasista Trading Services Pvt. Ltd. is a dynamic and fast-growing import &amp; export company headquartered in Mumbai, Maharashtra. We specialise in delivering excellence in global trading &amp; industrial supply, serving clients across India and international markets.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We operate across six key Indian states — Andhra Pradesh, Maharashtra, Gujarat, Odisha, Telangana, and Karnataka — with a trusted network of verified suppliers and buyers built over years of hands-on experience.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "GST Registered: 37AALCV9169R1ZY",
                  "Active across import & export operations",
                  "Operational in 6 major Indian states",
                  "Committed to quality, compliance, and timely delivery",
                  "Strong industry relationships with verified suppliers",
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

      {/* Values */}
      <section className="py-16" style={{ backgroundColor: "#f4f6f9" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <div className="text-xs font-black tracking-widest mb-2" style={{ color: "#FBD903" }}>OUR CORE VALUES</div>
            <h2 className="font-black text-4xl" style={{ color: "#13223C" }}>Trust. Quality. Commitment.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Award,   title: "Trust",      desc: "We build lasting relationships with clients and partners based on transparency, honesty, and reliable business practices." },
              { icon: Package, title: "Quality",    desc: "Every trade transaction is backed by rigorous quality assurance, ensuring our clients always receive what was agreed upon." },
              { icon: Globe,   title: "Commitment", desc: "We are committed to our promises — timely shipments, accurate documentation, and responsive customer service at every step." },
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
                <div className="text-sm text-white/60">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <div className="text-xs font-black tracking-widest mb-2" style={{ color: "#FBD903" }}>COMPANY INFORMATION</div>
            <h2 className="font-black text-3xl" style={{ color: "#13223C" }}>Our Details</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
