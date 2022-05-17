import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import React from "react";
import Accordion from "../atoms/Accordion";
import Link from "../atoms/Link";
import Section from "../atoms/Section";

export default function WhoDis() {
  const [open, setOpen] = React.useState<boolean>(false);

  return (
    <Section>
      <h3>whodis</h3>

      <p>
        Frontend Engineer with a deep interest in <em>clean User Interfaces</em>{" "}
        and web experiences, I thrive at the intersection of Product, Design and
        Engineering.
      </p>

      <p>
        All things <em>Design Systems</em>, a11y and <em>User Experience</em>.
      </p>

      <p>
        Currently at <Link href="https://getmansa.com">Mansa</Link> building the
        product from wireframes to QA, and <em>learning a lot</em>.
      </p>

      <Accordion type="multiple" onValueChange={() => setOpen(!open)}>
        <Accordion.Item value="item-1">
          <Accordion.Trigger>
            tell me {open ? "less" : "more"}
          </Accordion.Trigger>

          <Accordion.Content>
            <div className="mt-base flex flex-col gap-base">
              <p>Glad you asked!</p>

              <p>
                Software engineer from France, I recently moved from Paris to
                Porto to find inspiration and stimulate creativity. Inquisitive
                and driven by nature, I aim to constantly be learning and
                challenge myself out of my comfort zone.
              </p>

              <p>
                My sweet spot is at the intersection of <em>Product</em>,{" "}
                <em>Design</em> and <em>Engineering</em>. I strive to be the
                &quot;Product-Minded Software Engineer&quot; of the team: going
                beyond specifications finding the <em>&quot;why&quot;</em> and
                searching what&apos;s best for the user and the product, as
                described in{" "}
                <Link href="https://blog.pragmaticengineer.com/the-product-minded-engineer/">
                  Gergely Orosz&apos;s excellent article
                </Link>
                . I believe that work doesn&apos;t stop when the feature is
                shipped, I deeply care about adoption of the feature, measuring
                impact, as well as user&apos;s understanding and usage of it.
              </p>

              <p>
                I&apos;m convinced that knowing user&apos;s behaviour and deeply
                understanding a business&apos; value proposition is key to
                delivering <em>accessible</em>, <em>intuitive</em>, and{" "}
                <em>impactful</em> features to the product.
              </p>

              <p>
                Trying to be more mindful of my time and focus, to deliver
                quality work while being productive.
              </p>

              <p className="text-xs italic">
                Made with Next.js, Tailwind CSS and Radix UI, hosted on Vercel (
                <Link href="https://github.com/williamhzo/williamhzo.me">
                  view source code <ArrowTopRightIcon className="inline" />
                </Link>
                ).
              </p>
            </div>
          </Accordion.Content>
        </Accordion.Item>
      </Accordion>
    </Section>
  );
}
