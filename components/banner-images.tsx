import * as React from "react";

import { Card, CardContent } from "./ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { BannerImageProps } from "@/types";


  const BannerImages = ({carouselImages}: BannerImageProps) => {

  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}

      className="w-full max-w-screen-md mx-auto mt-6"
    >
      <CarouselContent>
        {carouselImages.map((image, index) => (
          <CarouselItem key={index} className="md:basis-1/3">
            <div className="">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-5">
                  <img src={image} alt="image-banner" />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default BannerImages;
