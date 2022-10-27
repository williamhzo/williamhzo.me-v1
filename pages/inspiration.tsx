import React, { MutableRefObject } from "react";
import { CardLink } from "../components/CardLink";
import Layout from "../components/Layout";

export default function Inspiration() {
  return (
    <Layout>
      <section className="mb-8 grid gap-6">
        <h3 className="text-xl">inspiration</h3>

        <p>
          Some pieces of the internet that inspire me, provide some insightful
          learning, or both — in no particular order.
        </p>

        <section id="design" className="grid gap-5">
          <h4 className="font-bold">design</h4>

          <ul className="grid gap-4">
            {DESIGNS.map((element) => (
              <li key={element.title}>
                <CardLink {...element} />
              </li>
            ))}
          </ul>
        </section>

        {/* <h4>reading</h4> */}
      </section>
    </Layout>
  );
}

const DESIGNS = [
  {
    title: "Linear Features",
    link: "linear.app/features",
    tags: ["ui", "ux"],
  },
  {
    title: "Amie",
    link: "amie.so",
    tags: ["design engineering"],
  },
  {
    title: "Stripe Press",
    link: "press.stripe.com",
    tags: ["3D"],
  },
  {
    title: "Rauno Freiberg",
    link: "rauno.me",
    tags: ["ui", "experimental"],
  },
  {
    title: "ui.wtf",
    link: "uiw.tf",
    tags: ["ui", "tools"],
  },
  {
    title: "Danilo Woznica",
    link: "danilowoz.com",
    tags: ["typography"],
  },
  {
    title: "Emil Kowalski",
    link: "emilkowal.ski",
    tags: ["ui"],
  },
];
