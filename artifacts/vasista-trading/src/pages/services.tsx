import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

const products = [
  {
    name: "Sulphur",
    category: "Minerals",
    description: "High-purity industrial and agricultural grade sulphur. Used in fertilizers, chemicals, rubber vulcanization, and pharmaceuticals. Available in granular and powder forms.",
    image: "https://images.unsplash.com/photo-1611095973763-414019e72400?w=600&q=80",
    specs: ["Purity: 99%+", "Granular & Powder", "Bulk Quantities"],
  },
  {
    name: "Jet Coke",
    category: "Carbon Products",
    description: "Premium quality jet coke used as fuel in cement kilns, power plants, and industrial boilers. High calorific value with low ash content.",
    image: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=600&q=80",
    specs: ["High Calorific Value", "Low Ash Content", "Bulk Supply"],
  },
  {
    name: "Urea",
    category: "Fertilizers",
    description: "Agricultural-grade urea (46% N) for enhanced crop yields. Widely used as a nitrogen fertilizer in farming and as an industrial chemical feedstock.",
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=80",
    specs: ["46% Nitrogen", "Prilled & Granular", "Export Grade"],
  },
  {
    name: "Manganese",
    category: "Minerals",
    description: "Industrial manganese ore essential for steel production, battery manufacturing, and chemical applications. Sourced from certified mines.",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=600&q=80",
    specs: ["High Mn Content", "Steel Grade", "Certified Source"],
  },
  {
    name: "Pet Coke",
    category: "Carbon Products",
    description: "Petroleum coke for cement industry, power generation, and steel manufacturing. High fixed carbon content and excellent fuel efficiency.",
    image: "https://images.unsplash.com/photo-1497435334941-8c899a9f15e0?w=600&q=80",
    specs: ["High Fixed Carbon", "Low Sulfur Options", "Industrial Grade"],
  },
  {
    name: "Iron Ore",
    category: "Minerals",
    description: "High-grade iron ore lumps and fines for steel manufacturing. Sourced from leading Indian mines with consistent quality and grade.",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&q=80",
    specs: ["Fe Content: 60%+", "Lumps & Fines", "BIS Certified"],
  },
  {
    name: "Dry Fruits",
    category: "Food Products",
    description: "Premium quality dry fruits including cashews, almonds, raisins, and mixed nuts. Sourced from top growing regions and exported to global markets.",
    image: "https://images.unsplash.com/photo-1609780447631-05b93e5a88ea?w=600&q=80",
    specs: ["FSSAI Certified", "Export Packaging", "All Varieties"],
  },
  {
    name: "Pesticides",
    category: "Agriculture",
    description: "Effective crop protection pesticides for agricultural use. Covers insecticides, herbicides, and fungicides for diverse crops.",
    image: "https://images.unsplash.com/photo-1592599894522-c20de17bfae3?w=600&q=80",
    specs: ["CIB Registered", "All Crop Types", "Bulk & Retail"],
  },
  {
    name: "Mushrooms",
    category: "Food Products",
    description: "Premium dried mushrooms including button, oyster, and specialty varieties. Sourced from quality farms and processed to international standards.",
    image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=600&q=80",
    specs: ["Dried & Fresh", "Export Quality", "Multiple Varieties"],
  },
  {
    name: "Rare Earth",
    category: "Minerals",
    description: "Critical rare earth minerals for high-tech manufacturing, electronics, magnets, and clean energy applications.",
    image: "https://images.unsplash.com/photo-1559825481-12a05cc00344?w=600&q=80",
    specs: ["REE Certified", "High Purity", "Multiple Elements"],
  },
  {
    name: "Arabica Coffee",
    category: "Food Products",
    description: "Premium single-origin Arabica coffee beans from India's finest growing estates in Coorg and Chikmagalur. Export-grade quality.",
    image: "https://images.unsplash.com/photo-1587734195503-904fca47e0e9?w=600&q=80",
    specs: ["AAA Grade", "Single Origin", "APEDA Certified"],
  },
  {
    name: "Met Coke",
    category: "Carbon Products",
    description: "High-quality metallurgical coke for blast furnace operations, foundry applications, and iron smelting processes.",
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=80",
    specs: ["High Fixed Carbon", "Low Ash & Sulfur", "Blast Furnace Grade"],
  },
  {
    name: "Precious Metals",
    category: "Metals",
    description: "Gold, silver, platinum, and other precious metals traded with full legal compliance, proper documentation, and competitive market pricing.",
    image: "https://images.unsplash.com/photo-1610375461246-83df859d849d?w=600&q=80",
    specs: ["All Precious Metals", "Certified & Hallmarked", "Market Price"],
  },
];

