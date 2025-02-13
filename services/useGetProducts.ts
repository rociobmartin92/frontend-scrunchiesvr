import { useState, useEffect } from "react";
import { Product } from "@/types";
import { apiInstance } from "./api"; 

const useGetProducts = (filters?: any) => {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<Product[]>([]);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        
        let url = "/producs"; 

        console.log("filters", filters)
        if (filters && Object.keys(filters).length > 0) {
          const queryParams = Object.keys(filters)
            .map((key) => {
              // Para cada filtro, aplicamos la estructura `filters[key][subkey][$eq]=value`
              if (typeof filters[key] === "object") {
                return Object.keys(filters[key]).map((subKey) => {
                  return `filters[${key}][${subKey}][$eq]=${filters[key][subKey]}`;
                });
              }
              return `filters[${key}][$eq]=${filters[key]}&populate=*`;
            })
            .flat()
            .join("&"); // Unimos todos los filtros con '&'
    
          url += `?${queryParams}`; // Añadimos los filtros a la URL
        }
    
        const response = await apiInstance.get(url);

        console.log("Productos recibidos:", response.data); 
        setResult(response.data.data || []); 
      } catch (error) {
        console.error("Error al obtener los productos:", error);
        setError("Hubo un error al obtener los productos.");
        setResult([]); 
      } finally {
        setLoading(false);
      }
    };

   
      fetchProducts(); 
    
  }, []); 

  return { loading, result, error };
};

export default useGetProducts;
