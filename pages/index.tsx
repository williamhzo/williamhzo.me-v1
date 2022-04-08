import type { NextPage } from "next";
import Contact from "../components/Contact";
import Header from "../components/Header";
import Link from "../components/atoms/Link";
import Section from "../components/atoms/Section";
import SEO from "../components/SEO";
import Footer from "../components/Footer";
import Main from "../components/Main";

const Home: NextPage = () => {
  return (
    <>
      <SEO />

      <Header />

      <hr className="separator" />

      <Main />

      <hr className="separator w-full" />

      <Footer />
    </>
  );
};

export default Home;
