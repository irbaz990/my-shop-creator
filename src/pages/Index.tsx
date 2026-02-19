import { Link } from "react-router-dom";
import { ArrowRight, ChevronDown } from "lucide-react";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import Footer from "@/components/Footer";
import uvHero from "@/assets/uv-hero.jpg";
import uvAbout from "@/assets/uv-about.jpg";

const featured = products.filter((p) => p.featured).slice(0, 4);

const collections = [
  { name: "Hoodies", count: "12 Styles", filter: "hoodies", bg: "from-secondary to-card" },
  { name: "T-Shirts", count: "18 Styles", filter: "t-shirts", bg: "from-secondary to-card" },
  { name: "Jackets", count: "8 Styles", filter: "jackets", bg: "from-secondary to-card" },
];

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative h-screen overflow-hidden">
        <img
          src={uvHero}
          alt="UrbanVibe hero"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />

        <div className="relative h-full flex flex-col justify-center pb-20">
          <div className="container">
            <div className="max-w-2xl animate-fade-in">
              <p className="text-accent text-xs font-body tracking-[0.4em] uppercase mb-6">
                New Collection — SS 2025
              </p>
              <h1 className="font-display text-7xl md:text-9xl leading-none text-foreground mb-6">
                WEAR THE<br />
                <span className="text-accent">STREETS</span>
              </h1>
              <p className="text-muted-foreground font-body text-lg mb-10 leading-relaxed max-w-md">
                Bold cuts. Raw energy. Streetwear built for those who move the culture forward.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/shop"
                  className="gradient-accent text-accent-foreground px-8 py-4 font-display text-lg tracking-widest flex items-center gap-2 hover:opacity-90 transition-opacity glow-accent"
                >
                  SHOP NOW <ArrowRight size={18} />
                </Link>
                <Link
                  to="/about"
                  className="border border-foreground text-foreground px-8 py-4 font-display text-lg tracking-widest hover:bg-foreground hover:text-background transition-all"
                >
                  OUR STORY
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground animate-bounce">
          <span className="text-[10px] tracking-widest font-body uppercase">Scroll</span>
          <ChevronDown size={16} />
        </div>
      </section>

      {/* Ticker */}
      <div className="bg-accent text-accent-foreground py-2 overflow-hidden">
        <div className="flex animate-ticker whitespace-nowrap">
          {Array.from({ length: 8 }).map((_, i) => (
            <span key={i} className="font-display text-sm tracking-widest mx-8">
              URBAN VIBE ✦ FREE SHIPPING OVER $100 ✦ NEW DROP EVERY FRIDAY ✦ STREET-READY SINCE 2020 ✦
            </span>
          ))}
        </div>
      </div>

      {/* Collections */}
      <section className="container py-20">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-accent text-xs tracking-[0.3em] uppercase font-body mb-2">Browse</p>
            <h2 className="font-display text-5xl">COLLECTIONS</h2>
          </div>
          <Link to="/shop" className="text-muted-foreground hover:text-accent text-sm font-body tracking-widest uppercase flex items-center gap-1 transition-colors">
            View All <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {collections.map((col) => (
            <Link
              key={col.name}
              to={`/shop?category=${col.filter}`}
              className="group relative overflow-hidden aspect-[4/5] bg-secondary flex flex-col justify-end p-6 hover:ring-1 hover:ring-accent transition-all"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
              <div className="relative z-10">
                <p className="text-muted-foreground text-xs font-body tracking-widest uppercase mb-1">{col.count}</p>
                <h3 className="font-display text-4xl group-hover:text-accent transition-colors">{col.name.toUpperCase()}</h3>
                <div className="flex items-center gap-2 mt-2 text-muted-foreground group-hover:text-accent transition-colors text-xs font-body tracking-widest uppercase">
                  Shop <ArrowRight size={12} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured */}
      <section className="container py-10 pb-20">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-accent text-xs tracking-[0.3em] uppercase font-body mb-2">Handpicked</p>
            <h2 className="font-display text-5xl">FEATURED DROPS</h2>
          </div>
          <Link to="/shop" className="text-muted-foreground hover:text-accent text-sm font-body tracking-widest uppercase flex items-center gap-1 transition-colors">
            All Products <ArrowRight size={14} />
          </Link>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Brand statement */}
      <section className="relative overflow-hidden">
        <img src={uvAbout} alt="UrbanVibe brand" className="w-full h-[500px] object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/60 to-transparent" />
        <div className="absolute inset-0 flex items-center">
          <div className="container">
            <div className="max-w-lg animate-fade-in-left">
              <p className="text-accent text-xs tracking-[0.3em] uppercase font-body mb-4">Since 2020</p>
              <h2 className="font-display text-5xl md:text-6xl mb-6 leading-none">
                BUILT FOR THE<br />CULTURE
              </h2>
              <p className="text-muted-foreground font-body leading-relaxed mb-8">
                UrbanVibe started in a Brooklyn apartment and grew into a global movement. We make clothes for people who don't follow trends — they set them.
              </p>
              <Link
                to="/about"
                className="border border-accent text-accent px-6 py-3 font-display text-base tracking-widest hover:bg-accent hover:text-accent-foreground transition-all inline-flex items-center gap-2"
              >
                OUR STORY <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Social proof */}
      <section className="container py-20">
        <h2 className="font-display text-5xl text-center mb-4">THE NUMBERS</h2>
        <p className="text-muted-foreground text-center font-body mb-12">Why UrbanVibe?</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { num: "50K+", label: "Happy Customers" },
            { num: "200+", label: "Unique Styles" },
            { num: "4.9★", label: "Average Rating" },
            { num: "Free", label: "Returns Always" },
          ].map((stat) => (
            <div key={stat.label} className="bg-card p-8 border border-border hover:border-accent transition-colors">
              <p className="font-display text-4xl text-accent mb-2">{stat.num}</p>
              <p className="text-muted-foreground text-sm font-body tracking-widest uppercase">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
