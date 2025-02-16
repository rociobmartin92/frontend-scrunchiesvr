import { base_url } from "@/services/api";
import { Product } from "@/types";
import React from "react";

export const FilteredProducts = ({ products }: { products: Product[] }) => {
  return (
    <div className="product-list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {products.map((product) => (
        <div key={product.id} className="product-card bg-white shadow-lg rounded-lg overflow-hidden">
          {product.images.map((image, index) => (
            <img
              key={index}
              src={`${base_url}${image.url}`}
              alt={product.productName}
              className="product-image w-full h-64 object-cover"
            />
          ))}
          <div className="p-4">
            <h1 className="product-name text-xl font-semibold text-gray-900 truncate">{product.productName}</h1>
            <h2 className="product-description text-sm text-gray-600 mt-2">{product.description}</h2>
          </div>
        </div>
      ))}
    </div>
  );
};
