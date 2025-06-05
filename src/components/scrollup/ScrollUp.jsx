import React from "react";
import "./scrollup.css";

const ScrollUp = () => {
  window.addEventListener("scroll", function () {
    const scrollUp = document.querySelector(".scrollup");
    // ketika scroll lebih tinggi dari 560 viewport height, tambah show-scroll class ke scroll-top class
    if (this.scrollY >= 560) scrollUp.classList.add("show-scroll");
    else scrollUp.classList.remove("show-scroll");
  });
  return (
    <a href="#" className="scrollup">
      <i className="uil uil-arrow-up scrollup__icon"></i>
    </a>
  );
};

export default ScrollUp;
