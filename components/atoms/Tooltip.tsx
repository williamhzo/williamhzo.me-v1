import React from "react";

import type { TooltipProps as RadixTooltipProps } from "@radix-ui/react-tooltip";

import {
  Root,
  Arrow,
  Trigger,
  Content,
  Provider,
} from "@radix-ui/react-tooltip";

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
        <Content className="rounded-md border-[1px] border-low-contrast bg-background px-3 py-2 text-white">
          {content}
          <Arrow className="fill-low-contrast" />
        </Content>
      </Root>
    </Provider>
  );
}
