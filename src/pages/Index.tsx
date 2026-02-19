import { useState } from "react";
import { Plus, ShoppingBag } from "lucide-react";
import AddItemModal, { type Product } from "@/components/AddItemModal";
import ProductCard from "@/components/ProductCard";
import heroBanner from "@/assets/hero-banner.jpg";

const DEMO_PRODUCTS: Product[] = [
  {
    id: "1",
    name: "Silk Evening Blouse",
    price: 129.0,
    category: "Tops",
    description: "Lightweight silk with a relaxed drape, perfect for evening wear.",
    imageUrl: "",
  },
  {
    id: "2",
    name: "Wide-Leg Trousers",
    price: 98.0,
    category: "Bottoms",
    description: "Tailored wide-leg silhouette in premium wool blend.",
    imageUrl: "",
  },
  {
    id: "3",
    name: "Linen Wrap Dress",
    price: 145.0,
    category: "Dresses",
    description: "Effortless wrap style in breathable European linen.",
    imageUrl: "",
  },
];

const CATEGORIES = ["All", "Tops", "Bottoms", "Dresses", "Outerwear", "Accessories", "Footwear"];

export default function Index() {
  const [products, setProducts] = useState<Product[]>(DEMO_PRODUCTS);
  const [showModal, setShowModal] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");

  const handleAdd = (product: Omit<Product, "id">) => {
    setProducts((prev) => [
      ...prev,
      { ...product, id: Date.now().toString() },
    ]);
  };

  const handleDelete = (id: string) => {
    setProducts((prev) => prev.filter((p) => p.id !== id));
  };

  const filtered =
    activeCategory === "All"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      {/* Navbar */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <ShoppingBag size={20} className="text-accent" />
            <span className="font-display text-xl text-foreground tracking-wide">VÊTU</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-xs tracking-[0.15em] uppercase text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">Shop</a>
            <a href="#" className="hover:text-foreground transition-colors">Collections</a>
            <a href="#" className="hover:text-foreground transition-colors">About</a>
          </nav>
          <button
            onClick={() => setShowModal(true)}
            className="flex items-center gap-2 gradient-accent text-accent-foreground text-xs tracking-[0.12em] uppercase px-4 py-2 hover:opacity-90 transition-opacity"
          >
            <Plus size={14} />
            Add Item
          </button>
        </div>
      </header>

      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] overflow-hidden pt-16">
        <img
          src={heroBanner}
          alt="Fashion editorial"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="relative h-full flex items-center">
          <div className="container animate-slide-up">
            <p className="text-xs tracking-[0.3em] uppercase text-primary-foreground/70 mb-3 font-body">
              New Collection · 2025
            </p>
            <h1 className="font-display text-5xl md:text-7xl text-primary-foreground leading-none mb-6">
              Wear the<br />
              <span className="italic">moment.</span>
            </h1>
            <button
              onClick={() => setShowModal(true)}
              className="text-xs tracking-[0.2em] uppercase text-primary-foreground border border-primary-foreground/50 px-6 py-3 hover:bg-primary-foreground/10 transition-colors"
            >
              Add Your Item
            </button>
          </div>
        </div>
      </section>

      {/* Shop Section */}
      <section className="container py-16">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <p className="text-xs tracking-[0.25em] uppercase text-muted-foreground mb-2 font-body">
              The Collection
            </p>
            <h2 className="font-display text-3xl text-foreground">
              All Products
              <span className="text-muted-foreground text-lg ml-3 font-body font-light italic">
                ({filtered.length})
              </span>
            </h2>
          </div>
          {/* Category filter */}
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-[10px] tracking-[0.15em] uppercase px-3 py-1.5 transition-all font-body ${
                  activeCategory === cat
                    ? "bg-foreground text-primary-foreground"
                    : "bg-secondary text-muted-foreground hover:bg-muted hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        {filtered.length === 0 ? (
          <div className="text-center py-24 text-muted-foreground">
            <ShoppingBag size={40} className="mx-auto mb-4 opacity-30" />
            <p className="font-display text-xl mb-2">No items yet</p>
            <p className="text-sm font-body">
              Click{" "}
              <button
                onClick={() => setShowModal(true)}
                className="text-accent underline"
              >
                Add Item
              </button>{" "}
              to start your collection.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} onDelete={handleDelete} />
            ))}
            {/* Add item card */}
            <button
              onClick={() => setShowModal(true)}
              className="border-2 border-dashed border-border hover:border-accent aspect-[3/4] flex flex-col items-center justify-center gap-3 text-muted-foreground hover:text-accent transition-all group"
            >
              <div className="w-12 h-12 rounded-full border-2 border-current flex items-center justify-center group-hover:scale-110 transition-transform">
                <Plus size={20} />
              </div>
              <span className="text-xs tracking-[0.15em] uppercase font-body">Add Item</span>
            </button>
          </div>
        )}
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 mt-8">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground tracking-widest uppercase font-body">
          <div className="flex items-center gap-2">
            <ShoppingBag size={14} className="text-accent" />
            <span className="font-display text-sm text-foreground">VÊTU</span>
          </div>
          <p>© 2025 · All Rights Reserved</p>
        </div>
      </footer>

      {/* Modal */}
      {showModal && (
        <AddItemModal onClose={() => setShowModal(false)} onAdd={handleAdd} />
      )}
    </div>
  );
}