const categories = ["All", "Minerals", "Carbon Products", "Food Products", "Fertilizers", "Agriculture", "Metals"];

import { useState } from "react";

export default function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All"
    ? products
    : products.filter((p) => p.category === activeCategory);

  return (
    <div>
      {/* Page Header */}
      <div className="relative py-20 overflow-hidden" style={{ backgroundColor: "#13223C" }}>
        <img
          src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1400&q=80"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          style={{ opacity: 0.15 }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <div className="text-sm font-semibold tracking-widest mb-3" style={{ color: "#FBD903" }}>
            WHAT WE OFFER
          </div>
          <h1 className="font-black text-5xl text-white mb-4">Our Services</h1>
          <div className="flex items-center justify-center gap-2 text-sm text-white/60">
            <Link href="/" className="hover:text-[#FBD903] transition-colors">Home</Link>
            <span>›</span>
            <span>Our Services</span>
          </div>
        </div>
      </div>

      {/* Services Intro */}
      <section className="py-16" style={{ backgroundColor: "#f4f6f9" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <div className="text-sm font-semibold tracking-widest mb-2" style={{ color: "#FBD903" }}>
            IMPORT &amp; EXPORT SPECIALISTS
          </div>
          <h2 className="font-black text-3xl mb-4" style={{ color: "#13223C" }}>
            Comprehensive Trading Solutions
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Vasista Trading Services Pvt. Ltd. provides end-to-end import and export solutions for a wide range of commodities — from industrial minerals and carbon products to premium food products and precious metals. We ensure quality, compliance, and timely delivery for every trade.
          </p>
        </div>
      </section>

      {/* Filter */}
      <section className="py-12" style={{ backgroundColor: "#fff" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className="px-5 py-2 text-xs font-bold tracking-widest rounded-sm transition-all"
                style={{
                  backgroundColor: activeCategory === cat ? "#FBD903" : "transparent",
                  color: activeCategory === cat ? "#13223C" : "#13223C",
                  border: `2px solid ${activeCategory === cat ? "#FBD903" : "#e5e7eb"}`,
                }}
              >
                {cat.toUpperCase()}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((p) => (
              <div
                key={p.name}
                className="group overflow-hidden rounded-sm transition-all hover:-translate-y-1 hover:shadow-xl"
                style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.08)" }}
              >
                <div className="relative overflow-hidden h-52">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div
                    className="absolute inset-0"
                    style={{ background: "linear-gradient(to top, rgba(13,24,38,0.7) 0%, transparent 60%)" }}
                  />
                  <div
                    className="absolute top-3 right-3 px-2 py-0.5 text-xs font-bold rounded-sm"
                    style={{ backgroundColor: "#FBD903", color: "#13223C" }}
                  >
                    {p.category}
                  </div>
                </div>
                <div className="p-5" style={{ borderTop: "3px solid #FBD903" }}>
                  <h3 className="font-black text-lg mb-2" style={{ color: "#13223C" }}>{p.name}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{p.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {p.specs.map((spec) => (
                      <span
                        key={spec}
                        className="px-2 py-1 text-xs font-semibold rounded-sm"
                        style={{ backgroundColor: "#f4f6f9", color: "#13223C" }}
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 text-xs font-bold tracking-widest transition-colors"
                    style={{ color: "#FBD903" }}
                  >
                    ENQUIRE NOW <ArrowRight size={13} />
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
          <h2 className="font-black text-3xl text-white mb-4">
            Looking for a Specific Product?
          </h2>
          <p className="text-white/70 mb-8 max-w-lg mx-auto">
            Contact us for custom sourcing, bulk pricing, and export documentation support.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 font-bold tracking-widest text-sm transition-all hover:brightness-90"
            style={{ backgroundColor: "#FBD903", color: "#13223C" }}
          >
            CONTACT US <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </div>
  );
}
