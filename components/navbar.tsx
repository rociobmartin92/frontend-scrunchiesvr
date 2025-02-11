"use client";
import { useRouter } from "next/navigation";
import { Heart, ShoppingCart, User } from "lucide-react";
import MenuList from "./menu-list";
import ItemsMenuMobile from "./items-menu-mobile";
import { ModeToggle } from "./mode-toggle";

function Navbar() {
  const router = useRouter();
  return (
    <div className="flex items-center justify-between p-4 mx-auto cursor-pointer max-w-full">
      <h1 onClick={() => router.push("/")}>
        Scrunchies<span className="font-bold">VR</span>
      </h1>

      <div className="flex sm:hidden">
      <ItemsMenuMobile />
      </div>

      <div className="items-center justify-between hidden sm:flex">
        <MenuList />
      </div>
      <div className="flex items-center justify-between gap-2 sm:gap-7">
        <ShoppingCart
          strokeWidth="1"
          className="cursor-pointer"
          onClick={() => router.push("/cart")}
        />

        <Heart
          strokeWidth="1"
          className="cursor-pointer"
          onClick={() => router.push("/favorites")}
        />

        <User className="cursor-pointer" />
      </div>
      <ModeToggle />
    </div>
  );
}

export default Navbar;
