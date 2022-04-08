import React from "react";

type SubHeadingProps = {
  children: string;
};

export default function SubHeading({ children }: SubHeadingProps) {
  return <h3 className="text-low-contrast">{children}</h3>;
}
