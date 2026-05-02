import { useState } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from "lucide-react";

const infoCards = [
  {
    title: "Head Office",
    lines: ["Mumbai, Maharashtra", "India — 400 001"],
    icon: MapPin,
    highlight: false,
  },
  {
    title: "Contact",
    lines: ["Mon-Sat 9:00 – 6:30, Sunday Closed", "info@vasistatradingservices.com", "+91 85919 38908"],
    icon: Mail,
    highlight: true,
  },
  {
    title: "Operations",
    lines: ["Andhra Pradesh · Telangana", "Gujarat · Karnataka · Odisha"],
    icon: MapPin,
    highlight: false,
  },
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); setSent(true); }, 1400);
  };

  return (
    <div>
      {/* Header */}
      <div className="relative py-20 overflow-hidden" style={{ backgroundColor: "#13223C" }}>
        <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1400&q=80" alt="" className="absolute inset-0 w-full h-full object-cover" style={{ opacity: 0.15 }} />
        {/* Yellow breadcrumb right side */}
        <div className="absolute right-0 top-0 bottom-0 hidden md:flex items-center">
          <div className="flex items-center gap-2 px-8 py-3 text-xs font-black tracking-wider" style={{ backgroundColor: "#FBD903", color: "#13223C", clipPath: "polygon(12% 0%, 100% 0%, 100% 100%, 0% 100%)", paddingLeft: "36px" }}>
            <Link href="/" className="hover:underline">HOME</Link>
            <span className="mx-1">›</span>
            <span>CONTACT</span>
          </div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 text-center md:text-left">
          <div className="text-xs font-black tracking-widest mb-3" style={{ color: "#FBD903" }}>REACH US</div>
          <h1 className="font-black text-5xl text-white">Contact</h1>
        </div>
      </div>

      {/* Three info cards — exactly like screenshot */}
      <section className="py-14 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-3 gap-6">
            {infoCards.map(({ title, lines, icon: Icon, highlight }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.55 }}
                className="relative flex flex-col justify-between p-8"
                style={{
                  border: highlight ? "2px solid #FBD903" : "1px solid #e5e7eb",
                  borderRadius: "2px",
                  boxShadow: highlight ? "0 8px 32px rgba(251,217,3,0.12)" : "none",
                  backgroundColor: "#fff",
                }}
              >
                <div>
                  <h3 className="font-black text-xl mb-4" style={{ color: "#13223C" }}>{title}</h3>
                  <div className="space-y-1 mb-8">
                    {lines.map(line => (
                      <p key={line} className="text-gray-500 text-sm">{line}</p>
                    ))}
                  </div>
                </div>
                {/* Icon bottom-right */}
                <div className="absolute bottom-6 right-6 opacity-20">
                  <Icon size={52} style={{ color: "#FBD903" }} />
                </div>
                {/* CONTACT button */}
                <motion.div whileHover={{ scale: 1.03 }}>
                  <Link
                    href="#form"
                    className="inline-block px-6 py-2 text-xs font-black tracking-widest transition-all hover:brightness-90"
                    style={{
                      backgroundColor: highlight ? "#FBD903" : "#13223C",
                      color: highlight ? "#13223C" : "#fff",
                      borderRadius: "2px",
                    }}
                  >
                    CONTACT
                  </Link>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact form — exactly like screenshot */}
      <section id="form" className="py-14" style={{ backgroundColor: "#f4f7fa" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <div className="text-xs font-black tracking-widest mb-2" style={{ color: "#FBD903" }}>Contact With Us</div>
            <h2 className="font-black text-4xl" style={{ color: "#13223C" }}>Feel free to write us</h2>
          </motion.div>

          {sent ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center justify-center py-16 bg-white"
              style={{ borderRadius: "2px", border: "2px solid #FBD903" }}
            >
              <CheckCircle size={48} className="mb-4" style={{ color: "#FBD903" }} />
              <h3 className="font-black text-2xl mb-2" style={{ color: "#13223C" }}>Message Sent!</h3>
              <p className="text-gray-500 text-center text-sm max-w-xs">Thank you! Our team will get back to you within 24 hours.</p>
              <button onClick={() => { setSent(false); setForm({ name: "", email: "", phone: "", message: "" }); }}
                className="mt-6 px-6 py-2.5 text-xs font-black tracking-widest hover:brightness-90"
                style={{ backgroundColor: "#FBD903", color: "#13223C", borderRadius: "2px" }}>
                SEND ANOTHER
              </button>
            </motion.div>
          ) : (
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              onSubmit={handleSubmit}
              className="space-y-4"
            >
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text" required placeholder="Your Name"
                  value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-4 text-sm outline-none transition-all focus:ring-2 focus:ring-[#FBD903]"
                  style={{ backgroundColor: "#fff", border: "1px solid #e5e7eb", color: "#13223C" }}
                />
                <input
                  type="email" required placeholder="Email Address"
                  value={form.email} onChange={e => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-4 text-sm outline-none transition-all focus:ring-2 focus:ring-[#FBD903]"
                  style={{ backgroundColor: "#fff", border: "1px solid #e5e7eb", color: "#13223C" }}
                />
              </div>
              <input
                type="tel" placeholder="Phone Number (optional)"
                value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })}
                className="w-full px-4 py-4 text-sm outline-none transition-all focus:ring-2 focus:ring-[#FBD903]"
                style={{ backgroundColor: "#fff", border: "1px solid #e5e7eb", color: "#13223C" }}
              />
              <textarea
                required rows={5} placeholder="Write a Message"
                value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-4 text-sm outline-none resize-none transition-all focus:ring-2 focus:ring-[#FBD903]"
                style={{ backgroundColor: "#fff", border: "1px solid #e5e7eb", color: "#13223C" }}
              />
              <div className="flex justify-center">
                <motion.button
                  type="submit" disabled={loading}
                  whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
                  className="flex items-center gap-2 px-12 py-4 font-black text-xs tracking-widest transition-all hover:brightness-90 disabled:opacity-70"
                  style={{ backgroundColor: loading ? "#13223C" : "#FBD903", color: loading ? "#FBD903" : "#13223C", borderRadius: "2px" }}
                >
                  {loading ? "SENDING..." : <><Send size={14} /> SEND A MESSAGE</>}
                </motion.button>
              </div>
            </motion.form>
          )}
        </div>
      </section>

      {/* Map */}
      <section className="h-72 w-full overflow-hidden" style={{ filter: "grayscale(0.3)" }}>
        <iframe
          title="Vasista Trading Services Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11609823277!2d72.74110193445788!3d19.08253659819942!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699000000000!5m2!1sen!2sin"
          width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </div>
  );
}
