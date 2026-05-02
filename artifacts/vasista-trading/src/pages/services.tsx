import { Link } from "wouter";
import { ArrowRight, Ship, Truck, FileCheck, Globe, Package, TrendingUp, ShieldCheck, Handshake, BarChart3 } from "lucide-react";

const services = [
  {
    icon: Ship,
    title: "Sea Freight",
    category: "Logistics",
    description: "Comprehensive sea freight solutions for bulk shipments. We manage full container loads (FCL) and less than container loads (LCL) with full cargo tracking and documentation.",
    features: ["FCL & LCL Shipments", "Port-to-Port Delivery", "Cargo Tracking"],
    image: "https://images.unsplash.com/photo-1494412651409-8963ce7935a7?w=600&q=80",
  },
  {
    icon: Truck,
    title: "Air Freight",
    category: "Logistics",
    description: "Express air freight for time-sensitive cargo with access to major Indian and international airports. Ideal for high-value and urgent consignments.",
    features: ["Express Delivery", "Secure Handling", "Door-to-Door Options"],
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&q=80",
  },
  {
    icon: FileCheck,
    title: "Trade Documentation",
    category: "Compliance",
    description: "End-to-end handling of all import-export documentation ensuring full regulatory compliance. Letters of credit, bills of lading, certificates of origin, and customs clearance.",
    features: ["LC & BL Processing", "Certificates of Origin", "Customs Clearance"],
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&q=80",
  },
  {
    icon: Globe,
    title: "Global Sourcing",
    category: "Procurement",
    description: "Strategic sourcing of commodities from a verified global network of suppliers. We negotiate competitive pricing, perform quality checks, and manage supplier relationships.",
    features: ["Verified Suppliers", "Quality Inspection", "Price Negotiation"],
    image: "https://images.unsplash.com/photo-1524661135-423995f22d0b?w=600&q=80",
  },
  {
    icon: Package,
    title: "Bulk Trading",
    category: "Trading",
    description: "High-volume bulk commodity trading with consistent quality control from source to delivery. We handle the full supply chain for both import and export operations.",
    features: ["High-Volume Orders", "Quality Assurance", "End-to-End Supply Chain"],
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80",
  },
  {
    icon: TrendingUp,
    title: "Market Intelligence",
    category: "Advisory",
    description: "Real-time commodity market data, price trend analysis, and strategic trade advisory. Our insights help clients make informed decisions and capitalise on market opportunities.",
    features: ["Price Forecasting", "Market Reports", "Trade Advisory"],
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&q=80",
  },
  {
    icon: ShieldCheck,
    title: "Quality Assurance",
    category: "Quality",
    description: "Rigorous pre-shipment and post-shipment quality inspections by certified third-party agencies. We ensure every consignment meets agreed specifications and international standards.",
    features: ["Third-Party Inspections", "Pre-Shipment Checks", "Compliance Certificates"],
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80",
  },
  {
    icon: Handshake,
    title: "Trade Finance",
    description: "Advisory and facilitation for trade finance instruments including letters of credit, bank guarantees, and export credit. We bridge buyers and sellers with secure payment structures.",
    category: "Finance",
    features: ["LC Facilitation", "Bank Guarantees", "Export Credit"],
    image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=600&q=80",
  },
  {
    icon: BarChart3,
    title: "Domestic Distribution",
    category: "Logistics",
    description: "Pan-India distribution network across 6 operational states — Andhra Pradesh, Maharashtra, Gujarat, Odisha, Telangana, and Karnataka — for seamless inland delivery.",
    features: ["6 State Coverage", "Last-Mile Delivery", "Inventory Management"],
    image: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=600&q=80",
  },
];

const categories = ["All", "Logistics", "Compliance", "Procurement", "Trading", "Advisory", "Quality", "Finance"];

import { useState } from "react";

export default function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All"
    ? services
    : services.filter(s => s.category === activeCategory);

  return (
    <div>
      {/* Page Header */}
      <div className="relative py-20 overflow-hidden" style={{ backgroundColor: "#13223C" }}>
        <img src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1400&q=80" alt="" className="absolute inset-0 w-full h-full object-cover" style={{ opacity: 0.15 }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <div className="text-xs font-black tracking-widest mb-3" style={{ color: "#FBD903" }}>WHAT WE OFFER</div>
          <h1 className="font-black text-5xl text-white mb-4">Our Services</h1>
          <div className="flex items-center justify-center gap-2 text-sm text-white/60">
            <Link href="/" className="hover:text-[#FBD903] transition-colors">Home</Link>
            <span>›</span>
            <span>Our Services</span>
          </div>
        </div>
      </div>

      {/* Intro */}
      <section className="py-16" style={{ backgroundColor: "#f4f6f9" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <div className="text-xs font-black tracking-widest mb-2" style={{ color: "#FBD903" }}>IMPORT & EXPORT SPECIALISTS</div>
          <h2 className="font-black text-3xl mb-4" style={{ color: "#13223C" }}>Comprehensive Trading Solutions</h2>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Vasista Trading Services Pvt. Ltd. provides end-to-end import and export solutions across multiple trade categories. We ensure quality, compliance, and timely delivery for every transaction.
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
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to top,rgba(13,24,38,0.75) 0%,transparent 60%)" }} />
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
                      <li key={f} className="flex items-center gap-2 text-xs text-gray-600">
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

      {/* CTA */}
      <section className="py-16" style={{ backgroundColor: "#13223C" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-black text-3xl text-white mb-4">Need a Custom Trade Solution?</h2>
          <p className="text-white/70 mb-8 max-w-lg mx-auto">
            Contact us for tailored sourcing, bulk pricing, and full export-import support.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-3.5 font-black tracking-widest text-xs transition-all hover:brightness-90" style={{ backgroundColor: "#FBD903", color: "#13223C" }}>
            CONTACT US <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </div>
  );
}
