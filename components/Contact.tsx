import React from "react";
import Link from "./Link";
import Section from "./Section";
import SubHeading from "./SubHeading";
import { ExternalLinkIcon } from "@radix-ui/react-icons";

export default function FooterF() {
  return (
    <Section>
      <SubHeading>connect</SubHeading>

      <p>
        If you&apos;re in Porto 🇵🇹, let&apos;s grab coffee. Or you can reach me
        at <Link href="https://twitter.com/williamhzo">@williamhzo</Link>, or{" "}
        <Link href="mailto:hi@williamhzo.me">hi@williamhzo.me</Link>
      </p>

      <nav className="mt-6">
        <ul className="flex justify-start gap-8">
          <li>
            <Link
              href="https://github.com/williamhzo"
              title="Github"
              className="flex items-center gap-1"
            >
              github
              <ExternalLinkIcon />
              <span className="sr-only">Github external link</span>
            </Link>
          </li>
          <li>
            <Link
              href="https://twitter.com/williamhzo"
              title="Twitter"
              className="flex items-center gap-1"
            >
              twitter
              <ExternalLinkIcon />
              <span className="sr-only">Twitter external link</span>
            </Link>
          </li>
          <li>
            <Link
              href="https://www.linkedin.com/in/williamhermozo/"
              title="Linkedin"
              className="flex items-center gap-1"
            >
              linkedin
              <ExternalLinkIcon />
              <span className="sr-only">Linkedin external link</span>
            </Link>
          </li>
        </ul>
      </nav>
    </Section>
  );
}
