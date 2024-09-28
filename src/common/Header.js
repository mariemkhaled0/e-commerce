import React, { useState } from "react";
import { Link } from "react-router-dom";
import { navbar } from "../Data/data";
import { HiOutlineHeart, HiOutlineUser } from "react-icons/hi";
import { MdOutlineShoppingBag } from "react-icons/md";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Sidebar from "./Sidebar";
import { useSelector } from "react-redux";

const Header = () => {
  const [nav, setNav] = useState(false);
  const [sidebar, setSidebar] = useState(false);
  const total = useSelector((store) => store.cart.totalItems);

  const handleNav = () => {
    setNav(!nav);
  };
  const handelSidebar = () => {
    setSidebar(!sidebar);
  };

  return (
    <header className="fixed top-0 w-full z-50 flex pt-3 shadow-xl p-6 bg-white">
      <div className="w-10/12 flex justify-between  m-auto items-center">
        <h1 className="font-bold text-2xl">miniture</h1>
        <nav>
          <ul className=" md:flex gap-4  text-base flex-wrap hidden ">
            {navbar.map((item, index) => {
              const { nav, path } = item;
              return (
                <li
                  key={index}
                  className="link-hover hover:text-orange-600 transition-all"
                >
                  <Link to={path}>{nav}</Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex gap-2">
          <Link to="/favourite">
            <HiOutlineHeart size={20} />
          </Link>
          <Link>
            <HiOutlineUser size={20} />
          </Link>
          <Link className="relative" onClick={handelSidebar}>
            <MdOutlineShoppingBag size={20} />
            <div className="absolute top-[-6px] left-[13px] bg-orange-500 text-white rounded-full w-4 flex items-center justify-center h-4 ">
              <span className="text-sm">{total ? total : 0}</span>
            </div>
          </Link>
        </div>
        <div className="md:hidden cursor-pointer" onClick={handleNav}>
          <AiOutlineMenu />
        </div>
      </div>
      <nav
        className={`fixed top-0 right-0 z-[100] bg-white shadow-2xl w-[60%]  p-4  h-full
    transform transition-transform duration-500
    ${nav === false ? "translate-x-full" : ""}`}
      >
        <ul className=" relative flex flex-col gap-6 mt-7 px-3 ">
          <AiOutlineClose
            onClick={handleNav}
            className="right-4 cursor-pointer  absolute"
          />

          {navbar.map((item, index) => {
            const { id, nav, path } = item;
            return (
              <li
                key={index}
                className="link-hover hover:text-orange-600 transition-all"
              >
                <Link to={path}>{nav}</Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div>
        <Sidebar nav={navbar} sidebar={sidebar} handelSidebar={handelSidebar} />
      </div>
    </header>
  );
};

export default Header;
