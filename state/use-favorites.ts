import { Product } from "@/types";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { toast } from "@/hooks/use-toast";

interface Favorites {
  items: Product[];
  addFavorite: (data: Product) => void;
  removeFavorite: (data: Product) => void;
  removeAllFavorites: () => void;
}

export const useFavorites = create<Favorites>()(
  persist(
    (set, get) => ({
      items: [],
      addFavorite: (product) => {
        const currentFavorites = get().items;

        const existingItemInFavorites = currentFavorites.find(
          (el) => el.id === product.id
        );

        if (existingItemInFavorites) {
          return toast({
            title: "Ya agregaste este producto a tus favoritos ",
          });
        }
        const productMarked = { ...product, favorite: true };
        console.log("addMark", productMarked);
        set({ items: [...currentFavorites, productMarked] });

        toast({
          title: "Agregado a tus favoritos ❤️‍🔥",
        });
      },

      removeFavorite: (product) => {
        const currentFavorites = get().items;

        const removeMarked = { ...product, favorite: false };

        const newFavoritesList = currentFavorites.filter(
          (el) => el.id !== removeMarked.id
        );
        toast({
          title: "Eliminaste este producto de tus favoritos",
        });
  
        set({ items: newFavoritesList });
      },

      removeAllFavorites: () => {
        set({ items: [] });
        toast({
          title: "Eliminaste todos tus favoritos",
        });
      },
    }),

    {
      name: "favorites-storage", // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => localStorage),
    }
  )
);
