import React, { useState, useMemo } from "react";
import PageHeading from "../common/PageHeading";
import { products } from "../Data/data";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import ProductGrid from "../common/ProductsGrid";

const Shop = () => {
  const [filters, setFilters] = useState({
    categories: [],
    brands: [],
    priceRange: [0, 1500],
  });

  const categoryList = useMemo(
    () => Array.from(new Set(products.map((product) => product.category))),
    [products]
  );

  const brandList = useMemo(
    () => Array.from(new Set(products.map((product) => product.brand))),
    [products]
  );

  const filteredProducts = useMemo(
    () =>
      products.filter((product) => {
        const price = parseFloat(product.price);
        return (
          (filters.categories.length === 0 ||
            filters.categories.includes(product.category)) &&
          (filters.brands.length === 0 ||
            filters.brands.includes(product.brand)) &&
          price >= filters.priceRange[0] &&
          price <= filters.priceRange[1]
        );
      }),
    [filters, products]
  );

  const handlePriceChange = (value) => {
    setFilters((prev) => ({ ...prev, priceRange: value }));
  };

  const handleCheckboxChange = (filterType, value) => {
    setFilters((prev) => {
      const updatedFilters = prev[filterType].includes(value)
        ? prev[filterType].filter((item) => item !== value)
        : [...prev[filterType], value];
      return { ...prev, [filterType]: updatedFilters };
    });
  };

  const CheckboxFilter = ({ title, list, filterType }) => (
    <div className="my-4">
      <h1 className="mb-3 text-2xl font-semibold">{title}</h1>
      <div>
        {list.map((item, index) => (
          <div className="flex items-center" key={index}>
            <input
              type="checkbox"
              checked={filters[filterType].includes(item)}
              onChange={() => handleCheckboxChange(filterType, item)}
            />
            <div>{item}</div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div>
      <PageHeading home={"home"} pagename={"Shop"} />
      <div className="w-10/12 m-auto flex gap-3 items-start mt-8 ">
        <div className="filterproduct  bg-white shadow-lg p-4">
          <h1 className="text-3xl font-semibold mb-4">Filter</h1>
          <div className="my-4">
            <h1 className="mb-3 text-xl font-semibold">By Price</h1>
            <Slider
              min={0}
              max={1500}
              range
              defaultValue={filters.priceRange}
              onChange={handlePriceChange}
            />
            <div className="flex justify-between">
              <span>Min Price: ${filters.priceRange[0]}</span>
              <span>Max Price: ${filters.priceRange[1]}</span>
            </div>
          </div>

          <CheckboxFilter
            title="By Category"
            list={categoryList}
            filterType="categories"
          />
          <CheckboxFilter
            title="By Brand"
            list={brandList}
            filterType="brands"
          />
        </div>

        <div className="w-10/12 ">
          <ProductGrid
            layoutType={"grid"}
            gridCols={"md:grid-cols-3 sm:grid-cols-2 "}
            gridFlex={"grid"}
            products={filteredProducts}
          />
        </div>
      </div>
    </div>
  );
};

export default Shop;
