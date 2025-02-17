"use client";

import { useCart } from "@/state/use-cart";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Trash, ShoppingCart } from "lucide-react";
import { base_url } from "@/services/api";

const CartPage = () => {
  const { items, removeItem, removeAll } = useCart();

  const total = items.reduce(
    (accumulator, currentValue) => accumulator + currentValue.price,
    0
  );

  console.log("total", total);

  return (
    <div className="max-w-3xl border mx-auto p-4 bg-white rounded-lg shadow-md">
    <h1 className="text-2xl font-semibold flex items-center gap-2">
      <ShoppingCart className="text-red-500" /> Carrito de compras
    </h1>
      <div className="">
        {items.length === 0 ? (
          <p className="text-gray-500 text-center mt-8">
            Tu carrito de compras está vacío, comienza a llenarlo ya 🙌🏻
          </p>
        ) : (
          <ScrollArea className="max-h-96  p-3 rounded-lg">
            {items.map((product) => (
              <Card
                key={product.id}
                className="flex items-center gap-4 p-4  my-2"
              >
                <img
                  src={`${base_url}${product.images[0].url}`}
                  alt="cart-image-item"
                  className="w-20 h-20 object-cover rounded-lg"
                />

                <CardContent className="flex-1 p-0">
                  <h2 className="text-lg font-medium">{product.productName}</h2>
                  <p className="text-sm">
                    {/* ${item.price} x {item.quantity} */}
                    {product.description}
                  </p>
                  <p className="text-sm font-medium mt-2">
                    {/* ${item.price} x {item.quantity} */}$ {product.price}
                  </p>
                </CardContent>

                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => removeItem(product.id)}
                  className=" hover:bg-white hover:text-pink-700"
                >
                  <Trash className="w-5 h-5" />
                </Button>
              </Card>
            ))}
          </ScrollArea>
        )}

        <div className="justify-self-end mr-4 mb-7 underline">
          {items.length > 0 && (
            <h3 className="font-medium">Total: $ {total}</h3>
          )}
        </div>

        {items.length > 0 && (
          <div className="mt-4 flex justify-between items-center mx-2">
            <Button
              className="border"
              variant="ghost"
              onClick={() => removeAll()}
            >
              Vaciar Carrito
            </Button>
            <Button onClick={() => console.log("Finalizar compraaa")}>
              Finalizar Compra
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;
