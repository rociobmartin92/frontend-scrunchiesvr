

import { Button } from "./ui/button"

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "./ui/popover"

export function ItemsMenuMobile() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Open popover</Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Dimensions</h4>
            <p className="text-sm text-muted-foreground">
              Set the dimensions for the layer.
            </p>
          </div>
          <div className="grid gap-2">
            <div className="grid grid-cols-3 items-center gap-4">
            <p>Wanda Nara</p>
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
            <p>Wanda Nara</p>
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
            <p>Wanda Nara</p>
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
           <p>Wanda Nara</p>
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}


export default ItemsMenuMobile