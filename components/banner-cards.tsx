import * as React from "react";

import { Card, CardContent } from "./ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

const carouselItems = [
  {
    title: "🚚 Envío rápido en 48 horas",
    description: "Recibe tus accesorios en tiempo récord o retíralos en tienda.",
  },
  {
    title: "🎉 15% de descuento",
    description: "Aprovecha un 15% OFF en compras superiores a $15.000.",
  },
  {
    title: "🔄 Devoluciones fáciles",
    description: "Si no te encanta, tienes 30 días para devolverlo sin costo.",
  },
  {
    title: "🧢 ¡Próximamente!",
    description: "Muy pronto encontrarás gorras en nuestra tienda. ¡Estén atentos!",
  },
];

const BannerCards = () => {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full max-w-screen-md mx-auto mt-6"
    >
      <CarouselContent>
        {carouselItems.map((item, index) => (
          <CarouselItem key={index} className="">
            <Card className="shadow-md">
              <CardContent className="flex flex-col items-center justify-center p-6 text-center">
                <h3 className="text-lg font-semibold text-pink-700">{item.title}</h3>
                <p className="text-sm  mt-2">{item.description}</p>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default BannerCards;
