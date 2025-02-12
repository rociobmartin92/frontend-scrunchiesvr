"use client";

import { apiInstance } from "@/services/api";
import { Product, ProductFilters } from "@/types";

import { useEffect, useState } from "react";

const FeaturedProducs = () => {
  const [bestSellerProdcuts, setBestSellerProdcuts] = useState<Product[]>([]);
  const [error, setError] = useState("");

  const getBestSellerProducts = async () => {
    const filters: ProductFilters = { active: true };
    const products = await apiInstance.get("/producs", { params: filters });

    console.log("products data", products.data.data);
    if (products) {
      setBestSellerProdcuts(products.data.data);
    } else {
      setError("No hay productos disponibles");
    }
  };

  useEffect(() => {
    try {
      getBestSellerProducts();
    } catch (e) {
      console.log("hubo un error en la solicitud de productos");
    }
  }, []);

  return (
    <div className="max-w-6xl mx-auto py-4 sm:py-16">
      <h3 className="text-2xl sm:pb-8">Más Vendidos</h3>
    </div>
  );
};

export default FeaturedProducs;
