import React from "react";
import Link from "./atoms/Link";
import Section from "./atoms/Section";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";

export default function FooterF() {
  return (
    <Section>
      <h3>connect</h3>

      <p>
        If you&apos;re in Porto{" "}
        <span role="img" aria-label="Portuguese flag">
          🇵🇹
        </span>
        , let&apos;s grab coffee. Or you can reach me at{" "}
        <Link href="https://twitter.com/williamhzo">@williamhzo</Link>, or{" "}
        <Link href="mailto:hi@williamhzo.me">hi@williamhzo.me</Link>.
      </p>

      <nav className="mt-6">
        <ul className="flex justify-start gap-8">
          <li>
            <a
              href="https://github.com/williamhzo"
              title="Github"
              className="social-link"
            >
              github
              <ArrowTopRightIcon />
              <span className="sr-only">Github external link</span>
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/williamhzo"
              title="Twitter"
              className="social-link"
            >
              twitter
              <ArrowTopRightIcon />
              <span className="sr-only">Twitter external link</span>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/williamhermozo/"
              title="Linkedin"
              className="social-link"
            >
              linkedin
              <ArrowTopRightIcon />
              <span className="sr-only">Linkedin external link</span>
            </a>
          </li>
        </ul>
      </nav>
    </Section>
  );
}
