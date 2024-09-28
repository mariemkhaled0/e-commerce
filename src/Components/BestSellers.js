import React from "react";
import { products } from "../Data/data";
import Heading from "./Heading";
import ProductGrid from "../common/ProductsGrid";

const BestSellers = () => {
  return (
    <section className="mb-10">
      <Heading heading={"Top Sellers"} />
      <div className="w-10/12 m-auto">
        <ProductGrid products={products} layoutType="slider" />
      </div>
    </section>
  );
};

export default BestSellers;
