import "../styles/globals.css";
import "../styles/reset.css";
import "../styles/fonts.css";
import type { AppProps } from "next/app";
import SEO from "../components/SEO";
import Header from "../components/Header";

import React from "react";

function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <SEO />
      <Header />
      <Component {...pageProps} />
    </div>
  );
}

export default App;
