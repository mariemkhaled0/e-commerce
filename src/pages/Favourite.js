import React from "react";
import { useDispatch, useSelector } from "react-redux";
import PageHeading from "../common/PageHeading";
import { Link } from "react-router-dom";
import { removeFromFav } from "../redux/fav";

const Favourite = () => {
  const favItems = useSelector((store) => store.fav.items);
  const dispatch = useDispatch();
  console.log(favItems);

  return (
    <section className="mb-20 ">
      <PageHeading home="home" pagename="favourite" />
      <div className="w-10/12 m-auto">
        {favItems.length > 0 ? (
          <div className="grid grid-cols-4 gap-4 mt-6">
            {favItems.map((item, index) => (
              <div key={index}>
                <Link to={`/details/${item.title}`}>
                  <img alt="img" src={item.img} />
                </Link>

                <p>{item.title}</p>
                <button
                  className="text-red-500"
                  onClick={() => dispatch(removeFromFav(item))}
                >
                  remove
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div className="m-auto mt-20 mb-20 w-10/12 ">
            <p className="text-gray-300 text-center text-4xl">
              Your favorite is Empty
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Favourite;
