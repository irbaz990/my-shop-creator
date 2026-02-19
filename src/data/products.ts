import prodHoodie1 from "@/assets/prod-hoodie-1.jpg";
import prodHoodie2 from "@/assets/prod-hoodie-2.jpg";
import prodTee1 from "@/assets/prod-tee-1.jpg";
import prodJacket1 from "@/assets/prod-jacket-1.jpg";

export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  category: "hoodies" | "t-shirts" | "jackets";
  gender: "men" | "women" | "unisex";
  image: string;
  images?: string[];
  description: string;
  sizes: string[];
  badge?: string;
  rating: number;
  reviews: number;
  featured?: boolean;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Urban Shadow Hoodie",
    price: 89,
    originalPrice: 120,
    category: "hoodies",
    gender: "men",
    image: prodHoodie1,
    images: [prodHoodie1, prodHoodie2],
    description: "Heavyweight 400gsm cotton fleece with dropped shoulders and a oversized silhouette. The Urban Shadow defines effortless streetwear — wear it with everything.",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    badge: "SALE",
    rating: 4.8,
    reviews: 124,
    featured: true,
  },
  {
    id: "2",
    name: "Vibe Zip Hoodie",
    price: 95,
    category: "hoodies",
    gender: "men",
    image: prodHoodie2,
    images: [prodHoodie2, prodHoodie1],
    description: "Full-zip premium fleece hoodie with a relaxed fit. Brushed interior for warmth, clean exterior for style.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    badge: "NEW",
    rating: 4.6,
    reviews: 88,
    featured: true,
  },
  {
    id: "3",
    name: "Statement Graphic Tee",
    price: 45,
    category: "t-shirts",
    gender: "men",
    image: prodTee1,
    images: [prodTee1],
    description: "Premium heavyweight cotton tee with bold street art-inspired graphics. 220gsm, pre-shrunk, double-stitched.",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    rating: 4.9,
    reviews: 210,
    featured: true,
  },
  {
    id: "4",
    name: "Street Bomber Jacket",
    price: 159,
    originalPrice: 195,
    category: "jackets",
    gender: "men",
    image: prodJacket1,
    images: [prodJacket1],
    description: "Nylon bomber jacket with technical pocket detail and ribbed cuffs. Yellow accent zipper tab. The defining piece of the UrbanVibe collection.",
    sizes: ["S", "M", "L", "XL"],
    badge: "BESTSELLER",
    rating: 4.9,
    reviews: 312,
    featured: true,
  },
  {
    id: "5",
    name: "Core Black Hoodie",
    price: 75,
    category: "hoodies",
    gender: "women",
    image: prodHoodie1,
    description: "Essential oversized hoodie in pure black. A wardrobe staple reimagined for urban culture.",
    sizes: ["XS", "S", "M", "L", "XL"],
    badge: "NEW",
    rating: 4.7,
    reviews: 65,
  },
  {
    id: "6",
    name: "Minimal White Tee",
    price: 38,
    category: "t-shirts",
    gender: "women",
    image: prodTee1,
    description: "Clean, crisp essential tee in bright white. Relaxed fit with fine rib neckline. Premium Pima cotton.",
    sizes: ["XS", "S", "M", "L"],
    rating: 4.5,
    reviews: 99,
  },
  {
    id: "7",
    name: "Urban Windbreaker",
    price: 139,
    category: "jackets",
    gender: "women",
    image: prodJacket1,
    description: "Lightweight technical windbreaker with packable design. City-ready protection meets street-level style.",
    sizes: ["XS", "S", "M", "L", "XL"],
    rating: 4.6,
    reviews: 44,
    badge: "NEW",
  },
  {
    id: "8",
    name: "Logo Drop Tee",
    price: 42,
    category: "t-shirts",
    gender: "unisex",
    image: prodTee1,
    description: "Unisex tee with oversized UV logo print in tonal yellow. 100% organic ring-spun cotton.",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    rating: 4.8,
    reviews: 180,
    featured: true,
  },
];

export const productReviews = [
  { id: "1", user: "Jordan K.", rating: 5, comment: "Absolute fire. Quality is insane, fits perfectly. Will definitely buy more.", date: "Jan 2025" },
  { id: "2", user: "Alex M.", rating: 5, comment: "Best hoodie I've ever owned. The weight is perfect, not too heavy. Looks exactly like the photos.", date: "Dec 2024" },
  { id: "3", user: "Sam T.", rating: 4, comment: "Great quality, runs slightly large so size down if you want a fitted look. Love the brand.", date: "Jan 2025" },
  { id: "4", user: "Riley C.", rating: 5, comment: "UrbanVibe never misses. This is my 4th piece and everything has been 10/10.", date: "Feb 2025" },
];
