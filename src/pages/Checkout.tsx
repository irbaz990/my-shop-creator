import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Check, CreditCard, Lock } from "lucide-react";
import { useCart } from "@/context/CartContext";
import Navbar from "@/components/Navbar";

type Step = "info" | "payment" | "success";

export default function Checkout() {
  const { items, total, clearCart } = useCart();
  const [step, setStep] = useState<Step>("info");
  const [form, setForm] = useState({
    email: "", firstName: "", lastName: "", address: "", city: "", state: "", zip: "", country: "US",
    cardName: "", cardNumber: "", expiry: "", cvv: "",
  });

  const handleInfoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep("payment");
  };

  const handlePaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep("success");
    clearCart();
  };

  const update = (key: string, val: string) => setForm((f) => ({ ...f, [key]: val }));

  if (step === "success") {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center text-center px-4 animate-scale-in">
        <div className="w-20 h-20 gradient-accent rounded-full flex items-center justify-center mb-8">
          <Check size={36} className="text-accent-foreground" />
        </div>
        <h1 className="font-display text-6xl mb-4">ORDER PLACED!</h1>
        <p className="text-muted-foreground font-body mb-2 max-w-md">
          Thank you for shopping with UrbanVibe. Your order confirmation has been sent to {form.email || "your email"}.
        </p>
        <p className="text-accent font-body text-sm mb-10">Estimated delivery: 3–5 business days</p>
        <Link
          to="/shop"
          className="gradient-accent text-accent-foreground px-10 py-4 font-display text-lg tracking-widest hover:opacity-90 transition-opacity"
        >
          CONTINUE SHOPPING
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container pt-24 pb-16">
        <Link to="/shop" className="flex items-center gap-2 text-muted-foreground hover:text-accent text-sm font-body mb-8 transition-colors">
          <ArrowLeft size={14} /> Continue Shopping
        </Link>

        <h1 className="font-display text-5xl md:text-6xl mb-10">CHECKOUT</h1>

        {/* Steps */}
        <div className="flex items-center gap-3 mb-10">
          {(["info", "payment"] as Step[]).map((s, i) => (
            <div key={s} className="flex items-center gap-3">
              <div className={`flex items-center gap-2 text-xs font-body tracking-widest uppercase ${step === s ? "text-accent" : "text-muted-foreground"}`}>
                <span className={`w-6 h-6 flex items-center justify-center text-xs font-bold border ${step === s ? "border-accent text-accent" : "border-muted text-muted-foreground"}`}>
                  {i + 1}
                </span>
                {s === "info" ? "Information" : "Payment"}
              </div>
              {i < 1 && <div className="w-12 h-px bg-border" />}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Form */}
          <div className="lg:col-span-3">
            {step === "info" && (
              <form onSubmit={handleInfoSubmit} className="space-y-4 animate-fade-in">
                <h2 className="font-display text-2xl mb-5">CONTACT & SHIPPING</h2>

                <div>
                  <label className="block text-xs font-body tracking-widest uppercase text-muted-foreground mb-1.5">Email *</label>
                  <input type="email" value={form.email} onChange={(e) => update("email", e.target.value)} required placeholder="your@email.com"
                    className="w-full bg-card border border-border px-4 py-3 text-foreground font-body text-sm focus:outline-none focus:border-accent transition-colors placeholder:text-muted-foreground" />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-body tracking-widest uppercase text-muted-foreground mb-1.5">First Name *</label>
                    <input type="text" value={form.firstName} onChange={(e) => update("firstName", e.target.value)} required
                      className="w-full bg-card border border-border px-4 py-3 text-foreground font-body text-sm focus:outline-none focus:border-accent transition-colors" />
                  </div>
                  <div>
                    <label className="block text-xs font-body tracking-widest uppercase text-muted-foreground mb-1.5">Last Name *</label>
                    <input type="text" value={form.lastName} onChange={(e) => update("lastName", e.target.value)} required
                      className="w-full bg-card border border-border px-4 py-3 text-foreground font-body text-sm focus:outline-none focus:border-accent transition-colors" />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-body tracking-widest uppercase text-muted-foreground mb-1.5">Address *</label>
                  <input type="text" value={form.address} onChange={(e) => update("address", e.target.value)} required placeholder="123 Street Ave"
                    className="w-full bg-card border border-border px-4 py-3 text-foreground font-body text-sm focus:outline-none focus:border-accent transition-colors placeholder:text-muted-foreground" />
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-body tracking-widest uppercase text-muted-foreground mb-1.5">City *</label>
                    <input type="text" value={form.city} onChange={(e) => update("city", e.target.value)} required
                      className="w-full bg-card border border-border px-4 py-3 text-foreground font-body text-sm focus:outline-none focus:border-accent transition-colors" />
                  </div>
                  <div>
                    <label className="block text-xs font-body tracking-widest uppercase text-muted-foreground mb-1.5">State</label>
                    <input type="text" value={form.state} onChange={(e) => update("state", e.target.value)}
                      className="w-full bg-card border border-border px-4 py-3 text-foreground font-body text-sm focus:outline-none focus:border-accent transition-colors" />
                  </div>
                  <div>
                    <label className="block text-xs font-body tracking-widest uppercase text-muted-foreground mb-1.5">ZIP *</label>
                    <input type="text" value={form.zip} onChange={(e) => update("zip", e.target.value)} required
                      className="w-full bg-card border border-border px-4 py-3 text-foreground font-body text-sm focus:outline-none focus:border-accent transition-colors" />
                  </div>
                </div>

                <button type="submit" className="w-full gradient-accent text-accent-foreground py-4 font-display text-lg tracking-widest hover:opacity-90 transition-opacity mt-4">
                  CONTINUE TO PAYMENT
                </button>
              </form>
            )}

            {step === "payment" && (
              <form onSubmit={handlePaymentSubmit} className="space-y-4 animate-fade-in">
                <h2 className="font-display text-2xl mb-5">PAYMENT DETAILS</h2>

                <div className="flex items-center gap-2 p-3 bg-secondary text-muted-foreground text-xs font-body mb-4">
                  <Lock size={12} className="text-accent" />
                  <span>Secure 256-bit SSL encrypted payment</span>
                </div>

                <div>
                  <label className="block text-xs font-body tracking-widest uppercase text-muted-foreground mb-1.5">Name on Card *</label>
                  <input type="text" value={form.cardName} onChange={(e) => update("cardName", e.target.value)} required placeholder="John Doe"
                    className="w-full bg-card border border-border px-4 py-3 text-foreground font-body text-sm focus:outline-none focus:border-accent transition-colors placeholder:text-muted-foreground" />
                </div>

                <div>
                  <label className="block text-xs font-body tracking-widest uppercase text-muted-foreground mb-1.5">Card Number *</label>
                  <div className="relative">
                    <input type="text" value={form.cardNumber} onChange={(e) => update("cardNumber", e.target.value.replace(/\D/g, "").slice(0, 16))} required placeholder="0000 0000 0000 0000"
                      className="w-full bg-card border border-border px-4 py-3 pr-10 text-foreground font-body text-sm focus:outline-none focus:border-accent transition-colors placeholder:text-muted-foreground" />
                    <CreditCard size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-body tracking-widest uppercase text-muted-foreground mb-1.5">Expiry *</label>
                    <input type="text" value={form.expiry} onChange={(e) => update("expiry", e.target.value)} required placeholder="MM/YY"
                      className="w-full bg-card border border-border px-4 py-3 text-foreground font-body text-sm focus:outline-none focus:border-accent transition-colors placeholder:text-muted-foreground" />
                  </div>
                  <div>
                    <label className="block text-xs font-body tracking-widest uppercase text-muted-foreground mb-1.5">CVV *</label>
                    <input type="text" value={form.cvv} onChange={(e) => update("cvv", e.target.value.replace(/\D/g, "").slice(0, 4))} required placeholder="000"
                      className="w-full bg-card border border-border px-4 py-3 text-foreground font-body text-sm focus:outline-none focus:border-accent transition-colors placeholder:text-muted-foreground" />
                  </div>
                </div>

                <div className="flex gap-3 mt-4">
                  <button type="button" onClick={() => setStep("info")} className="flex-1 border border-border text-foreground py-4 font-display text-base tracking-widest hover:border-accent transition-colors">
                    BACK
                  </button>
                  <button type="submit" className="flex-2 flex-1 gradient-accent text-accent-foreground py-4 font-display text-base tracking-widest hover:opacity-90 transition-opacity">
                    PLACE ORDER — ${(total + (total > 100 ? 0 : 9.99)).toFixed(2)}
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-2">
            <div className="bg-card border border-border p-6 sticky top-24">
              <h2 className="font-display text-xl mb-5">ORDER SUMMARY</h2>
              {items.length === 0 ? (
                <p className="text-muted-foreground text-sm font-body">Your cart is empty.</p>
              ) : (
                <div className="space-y-4">
                  {items.map((item) => (
                    <div key={`${item.product.id}-${item.size}`} className="flex gap-3">
                      <div className="w-14 h-16 bg-secondary flex-shrink-0 overflow-hidden">
                        <img src={item.product.image} alt={item.product.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-display text-sm leading-tight">{item.product.name}</p>
                        <p className="text-muted-foreground text-xs font-body">Size: {item.size} · Qty: {item.quantity}</p>
                        <p className="font-body font-semibold text-sm mt-1">${(item.product.price * item.quantity).toFixed(2)}</p>
                      </div>
                    </div>
                  ))}
                  <div className="border-t border-border pt-4 space-y-2">
                    <div className="flex justify-between text-sm font-body">
                      <span className="text-muted-foreground">Subtotal</span>
                      <span>${total.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-sm font-body">
                      <span className="text-muted-foreground">Shipping</span>
                      <span>{total > 100 ? <span className="text-accent">FREE</span> : "$9.99"}</span>
                    </div>
                    <div className="flex justify-between font-display text-xl pt-2 border-t border-border">
                      <span>TOTAL</span>
                      <span>${(total + (total > 100 ? 0 : 9.99)).toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
