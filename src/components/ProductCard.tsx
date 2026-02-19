import { Trash2 } from "lucide-react";
import type { Product } from "./AddItemModal";

interface ProductCardProps {
  product: Product;
  onDelete: (id: string) => void;
}

const PLACEHOLDER_COLORS = [
  "hsl(38 30% 90%)",
  "hsl(18 20% 88%)",
  "hsl(200 15% 88%)",
  "hsl(150 10% 86%)",
];

export default function ProductCard({ product, onDelete }: ProductCardProps) {
  const colorIndex = product.id.charCodeAt(0) % PLACEHOLDER_COLORS.length;
  const bgColor = PLACEHOLDER_COLORS[colorIndex];

  return (
    <div className="group relative bg-card shadow-card hover:shadow-card-hover transition-all duration-300 overflow-hidden animate-fade-in">
      {/* Image */}
      <div className="relative overflow-hidden aspect-[3/4]" style={{ backgroundColor: bgColor }}>
        {product.imageUrl ? (
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = "none";
            }}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="font-display text-4xl text-foreground/20">
              {product.name.charAt(0)}
            </span>
          </div>
        )}
        {/* Category badge */}
        <span className="absolute top-3 left-3 text-[10px] tracking-[0.15em] uppercase bg-card/90 backdrop-blur-sm px-2.5 py-1 text-foreground">
          {product.category}
        </span>
        {/* Delete button */}
        <button
          onClick={() => onDelete(product.id)}
          className="absolute top-3 right-3 p-1.5 bg-card/80 backdrop-blur-sm text-destructive opacity-0 group-hover:opacity-100 transition-opacity hover:bg-destructive hover:text-destructive-foreground rounded"
          aria-label="Delete item"
        >
          <Trash2 size={14} />
        </button>
      </div>

      {/* Info */}
      <div className="p-4">
        <h3 className="font-display text-lg text-foreground leading-tight">{product.name}</h3>
        {product.description && (
          <p className="text-muted-foreground text-sm mt-1 line-clamp-2 font-body">
            {product.description}
          </p>
        )}
        <div className="flex items-center justify-between mt-3">
          <span className="font-body font-semibold text-foreground">
            ${product.price.toFixed(2)}
          </span>
          <button className="text-[10px] tracking-[0.15em] uppercase text-accent font-body font-medium hover:underline">
            View
          </button>
        </div>
      </div>
    </div>
  );
}
