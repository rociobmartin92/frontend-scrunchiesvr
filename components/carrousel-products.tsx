"use client";

import useGetProducts from "@/services/useGetProducts";
import SkeletonSchema from "./skeleton-schema";
import { Heart, ShoppingCart } from "lucide-react";

import { isMobile } from "@/utils/isMobile";
import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { Card, CardContent } from "./ui/card";
import IconButton from "./icon-button";
import { base_url } from "@/services/api";
import { useCart } from "@/state/use-cart";
import { useFavorites } from "@/state/use-favorites";

const CarrouselProducs = ({ filters }: { filters: {} }) => {
  const { result, error, loading } = useGetProducts(filters);
  const typeOfWindow: boolean = isMobile();

  const { addItem } = useCart();
  const { addFavorite, items: favorites } = useFavorites();


  return (
    <div className="max-w-6xl mx-auto sm:py-10  items-center">
      <Carousel
        opts={{
          align: "start",
          loop: false,
        }}
        className="w-full max-w-screen-xl mt-7"
      >
        <CarouselContent className="ml-2 ">
          {loading && !result && <SkeletonSchema grid={3} />}
          {result.map((product) => (
            <Card className="mx-3">
              <CardContent className="flex w-96 h-auto items-center justify-center p-5">
                <img
                  src={`${base_url}${product.images[0].url}`}
                  alt="image-banner"
                  style={{ width: "21rem", height: "21rem" }}
                />
                <div className="absolute bottom-8 items-center">
                  <div className="flex justify-center w-full ">
                    <IconButton
                      onClick={() => addFavorite(product)}
                      icon={
                        <Heart
                          color="rgb(190 24 93 / var(--tw-text-opacity, 1))"
                          size={20}
                          className={
                            favorites.some((el) => el.id === product.id)
                              ? "fill-pink-700"
                              : "transition duration-200 hover:fill-pink-700"
                          }
                        />
                      }
                      className="text-gray-600 mx-2"
                    />
                    <IconButton
                      onClick={() => {
                        addItem(product);
                      }}
                      icon={<ShoppingCart size={20} />}
                      className="text-gray-600 mx-2"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </CarouselContent>
        {!typeOfWindow && (
          <>
            <CarouselPrevious />
            <CarouselNext />
          </>
        )}
      </Carousel>
    </div>
  );
};

export default CarrouselProducs;
