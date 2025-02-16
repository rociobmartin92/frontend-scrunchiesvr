import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { base_url } from "@/services/api";
import { Product } from "@/types";
import Autoplay from "embla-carousel-autoplay";
import React from "react";

export const FilteredProducts = ({ products }: { products: Product[] }) => {
  return (
    <div className="product-list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {products.map((product) => (
        <div
          key={product.id}
          className="product-card bg-white shadow-lg rounded-lg overflow-hidden"
        >
          <div className="relative">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              plugins={[
                Autoplay({
                  delay: 2000,
                }),
              ]}
              className="w-full h-96 overflow-hidden"
            >
              <CarouselContent className=" ">
                {product.images.map((image, index) => (
                  <CarouselItem key={index} className="w-full h-full">
                    <img
                      src={`${base_url}${image.url}`}
                      alt="product-image"
                      className="w-full h-full object-cove"
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
            {/* Precio encima de la imagen */}
            <div className="absolute opacity-70 top-2 left-2 bg-pink-700 text-white px-4 py-2 rounded-lg">
              ${product.price}
            </div>
          </div>
          <div className="p-4">
            <h1 className="product-name text-xl font-semibold truncate">
              {product.productName}
            </h1>
            <h2 className="product-description text-sm text-gray-600 mt-2">
              {product.description}
            </h2>
            {/* Botón de agregar al carrito */}
            <button className="add-to-cart-btn mt-4 w-full border bg-white text-black py-2 rounded-lg hover:bg-pink-800 hover:text-white transition duration-300">
              <p className="text-sm"> Agregar al carrito </p>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
