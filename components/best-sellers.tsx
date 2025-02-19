import React, { useMemo } from "react";
import CarrouselProducs from "./carrousel-products";
import HeaderTitle from "./header-title";

const BestSellers = () => {
  const filters = useMemo(() => {
    return { bestSeller: true };
  }, []);

  return (
    <>
      <HeaderTitle title="Más Vendidos" />
      <CarrouselProducs filters={filters} />
    </>
  );
};

export default BestSellers;
