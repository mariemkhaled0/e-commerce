import React from "react";
import { products } from "../Data/data";
import Heading from "./Heading";
import ProductGrid from "../common/ProductsGrid";

const FlashSale = () => {
  return (
    <section className="w-10/12 m-auto">
      <Heading heading="You are in the kitchen" />
      <div>
        {/* Mobile: first 3 products */}
        <div className="block md:hidden">
          <ProductGrid
            products={products.slice(0, 3)}
            layoutType="grid"
            gridCols="sm:grid-cols-2"
            gridFlex="grid"
            isMobile={true}
          />
        </div>

        {/* Desktop: all products */}
        <div className="hidden md:block">
          <ProductGrid
            products={products}
            layoutType="grid"
            gridCols="md:grid-cols-4"
            gridFlex="grid"
            isMobile={false}
          />
        </div>
      </div>
    </section>
  );
};

export default FlashSale;
