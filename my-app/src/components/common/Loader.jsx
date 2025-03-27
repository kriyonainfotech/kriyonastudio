import React from "react";
import "../../assets/loader.css"; // Import the CSS file

const Loader = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div class="wrapper">
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="shadow"></div>
        <div class="shadow"></div>
        <div class="shadow"></div>
      </div>
    </div>
  );
};

export default Loader;
