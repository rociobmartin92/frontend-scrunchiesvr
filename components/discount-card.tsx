import React from "react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";

const DiscountCard = () => {
  return (
    <Card className="max-w-lg mx-auto text-center p-6  border-red-700">
      <CardContent className="flex flex-col items-center gap-4">
        <h2 className="text-xl font-bold text-red-700">
          Consigue hasta un 15% de descuento
        </h2>
        <p className="text-gray-700">
          En compras mayores a 9.000 pesos ARS <span className="font-semibold">sólo por hoy.</span> 
        </p>
        <p className="text-gray-900 font-bold">Utiliza el código: <span className="text-red-600">RM32</span></p>
        <div className="flex gap-4 mt-4">
          <Button className="bg-red-700 text-white px-4 py-2 rounded-lg hover:bg-red-400">
            Comprar
          </Button>
          <Button className="bg-gray-200 text-gray-900 px-4 py-2 rounded-lg hover:bg-gray-100">
            Más información
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default DiscountCard;