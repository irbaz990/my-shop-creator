import { Link } from "react-router-dom";
import { ShoppingBag } from "lucide-react";

const footerLinks = {
  Shop: ["Hoodies", "T-Shirts", "Jackets", "Men", "Women"],
  Info: ["About Us", "Contact", "Sustainability", "Size Guide"],
  Support: ["FAQ", "Shipping & Returns", "Order Tracking", "Privacy Policy"],
};

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border mt-20">
      {/* Ticker tape */}
      <div className="bg-accent text-accent-foreground py-2 overflow-hidden">
        <div className="flex animate-ticker whitespace-nowrap">
          {Array.from({ length: 8 }).map((_, i) => (
            <span key={i} className="font-display text-sm tracking-widest mx-8">
              URBAN VIBE ✦ FREE SHIPPING OVER $100 ✦ NEW DROP EVERY FRIDAY ✦ STREET-READY SINCE 2020 ✦
            </span>
          ))}
        </div>
      </div>

      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <ShoppingBag size={18} className="text-accent" />
              <span className="font-display text-2xl tracking-widest">
                URBAN<span className="text-accent">VIBE</span>
              </span>
            </div>
            <p className="text-muted-foreground text-sm font-body leading-relaxed">
              Born in the streets. Worn everywhere. UrbanVibe is more than clothing — it's a culture.
            </p>
            <div className="flex gap-4 pt-2">
              {["IG", "TT", "TW", "YT"].map((s) => (
                <button
                  key={s}
                  className="text-xs font-body font-semibold tracking-widest text-muted-foreground hover:text-accent transition-colors"
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-display text-base tracking-widest mb-5 text-muted-foreground">{title}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <Link
                      to={title === "Shop" ? "/shop" : title === "Info" && link === "About Us" ? "/about" : title === "Info" && link === "Contact" ? "/contact" : "#"}
                      className="text-sm font-body text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground font-body">
          <p>© 2025 UrbanVibe. All rights reserved.</p>
          <p className="tracking-widest uppercase">Designed for the streets.</p>
        </div>
      </div>
    </footer>
  );
}
