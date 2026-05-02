import { useState } from "react";
import { Link } from "wouter";
import { ArrowRight, Ship, Truck, FileCheck, Globe, Package, TrendingUp, ShieldCheck, Handshake, BarChart3 } from "lucide-react";

const services = [
  {
    icon: Ship,
    title: "Sea Freight",
    category: "Logistics",
    description: "Full-service ocean freight management for FCL and LCL shipments. We handle booking, documentation, port coordination and cargo tracking across major Indian and international ports.",
    features: ["FCL & LCL Shipments", "Port-to-Port Coordination", "Live Cargo Tracking"],
    image: "/hero-port.png",
  },
  {
    icon: Truck,
    title: "Air Freight",
    category: "Logistics",
    description: "Time-critical air cargo solutions connecting India to global destinations. Ideal for urgent and high-value consignments requiring express, secure and fully tracked delivery.",
    features: ["Express Delivery", "High-Value Cargo Handling", "Door-to-Door Options"],
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&q=80",
  },
  {
    icon: FileCheck,
    title: "Trade Documentation",
    category: "Compliance",
    description: "Meticulous handling of all import-export paperwork. Letters of credit, bills of lading, packing lists, certificates of origin, phytosanitary certificates and full customs clearance.",
    features: ["LC & BL Processing", "Certificates of Origin", "Customs Clearance"],
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&q=80",
  },
  {
    icon: Globe,
    title: "Global Sourcing",
    category: "Procurement",
    description: "Strategic identification and onboarding of verified suppliers worldwide. We negotiate competitive pricing, conduct quality checks, and manage long-term supplier relationships on your behalf.",
    features: ["Supplier Verification", "Quality Inspection", "Price Negotiation"],
    image: "/hero-global.png",
  },
  {
    icon: Package,
    title: "Bulk Trading",
    category: "Trading",
    description: "High-volume bulk commodity trading with consistent quality control from source to delivery. We manage the full supply chain for both import and export operations at scale.",
    features: ["Large-Volume Orders", "End-to-End Supply Chain", "Quality at Scale"],
    image: "/hero-ship.png",
  },
  {
    icon: TrendingUp,
    title: "Market Intelligence",
    category: "Advisory",
    description: "Real-time commodity price data, market trend analysis and trade route optimization. Our insights help clients time their transactions and capitalize on emerging trade opportunities.",
    features: ["Price Trend Analysis", "Market Reports", "Trade Route Advisory"],
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&q=80",
  },
  {
    icon: ShieldCheck,
    title: "Quality Assurance",
    category: "Quality",
    description: "Rigorous pre-shipment and post-shipment inspections by certified third-party agencies. Every consignment is verified against agreed specifications before it leaves the origin.",
    features: ["Third-Party Inspections", "Pre-Shipment Checks", "Compliance Certificates"],
    image: "/warehouse.png",
  },
  {
    icon: Handshake,
    title: "Trade Finance",
    category: "Finance",
    description: "Guidance and facilitation for trade finance instruments — letters of credit, bank guarantees, export credit insurance and payment security structures for buyers and sellers.",
    features: ["LC Facilitation", "Bank Guarantees", "Export Credit"],
    image: "/about-handshake.png",
  },
  {
    icon: BarChart3,
    title: "Domestic Distribution",
    category: "Logistics",
    description: "Pan-India distribution across 6 states — Andhra Pradesh, Maharashtra, Gujarat, Odisha, Telangana, and Karnataka — with reliable last-mile delivery and inventory management.",
    features: ["6 State Coverage", "Last-Mile Delivery", "Inventory Management"],
    image: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=600&q=80",
  },
];

const categories = ["All", "Logistics", "Compliance", "Procurement", "Trading", "Advisory", "Quality", "Finance"];

