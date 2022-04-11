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
    <div className="flex min-h-[100vh] flex-col justify-between pt-16 pb-6">
      <SEO />

      <div>
        <Header />

        <hr className="separator" />

        <Main />
      </div>

      <Footer />
    </div>
  );
};

export default Home;
