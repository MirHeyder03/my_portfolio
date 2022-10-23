import React from "react";
import Footer from "../layout/Footer";
import Header from "../layout/Header";
import NotFound from "../NotFound";
import About from "../About";
import Contact from "../Contact";

const index = () => {
  return (
    <div>
      <Header />
      <About />
      <Contact />
      {/* <NotFound /> */}
      <Footer />
    </div>
  );
};

export default index;
