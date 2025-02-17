"use client";
import { useRouter } from "next/navigation";
import { BaggageClaim, Heart, ShoppingCart, User } from "lucide-react";
import MenuList from "./menu-list";
import ItemsMenuMobile from "./items-menu-mobile";
import { ModeToggle } from "./mode-toggle";
import { useCart } from "@/state/use-cart";
import { useFavorites } from "@/state/use-favorites";

function Navbar() {
  const router = useRouter();

  const { items } = useCart();
  const { items: favorites } = useFavorites();

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
        <div className="flex gap-1" onClick={() => router.push("/favorites")}>
          <Heart strokeWidth="1" className="cursor-pointer" />
          <span>{favorites.length}</span>
        </div>

        <User className="cursor-pointer" />
        <ModeToggle />
      </div>
    </div>
  );
}

export default Navbar;
