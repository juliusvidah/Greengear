import React from "react";
import Categories from "../categories/Categories";
import HowItWorks from "../how-it-works/HowItWorks";
import Contact from "../contact/Contact";
import FAQ from "../faq/FAQ";
import Description from "../description/Description";
import Cart from "../cart/Cart";

const Home = () => {
  return (
    <>
      <Description />
      <Cart />
      {/* <Categories />
      <HowItWorks />
      <Contact />
      <FAQ /> */}
    </>
  );
};

export default Home;
