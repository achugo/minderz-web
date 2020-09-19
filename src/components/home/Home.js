import React, { useEffect } from "react";
import Hero from "./hero/Hero";
import Services from "./services/Services";
import Features from "./features/Features";
import Footer from "./footer/Footer";

const Home = () => {
  return (
    <div>
      <Hero />
      <Services />
      <Features />
      <Footer />
    </div>
  );
};

export default Home;
