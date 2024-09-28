import React from "react";
import { offer } from "../Data/data";

const Offer = () => {
  return (
    <section className="my-5 relative w-10/12 flex flex-col justify-center m-auto">
      {offer.map((item, key) => (
        <div key={key}>
          <img
            className="  m-auto rounded-lg"
            alt={item.title}
            src={item.customer_img}
          />
          <div className="absolute top-0  right-0">
            <p className="bg-white  right-2  rounded-e-none absolute w-fit text-sm p-2 rounded-3xl">
              {item.title}
            </p>
            <p className="bg-white rounded-3xl  rounded-e-none  mr-2 mt-[33px] p-3 ">
              {item.subtitle}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Offer;
