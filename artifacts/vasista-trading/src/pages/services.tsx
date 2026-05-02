import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, Ship, Truck, FileCheck, Globe, Package, TrendingUp } from "lucide-react";

const services = [
  {
    icon: Ship,
    title: "Sea Freight",
    desc: "Full container and bulk cargo sea freight with end-to-end tracking and documentation.",
    image: "https://images.unsplash.com/photo-1494412651409-8963ce7935a7?w=600&q=85",
  },
  {
    icon: Truck,
    title: "Air Freight",
    desc: "Express air cargo solutions for time-sensitive and high-value consignments.",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&q=85",
  },
  {
    icon: FileCheck,
    title: "Trade Documentation",
    desc: "Complete management of LC, bills of lading, certificates of origin, and customs clearance.",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&q=85",
  },
  {
    icon: Globe,
    title: "Global Sourcing",
    desc: "Strategic procurement from a verified global supplier network with competitive pricing.",
    image: "https://images.unsplash.com/photo-1524661135-423995f22d0b?w=600&q=85",
  },
  {
    icon: Package,
    title: "Bulk Trading",
    desc: "High-volume commodity trading with quality assurance from source to destination.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=85",
  },
  {
    icon: TrendingUp,
    title: "Trade Advisory",
    desc: "Market insights, price trends, and strategic advisory for import-export decisions.",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&q=85",
  },
];

export default function ServicesPage() {
  return (
    <div>
      {/* Header */}
      <div className="relative py-20 overflow-hidden" style={{ backgroundColor: "#13223C" }}>
        <img src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1400&q=80" alt="" className="absolute inset-0 w-full h-full object-cover" style={{ opacity: 0.15 }} />
        {/* Yellow diagonal breadcrumb — right side */}
        <div className="absolute right-0 top-0 bottom-0 hidden md:flex items-center">
          <div className="flex items-center gap-2 px-8 py-3 text-xs font-black tracking-wider" style={{ backgroundColor: "#FBD903", color: "#13223C", clipPath: "polygon(12% 0%, 100% 0%, 100% 100%, 0% 100%)", paddingLeft: "36px" }}>
            <Link href="/" className="hover:underline">HOME</Link>
            <span className="mx-1">›</span>
            <span>OUR SERVICES</span>
          </div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 text-center md:text-left">
          <div className="text-xs font-black tracking-widest mb-3" style={{ color: "#FBD903" }}>WHAT WE DO</div>
          <h1 className="font-black text-5xl text-white mb-2">Our Services</h1>
          <div className="flex items-center gap-2 text-sm text-white/60 md:hidden justify-center mt-2">
            <Link href="/" className="hover:text-[#FBD903] transition-colors">Home</Link>
            <span>›</span><span>Our Services</span>
          </div>
        </div>
      </div>

      {/* Services image card grid — exactly like the screenshot */}
      <section className="py-0 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(({ icon: Icon, title, desc, image }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: (i % 3) * 0.1, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className="group cursor-pointer"
              >
                {/* Image with overlays */}
                <div className="relative overflow-hidden" style={{ height: "280px" }}>
                  <motion.img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.07 }}
                    transition={{ duration: 0.55 }}
                  />
                  {/* Dark overlay on hover */}
                  <motion.div
                    className="absolute inset-0"
                    initial={{ opacity: 0.2 }}
                    whileHover={{ opacity: 0.55 }}
                    transition={{ duration: 0.3 }}
                    style={{ backgroundColor: "#13223C" }}
                  />
                  {/* Icon badge — top left (navy) */}
                  <div className="absolute top-4 left-4 w-12 h-12 flex items-center justify-center" style={{ backgroundColor: "#13223C", borderRadius: "2px" }}>
                    <Icon size={20} style={{ color: "#FBD903" }} />
                  </div>
                  {/* Yellow arrow — bottom right */}
                  <motion.div
                    className="absolute bottom-4 right-4 w-10 h-10 flex items-center justify-center"
                    whileHover={{ scale: 1.15 }}
                    style={{ backgroundColor: "#FBD903", borderRadius: "2px" }}
                  >
                    <ArrowRight size={18} style={{ color: "#13223C" }} />
                  </motion.div>
                </div>

                {/* Title below image */}
                <div className="pt-4 pb-2">
                  <h3 className="font-black text-lg mb-1.5 group-hover:text-[#FBD903] transition-colors" style={{ color: "#13223C" }}>{title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14" style={{ backgroundColor: "#f4f7fa" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-black text-3xl mb-3" style={{ color: "#13223C" }}>Need a Custom Trade Solution?</h2>
          <p className="text-gray-500 mb-7 text-sm leading-relaxed">Contact us for tailored sourcing and full export-import support.</p>
          <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-3.5 font-black tracking-widest text-xs transition-all hover:brightness-90" style={{ backgroundColor: "#FBD903", color: "#13223C" }}>
              CONTACT US <ArrowRight size={13} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
