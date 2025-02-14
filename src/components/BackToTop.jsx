import React from "react";
import { arrowUp } from "../assets";

const backToTop = () => {
  return (
    <a href="#top">
      <button className="back-to-top relative">
        <img
          src={arrowUp}
          alt="Back to Top"
          className="w-8 m-2 absolute top-1 left-2"
        />
      </button>
    </a>
  );
};

export default backToTop;
