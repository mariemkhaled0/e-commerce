import React, { useState } from "react";
import { IoMdHeartEmpty, IoMdSearch } from "react-icons/io";
import { BiCart } from "react-icons/bi";
import { Link } from "react-router-dom";
import Modal from "../common/Modal";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import { useDispatch } from "react-redux";
import { addToFav } from "../redux/fav";

const PrevArrow = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="arrow-prev shadow-2xl"
      style={{
        position: "absolute",
        left: "-12px",
        top: "50%",
        transform: "translateY(-50%)",
        backgroundColor: "#f9f9f9",
        border: "none",
        zIndex: 10,
        padding: "5px",
        borderRadius: "50%",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", // Add box shadow here
      }}
    >
      <IoIosArrowRoundBack style={{ color: "#000", fontSize: "24px" }} />
    </button>
  );
};

const NextArrow = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="arrow-next hover:bg-gray-500"
      style={{
        position: "absolute",
        right: "-15px",
        top: "50%",
        transform: "translateY(-50%)",
        border: "none",
        zIndex: 10,
        backgroundColor: "#f9f9f9",
        padding: "5px",
        borderRadius: "50%",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", // Add box shadow here
      }}
    >
      <IoIosArrowRoundForward style={{ color: "#000", fontSize: "24px" }} />
    </button>
  );
};

const ProductGrid = ({
  products,
  gridCols,
  gridFlex,
  overflow,
  layoutType,
}) => {
  const [modal, setModal] = useState(null);
  const [favoriteItems, setFavoriteItems] = useState(new Set());
  const handleAddToFav = (item) => {
    const newFavorites = new Set(favoriteItems);
    if (newFavorites.has(item.id)) {
      newFavorites.delete(item.id); // Remove if already favorite
    } else {
      newFavorites.add(item.id); // Add to favorites
    }
    setFavoriteItems(newFavorites); // Update state
    dispatch(addToFav(item)); // Dispatch the action
  };

  const handleModal = (data) => {
    setModal(data);
  };

  const handleCloseModal = () => {
    setModal(null);
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 768, // For small screens
        settings: {
          slidesToShow: 1, // Show one slide
        },
      },
      {
        breakpoint: 1024, // For medium screens
        settings: {
          slidesToShow: 2, // Show two slides
        },
      },
    ],
  };
  const dispatch = useDispatch();

  return (
    <>
      {layoutType === "grid" ? (
        <div className={`${gridFlex} ${gridCols} gap-4`}>
          {products.map((item, index) => (
            <div key={index} className="relative">
              <div className="rounded-3xl">
                <img
                  className="rounded-3xl cursor-pointer"
                  alt={item.title}
                  src={item.img}
                />
                <div className="ml-4 mt-2">
                  <p>{item.title}</p>
                  <p>${item.price}</p>
                </div>
                <div className="opacity-10 hover:opacity-100 absolute top-0 right-0 m-4">
                  <div>
                    <div
                      className="bg-white cursor-pointer p-4 rounded-full mb-2"
                      style={{
                        color: favoriteItems.has(item.id) ? "red" : "black", // Change color based on favorite state
                      }}
                    >
                      <IoMdHeartEmpty
                        onClick={() => {
                          handleAddToFav(item);
                        }}
                      />
                    </div>
                    <div className="bg-white p-4 rounded-full">
                      <Link to={`/details/${item.title}`}>
                        <IoMdSearch />
                      </Link>
                    </div>
                  </div>
                  <div className="bg-black mt-3 text-white h-10 w-10 grid place-items-center rounded-3xl">
                    <button onClick={() => handleModal(item)}>
                      <BiCart />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <Slider {...settings}>
          {products.map((item, index) => (
            <div key={index} className="relative overflow-hidden">
              <div className="rounded-3xl mx-4">
                <img
                  className="rounded-3xl cursor-pointer"
                  alt={item.title}
                  src={item.img}
                />
                <div className="">
                  <p>{item.title}</p>
                  <p>${item.price}</p>
                </div>
                <div className="opacity-10 hover:opacity-100 absolute top-0 right-0 m-4">
                  <div>
                    <div
                      className="bg-white cursor-pointer p-4 rounded-full mb-2"
                      style={{
                        color: favoriteItems.has(item.id) ? "red" : "black", // Change color based on favorite state
                      }}
                    >
                      <IoMdHeartEmpty
                        onClick={() => {
                          dispatch(addToFav(item));
                          handleAddToFav(item);
                        }}
                      />
                    </div>
                    <div className="bg-white p-4 rounded-full">
                      <Link to={`/details/${item.title}`}>
                        <IoMdSearch />
                      </Link>
                    </div>
                  </div>
                  <div className="bg-black mt-3 text-white h-10 w-10 grid place-items-center rounded-3xl">
                    <button onClick={() => handleModal(item)}>
                      <BiCart />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      )}

      {modal && <Modal modal={modal} handleCloseModal={handleCloseModal} />}
    </>
  );
};

export default ProductGrid;
