"use_client";

import { useMemo, useState } from "react";
import { useParams } from "next/navigation";
import useGetColorsList from "@/services/useGetColorsList";

import useGetProducts from "@/services/useGetProducts";

import { SelectArrayStrings } from "./select-array-strings";
import HeaderTitle from "@/components/header-title";
import { FilteredProducts } from "./filtered-products";

const FiltersColorsControl = () => {
  const params = useParams();
  const slug = params.categorySlug;

  const { result: colorResult } = useGetColorsList();
  const colorArray = colorResult.map((el) => el.color);

  const [color, setColor] = useState("");

  const filters = useMemo(() => {
    return {
      category: { slug: slug },
      ...(color ? { color: color } : {}),
    };
  }, [slug, color]);

  const { result, error, loading } = useGetProducts(filters);

  return (
    <>
      <div className="flex gap-7 sm:my-5 items-center ">
        <HeaderTitle title={result[0]?.category?.categoryName} />
        <SelectArrayStrings array={colorArray} setColor={setColor} />
      </div>
      <FilteredProducts products={result} />
    </>
  );
};

export default FiltersColorsControl;
