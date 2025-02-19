import React from "react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";

const DiscountCard = () => {
  return (
    <Card className="max-w-lg mt-8 sm:mt-0 mx-5 sm:mx-auto text-center border-pink-700 ">
      <CardContent className="flex flex-col mt-3 items-center gap-4">
        <h2 className="text-xl font-bold text-pink-700">
          Consigue hasta un 15% de descuento
        </h2>
        <p className="text-gray-700">
          En compras mayores a 19.000 pesos ARS <span className="font-semibold">sólo por hoy.</span> 
        </p>
        <p className="text-gray-900 font-bold">Utiliza el código: <span className="text-pink-600">RM32</span></p>
        <div className="flex gap-4 mt-4">
          <Button className="bg-pink-700 text-white px-4 py-2 rounded-lg hover:bg-pink-400">
            Ver productos
          </Button>
        
        </div>
      </CardContent>
    </Card>
  );
};

export default DiscountCard;