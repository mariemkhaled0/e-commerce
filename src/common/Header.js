import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { navbar } from "../Data/data";
import { HiOutlineHeart, HiOutlineUser } from "react-icons/hi";
import { MdOutlineShoppingBag } from "react-icons/md";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Sidebar from "./Sidebar";
import { useSelector } from "react-redux";
import { DarkModeIcon, SunIcon } from "../Icons";

const Header = ({ darkMode, setDarkMode }) => {
  const [nav, setNav] = useState(false);
  const [sidebar, setSidebar] = useState(false);
  const total = useSelector((store) => store.cart.totalItems);

  const handleNav = () => {
    setNav(!nav);
  };
  const handelSidebar = () => {
    setSidebar(!sidebar);
  };

  // Load theme from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      if (savedTheme === "dark") {
        setDarkMode(true);
        document.documentElement.classList.add("dark");
      } else {
        setDarkMode(false);
        document.documentElement.classList.remove("dark");
      }
    } else {
      // if nothing in localStorage, respect system preference
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        setDarkMode(true);
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
      }
    }
  }, []);

  // Update when darkMode changes
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <header className="fixed dark:bg-black dark:text-white top-0 w-full z-50 flex pt-3 shadow-xl p-6 dark:py-7  bg-white">
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

        <div className="flex gap-2 items-center">
          <button onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? (
              <SunIcon className={"dark:text-white"} />
            ) : (
              <DarkModeIcon className="mt-1" />
            )}
          </button>
          <Link to="/favourite">
            <HiOutlineHeart size={20} />
          </Link>
          <Link to="profile">
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
