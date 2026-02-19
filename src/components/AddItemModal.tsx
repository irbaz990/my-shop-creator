import { useState } from "react";
import { X, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  description: string;
  imageUrl: string;
}

interface AddItemModalProps {
  onClose: () => void;
  onAdd: (product: Omit<Product, "id">) => void;
}

const CATEGORIES = ["Tops", "Bottoms", "Dresses", "Outerwear", "Accessories", "Footwear"];

export default function AddItemModal({ onClose, onAdd }: AddItemModalProps) {
  const [form, setForm] = useState({
    name: "",
    price: "",
    category: "",
    description: "",
    imageUrl: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.price || !form.category) return;
    onAdd({
      name: form.name.trim(),
      price: parseFloat(form.price),
      category: form.category,
      description: form.description.trim(),
      imageUrl: form.imageUrl.trim(),
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-foreground/40 backdrop-blur-sm" />
      <div
        className="relative w-full max-w-lg bg-card rounded shadow-card-hover animate-scale-in overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-8 py-6 border-b border-border">
          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground font-body mb-1">New Product</p>
            <h2 className="font-display text-2xl text-foreground">Add Item</h2>
          </div>
          <button
            onClick={onClose}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="px-8 py-6 space-y-5">
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2 space-y-1.5">
              <Label htmlFor="name" className="text-xs tracking-widest uppercase text-muted-foreground">
                Item Name *
              </Label>
              <Input
                id="name"
                placeholder="e.g. Linen Blazer"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
                className="bg-secondary border-0 focus-visible:ring-accent"
              />
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="price" className="text-xs tracking-widest uppercase text-muted-foreground">
                Price (USD) *
              </Label>
              <Input
                id="price"
                type="number"
                min="0"
                step="0.01"
                placeholder="0.00"
                value={form.price}
                onChange={(e) => setForm({ ...form, price: e.target.value })}
                required
                className="bg-secondary border-0 focus-visible:ring-accent"
              />
            </div>

            <div className="space-y-1.5">
              <Label className="text-xs tracking-widest uppercase text-muted-foreground">
                Category *
              </Label>
              <Select
                value={form.category}
                onValueChange={(val) => setForm({ ...form, category: val })}
                required
              >
                <SelectTrigger className="bg-secondary border-0 focus:ring-accent">
                  <SelectValue placeholder="Select..." />
                </SelectTrigger>
                <SelectContent>
                  {CATEGORIES.map((cat) => (
                    <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="col-span-2 space-y-1.5">
              <Label htmlFor="imageUrl" className="text-xs tracking-widest uppercase text-muted-foreground">
                Image URL
              </Label>
              <Input
                id="imageUrl"
                placeholder="https://..."
                value={form.imageUrl}
                onChange={(e) => setForm({ ...form, imageUrl: e.target.value })}
                className="bg-secondary border-0 focus-visible:ring-accent"
              />
            </div>

            <div className="col-span-2 space-y-1.5">
              <Label htmlFor="description" className="text-xs tracking-widest uppercase text-muted-foreground">
                Description
              </Label>
              <Textarea
                id="description"
                placeholder="Describe the item..."
                value={form.description}
                onChange={(e) => setForm({ ...form, description: e.target.value })}
                rows={3}
                className="bg-secondary border-0 focus-visible:ring-accent resize-none"
              />
            </div>
          </div>

          <div className="flex gap-3 pt-2">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="flex-1 border-border"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="flex-1 gradient-accent text-accent-foreground border-0 hover:opacity-90 transition-opacity"
            >
              Add to Shop
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
