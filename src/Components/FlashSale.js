import React from "react";
import { products } from "../Data/data";
import Heading from "./Heading";
import ProductGrid from "../common/ProductsGrid";

const FlashSale = () => {
  return (
    <section className="w-10/12 m-auto">
      <Heading heading="You are in the kitchen" />
      <div>
        <ProductGrid
          products={products}
          layoutType={"grid"}
          gridCols="sm:grid-cols-2 md:grid-cols-4"
          gridFlex={"grid"}
        />
      </div>
    </section>
  );
};

export default FlashSale;
