import React from "react";
import { category } from "../Data/data";

const Category = () => {
  return (
    <div className=" md:w-10/12 w-12/12 p-2 m-auto">
      <div className="flex">
        {category.map((category, key) => (
          <div className="" key={key}>
            <div className="m-2">
              {category.img && (
                <div className="relative overflow-hidden rounded-3xl">
                  <img
                    src={`${process.env.PUBLIC_URL}${category.img}`}
                    alt={category.name}
                    className="md:w-full  w-[1400px]  h-full object-cover rounded-3xl hover:scale-110  transition-all ease-in-out duration-700"
                  />
                  <p className="absolute text-xs p-1  left-0 rounded-3xl  rounded-s-none md:p-3  bg-white bottom-0 md:text-xl capitalize">
                    {category.name}
                  </p>
                </div>
              )}
              {category.imgs && category.imgs.length > 0 && (
                <div>
                  {category.imgs.map((image, index) => (
                    <div
                      key={index}
                      className="relative  mb-4 overflow-hidden rounded-3xl"
                    >
                      <img
                        src={`${process.env.PUBLIC_URL}${image.img}`}
                        alt={image.name}
                        className="md:w-full md:mb-3 w-[1400px] h-full object-cover rounded-3xl hover:scale-110  transition-all ease-in-out duration-700"
                      />
                      <p className="absolute text-xs p-2  left-0 rounded-3xl  rounded-s-none md:p-3  bg-white bottom-0 md:text-xl capitalize">
                        {image.name}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
/*  {category.map((item, index) => {
          return (
            <div
              key={index}
              className={`${item.imgs ? "grid grid-row-2" : "flex "}`}
            >
              {item.imgs ? (
                <div>
                  {item.imgs.map((subItem) => {
                    <div key={subItem.id}>
                      <img alt="img" src={subItem.img} />
                      <p>{subItem.name}</p>
                    </div>;
                  })}
                </div>
              ) : (
                <div>
                  <img alt={item.name} src={item.img} />
                  <p>{item.name}</p>
                </div>
              )}
            </div>
          );
        })}
          */
