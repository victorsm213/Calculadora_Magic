
import React from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import ProductGrid from "../components/ProductGrid";
import { products } from "../data/products";
import { Product } from "../types/product";

const CategoryPage: React.FC = () => {
  const { category } = useParams<{ category: string }>();
  
  const categoryProducts = products.filter(
    (product: Product) => product.category === category
  );

  const getCategoryName = (categoryId: string | undefined) => {
    switch (categoryId) {
      case "protein":
        return "Protein Supplements";
      case "pre-workout":
        return "Pre-Workout Supplements";
      case "creatine":
        return "Creatine Supplements";
      case "vitamins":
        return "Vitamins & Minerals";
      case "amino-acids":
        return "Amino Acids";
      default:
        return "Products";
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Link
        to="/products"
        className="mb-4 inline-flex items-center text-sm font-medium text-gray-600 hover:text-primary"
      >
        <ArrowLeft className="mr-2 h-4 w-4" /> Back to all products
      </Link>

      <h1 className="mb-8 text-3xl font-bold">{getCategoryName(category)}</h1>

      {categoryProducts.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-lg text-gray-500">No products found in this category</p>
        </div>
      ) : (
        <ProductGrid products={categoryProducts} />
      )}
    </div>
  );
};

export default CategoryPage;
