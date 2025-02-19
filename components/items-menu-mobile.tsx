import {  Menu } from "lucide-react";
import { Button } from "./ui/button";

import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import Link from "next/link";

export function ItemsMenuMobile() {
  return (
    <Popover>
      <PopoverTrigger >
        <Menu />
      </PopoverTrigger>
      <PopoverContent className="mx-auto  flex-col flex gap-2  max-w-40">
        <Link href="/hairClips">Chuflines</Link>
        <Link href="/scrunchies">Hebillas</Link>
        <Link href="/bandanas">Bandanas</Link>
        <Link href="/products">Ver todo</Link>
      </PopoverContent>
    </Popover>
  );
}

export default ItemsMenuMobile;
