import React from "react";
import Link from "./atoms/Link";
import {
  ArrowTopRightIcon,
  ClipboardCopyIcon,
  CheckCircledIcon,
} from "@radix-ui/react-icons";
import Tooltip from "./atoms/Tooltip";

const EMAIL = "hi@williamhzo.me";
const COPY_RESET_DELAY = 4000; // in ms

export default function Contact() {
  const [copied, setCopied] = React.useState(false);

  function handleClick() {
    if (!navigator.clipboard) return console.warn("update your browser buddy!");

    navigator.clipboard.writeText(EMAIL);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, COPY_RESET_DELAY);
  }

  return (
    <section>
      <h3>connect</h3>

      <p>
        If you&apos;re in Porto{" "}
        <span role="img" aria-label="Portuguese flag">
          🇵🇹
        </span>
        , let&apos;s grab a cup of tea. If you don&apos;t like tea you can reach
        me at <Link href="https://twitter.com/williamhzo">@williamhzo</Link>, or{" "}
        <Tooltip
          content={
            <p className="flex w-20 items-center justify-center gap-2">
              {copied ? "copied" : "copy"}
              {copied ? <CheckCircledIcon /> : <ClipboardCopyIcon />}
            </p>
          }
        >
          <button
            className="text-high-contrast hover:text-contrast"
            onClick={handleClick}
          >
            {EMAIL}
          </button>
        </Tooltip>
        .
      </p>

      <nav>
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
    </section>
  );
}
