import * as React from "react";

import { Card, CardContent } from "./ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";


const caroulesImages = [
  {
    title: "image_one",
    src: "https://acdn.mitiendanube.com/stores/001/086/481/products/img_3930-459e3e0219bc82e87217092121989929-640-0.jpeg",
  },
  {
    title: "image_two",
    src: "https://acdn.mitiendanube.com/stores/001/086/481/products/img_3930-459e3e0219bc82e87217092121989929-640-0.jpeg",
  },
  {
    title: "image_three",
    src: "https://acdn.mitiendanube.com/stores/001/086/481/products/img_3930-459e3e0219bc82e87217092121989929-640-0.jpeg",
  },
  {
    title: "image_four",
    src: "https://acdn.mitiendanube.com/stores/001/086/481/products/img_3930-459e3e0219bc82e87217092121989929-640-0.jpeg",
  },
  {
    title: "image_five",
    src: "https://acdn.mitiendanube.com/stores/001/086/481/products/img_3930-459e3e0219bc82e87217092121989929-640-0.jpeg",
  },
];

const BannerImages = () => {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}

      className="w-full max-w-screen-md mx-auto mt-6"
    >
      <CarouselContent>
        {caroulesImages.map((el, index) => (
          <CarouselItem key={index} className="md:basis-1/3">
            <div className="">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-5">
                  <img src={el.src}  />
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
