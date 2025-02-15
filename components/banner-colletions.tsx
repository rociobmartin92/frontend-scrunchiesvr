"use client";

import useGetCollections from "@/services/useGetCollections";

import HeaderTitle from "./header-title";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import { Card, CardContent } from "./ui/card";
import Autoplay from "embla-carousel-autoplay";
import { base_url } from "@/services/api";



const BannerCollections = () => {
  const { result, error, loading } = useGetCollections();

  console.log("resulteee", result);
  return (
    <div className="max-w-screen-2xl w-full  sm:py-10">
      {result.map((collection) => (
        <div>
          <HeaderTitle title={`Colección ${collection.collectionName}`} />
          <Carousel
            opts={{
              align: "start",
            }}
            orientation="vertical"
            className="w-full max-w-screen-2x mx-auto mt-6"
          >
            <CarouselContent className="my-5 ">
              {collection.images.map((image, index) => (
                <CarouselItem key={index} className="max-h-96 overflow-hidden pt-1 md:basis-1/2">
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex items-center justify-center p-6">
                        <img alt="collection-image" src={`${base_url}${image.url}`} className=" w-full overflow-hidden"  />
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      ))}
    </div>
  );
};

export default BannerCollections;
