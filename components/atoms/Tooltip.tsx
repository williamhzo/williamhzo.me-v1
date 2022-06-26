import React from "react";

import type { TooltipProps as RadixTooltipProps } from "@radix-ui/react-tooltip";

import { Root, Trigger, Content, Provider } from "@radix-ui/react-tooltip";
import cx from "classnames";

type TooltipProps = RadixTooltipProps & {
  content: JSX.Element | string;
};

export default function Tooltip({ children, content }: TooltipProps) {
  return (
    <Provider delayDuration={200}>
      <Root>
        <Trigger asChild onMouseDown={(event) => event.preventDefault()}>
          {children}
        </Trigger>
        <Content
          className={cx(
            "rounded-md border-[1px] border-low-contrast bg-background px-3 py-2 text-contrast",
            "radix-side-top:animate-slide-down-and-fade",
            "radix-side-right:animate-slide-left-and-fade",
            "radix-side-bottom:animate-slide-up-and-fade",
            "radix-side-left:animate-slide-right-and-fade"
          )}
        >
          {content}
        </Content>
      </Root>
    </Provider>
  );
}
