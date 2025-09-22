import React from "react";
import Bannar from "../Components/Bannar";
import Category from "../Components/Category";
import FlashSale from "../Components/FlashSale";
import Offer from "../Components/Offer";
import BestSellers from "../Components/BestSellers";
import Arrived from "../Components/Arrived";

const Home = () => {
  return (
    <div className="dark:bg-black">
      <Bannar />
      <Category />
      <FlashSale />
      <Offer />
      <BestSellers />
      <Arrived />
    </div>
  );
};

export default Home;
