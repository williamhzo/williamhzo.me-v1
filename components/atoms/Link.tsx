import React from "react";

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
      className={`${className} border-b-[1px] border-low-contrast pb-[2px] hover:text-low-contrast`}
    >
      {children}
    </a>
  );
}
