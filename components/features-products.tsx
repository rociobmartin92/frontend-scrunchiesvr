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
import HeaderTitle from "./header-title";
import { base_url } from "@/services/api";

const FeaturedProducs = () => {
  const router = useRouter();
  const { result, error, loading } = useGetProducts({ bestSeller: true });

  return (
    <div className="max-w-6xl mx-auto  sm:py-10">
      <HeaderTitle title="Más Vendidos" />
      <Carousel
        opts={{
          align: "start",
          loop: false,
        }}
        className="w-full max-w-screen-xl"
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
                      onClick={() => router.push(`/producs/${product.id}`)}
                      icon={
                        <Expand
                          color="rgb(190 24 93 / var(--tw-text-opacity, 1))"
                          size={20}
                        />
                      }
                      className="text-gray-600 mx-2"
                    />
                    <IconButton
                      onClick={() => router.push("/cart")}
                      icon={<ShoppingCart size={20} />}
                      className="text-gray-600 mx-2"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default FeaturedProducs;
