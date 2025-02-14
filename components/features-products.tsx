"use client";

import { useRouter } from "next/navigation";
import useGetProducts from "@/services/useGetProducts";
import SkeletonSchema from "./skeleton-schema";
import { Expand, ShoppingCart } from "lucide-react";

import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { Card, CardContent } from "./ui/card";
import IconButton from "./icon-button";

const publicAssetsUrl = process.env.NEXT_PUBLIC_API_URL;

const FeaturedProducs = () => {
  const router = useRouter();
  const { result, error, loading } = useGetProducts({ bestSeller: true });

  return (
    <div className="max-w-6xl mx-auto  sm:py-10">
      <h3 className="text-2xl sm:pb-8 ml-5">Más Vendidos</h3>
      <Carousel
        opts={{
          align: "start",
          loop: false,
        }}
        className="w-full max-w-screen-xl"
      >
        <CarouselContent className="ml-2 ">
          {loading ? (
            <SkeletonSchema grid={3} />
          ) : (
            result.map((product) => (
              <Card className="mx-3">
                <CardContent className="flex w-96 h-auto items-center justify-center p-5">
                  <img
                    src={`${publicAssetsUrl}${product.images[0].url}`}
                    alt="image-banner"
     
                    style={{ width: "21rem", height: "21rem" }}
                  />
                  <div className="absolute bottom-8 items-cente">
                    <div className="flex justify-center w-full ">
                      <IconButton
                        onClick={() => router.push(`/producs/${product.id}`)}
                        icon={
                          <Expand color="rgb(190 24 93 / var(--tw-text-opacity, 1))" size={20}/>
                        }
                        className="text-gray-600 mx-2"
                      />
                      <IconButton
                        onClick={() => router.push("/cart")}
                        icon={<ShoppingCart size={20}  />}
                        className="text-gray-600 mx-2"
                      />
                    </div>
                  </div>
                
                </CardContent>
              </Card>
            ))
          )}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default FeaturedProducs;
