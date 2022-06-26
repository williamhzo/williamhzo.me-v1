import React from "react";
import NextLink from "next/link";
import { ArrowRightIcon } from "@radix-ui/react-icons";

type ArrowLinkProps = {
  children: string | React.ReactNode;
  to: string;
};

export default function ArrowLink({ children, to }: ArrowLinkProps) {
  return (
    <NextLink href={to} passHref>
      <a className="group ml-[-12px] w-max rounded-md py-2 pl-3 pr-4 text-contrast transition duration-300 ease-in-out hover:bg-subtle hover:text-high-contrast">
        <span className="flex items-center">
          {children}{" "}
          <ArrowRightIcon
            aria-hidden="true"
            className="ml-1 transition-transform duration-200 ease-in-out group-hover:translate-x-1"
          />
        </span>
      </a>
    </NextLink>
  );
}
