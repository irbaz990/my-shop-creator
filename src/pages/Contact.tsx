import { useState } from "react";
import { Mail, MapPin, Phone, Send, Check } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: "", email: "", subject: "", message: "" });
    }, 4000);
  };

  const contactInfo = [
    { icon: Mail, label: "Email", value: "hello@urbanvibe.co" },
    { icon: Phone, label: "Phone", value: "+1 (917) 555-0198" },
    { icon: MapPin, label: "Location", value: "Brooklyn, New York, USA" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Header */}
      <div className="pt-24 pb-12 bg-card border-b border-border">
        <div className="container">
          <p className="text-accent text-xs tracking-[0.35em] uppercase font-body mb-2">Get in Touch</p>
          <h1 className="font-display text-6xl md:text-7xl">CONTACT US</h1>
        </div>
      </div>

      <div className="container py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left */}
          <div>
            <h2 className="font-display text-4xl mb-6 leading-none">LET'S TALK</h2>
            <p className="text-muted-foreground font-body leading-relaxed mb-10">
              Got a question about your order? Want to collaborate? Or just want to talk streetwear? We're always here. Hit us up.
            </p>

            <div className="space-y-6 mb-12">
              {contactInfo.map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-secondary flex items-center justify-center flex-shrink-0 group-hover:bg-accent">
                    <Icon size={16} className="text-accent" />
                  </div>
                  <div>
                    <p className="text-muted-foreground text-xs font-body tracking-widest uppercase">{label}</p>
                    <p className="font-body text-foreground">{value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-card border border-border p-6">
              <h3 className="font-display text-xl mb-2">HOURS</h3>
              <div className="space-y-2 text-sm font-body text-muted-foreground">
                <div className="flex justify-between">
                  <span>Monday – Friday</span>
                  <span className="text-foreground">9am – 6pm EST</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span className="text-foreground">10am – 4pm EST</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div>
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-20 animate-scale-in">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mb-6">
                  <Check size={28} className="text-accent-foreground" />
                </div>
                <h2 className="font-display text-4xl mb-3">MESSAGE SENT</h2>
                <p className="text-muted-foreground font-body">We'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="col-span-2 md:col-span-1">
                    <label className="block text-xs font-body tracking-widest uppercase text-muted-foreground mb-1.5">Name *</label>
                    <input
                      type="text"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Your name"
                      required
                      className="w-full bg-card border border-border px-4 py-3 text-foreground font-body text-sm focus:outline-none focus:border-accent transition-colors placeholder:text-muted-foreground"
                    />
                  </div>
                  <div className="col-span-2 md:col-span-1">
                    <label className="block text-xs font-body tracking-widest uppercase text-muted-foreground mb-1.5">Email *</label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="your@email.com"
                      required
                      className="w-full bg-card border border-border px-4 py-3 text-foreground font-body text-sm focus:outline-none focus:border-accent transition-colors placeholder:text-muted-foreground"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-body tracking-widest uppercase text-muted-foreground mb-1.5">Subject</label>
                  <input
                    type="text"
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    placeholder="Order inquiry, collab, general..."
                    className="w-full bg-card border border-border px-4 py-3 text-foreground font-body text-sm focus:outline-none focus:border-accent transition-colors placeholder:text-muted-foreground"
                  />
                </div>

                <div>
                  <label className="block text-xs font-body tracking-widest uppercase text-muted-foreground mb-1.5">Message *</label>
                  <textarea
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="What's on your mind?"
                    rows={7}
                    required
                    className="w-full bg-card border border-border px-4 py-3 text-foreground font-body text-sm focus:outline-none focus:border-accent transition-colors placeholder:text-muted-foreground resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full gradient-accent text-accent-foreground py-4 font-display text-lg tracking-widest flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
                >
                  <Send size={16} /> SEND MESSAGE
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
