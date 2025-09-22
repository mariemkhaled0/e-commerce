import React from "react";
import Heading from "./Heading";
import { arriveItems } from "../Data/data";
import { FaInstagram } from "react-icons/fa";

const Arrived = () => {
  return (
    <section className="w-10/12 z-0  m-auto">
      <Heading heading={"Just Arrived"} />
      <div className="flex mt-9 flex-col md:flex-row md-gap-3 gap-10 md:justify-start items-center justify-center m-auto">
        <div className="flex flex-col lg:text-left md:text-left items-center justify-center mr-6">
          <h1 className="font-bold">Instagram Shop</h1>
          <p className="w-10/12 text-center">
            Tag @miniture in your Instagram photos for a chance to be featured
            here.
          </p>
          <p>Visit Our Instagram</p>
        </div>
        <div className="grid grid-cols-3 w-9/12 grid-rows-2 gap-4 ">
          {arriveItems.map((item, index) => (
            <div key={index}>
              <div>
                <div
                  className={`${
                    item.id === 5
                      ? " mt-[-60px] sm:mt-[-70px] md:mt-[-60px] lg:mt-[-120px]"
                      : ""
                  } relative rounded-3xl overflow-hidden`}
                >
                  <img
                    className="rounded-3xl hover:scale-110 transition-all duration-500"
                    alt="img"
                    src={`${process.env.PUBLIC_URL}${item.img}`}
                  />
                  <div className="absolute p-1 bottom-0 right-[-3px] md:p-2 bg-white  rounded-xl">
                    <div className="p-1 rounded-full">
                      <FaInstagram />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Arrived;
