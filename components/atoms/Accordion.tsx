import {
  Root,
  Item,
  Header,
  Trigger,
  Content,
} from "@radix-ui/react-accordion";
import type {
  AccordionItemProps,
  AccordionContentProps,
  AccordionSingleProps,
  AccordionTriggerProps,
  AccordionMultipleProps,
} from "@radix-ui/react-accordion";

import { ChevronRightIcon } from "@radix-ui/react-icons";
import React from "react";

const AccordionItem = ({ children, ...props }: AccordionItemProps) => {
  return <Item {...props}>{children}</Item>;
};

const AccordionTrigger = ({ children }: AccordionTriggerProps) => {
  return (
    <Header>
      <Trigger className="group flex items-center gap-[1ch]">
        {children}

        <ChevronRightIcon
          aria-hidden
          className="duration-300 ease-in-out group-radix-state-open:rotate-90 "
        />
      </Trigger>
    </Header>
  );
};

const AccordionContent = ({ children, ...props }: AccordionContentProps) => {
  return (
    <Content
      className="radix-state-open:animate-slide-down overflow-hidden radix-state-closed:animate-slide-up"
      {...props}
    >
      {children}
    </Content>
  );
};

const Accordion = ({
  children,
  ...props
}: AccordionSingleProps | AccordionMultipleProps) => {
  return <Root {...props}>{children}</Root>;
};

export default Accordion;

Accordion.Content = AccordionContent;
Accordion.Trigger = AccordionTrigger;
Accordion.Item = AccordionItem;
