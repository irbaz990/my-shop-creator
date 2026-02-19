import { X, Plus, Minus, ShoppingBag, Trash2 } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { Link } from "react-router-dom";

export default function CartSidebar() {
  const { items, isOpen, closeCart, removeItem, updateQty, total, itemCount } = useCart();

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/70 z-50 backdrop-blur-sm animate-fade-in"
          onClick={closeCart}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-card z-50 flex flex-col transition-transform duration-350 ease-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-border">
          <div>
            <h2 className="font-display text-2xl">YOUR BAG</h2>
            <p className="text-muted-foreground text-xs font-body">{itemCount} item{itemCount !== 1 ? "s" : ""}</p>
          </div>
          <button onClick={closeCart} className="text-muted-foreground hover:text-foreground transition-colors">
            <X size={22} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto py-4 scrollbar-hide">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center px-6">
              <ShoppingBag size={48} className="text-muted-foreground opacity-40" />
              <p className="font-display text-2xl">YOUR BAG IS EMPTY</p>
              <p className="text-muted-foreground text-sm font-body">Add some pieces to your bag</p>
              <button
                onClick={closeCart}
                className="mt-4 border border-accent text-accent px-6 py-2 text-sm font-medium tracking-widest uppercase hover:bg-accent hover:text-accent-foreground transition-all font-body"
              >
                Shop Now
              </button>
            </div>
          ) : (
            <div className="space-y-4 px-6">
              {items.map((item) => (
                <div key={`${item.product.id}-${item.size}`} className="flex gap-4 py-4 border-b border-border">
                  <div className="w-20 h-24 bg-secondary flex-shrink-0 overflow-hidden">
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h3 className="font-display text-base leading-tight">{item.product.name}</h3>
                        <p className="text-muted-foreground text-xs font-body mt-0.5">Size: {item.size}</p>
                      </div>
                      <button
                        onClick={() => removeItem(item.product.id, item.size)}
                        className="text-muted-foreground hover:text-destructive transition-colors flex-shrink-0"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center gap-3 border border-border">
                        <button
                          onClick={() => updateQty(item.product.id, item.size, item.quantity - 1)}
                          className="px-2 py-1 text-muted-foreground hover:text-foreground transition-colors"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="text-sm font-medium font-body w-4 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQty(item.product.id, item.size, item.quantity + 1)}
                          className="px-2 py-1 text-muted-foreground hover:text-foreground transition-colors"
                        >
                          <Plus size={12} />
                        </button>
                      </div>
                      <span className="font-body font-semibold text-foreground">
                        ${(item.product.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="px-6 py-6 border-t border-border space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground text-sm font-body uppercase tracking-widest">Subtotal</span>
              <span className="font-display text-2xl">${total.toFixed(2)}</span>
            </div>
            <p className="text-muted-foreground text-xs font-body">Shipping calculated at checkout</p>
            <Link
              to="/checkout"
              onClick={closeCart}
              className="block w-full gradient-accent text-accent-foreground text-center py-4 font-display text-lg tracking-widest hover:opacity-90 transition-opacity"
            >
              CHECKOUT
            </Link>
          </div>
        )}
      </div>
    </>
  );
}
