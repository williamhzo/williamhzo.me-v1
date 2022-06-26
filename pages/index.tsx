import { ArrowRightIcon } from "@radix-ui/react-icons";
import type { NextPage } from "next";
import NextLink from "next/link";
import React from "react";
import ArrowLink from "../components/atoms/ArrowLink";
import Layout from "../components/Layout";

const Home: NextPage = () => {
  return (
    <Layout>
      <p>
        Frontend Engineer in love with{" "}
        <span className="animate-text-shimmer bg-[linear-gradient(110deg,#bae6fd,45%,#1e293b,55%,#bae6fd)] bg-[length:250%_100%] bg-clip-text text-transparent">
          beautifully crafted software
        </span>
        .
      </p>

      <div className="mt-base flex flex-col gap-1">
        <ArrowLink to="/about">about</ArrowLink>
        <ArrowLink to="/inspiration">inspiration</ArrowLink>
      </div>
    </Layout>
  );
};

export default Home;
