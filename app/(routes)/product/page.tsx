"use client";

import { useMemo } from "react";
import useGetProducts from "@/services/useGetProducts";
import { useCart } from "@/state/use-cart";
import { useFavorites } from "@/state/use-favorites";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, ShoppingCart } from "lucide-react";

import SkeletonSchema from "@/components/skeleton-schema";
import { base_url } from "@/services/api";
import IconButton from "@/components/icon-button";

const Page = () => {
  const filters = useMemo(() => {
    return {};
  }, []);

  const { result, error, loading } = useGetProducts({});
  const { addItem } = useCart();
  const { addFavorite, items: favorites } = useFavorites();

  return (
    <div className="max-w-screen w-full mt-10">
      {loading && !result ? (
        <SkeletonSchema grid={4} />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-0">
          {result.map((product) => (
            <Card
              key={product.id}
              className="relative h-full border-none shadow-none"
            >
              <CardContent className="flex flex-col justify-between items-center h-full">
                <div className="absolute left-7 top-2">
                  <IconButton
                    onClick={() => addFavorite(product)}
                    icon={
                      <Heart
                        strokeWidth={1}
                        color="rgb(190 24 93 / var(--tw-text-opacity, 1))"
                        size={20}
                        className={
                          favorites.some((el) => el.id === product.id)
                            ? "fill-pink-700"
                            : "transition duration-200 hover:fill-pink-700"
                        }
                      />
                    }
                    className="text-gray-600 mx-2  border-none bg-transparent shadow-none"
                  />
                </div>

                <img
                  src={`${base_url}${product.images[0].url}`}
                  alt={product.productName}
                  className="w-60 h-60 object-cover rounded-md"
                />

                <p className="px-2 font-light text-sm py-0 my-0">{product.description}</p>

                <div className="flex items-center justify-between w-full my-0 py-0 px-2">
                  <p className="font-medium text-pink-700">${product.price}</p>
                  <IconButton
                    className="border-none shadow-none"
                    onClick={() => addItem(product)}
                    icon={<ShoppingCart size={20} strokeWidth={1} />}
                  />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default Page;
