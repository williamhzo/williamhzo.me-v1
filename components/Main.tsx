import React from "react";
import Link from "./atoms/Link";
import Section from "./atoms/Section";
import Contact from "./Contact";

export default function Main() {
  return (
    <main className="mb-12">
      <Section>
        <h3>whodis</h3>

        <p>
          Frontend Engineer with a deep interest in{" "}
          <em className="font-serif">clean User Interfaces</em> and web
          experiences, I thrive at the intersection of Product, Design and
          Engineering.
        </p>

        <p>
          All things <em className="font-serif">Design Systems</em>, a11y and
          User Experience.
        </p>

        <p>
          Firm believer that focusing on DX while building systems is essential
          to deliver the most intuitive and consistent UIs.
        </p>

        <p>
          Currently at <Link href="https://getmansa.com">Mansa</Link> building
          the product from wireframes to QA, and{" "}
          <em className="font-serif">learning a lot</em>.
        </p>

        <p>
          Trying to be more mindful of my time and focus, to deliver quality
          work while being productive.
        </p>
      </Section>

      <hr className="separator" />

      <Contact />
    </main>
  );
}
