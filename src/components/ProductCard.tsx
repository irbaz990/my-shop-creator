import { Link } from "react-router-dom";
import { ShoppingBag, Star } from "lucide-react";
import { useCart } from "@/context/CartContext";
import type { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
  className?: string;
}

export default function ProductCard({ product, className = "" }: ProductCardProps) {
  const { addItem } = useCart();

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, product.sizes[2] || product.sizes[0]);
  };

  return (
    <Link to={`/shop/${product.id}`} className={`group block ${className}`}>
      {/* Image */}
      <div className="relative overflow-hidden aspect-[3/4] bg-secondary">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Badge */}
        {product.badge && (
          <span
            className={`absolute top-3 left-3 text-[10px] font-body font-bold tracking-widest px-2 py-1 ${
              product.badge === "SALE"
                ? "bg-destructive text-destructive-foreground"
                : product.badge === "BESTSELLER"
                ? "gradient-accent text-accent-foreground"
                : "bg-foreground text-background"
            }`}
          >
            {product.badge}
          </span>
        )}

        {/* Quick add */}
        <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <button
            onClick={handleQuickAdd}
            className="w-full bg-accent text-accent-foreground py-3 flex items-center justify-center gap-2 font-display text-sm tracking-widest hover:opacity-90 transition-opacity"
          >
            <ShoppingBag size={14} />
            QUICK ADD
          </button>
        </div>
      </div>

      {/* Info */}
      <div className="pt-3 space-y-1">
        <div className="flex items-center gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              size={10}
              className={i < Math.floor(product.rating) ? "text-accent fill-accent" : "text-muted-foreground"}
            />
          ))}
          <span className="text-muted-foreground text-[10px] font-body ml-1">({product.reviews})</span>
        </div>
        <h3 className="font-display text-lg leading-tight group-hover:text-accent transition-colors">
          {product.name}
        </h3>
        <div className="flex items-center gap-2">
          <span className="font-body font-semibold text-foreground">${product.price}</span>
          {product.originalPrice && (
            <span className="font-body text-sm text-muted-foreground line-through">${product.originalPrice}</span>
          )}
        </div>
      </div>
    </Link>
  );
}
