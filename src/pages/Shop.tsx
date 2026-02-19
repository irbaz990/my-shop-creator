import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { SlidersHorizontal, X } from "lucide-react";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const genderFilters = ["all", "men", "women", "unisex"];
const categoryFilters = ["all", "hoodies", "t-shirts", "jackets"];
const sortOptions = ["featured", "price-low", "price-high", "newest"];

export default function Shop() {
  const [searchParams] = useSearchParams();
  const [gender, setGender] = useState("all");
  const [category, setCategory] = useState(searchParams.get("category") || "all");
  const [sort, setSort] = useState("featured");
  const [filtersOpen, setFiltersOpen] = useState(false);

  useEffect(() => {
    const cat = searchParams.get("category");
    if (cat) setCategory(cat);
  }, [searchParams]);

  let filtered = products.filter((p) => {
    if (gender !== "all" && p.gender !== gender) return false;
    if (category !== "all" && p.category !== category) return false;
    return true;
  });

  if (sort === "price-low") filtered = [...filtered].sort((a, b) => a.price - b.price);
  if (sort === "price-high") filtered = [...filtered].sort((a, b) => b.price - a.price);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Header */}
      <div className="pt-24 pb-10 bg-card border-b border-border">
        <div className="container">
          <p className="text-accent text-xs tracking-[0.35em] uppercase font-body mb-2">Explore</p>
          <h1 className="font-display text-6xl md:text-7xl">THE SHOP</h1>
          <p className="text-muted-foreground font-body mt-2">{filtered.length} products</p>
        </div>
      </div>

      <div className="container py-8">
        {/* Controls */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          {/* Filter toggles */}
          <div className="flex flex-wrap gap-2">
            {/* Gender */}
            <div className="flex gap-1">
              {genderFilters.map((g) => (
                <button
                  key={g}
                  onClick={() => setGender(g)}
                  className={`px-3 py-1.5 text-[11px] font-body font-medium tracking-widest uppercase transition-all ${
                    gender === g
                      ? "bg-foreground text-background"
                      : "bg-secondary text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {g}
                </button>
              ))}
            </div>
            <div className="w-px bg-border" />
            {/* Category */}
            <div className="flex gap-1 flex-wrap">
              {categoryFilters.map((c) => (
                <button
                  key={c}
                  onClick={() => setCategory(c)}
                  className={`px-3 py-1.5 text-[11px] font-body font-medium tracking-widest uppercase transition-all ${
                    category === c
                      ? "bg-accent text-accent-foreground"
                      : "bg-secondary text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          {/* Sort */}
          <div className="flex items-center gap-2">
            <SlidersHorizontal size={14} className="text-muted-foreground" />
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="bg-secondary text-foreground text-xs font-body px-3 py-1.5 border border-border focus:outline-none focus:border-accent tracking-widest uppercase"
            >
              {sortOptions.map((s) => (
                <option key={s} value={s}>
                  {s === "price-low" ? "Price: Low → High" : s === "price-high" ? "Price: High → Low" : s.charAt(0).toUpperCase() + s.slice(1)}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Active filters */}
        {(gender !== "all" || category !== "all") && (
          <div className="flex items-center gap-2 mb-6 flex-wrap">
            <span className="text-muted-foreground text-xs font-body tracking-widest uppercase">Active:</span>
            {gender !== "all" && (
              <span className="flex items-center gap-1 bg-secondary px-2 py-1 text-xs font-body">
                {gender}
                <button onClick={() => setGender("all")}><X size={10} /></button>
              </span>
            )}
            {category !== "all" && (
              <span className="flex items-center gap-1 bg-accent text-accent-foreground px-2 py-1 text-xs font-body">
                {category}
                <button onClick={() => setCategory("all")}><X size={10} /></button>
              </span>
            )}
          </div>
        )}

        {/* Grid */}
        {filtered.length === 0 ? (
          <div className="text-center py-24">
            <p className="font-display text-4xl text-muted-foreground mb-4">NO RESULTS</p>
            <button
              onClick={() => { setGender("all"); setCategory("all"); }}
              className="text-accent text-sm font-body hover:underline"
            >
              Clear filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
