"use client";

import useGetProducts from "@/services/useGetProducts";
import BannerImages from "./banner-images";
import { useEffect, useState } from "react";
import SkeletonSchema from "./skeleton-schema";
import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { Card, CardContent } from "./ui/card";
import { Expand, ShoppingCart } from "lucide-react";

const publicAssetsUrl = process.env.NEXT_PUBLIC_API_URL;

const FeaturedProducs = () => {
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
            result.map((product) => 
              <Card className="mx-3">
              <CardContent className="flex w-96 items-center justify-center p-5">
                <img src={`${publicAssetsUrl}${product.images[0].url}`} alt="image-banner" className="mb-8" style={{width: "25rem", height: "25rem"}} />
                <div className="absolute bottom-4 items-cente">
                  {/* <div className="flex justify-center w-full transition duration-200 opacity-0 hover:opacity-100"> */}
                  <div className="flex justify-center w-full ">
                    <Expand className="mx-24 opacity-80 transition duration-200 hover:opacity-100"  color="rgb(190 24 93 / var(--tw-text-opacity, 1))"/>
                    <ShoppingCart className="mx-24 opacity-80 transition duration-200 hover:opacity-100" color="rgb(190 24 93 / var(--tw-text-opacity, 1))"/>
                  </div>
                </div>
              </CardContent>
            </Card>
            )
          )}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default FeaturedProducs;
