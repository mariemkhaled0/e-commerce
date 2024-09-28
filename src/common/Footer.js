import React from "react";
import { footer } from "../Data/data";

const Footer = () => {
  return (
    <footer className=" text-gray-400 h-full bottom-0 bg-gray-900">
      <div className="grid  grid-cols-2 md:grid-cols-4 max-w-[80%] gap-5 items-center m-auto  py-5">
        {footer.map((item, index) => {
          return (
            <div key={index}>
              <h1 className="text-2xl text-white">{item.header}</h1>
              <p className="text-sm">{item.content1}</p>
              <p className="text-sm">{item.content2}</p>
              <p className="text-sm">{item.content3}</p>
              <p className="text-sm">{item.content4}</p>
            </div>
          );
        })}
      </div>
    </footer>
  );
};

export default Footer;
