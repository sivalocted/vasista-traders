import { useState } from "react";
import { Link } from "wouter";
import { Mail, Phone, MapPin, Globe, Clock, Send, CheckCircle } from "lucide-react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    product: "",
    message: "",
  });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSent(true);
    }, 1500);
  };

  const products = [
    "Sulphur", "Jet Coke", "Urea", "Manganese", "Pet Coke", "Iron Ore",
    "Dry Fruits", "Pesticides", "Mushrooms", "Rare Earth", "Arabica Coffee",
    "Met Coke", "Precious Metals", "Other",
  ];

  return (
    <div>
      {/* Page Header */}
      <div className="relative py-20 overflow-hidden" style={{ backgroundColor: "#13223C" }}>
        <img
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1400&q=80"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          style={{ opacity: 0.15 }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <div className="text-sm font-semibold tracking-widest mb-3" style={{ color: "#FBD903" }}>
            GET IN TOUCH
          </div>
          <h1 className="font-black text-5xl text-white mb-4">Contact Us</h1>
          <div className="flex items-center justify-center gap-2 text-sm text-white/60">
            <Link href="/" className="hover:text-[#FBD903] transition-colors">Home</Link>
            <span>›</span>
            <span>Contact</span>
          </div>
        </div>
      </div>

      {/* Contact Info Cards */}
      <div style={{ backgroundColor: "#FBD903" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { icon: Phone, label: "Call Us", value: "+91 85919 38908", href: "tel:+918591938908" },
            { icon: Mail, label: "Email Us", value: "info@vasistatradingservices.com", href: "mailto:info@vasistatradingservices.com" },
            { icon: MapPin, label: "Location", value: "Mumbai, Maharashtra, India", href: "#" },
            { icon: Clock, label: "Working Hours", value: "Mon–Sat: 9:00 AM – 6:30 PM", href: "#" },
          ].map(({ icon: Icon, label, value, href }) => (
            <a
              key={label}
              href={href}
              className="flex items-center gap-4 group"
            >
              <div
                className="w-12 h-12 rounded-sm flex items-center justify-center shrink-0 group-hover:bg-[#13223C] transition-colors"
                style={{ backgroundColor: "rgba(19,34,60,0.15)" }}
              >
                <Icon size={20} style={{ color: "#13223C" }} />
              </div>
              <div>
                <div className="text-xs font-bold tracking-wider" style={{ color: "rgba(19,34,60,0.6)" }}>{label.toUpperCase()}</div>
                <div className="font-bold text-sm" style={{ color: "#13223C" }}>{value}</div>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Form + Map */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Form */}
            <div className="lg:col-span-2">
              <div className="text-sm font-semibold tracking-widest mb-2" style={{ color: "#FBD903" }}>
                SEND A MESSAGE
              </div>
              <h2 className="font-black text-3xl mb-6" style={{ color: "#13223C" }}>
                Get a Free Quote
              </h2>

              {sent ? (
                <div
                  className="flex flex-col items-center justify-center py-16 rounded-sm"
                  style={{ backgroundColor: "#f4f6f9", border: "2px solid #FBD903" }}
                >
                  <CheckCircle size={48} className="mb-4" style={{ color: "#FBD903" }} />
                  <h3 className="font-black text-2xl mb-2" style={{ color: "#13223C" }}>Message Sent!</h3>
                  <p className="text-gray-600 text-center max-w-sm">
                    Thank you for reaching out. Our team will get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => { setSent(false); setForm({ name: "", email: "", phone: "", subject: "", product: "", message: "" }); }}
                    className="mt-6 px-6 py-2.5 text-sm font-bold tracking-widest transition-all hover:brightness-90"
                    style={{ backgroundColor: "#FBD903", color: "#13223C" }}
                  >
                    SEND ANOTHER
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold tracking-wider mb-1.5" style={{ color: "#13223C" }}>
                        FULL NAME *
                      </label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full px-4 py-3 text-sm outline-none transition-colors"
                        style={{ backgroundColor: "#f4f6f9", border: "1px solid #e5e7eb", color: "#13223C" }}
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold tracking-wider mb-1.5" style={{ color: "#13223C" }}>
                        EMAIL ADDRESS *
                      </label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full px-4 py-3 text-sm outline-none transition-colors"
                        style={{ backgroundColor: "#f4f6f9", border: "1px solid #e5e7eb", color: "#13223C" }}
                        placeholder="Your email address"
                      />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold tracking-wider mb-1.5" style={{ color: "#13223C" }}>
                        PHONE NUMBER
                      </label>
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="w-full px-4 py-3 text-sm outline-none transition-colors"
                        style={{ backgroundColor: "#f4f6f9", border: "1px solid #e5e7eb", color: "#13223C" }}
                        placeholder="+91 XXXXX XXXXX"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold tracking-wider mb-1.5" style={{ color: "#13223C" }}>
                        PRODUCT OF INTEREST
                      </label>
                      <select
                        value={form.product}
                        onChange={(e) => setForm({ ...form, product: e.target.value })}
                        className="w-full px-4 py-3 text-sm outline-none transition-colors"
                        style={{ backgroundColor: "#f4f6f9", border: "1px solid #e5e7eb", color: "#13223C" }}
                      >
                        <option value="">Select a product</option>
                        {products.map((p) => (
                          <option key={p} value={p}>{p}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold tracking-wider mb-1.5" style={{ color: "#13223C" }}>
                      SUBJECT *
                    </label>
                    <input
                      type="text"
                      required
                      value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      className="w-full px-4 py-3 text-sm outline-none transition-colors"
                      style={{ backgroundColor: "#f4f6f9", border: "1px solid #e5e7eb", color: "#13223C" }}
                      placeholder="Subject of your inquiry"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold tracking-wider mb-1.5" style={{ color: "#13223C" }}>
                      MESSAGE *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full px-4 py-3 text-sm outline-none transition-colors resize-none"
                      style={{ backgroundColor: "#f4f6f9", border: "1px solid #e5e7eb", color: "#13223C" }}
                      placeholder="Tell us about your requirement..."
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="flex items-center gap-2 px-8 py-3.5 font-bold text-sm tracking-widest transition-all hover:brightness-90 disabled:opacity-70"
                    style={{ backgroundColor: "#FBD903", color: "#13223C" }}
                  >
                    {loading ? "SENDING..." : <><Send size={14} /> SEND MESSAGE</>}
                  </button>
                </form>
              )}
            </div>

            {/* Sidebar Info */}
            <div className="space-y-6">
              <div
                className="p-6 rounded-sm"
                style={{ backgroundColor: "#13223C" }}
              >
                <h3 className="font-bold text-white text-sm tracking-wider mb-4">
                  COMPANY DETAILS
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <MapPin size={15} className="mt-0.5 shrink-0" style={{ color: "#FBD903" }} />
                    <div>
                      <div className="text-white text-sm font-semibold">Mumbai, Maharashtra</div>
                      <div className="text-white/50 text-xs">India</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Phone size={15} className="mt-0.5 shrink-0" style={{ color: "#FBD903" }} />
                    <div>
                      <a href="tel:+918591938908" className="text-white text-sm font-semibold hover:text-[#FBD903] transition-colors">
                        +91 85919 38908
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Mail size={15} className="mt-0.5 shrink-0" style={{ color: "#FBD903" }} />
                    <div>
                      <a href="mailto:info@vasistatradingservices.com" className="text-white text-sm font-semibold hover:text-[#FBD903] transition-colors break-all">
                        info@vasistatradingservices.com
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Globe size={15} className="mt-0.5 shrink-0" style={{ color: "#FBD903" }} />
                    <div>
                      <a href="http://www.vasistatradingservices.com" target="_blank" rel="noopener noreferrer" className="text-white text-sm font-semibold hover:text-[#FBD903] transition-colors">
                        www.vasistatradingservices.com
                      </a>
                    </div>
                  </li>
                </ul>
                <div className="mt-6 pt-6 border-t border-white/10">
                  <div className="text-xs text-white/50 tracking-wider mb-2">GST NUMBER</div>
                  <div className="text-white font-bold text-sm">37AALCV9169R1ZY</div>
                </div>
              </div>

              <div
                className="p-6 rounded-sm"
                style={{ backgroundColor: "#f4f6f9" }}
              >
                <h3 className="font-bold text-sm tracking-wider mb-4" style={{ color: "#13223C" }}>
                  FOLLOW US
                </h3>
                <div className="flex gap-3">
                  <a
                    href="https://www.facebook.com/share/1HWeDcLf9Q/?mibextid=wwXlfr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-sm flex items-center justify-center transition-all hover:bg-[#FBD903]"
                    style={{ backgroundColor: "#13223C", color: "#fff" }}
                  >
                    <FaFacebookF size={14} />
                  </a>
                  <a
                    href="https://www.instagram.com/vasista_trading_services"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-sm flex items-center justify-center transition-all hover:bg-[#FBD903]"
                    style={{ backgroundColor: "#13223C", color: "#fff" }}
                  >
                    <FaInstagram size={14} />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/vasista-trading-services-private-limited"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-sm flex items-center justify-center transition-all hover:bg-[#FBD903]"
                    style={{ backgroundColor: "#13223C", color: "#fff" }}
                  >
                    <FaLinkedinIn size={14} />
                  </a>
                </div>
              </div>

              <div
                className="p-6 rounded-sm"
                style={{ backgroundColor: "#FBD903" }}
              >
                <div className="font-black text-lg mb-2" style={{ color: "#13223C" }}>
                  Our Tagline
                </div>
                <div className="font-bold text-2xl" style={{ color: "#13223C" }}>
                  Trust. Quality.<br />Commitment.
                </div>
                <div className="mt-3 text-sm" style={{ color: "rgba(19,34,60,0.7)" }}>
                  Delivering excellence in global trading &amp; industrial supply
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
