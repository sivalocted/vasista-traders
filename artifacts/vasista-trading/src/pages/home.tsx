import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import { ArrowRight, CheckCircle, Globe, Package, TrendingUp, Award, MapPin, ChevronRight } from "lucide-react";

const products = [
  {
    name: "Sulphur",
    description: "High-purity industrial grade sulphur for agricultural and industrial applications.",
    image: "https://images.unsplash.com/photo-1611095973763-414019e72400?w=500&q=80",
    category: "Minerals",
  },
  {
    name: "Jet Coke",
    description: "Premium quality jet coke for fuel and industrial manufacturing processes.",
    image: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=500&q=80",
    category: "Carbon Products",
  },
  {
    name: "Urea",
    description: "Agricultural-grade urea fertilizer for enhanced crop yields and soil nutrition.",
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=500&q=80",
    category: "Fertilizers",
  },
  {
    name: "Manganese",
    description: "Industrial manganese ore for steel production and metallurgical uses.",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=500&q=80",
    category: "Minerals",
  },
  {
    name: "Pet Coke",
    description: "Petroleum coke for cement, power, and steel industries with high calorific value.",
    image: "https://images.unsplash.com/photo-1497435334941-8c899a9f15e0?w=500&q=80",
    category: "Carbon Products",
  },
  {
    name: "Iron Ore",
    description: "High-grade iron ore for steel manufacturing and metallurgical processing.",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=500&q=80",
    category: "Minerals",
  },
  {
    name: "Dry Fruits",
    description: "Premium quality dry fruits — cashews, raisins, almonds — for global markets.",
    image: "https://images.unsplash.com/photo-1609780447631-05b93e5a88ea?w=500&q=80",
    category: "Food Products",
  },
  {
    name: "Pesticides",
    description: "Effective agricultural pesticides for crop protection and yield enhancement.",
    image: "https://images.unsplash.com/photo-1592599894522-c20de17bfae3?w=500&q=80",
    category: "Agriculture",
  },
  {
    name: "Mushrooms",
    description: "Premium dried mushrooms sourced from the finest growing regions.",
    image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=500&q=80",
    category: "Food Products",
  },
  {
    name: "Rare Earth",
    description: "Critical rare earth minerals for high-tech manufacturing and electronics.",
    image: "https://images.unsplash.com/photo-1559825481-12a05cc00344?w=500&q=80",
    category: "Minerals",
  },
  {
    name: "Arabica Coffee",
    description: "Single-origin arabica coffee beans from India's finest growing estates.",
    image: "https://images.unsplash.com/photo-1587734195503-904fca47e0e9?w=500&q=80",
    category: "Food Products",
  },
  {
    name: "Met Coke",
    description: "High-quality metallurgical coke for blast furnace and foundry applications.",
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=500&q=80",
    category: "Carbon Products",
  },
  {
    name: "Precious Metals",
    description: "Gold, silver, and other precious metals traded with full compliance.",
    image: "https://images.unsplash.com/photo-1610375461246-83df859d849d?w=500&q=80",
    category: "Metals",
  },
];

const states = [
  "Andhra Pradesh",
  "Maharashtra",
  "Gujarat",
  "Odisha",
  "Telangana",
  "Karnataka",
];

const stats = [
  { label: "Years of Excellence", value: "5+", icon: Award },
  { label: "Products Traded", value: "13+", icon: Package },
  { label: "Operational States", value: "6", icon: MapPin },
  { label: "Global Trade Partners", value: "50+", icon: Globe },
];

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, inView };
}

