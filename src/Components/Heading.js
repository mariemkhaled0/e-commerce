import React from "react";

const Heading = ({ heading }) => {
  return (
    <div>
      <h4 className="font-extrabold text-center text-3xl uppercase mb-5">
        {heading}
      </h4>
    </div>
  );
};

export default Heading;
