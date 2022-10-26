import React from "react";
import Footer from "../layout/Footer";
import Header from "../layout/Header";
import NotFound from "../NotFound";
import About from "../About";
import Contact from "../Contact";

const index = () => {
  window.onscroll = function () {
    scrollFunction();
  };
  const scrollFunction = () => {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      document.querySelector(".scroll-up-btn").style.display = "block";
    } else {
      document.querySelector(".scroll-up-btn").style.display = "none";
    }
  };
  const topFunction = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };
  return (
    <div>
      <div className="scroll-up-btn" onClick={() => topFunction()}>
        <i className="fas fa-angle-up"></i>
      </div>
      <Header />
      <About />
      <Contact />
      {/* <NotFound /> */}
      <Footer />
    </div>
  );
};

export default index;
