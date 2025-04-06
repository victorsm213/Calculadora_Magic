
import React from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Star, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { products } from "../data/products";
import { useCart } from "../context/CartContext";

const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { addToCart } = useCart();
  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="mb-4 text-2xl font-bold">Product Not Found</h1>
        <p className="mb-8">The product you're looking for doesn't exist.</p>
        <Button asChild>
          <Link to="/products">Back to Products</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Link
        to="/products"
        className="mb-8 inline-flex items-center text-sm font-medium text-gray-600 hover:text-primary"
      >
        <ArrowLeft className="mr-2 h-4 w-4" /> Back to products
      </Link>

      <div className="grid gap-8 md:grid-cols-2">
        <div className="overflow-hidden rounded-lg border bg-white">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-contain p-8"
          />
        </div>

        <div className="space-y-6">
          <h1 className="text-3xl font-bold">{product.name}</h1>

          <div className="flex items-center">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-5 w-5 ${
                    i < Math.floor(product.rating)
                      ? "fill-yellow-400 text-yellow-400"
                      : "fill-gray-200 text-gray-200"
                  }`}
                />
              ))}
            </div>
            <span className="ml-2 text-sm text-gray-500">
              {product.rating} out of 5 stars
            </span>
          </div>

          <div>
            <h2 className="text-2xl font-bold">${product.price.toFixed(2)}</h2>
          </div>

          <div className="border-t border-b py-6">
            <h3 className="mb-2 font-semibold">Description</h3>
            <p className="text-gray-600">{product.description}</p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center text-sm text-gray-600">
              <Truck className="mr-2 h-5 w-5" />
              Free shipping on orders over $50
            </div>

            <div className="flex items-center space-x-2">
              <Button 
                className="w-full" 
                onClick={() => addToCart(product)}
                disabled={product.stock === 0}
              >
                Add to Cart
              </Button>
            </div>

            <div className="text-sm text-gray-600">
              {product.stock > 0 ? (
                <span className="text-green-600">
                  In stock ({product.stock} available)
                </span>
              ) : (
                <span className="text-red-600">Out of stock</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
