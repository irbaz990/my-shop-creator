import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Star, ShoppingBag, Check } from "lucide-react";
import { products, productReviews } from "@/data/products";
import { useCart } from "@/context/CartContext";
import Navbar from "@/components/Navbar";
import ProductCard from "@/components/ProductCard";
import Footer from "@/components/Footer";

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const { addItem } = useCart();

  const [selectedSize, setSelectedSize] = useState("");
  const [selectedImage, setSelectedImage] = useState(0);
  const [added, setAdded] = useState(false);
  const [sizeError, setSizeError] = useState(false);

  const related = products.filter((p) => p.id !== id && p.category === product?.category).slice(0, 4);

  if (!product) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <p className="font-display text-4xl mb-4">PRODUCT NOT FOUND</p>
          <Link to="/shop" className="text-accent hover:underline font-body">Back to Shop</Link>
        </div>
      </div>
    );
  }

  const images = product.images || [product.image];

  const handleAddToCart = () => {
    if (!selectedSize) {
      setSizeError(true);
      setTimeout(() => setSizeError(false), 2000);
      return;
    }
    addItem(product, selectedSize);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container pt-24 pb-10">
        {/* Breadcrumb */}
        <Link to="/shop" className="flex items-center gap-2 text-muted-foreground hover:text-accent text-sm font-body mb-8 transition-colors">
          <ArrowLeft size={14} /> Back to Shop
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Images */}
          <div className="space-y-3">
            <div className="aspect-[3/4] bg-secondary overflow-hidden">
              <img
                src={images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            {images.length > 1 && (
              <div className="flex gap-3">
                {images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedImage(i)}
                    className={`w-20 h-24 bg-secondary overflow-hidden border-2 transition-all ${
                      selectedImage === i ? "border-accent" : "border-transparent"
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Info */}
          <div className="lg:pt-4">
            {product.badge && (
              <span className={`inline-block text-[10px] font-body font-bold tracking-widest px-2 py-1 mb-4 ${
                product.badge === "SALE" ? "bg-destructive text-destructive-foreground"
                : product.badge === "BESTSELLER" ? "gradient-accent text-accent-foreground"
                : "bg-foreground text-background"
              }`}>
                {product.badge}
              </span>
            )}

            <h1 className="font-display text-5xl md:text-6xl leading-none mb-4">{product.name.toUpperCase()}</h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-6">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={14} className={i < Math.floor(product.rating) ? "text-accent fill-accent" : "text-muted-foreground"} />
                ))}
              </div>
              <span className="text-muted-foreground text-sm font-body">{product.rating} ({product.reviews} reviews)</span>
            </div>

            {/* Price */}
            <div className="flex items-center gap-3 mb-8">
              <span className="font-display text-4xl">${product.price}</span>
              {product.originalPrice && (
                <span className="font-body text-xl text-muted-foreground line-through">${product.originalPrice}</span>
              )}
              {product.originalPrice && (
                <span className="text-destructive text-sm font-body font-semibold">
                  Save ${product.originalPrice - product.price}
                </span>
              )}
            </div>

            <p className="text-muted-foreground font-body leading-relaxed mb-8">{product.description}</p>

            {/* Size selector */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-3">
                <p className="text-xs font-body tracking-widest uppercase text-muted-foreground">Select Size</p>
                <button className="text-xs font-body text-accent hover:underline">Size Guide</button>
              </div>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => { setSelectedSize(size); setSizeError(false); }}
                    className={`w-12 h-12 text-sm font-body font-medium border transition-all ${
                      selectedSize === size
                        ? "border-accent bg-accent text-accent-foreground"
                        : "border-border text-foreground hover:border-foreground"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
              {sizeError && (
                <p className="text-destructive text-xs font-body mt-2">Please select a size</p>
              )}
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAddToCart}
              className={`w-full py-4 font-display text-xl tracking-widest flex items-center justify-center gap-3 transition-all ${
                added
                  ? "bg-foreground text-background"
                  : "gradient-accent text-accent-foreground hover:opacity-90 glow-accent"
              }`}
            >
              {added ? (
                <><Check size={20} /> ADDED TO BAG</>
              ) : (
                <><ShoppingBag size={20} /> ADD TO BAG</>
              )}
            </button>

            {/* Details */}
            <div className="mt-10 space-y-4 border-t border-border pt-8">
              <div className="flex justify-between text-sm font-body">
                <span className="text-muted-foreground uppercase tracking-widest">Category</span>
                <span className="capitalize">{product.category}</span>
              </div>
              <div className="flex justify-between text-sm font-body">
                <span className="text-muted-foreground uppercase tracking-widest">Gender</span>
                <span className="capitalize">{product.gender}</span>
              </div>
              <div className="flex justify-between text-sm font-body">
                <span className="text-muted-foreground uppercase tracking-widest">Shipping</span>
                <span>Free over $100</span>
              </div>
              <div className="flex justify-between text-sm font-body">
                <span className="text-muted-foreground uppercase tracking-widest">Returns</span>
                <span>Free, 30 days</span>
              </div>
            </div>
          </div>
        </div>

        {/* Reviews */}
        <section className="mt-20 border-t border-border pt-12">
          <h2 className="font-display text-4xl mb-8">CUSTOMER REVIEWS</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {productReviews.map((review) => (
              <div key={review.id} className="bg-card p-6 border border-border">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <p className="font-body font-semibold">{review.user}</p>
                    <p className="text-muted-foreground text-xs font-body">{review.date}</p>
                  </div>
                  <div className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} size={12} className={i < review.rating ? "text-accent fill-accent" : "text-muted-foreground"} />
                    ))}
                  </div>
                </div>
                <p className="text-muted-foreground text-sm font-body leading-relaxed">{review.comment}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Related */}
        {related.length > 0 && (
          <section className="mt-20 border-t border-border pt-12">
            <h2 className="font-display text-4xl mb-8">YOU MAY ALSO LIKE</h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </section>
        )}
      </div>
      <Footer />
    </div>
  );
}