export default function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All"
    ? services
    : services.filter(s => s.category === activeCategory);

  return (
    <div>
      {/* Page Header */}
      <div className="relative py-24 overflow-hidden" style={{ backgroundColor: "#13223C" }}>
        <img src="/hero-ship.png" alt="" className="absolute inset-0 w-full h-full object-cover" style={{ opacity: 0.25 }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <div className="text-xs font-black tracking-widest mb-3" style={{ color: "#FBD903" }}>WHAT WE OFFER</div>
          <h1 className="font-black text-5xl md:text-6xl text-white mb-4">Our Services</h1>
          <div className="flex items-center justify-center gap-2 text-sm text-white/50">
            <Link href="/" className="hover:text-[#FBD903] transition-colors">Home</Link>
            <span>›</span>
            <span>Our Services</span>
          </div>
        </div>
      </div>

      {/* Intro */}
      <section className="py-16" style={{ backgroundColor: "#f4f6f9" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <div className="text-xs font-black tracking-widest mb-2" style={{ color: "#FBD903" }}>END-TO-END TRADE SOLUTIONS</div>
          <h2 className="font-black text-4xl mb-4" style={{ color: "#13223C" }}>Everything Your Business Needs to Trade</h2>
          <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">
            From freight and documentation to sourcing and market intelligence — Vasista Trading Services delivers comprehensive import-export solutions that keep your business moving without interruption.
          </p>
        </div>
      </section>

      {/* Filter + Cards */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className="px-5 py-2 text-xs font-black tracking-widest transition-all"
                style={{
                  backgroundColor: activeCategory === cat ? "#FBD903" : "transparent",
                  color: "#13223C",
                  border: `2px solid ${activeCategory === cat ? "#FBD903" : "#e5e7eb"}`,
                  borderRadius: "2px",
                }}
              >
                {cat.toUpperCase()}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map(({ icon: Icon, title, category, description, features, image }) => (
              <div
                key={title}
                className="group overflow-hidden transition-all hover:-translate-y-1 hover:shadow-xl"
                style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.08)", borderRadius: "2px" }}
              >
                <div className="relative overflow-hidden h-48">
                  <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to top,rgba(13,24,38,0.8) 0%,transparent 55%)" }} />
                  <div className="absolute top-3 right-3 px-2 py-0.5 text-[11px] font-black" style={{ backgroundColor: "#FBD903", color: "#13223C", borderRadius: "2px" }}>
                    {category}
                  </div>
                </div>
                <div className="p-6" style={{ borderTop: "3px solid #FBD903" }}>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 flex items-center justify-center shrink-0" style={{ backgroundColor: "#13223C", borderRadius: "2px" }}>
                      <Icon size={18} style={{ color: "#FBD903" }} />
                    </div>
                    <h3 className="font-black text-lg" style={{ color: "#13223C" }}>{title}</h3>
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">{description}</p>
                  <ul className="space-y-1.5 mb-5">
                    {features.map(f => (
                      <li key={f} className="flex items-center gap-2 text-xs text-gray-500">
                        <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: "#FBD903" }} />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact" className="inline-flex items-center gap-1.5 text-xs font-black tracking-wider transition-colors hover:text-[#FBD903]" style={{ color: "#13223C" }}>
                    ENQUIRE NOW <ArrowRight size={12} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wide image banner */}
      <div className="relative h-56 overflow-hidden">
        <img src="/about2.png" alt="Operations" className="w-full h-full object-cover" />
        <div className="absolute inset-0 flex items-center justify-center"
          style={{ background: "rgba(13,24,38,0.82)" }}>
          <div className="text-center px-6">
            <h3 className="font-black text-2xl md:text-3xl text-white mb-4">
              Not sure which service fits your need?
            </h3>
            <Link href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3 font-black text-xs tracking-widest transition-all hover:brightness-90"
              style={{ backgroundColor: "#FBD903", color: "#13223C" }}>
              TALK TO OUR TEAM <ArrowRight size={13} />
            </Link>
          </div>
        </div>
      </div>

      {/* CTA */}
      <section className="py-16" style={{ backgroundColor: "#13223C" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-black text-3xl text-white mb-4">Need a Custom Trade Solution?</h2>
          <p className="text-white/60 mb-8 max-w-lg mx-auto text-sm leading-relaxed">
            Every business is different. Contact us to design a trade solution tailored specifically to your requirements.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 font-black tracking-widest text-xs transition-all hover:brightness-90" style={{ backgroundColor: "#FBD903", color: "#13223C" }}>
            CONTACT US TODAY <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </div>
  );
}
