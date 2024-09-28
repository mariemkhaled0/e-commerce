import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { banners } from "../Data/data";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";
import { MdOutlineChair } from "react-icons/md";
import { Link } from "react-router-dom";

// Custom arrows as functional components
const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="slick-prev" onClick={onClick}>
      <IoArrowBack size={20} color="black" />
    </div>
  );
};

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="slick-next" onClick={onClick}>
      <IoArrowForward size={20} color="black" />
    </div>
  );
};

const Bannar = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />, // Custom prev arrow
    nextArrow: <NextArrow />, // Custom next arrow
  };

  return (
    <div>
      <div className="w-10/12 mt-[80px]  mb-[50px] m-auto h-full">
        <div className="flex gap-2 items-center mb-2">
          <button className="bg-orange-600  mt-1 w-11 py-1 text-white rounded-xl flex items-center justify-center ">
            <MdOutlineChair size={20} />
          </button>

          <h1 className="md:text-4xl text-3xl font-bold">
            Elevate your lifestyle
          </h1>
        </div>
        <div className="mb-3 flex justify-center mt-4 md:gap-1  gap-2  items-center">
          <p className="md:text-xl">with our furniture</p>
          <div className="flex items-center ">
            <p className=" md:text-4xl text-2xl">Creation</p>
            <Link
              className="bg-orange-600 md:text-sm  text-xs mt-2 mb-2 md:mb-0 justify-center md:w-20 h-8 w-15  px-2   flex items-center  ml-2 rounded-full text-white"
              to="/shop"
            >
              <span> shop now</span>
            </Link>
          </div>
        </div>
        <div className="">
          <Slider {...settings}>
            {banners.map((item, index) => (
              <div key={index}>
                <img
                  className="rounded-2xl"
                  src={item.banner}
                  alt={`banner-${index}`}
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Bannar;
