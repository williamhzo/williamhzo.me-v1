import React from "react";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return <main className="container flex flex-col pb-base">{children}</main>;
}