export default function HomePage() {
  const [heroLoaded, setHeroLoaded] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const about = useInView();
  const statsSection = useInView();
  const products1 = useInView(0.05);
  const statesSection = useInView();

  useEffect(() => {
    const t = setTimeout(() => setHeroLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  const heroSlides = [
    {
      bg: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1600&q=80",
      heading1: "Trade Everything",
      heading2: "with Excellence",
      sub: "Delivering excellence in global trading & industrial supply",
    },
    {
      bg: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1600&q=80",
      heading1: "Import & Export",
      heading2: "Across the Globe",
      sub: "Your trusted partner for commodities, minerals and food products",
    },
    {
      bg: "https://images.unsplash.com/photo-1494412651409-8963ce7935a7?w=1600&q=80",
      heading1: "Trust. Quality.",
      heading2: "Commitment.",
      sub: "6 states, 13+ products, delivering industrial supply worldwide",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((s) => (s + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const slide = heroSlides[currentSlide];

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden" style={{ height: "calc(100vh - 120px)", minHeight: "560px" }}>
        {heroSlides.map((s, i) => (
          <div
            key={i}
            className="absolute inset-0 transition-opacity duration-1000"
            style={{ opacity: i === currentSlide ? 1 : 0 }}
          >
            <img
              src={s.bg}
              alt=""
              className="w-full h-full object-cover"
              style={{ filter: "brightness(0.35)" }}
            />
          </div>
        ))}
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-6 w-full">
            <div
              className="max-w-2xl"
              style={{
                opacity: heroLoaded ? 1 : 0,
                transform: heroLoaded ? "none" : "translateY(30px)",
                transition: "opacity 0.8s ease, transform 0.8s ease",
              }}
            >
              <div className="text-sm font-semibold tracking-widest mb-4" style={{ color: "#FBD903" }}>
                IMPORT &amp; EXPORT SERVICES
              </div>
              <h1 className="font-black text-white leading-none mb-2" style={{ fontSize: "clamp(3rem, 8vw, 5.5rem)" }}>
                {slide.heading1}
              </h1>
              <h1 className="font-black leading-none mb-6" style={{ fontSize: "clamp(3rem, 8vw, 5.5rem)", color: "#FBD903" }}>
                {slide.heading2}
              </h1>
              <p className="text-white/75 text-lg mb-8 max-w-xl">{slide.sub}</p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/services"
                  className="flex items-center gap-2 px-8 py-3.5 font-bold text-sm tracking-widest transition-all hover:brightness-90"
                  style={{ backgroundColor: "#FBD903", color: "#13223C" }}
                >
                  DISCOVER MORE <ArrowRight size={15} />
                </Link>
                <Link
                  href="/contact"
                  className="flex items-center gap-2 px-8 py-3.5 font-bold text-sm tracking-widest text-white transition-all hover:bg-white/10"
                  style={{ border: "2px solid rgba(255,255,255,0.5)" }}
                >
                  GET A QUOTE <ChevronRight size={15} />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Slide dots */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className="transition-all rounded-full"
              style={{
                width: i === currentSlide ? "28px" : "8px",
                height: "8px",
                backgroundColor: i === currentSlide ? "#FBD903" : "rgba(255,255,255,0.4)",
              }}
            />
          ))}
        </div>

        {/* Slide arrows */}
        <button
          className="absolute right-8 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full flex items-center justify-center text-white transition-all hover:bg-[#FBD903] hover:text-[#13223C]"
          style={{ border: "2px solid rgba(255,255,255,0.4)" }}
          onClick={() => setCurrentSlide((s) => (s + 1) % heroSlides.length)}
        >
          <ChevronRight size={20} />
        </button>
      </section>

      {/* Stats Bar */}
      <div style={{ backgroundColor: "#FBD903" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5 grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map(({ label, value, icon: Icon }) => (
            <div key={label} className="flex items-center gap-3">
              <Icon size={24} style={{ color: "#13223C" }} />
              <div>
                <div className="font-black text-xl" style={{ color: "#13223C" }}>{value}</div>
                <div className="text-xs font-semibold" style={{ color: "#13223C", opacity: 0.7 }}>{label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* About Section */}
      <section className="py-20" style={{ backgroundColor: "#fff" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div
            ref={about.ref}
            className="grid md:grid-cols-2 gap-14 items-center"
            style={{
              opacity: about.inView ? 1 : 0,
              transform: about.inView ? "none" : "translateY(30px)",
              transition: "opacity 0.7s ease, transform 0.7s ease",
            }}
          >
            {/* Image grid */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-3">
                <img
                  src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=500&q=80"
                  alt="Cargo Port"
                  className="w-full h-52 object-cover rounded-sm"
                />
                <img
                  src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=500&q=80"
                  alt="Global Trade"
                  className="w-full h-52 object-cover rounded-sm mt-10"
                />
              </div>
              <div
                className="absolute -bottom-4 left-0 px-5 py-4 rounded-sm"
                style={{ backgroundColor: "#FBD903", color: "#13223C" }}
              >
                <div className="font-black text-3xl">5+</div>
                <div className="text-xs font-bold tracking-wider">YEARS OF EXCELLENCE</div>
              </div>
            </div>

            {/* Text */}
            <div>
              <div className="text-sm font-semibold tracking-widest mb-3" style={{ color: "#FBD903" }}>
                ABOUT COMPANY
              </div>
              <h2 className="font-black text-4xl leading-tight mb-4" style={{ color: "#13223C" }}>
                Empowering Trade<br />Worldwide
              </h2>
              <div
                className="w-16 h-1 mb-6"
                style={{ backgroundColor: "#FBD903" }}
              />
              <p className="text-gray-600 mb-4 leading-relaxed">
                Vasista Trading Services Pvt. Ltd. is a dynamic import &amp; export company based in Mumbai, Maharashtra, delivering excellence in global trading &amp; industrial supply across India and international markets.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We specialize in trading a wide range of commodities — from industrial minerals and carbon products to agricultural goods and precious metals — serving clients across 6 operational states with a commitment to trust, quality, and commitment.
              </p>
              <ul className="space-y-2.5 mb-8">
                {[
                  "Bulk commodity import & export expertise",
                  "Operational across 6 Indian states",
                  "GST registered: 37AALCV9169R1ZY",
                  "Trusted by industries across sectors",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle size={17} className="mt-0.5 shrink-0" style={{ color: "#FBD903" }} />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-7 py-3 font-bold text-sm tracking-widest transition-all hover:brightness-90"
                style={{ backgroundColor: "#13223C", color: "#fff" }}
              >
                READ MORE <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16" style={{ backgroundColor: "#f4f6f9" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <div className="text-sm font-semibold tracking-widest mb-2" style={{ color: "#FBD903" }}>
              WHY CHOOSE US
            </div>
            <h2 className="font-black text-3xl" style={{ color: "#13223C" }}>
              Our Competitive Advantages
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Globe,
                title: "Global Reach",
                desc: "We connect Indian suppliers with international buyers, ensuring seamless cross-border trade for commodities and industrial goods.",
              },
              {
                icon: Award,
                title: "Quality Assurance",
                desc: "Every product we trade meets stringent quality standards, backed by proper documentation and compliance with regulations.",
              },
              {
                icon: TrendingUp,
                title: "Market Expertise",
                desc: "Deep knowledge of commodity markets enables us to offer competitive pricing and reliable supply chains for our clients.",
              },
            ].map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="p-8 rounded-sm transition-all hover:-translate-y-1 hover:shadow-lg"
                style={{ backgroundColor: "#fff", borderTop: "4px solid #FBD903" }}
              >
                <div
                  className="w-14 h-14 rounded-sm flex items-center justify-center mb-5"
                  style={{ backgroundColor: "#13223C" }}
                >
                  <Icon size={24} style={{ color: "#FBD903" }} />
                </div>
                <h3 className="font-bold text-lg mb-3" style={{ color: "#13223C" }}>{title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20" style={{ backgroundColor: "#fff" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <div className="text-sm font-semibold tracking-widest mb-2" style={{ color: "#FBD903" }}>
              WHAT WE TRADE
            </div>
            <h2 className="font-black text-3xl" style={{ color: "#13223C" }}>
              Our Products
            </h2>
            <div className="w-16 h-1 mx-auto mt-4" style={{ backgroundColor: "#FBD903" }} />
          </div>
          <div
            ref={products1.ref}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
            style={{
              opacity: products1.inView ? 1 : 0,
              transform: products1.inView ? "none" : "translateY(20px)",
              transition: "opacity 0.6s ease, transform 0.6s ease",
            }}
          >
            {products.map((p, i) => (
              <div
                key={p.name}
                className="group overflow-hidden rounded-sm cursor-pointer"
                style={{
                  transitionDelay: `${i * 40}ms`,
                  boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
                }}
              >
                <div className="relative overflow-hidden h-44">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div
                    className="absolute inset-0 transition-opacity duration-300"
                    style={{
                      background: "linear-gradient(to top, rgba(13,24,38,0.85) 0%, transparent 60%)",
                    }}
                  />
                  <div
                    className="absolute top-3 right-3 px-2 py-0.5 text-xs font-bold rounded-sm"
                    style={{ backgroundColor: "#FBD903", color: "#13223C" }}
                  >
                    {p.category}
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-3">
                    <h3 className="font-bold text-white text-sm">{p.name}</h3>
                  </div>
                </div>
                <div className="p-3">
                  <p className="text-gray-600 text-xs leading-relaxed">{p.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-8 py-3.5 font-bold text-sm tracking-widest transition-all hover:brightness-90"
              style={{ backgroundColor: "#FBD903", color: "#13223C" }}
            >
              VIEW ALL SERVICES <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Operational States */}
      <section className="py-16" style={{ backgroundColor: "#13223C" }}>
        <div
          ref={statesSection.ref}
          className="max-w-7xl mx-auto px-4 sm:px-6"
          style={{
            opacity: statesSection.inView ? 1 : 0,
            transition: "opacity 0.7s ease",
          }}
        >
          <div className="text-center mb-10">
            <div className="text-sm font-semibold tracking-widest mb-2" style={{ color: "#FBD903" }}>
              WHERE WE OPERATE
            </div>
            <h2 className="font-black text-3xl text-white">Operational States</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {states.map((state) => (
              <div
                key={state}
                className="flex items-center gap-2 px-5 py-2.5 rounded-sm text-sm font-semibold transition-all hover:bg-[#FBD903] hover:text-[#13223C] group"
                style={{ border: "1px solid rgba(251,217,3,0.4)", color: "#fff" }}
              >
                <MapPin size={14} style={{ color: "#FBD903" }} className="group-hover:text-[#13223C]" />
                {state}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section
        className="py-20 relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #0D1826 0%, #1e3a5f 50%, #0D1826 100%)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <h2 className="font-black text-4xl text-white mb-4">
            Ready to Trade with Us?
          </h2>
          <p className="text-white/70 text-lg mb-8 max-w-xl mx-auto">
            Partner with Vasista Trading Services for reliable, quality-assured import &amp; export solutions.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-10 py-4 font-bold tracking-widest text-sm transition-all hover:brightness-90"
            style={{ backgroundColor: "#FBD903", color: "#13223C" }}
          >
            GET A FREE QUOTE <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </div>
  );
}
