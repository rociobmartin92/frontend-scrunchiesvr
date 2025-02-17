"use client";
import { useRouter } from "next/navigation";
import { BaggageClaim, Heart, ShoppingCart, User } from "lucide-react";
import MenuList from "./menu-list";
import ItemsMenuMobile from "./items-menu-mobile";
import { ModeToggle } from "./mode-toggle";
import { useCart } from "@/state/use-cart";

function Navbar() {
  const router = useRouter();

  const { items } = useCart();

  return (
    <div className="flex items-center justify-between p-4 mx-auto cursor-pointer max-w-full">
      <h1 onClick={() => router.push("/")} className="text-lg">
        Scrunchies<span className="font-bold">VR</span>
      </h1>

      <div className="flex sm:hidden">
        <ItemsMenuMobile />
      </div>

      <div className="items-center justify-between hidden sm:flex">
        <MenuList />
      </div>
      <div className="flex items-center justify-between gap-2 sm:gap-7">
        {items.length === 0 ? (
          <ShoppingCart
            strokeWidth="1"
            className="cursor-pointer"
            onClick={() => router.push("/cart")}
          />
        ) : (
          <div className="flex gap-1" onClick={() => router.push("/cart")}>
            <BaggageClaim strokeWidth={1} />
            <span>{items.length}</span>
          </div>
        )}

        <Heart
          strokeWidth="1"
          className="cursor-pointer"
          onClick={() => router.push("/favorites")}
        />

        <User className="cursor-pointer" />
        <ModeToggle />
      </div>
    </div>
  );
}

export default Navbar;
