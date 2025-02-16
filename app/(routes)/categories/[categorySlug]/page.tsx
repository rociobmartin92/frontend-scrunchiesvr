"use client";

import HeaderTitle from "@/components/header-title";
import useGetProducts from "@/services/useGetProducts";
import { Product } from "@/types";
import { useParams, useRouter } from "next/navigation";
import FiltersColorsControl from "../components/filters-control-category";

interface ResponseType {
  result: Product;
  error: string;
  loading: boolean;
}

const Page = () => {

  return (
    <div>
      <FiltersColorsControl />
    </div>
  );
};

export default Page;
