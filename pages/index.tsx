import type { NextPage } from "next";
import React from "react";
import Contact from "../components/Contact";
import WhoDis from "../components/sections/WhoDis";

const Home: NextPage = () => {
  return (
    <main className="pb-base">
      <WhoDis />
      <hr className="separator" />
      <Contact />
    </main>
  );
};

export default Home;
