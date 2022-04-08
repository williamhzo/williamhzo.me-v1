import type { NextPage } from "next";
import Contact from "../components/Contact";
import Header from "../components/Header";
import Hr from "../components/Hr";
import Link from "../components/Link";
import Section from "../components/Section";
import SEO from "../components/SEO";
import SubHeading from "../components/SubHeading";

const Home: NextPage = () => {
  return (
    <>
      <SEO />

      <main className="mx-auto my-0 flex min-h-[100vh] max-w-[70ch] flex-col px-8 py-16 text-white lg:p-8 lg:pt-32">
        <Header />

        <Hr />

        <Section>
          <SubHeading>whodis</SubHeading>

          <p>
            Frontend Engineer with a deep interest in{" "}
            <em className="font-serif">clean User Interfaces</em> and web
            experiences, I thrive at the intersection of Product, Design and
            Engineering.
          </p>

          <p>
            All things <em className="font-serif">Design Systems</em>, a11y and
            JamStack.
          </p>

          <p>
            Currently at <Link href="https://getmansa.com">Mansa</Link> building
            the product from wireframes to QA, and{" "}
            <em className="font-serif">learning a lot</em>.
          </p>
        </Section>

        <Hr />

        <Contact />
      </main>
    </>
  );
};

export default Home;
