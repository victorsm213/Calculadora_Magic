
import React from "react";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Product } from "../types/product";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg">
      <Link to={`/product/${product.id}`}>
        <div className="aspect-square w-full overflow-hidden">
          <AspectRatio ratio={1 / 1} className="bg-white">
            <img
              src={product.image}
              alt={product.name}
              className="h-full w-full object-contain p-4"
              loading="lazy"
            />
          </AspectRatio>
        </div>
        <CardHeader className="p-4 pb-0">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold">{product.name}</h3>
            <div className="flex items-center">
              <Star className="mr-1 h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span className="text-sm">{product.rating}</span>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-4 pt-2">
          <p className="text-sm text-gray-500 line-clamp-2">{product.description}</p>
          <p className="mt-2 font-semibold text-lg">${product.price.toFixed(2)}</p>
        </CardContent>
      </Link>
      <CardFooter className="p-4 pt-0">
        <Button 
          className="w-full" 
          onClick={(e) => {
            e.preventDefault();
            addToCart(product);
          }}
        >
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
