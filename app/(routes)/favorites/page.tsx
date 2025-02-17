"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Heart, MoreVertical, Plus, ShoppingBag, ShoppingBagIcon, Trash2 } from "lucide-react";
import { Product } from "@/types";
import { base_url } from "@/services/api";
import { useFavorites } from "@/state/use-favorites";
import { useCart } from "@/state/use-cart";

const Page = () => {
  const { items, removeFavorite, removeAllFavorites } = useFavorites();
  const {addItem} = useCart()

  return (
    <div className="max-w-3xl border mx-auto p-4 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-semibold flex items-center gap-2">
        <Heart className="text-red-500" /> Favoritos
      </h1>

      {items.length === 0 ? (
        <p className="text-gray-500 mt-4">No tienes productos en favoritos.</p>
      ) : (
        <>
          <ScrollArea className="h-96 mt-4  rounded-lg p-2">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {items.map((product: Product) => (
                <Card key={product.id} className="relative">
                  <CardContent className="p-4 flex flex-col items-center">
                    <img
                      src={`${base_url}${product.images[0].url}`}
                      alt="favorite-accesorie"
                      className="w-40 h-40 object-cover rounded-md"
                    />
                    <h2 className="text-lg font-semibold mt-2">
                      {product.productName}
                    </h2>
                    <p className="text-sm text-gray-500">$ {product.price}</p>
                    <div className="flex items-center gap-3">
                    <Button
                      size="sm"
                      className="mt-2"
                      onClick={() => removeFavorite(product)}
                    >
                      <Trash2 className="w-4 h-4 mr-1 fill-red-600" />
                    </Button>
                    <Button
                      size="sm"
                      className="mt-2"
                      onClick={() => addItem(product)}
                    >
                      {/* <Trash2 className="w-4 h-4 mr-1" />  */}
                      <Plus className="w-4 h-4" />
                    </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </ScrollArea>

          <Button
            variant="outline"
            className="w-full"
            onClick={removeAllFavorites}
          >
            Eliminar Favoritos
          </Button>
        </>
      )}
    </div>
  );
};

export default Page;
