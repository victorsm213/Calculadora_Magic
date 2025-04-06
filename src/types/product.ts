
export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  category: 'protein' | 'vitamins' | 'pre-workout' | 'creatine' | 'amino-acids';
  stock: number;
  rating: number;
  featured?: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
}
