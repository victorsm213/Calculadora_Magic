
import { Product } from "../types/product";

export const products: Product[] = [
  {
    id: "1",
    name: "Premium Whey Protein",
    price: 59.99,
    image: "https://m.media-amazon.com/images/I/61F7qvgfhIL._AC_SX679_.jpg",
    description: "High-quality whey protein with 24g of protein per serving. Perfect for muscle recovery and growth.",
    category: "protein",
    stock: 25,
    rating: 4.8,
    featured: true
  },
  {
    id: "2",
    name: "Pre-Workout Energizer",
    price: 42.50,
    image: "https://m.media-amazon.com/images/I/71JD-ZuJ+vL._AC_SX679_.jpg",
    description: "Powerful pre-workout formula with caffeine, creatine, and beta-alanine for maximum performance.",
    category: "pre-workout",
    stock: 15,
    rating: 4.6,
    featured: true
  },
  {
    id: "3",
    name: "Creatine Monohydrate",
    price: 29.99,
    image: "https://m.media-amazon.com/images/I/71w6x-GsUtL._AC_SX679_.jpg",
    description: "Pure creatine monohydrate for increased strength, power, and muscle growth.",
    category: "creatine",
    stock: 30,
    rating: 4.9,
    featured: false
  },
  {
    id: "4",
    name: "Multivitamin Complex",
    price: 24.99,
    image: "https://m.media-amazon.com/images/I/71caq9PKdnL._AC_SX679_.jpg",
    description: "Complete multivitamin formula with essential vitamins and minerals for overall health.",
    category: "vitamins",
    stock: 40,
    rating: 4.5,
    featured: true
  },
  {
    id: "5",
    name: "BCAA Amino Acids",
    price: 34.99,
    image: "https://m.media-amazon.com/images/I/61OQU4oOlAL._AC_SX679_.jpg",
    description: "Branch chain amino acids supplement for improved recovery and reduced muscle soreness.",
    category: "amino-acids",
    stock: 20,
    rating: 4.7,
    featured: false
  },
  {
    id: "6",
    name: "Mass Gainer",
    price: 64.99,
    image: "https://m.media-amazon.com/images/I/71j-CMjnXVL._AC_SX679_.jpg",
    description: "High-calorie protein powder for building muscle mass and weight gain.",
    category: "protein",
    stock: 18,
    rating: 4.4,
    featured: false
  }
];
