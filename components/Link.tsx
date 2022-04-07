import React from "react";

type LinkProps = {
  children: string | React.ReactNode;
  href: string;
  title?: string;
};

export default function Link({ children, href, title = href }: LinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      title={title}
      className="border-b-[1px] pb-[2px] border-low hover:border-high"
    >
      {children}
    </a>
  );
}
