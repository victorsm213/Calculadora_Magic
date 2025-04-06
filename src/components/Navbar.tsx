
import React from "react";
import { Link } from "react-router-dom";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import CartDropdown from "./CartDropdown";

const Navbar: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 border-b bg-white">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center">
          <span className="text-xl font-bold text-primary">SupplementHub</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-sm font-medium hover:text-primary">
            Home
          </Link>
          <Link to="/products" className="text-sm font-medium hover:text-primary">
            All Products
          </Link>
          <Link to="/categories/protein" className="text-sm font-medium hover:text-primary">
            Protein
          </Link>
          <Link to="/categories/vitamins" className="text-sm font-medium hover:text-primary">
            Vitamins
          </Link>
          <Link to="/categories/pre-workout" className="text-sm font-medium hover:text-primary">
            Pre-Workout
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          <div className="relative hidden md:block w-64">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search products..."
              className="pl-10"
            />
          </div>
          <CartDropdown />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
