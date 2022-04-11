import React from "react";
import Accordion from "./atoms/Accordion";
import Link from "./atoms/Link";
import Section from "./atoms/Section";
import Contact from "./Contact";

export default function Main() {
  const [open, setOpen] = React.useState<boolean>(false);

  return (
    <main className="mb-12">
      <Section>
        <h3>whodis</h3>

        <p>
          Frontend Engineer with a deep interest in{" "}
          <em>clean User Interfaces</em> and web experiences, I thrive at the
          intersection of Product, Design and Engineering.
        </p>

        <p>
          All things <em>Design Systems</em>, a11y and <em>User Experience</em>.
        </p>

        <p>
          Currently at <Link href="https://getmansa.com">Mansa</Link> building
          the product from wireframes to QA, and <em>learning a lot</em>.
        </p>

        <Accordion type="multiple" onValueChange={() => setOpen(!open)}>
          <Accordion.Item value="item-1">
            <Accordion.Trigger>
              tell me {open ? "less" : "more"}
            </Accordion.Trigger>

            <Accordion.Content>
              <div className="mt-6 flex flex-col gap-6">
                <p>Glad you asked!</p>

                <p>
                  Software engineer from France, I recently moved from Paris to
                  Porto to find inspiration and stimulate creativity.
                </p>

                <p>
                  Inquisitive and driven by nature, I aim to constantly be
                  learning and challenge myself out of my comfort zone. My sweet
                  spot is at the intersection of Product, Design and
                  Engineering. I consider myself a &quot;Product-Minded Software
                  Engineer&quot; as described in{" "}
                  <Link href="https://blog.pragmaticengineer.com/the-product-minded-engineer/">
                    Gergely Orosz&apos;s excellent article
                  </Link>{" "}
                  holding the same name.
                </p>

                <p>
                  I&apos;m convinced that knowing user&apos;s behaviour and
                  deeply understanding a business&apos; value proposition is key
                  to delivering intuitive, impactful and game-changing features
                  to the product.
                </p>

                <p>
                  Trying to be more mindful of my time and focus, to deliver
                  quality work while being productive.
                </p>
              </div>
            </Accordion.Content>
          </Accordion.Item>
        </Accordion>
      </Section>

      <hr className="separator" />

      <Contact />
    </main>
  );
}
