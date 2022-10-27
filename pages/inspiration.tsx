import React from "react";
import Layout from "../components/Layout";

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
    tags: ["typography", "design"],
  },
  {
    title: "Emil Kowalski",
    link: "emilkowal.ski",
    tags: ["ui"],
  },
];

export default function Inspiration() {
  return (
    <Layout>
      <section className="mb-8 flex flex-col gap-6">
        <h3 className="text-xl">inspiration</h3>

        <p>
          Some pieces of the internet that inspire me, provide some insightful
          learning, or both.
        </p>

        <section id="design">
          <h4 className="font-bold">design</h4>

          {/* TODO: grid */}
          <ul className="flex flex-col gap-4">
            {DESIGNS.map((element) => (
              <li key={element.title}>
                <a
                  href={`https://${element.link}/`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="flex justify-between gap-4 rounded-md border border-zinc-700/60 bg-subtle p-4 align-top transition-colors duration-300 hover:border-sky-200/20">
                    <div className="flex flex-col align-middle">
                      <p className="tracking-wide">{element.title}</p>
                      <p className="text-sm text-zinc-500">{element.link}</p>
                    </div>

                    <div className="flex flex-wrap justify-end gap-2 align-top ">
                      {element.tags.map((tag) => (
                        <span
                          className="grid h-fit place-items-center rounded-full border border-sky-200/10 bg-sky-200/10 px-3 py-1 text-sm text-sky-200/75"
                          key={tag}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </section>

        {/* <h4>reading</h4> */}
      </section>
    </Layout>
  );
}
