import React from "react";
import Layout from "../components/Layout";
import Contact from "../components/sections/Contact";
import WhoDis from "../components/sections/WhoDis";
import Footer from "../components/Footer";

export default function about() {
  return (
    <Layout>
      <WhoDis />
      <hr className="separator" />
      <Contact />
      <Footer />
    </Layout>
  );
}
