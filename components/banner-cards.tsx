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
    title: "🚚 Retira tus productos por farmacia SanMar en 48 horas",
    subtitle: "Recibe tus accesorios pagando envío o retíralos en nuestra tienda.",
    description: "20 de Junio 867, R8336 Villa Regina, Río Negro"
  },
  {
    title: "🎉 15% de descuento",
    subtitle: "Aprovecha un 10% OFF en compras superiores a $15.000.",
    description: "Sólo en efectivo o transferencia"
  },
  {
    title: "🔄 Devoluciones fáciles",
    subtitle: "Si no te encanta, tienes 7 días para devolverlo sin costo.",
  },
  {
    title: "🧢 ¡Próximamente!",
    subtitle: "Muy pronto encontrarás gorras en nuestra tienda. ¡Estén atentos!",
  },
];

const BannerCards = () => {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full max-w-screen-xl mx-auto mt-6"
    >
      <CarouselContent>
        {carouselItems.map((item, index) => (
          <CarouselItem key={index} className="">
            <Card className="shadow-md">
              <CardContent className="flex flex-col items-center justify-center p-6 text-center">
                <h3 className="text-lg font-semibold text-pink-700">{item.title}</h3>
                <p className="text-sm  mt-2">{item.subtitle}</p>
                {item.description && <p className="text-xs  mt-2">{item.description}</p>}
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
