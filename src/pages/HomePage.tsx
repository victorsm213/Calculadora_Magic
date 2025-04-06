
import React from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProductGrid from "../components/ProductGrid";
import { products } from "../data/products";
import { Link } from "react-router-dom";

const HomePage: React.FC = () => {
  const featuredProducts = products.filter(product => product.featured);

  return (
    <div className="container mx-auto px-4 py-8">
      <section className="mb-16">
        <div className="rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 p-8 md:p-16">
          <div className="max-w-2xl text-white">
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">
              Premium Supplements for Your Fitness Journey
            </h1>
            <p className="mb-6 text-lg opacity-90">
              Fuel your workouts, support recovery, and achieve your fitness goals
              with our high-quality supplements.
            </p>
            <Button asChild size="lg" className="bg-white text-indigo-600 hover:bg-gray-100">
              <Link to="/products">Shop Now</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-2xl font-bold">Featured Products</h2>
          <Link to="/products" className="flex items-center text-primary hover:underline">
            View all <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
        <ProductGrid products={featuredProducts} />
      </section>

      <section className="mb-16 grid gap-8 md:grid-cols-3">
        <div className="rounded-xl bg-purple-100 p-6">
          <h3 className="mb-2 text-xl font-semibold">Proteins</h3>
          <p className="mb-4 text-sm text-gray-600">
            Build and repair muscles with our premium protein supplements.
          </p>
          <Link
            to="/categories/protein"
            className="inline-flex items-center text-sm font-medium text-primary hover:underline"
          >
            Explore <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>

        <div className="rounded-xl bg-blue-100 p-6">
          <h3 className="mb-2 text-xl font-semibold">Pre-Workouts</h3>
          <p className="mb-4 text-sm text-gray-600">
            Enhance your energy and focus for maximum workout performance.
          </p>
          <Link
            to="/categories/pre-workout"
            className="inline-flex items-center text-sm font-medium text-primary hover:underline"
          >
            Explore <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>

        <div className="rounded-xl bg-green-100 p-6">
          <h3 className="mb-2 text-xl font-semibold">Vitamins</h3>
          <p className="mb-4 text-sm text-gray-600">
            Support overall health with our comprehensive vitamin range.
          </p>
          <Link
            to="/categories/vitamins"
            className="inline-flex items-center text-sm font-medium text-primary hover:underline"
          >
            Explore <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
