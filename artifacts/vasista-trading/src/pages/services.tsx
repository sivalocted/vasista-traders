import { Link } from "wouter";
import { ArrowRight, Ship, Truck, FileCheck, Globe, Package, TrendingUp } from "lucide-react";

const services = [
  { icon: Ship,       title: "Sea Freight",          desc: "Full container and bulk cargo sea freight with end-to-end tracking and documentation." },
  { icon: Truck,      title: "Air Freight",           desc: "Express air cargo solutions for time-sensitive and high-value consignments." },
  { icon: FileCheck,  title: "Trade Documentation",   desc: "Complete management of LC, bills of lading, certificates of origin, and customs clearance." },
  { icon: Globe,      title: "Global Sourcing",       desc: "Strategic procurement from a verified global supplier network with competitive pricing." },
  { icon: Package,    title: "Bulk Trading",          desc: "High-volume commodity trading with quality assurance from source to destination." },
  { icon: TrendingUp, title: "Trade Advisory",        desc: "Market insights, price trends, and strategic advisory for import-export decisions." },
];

export default function ServicesPage() {
  return (
    <div>
      {/* Header */}
      <div className="relative py-20 overflow-hidden" style={{ backgroundColor: "#13223C" }}>
        <img src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1400&q=80" alt="" className="absolute inset-0 w-full h-full object-cover" style={{ opacity: 0.15 }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <div className="text-xs font-black tracking-widest mb-3" style={{ color: "#FBD903" }}>WHAT WE DO</div>
          <h1 className="font-black text-5xl text-white mb-4">Our Services</h1>
          <div className="flex items-center justify-center gap-2 text-sm text-white/60">
            <Link href="/" className="hover:text-[#FBD903] transition-colors">Home</Link>
            <span>›</span>
            <span>Our Services</span>
          </div>
        </div>
      </div>

      {/* Services grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <div className="text-xs font-black tracking-widest mb-2" style={{ color: "#FBD903" }}>IMPORT & EXPORT SPECIALISTS</div>
            <h2 className="font-black text-3xl mb-3" style={{ color: "#13223C" }}>Comprehensive Trading Solutions</h2>
            <p className="text-gray-500 max-w-xl mx-auto text-sm leading-relaxed">
              End-to-end import and export services ensuring quality, compliance, and timely delivery for every transaction.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="group p-8 transition-all hover:-translate-y-1 hover:shadow-xl bg-white" style={{ borderTop: "4px solid #FBD903", boxShadow: "0 2px 12px rgba(0,0,0,0.07)", borderRadius: "2px" }}>
                <div className="w-14 h-14 flex items-center justify-center mb-5 transition-colors group-hover:bg-[#FBD903]" style={{ backgroundColor: "#13223C", borderRadius: "2px" }}>
                  <Icon size={22} className="transition-colors group-hover:text-[#13223C]" style={{ color: "#FBD903" }} />
                </div>
                <h3 className="font-black text-lg mb-3" style={{ color: "#13223C" }}>{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-5">{desc}</p>
                <Link href="/contact" className="text-xs font-black tracking-wider flex items-center gap-1 hover:text-[#FBD903] transition-colors" style={{ color: "#13223C" }}>
                  ENQUIRE <ArrowRight size={12} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14" style={{ backgroundColor: "#f4f7fa" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-black text-3xl mb-3" style={{ color: "#13223C" }}>Need a Custom Trade Solution?</h2>
          <p className="text-gray-500 mb-7 text-sm leading-relaxed">Contact us for tailored sourcing and full export-import support.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-3.5 font-black tracking-widest text-xs transition-all hover:brightness-90" style={{ backgroundColor: "#FBD903", color: "#13223C" }}>
            CONTACT US <ArrowRight size={13} />
          </Link>
        </div>
      </section>
    </div>
  );
}
