import React from "react";
import cx from "classnames";

type LinkProps = {
  children: string | React.ReactNode;
  href: string;
  className?: string;
  title?: string;
};

export default function Link({
  children,
  href,
  className,
  title = href,
}: LinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      title={title}
      className={cx("text-high-contrast hover:text-contrast", className)}
    >
      {children}
    </a>
  );
}
