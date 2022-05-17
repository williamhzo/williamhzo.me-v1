import "../styles/globals.css";
import "../styles/reset.css";
import type { AppProps } from "next/app";
import SEO from "../components/SEO";
import Header from "../components/Header";
import Footer from "../components/Footer";
import React from "react";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <SEO />
      <div>
        <Header />
        <Component {...pageProps} />
      </div>
      <Footer />
    </>
  );
}

export default App;
