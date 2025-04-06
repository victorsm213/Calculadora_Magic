
import React, { useState } from "react";
import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@radix-ui/react-popover";
import CartItem from "./CartItem";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

const CartDropdown: React.FC = () => {
  const [open, setOpen] = useState(false);
  const { cartItems, total, itemCount, clearCart } = useCart();

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="outline" size="icon" className="relative">
          <ShoppingCart className="h-5 w-5" />
          {itemCount > 0 && (
            <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground">
              {itemCount}
            </span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent
        align="end"
        className="w-80 rounded-lg border bg-white p-4 shadow-md"
      >
        <div className="flex flex-col space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">Shopping Cart</h3>
            {cartItems.length > 0 && (
              <Button
                variant="ghost"
                size="sm"
                className="text-sm text-gray-500"
                onClick={clearCart}
              >
                Clear
              </Button>
            )}
          </div>

          {cartItems.length === 0 ? (
            <div className="py-6 text-center text-gray-500">
              Your cart is empty
            </div>
          ) : (
            <>
              <div className="max-h-[300px] overflow-auto">
                {cartItems.map((item) => (
                  <CartItem key={item.product.id} item={item} />
                ))}
              </div>

              <div className="border-t pt-4">
                <div className="flex items-center justify-between py-2">
                  <span className="font-semibold">Total:</span>
                  <span className="font-bold">${total.toFixed(2)}</span>
                </div>

                <div className="flex space-x-2">
                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={() => setOpen(false)}
                  >
                    Continue Shopping
                  </Button>
                  <Button className="w-full" asChild>
                    <Link to="/checkout">Checkout</Link>
                  </Button>
                </div>
              </div>
            </>
          )}
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default CartDropdown;
