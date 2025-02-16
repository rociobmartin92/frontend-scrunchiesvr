"use client";

import Link from "next/link";
import useGetCategories from "@/services/useGetCategories";
import React from "react";
import HeaderTitle from "./header-title";
import SkeletonSchema from "./skeleton-schema";
import { base_url } from "@/services/api";



const ChooseCategory = () => {
  const { result, error, loading } = useGetCategories();

  return (
    <div className="max-w-6xl mx-auto  sm:py-10 mt-5 ">
      <HeaderTitle title="Elige tu categoría favorita" className="text-center" />
      <div className="flex justify-center w-full flex-col sm:flex-row mt-7 items-center ">

      {loading && !result && <SkeletonSchema grid={3} />}
      {result.map((category) => (
        <Link 
        key={category.id} 
        href={`/categories/${category.slug}`}
        
        className="relative max-w-xs overflow-hidden bg-no-repeat bg-cove rounded-lg"
        >
          <img
            alt="category-img"
            src={`${base_url}${category.categoryImage.url}`}
            className="h-96 w-auto transition ease-in-out duration-300 rounded-lg hover:scale-110"
          />
       
          <h1 className=" w-full absolute  bottom-5  font-bold text-center text-white backdrop-blur-lg"> {category.categoryName} </h1>
         
        </Link>
      ))}


      </div>
    </div>
  );
};

export default ChooseCategory;
