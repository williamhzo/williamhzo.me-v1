import React from "react";

type SectionProps = { children: JSX.Element | JSX.Element[] };

export default function Section({ children }: SectionProps) {
  return <section className="grid gap-5">{children}</section>;
}
