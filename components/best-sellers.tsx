import React, { useMemo } from "react";
import FeaturedProducs from "./features-products";

const BestSellers = () => {
  const filters = useMemo(() => {
    return { bestSeller: true };
  }, []);

  return (
    <>
      <FeaturedProducs filters={filters} />
    </>
  );
};

export default BestSellers;
