import { Product } from "@/types";
import { toast } from "@/hooks/use-toast";

import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";


interface CartStore {
  items: Product[];
  addItem: (data: Product) => void;
  removeItem: (id: number) => void;
  removeAll: () => void;
}

export const useCart = create<CartStore>()(
  persist(
    (set, get) => ({
      // items
      items: [],

      // addItem
      addItem: (product: Product) => {
        
        const currentProductsInCart = get().items;

        const existingItem = currentProductsInCart.find(
          (element) => element.id === product.id
        );

        if (existingItem) {
          return toast({
            title: "El producto ya existe en el carrito",
            variant: "destructive",
          });
        }

        set({ items: [...currentProductsInCart, product] });
        toast({
          title: "Producto agregado al carrito correctamente 🛍️",
        });
      },
      // removeItem
      removeItem: (id) => {
        const currentProductsInCart = get().items;
        const newProductsInCart = currentProductsInCart.filter(
          (el) => el.id !== id
        );

        set({ items: newProductsInCart }),
          toast({
            title: "El carrito se ha actualizado correctamente",
          });
      },

      // removeAll
      removeAll: () => {
        set({ items: [] });
        toast({
          description: "El carrito se ha eliminado correctamente 🗑️",
        });
      },
    }),
    {
      name: "cart-storage", // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => localStorage), // (optional) by default, 'localStorage' is used
    }
  )
);
