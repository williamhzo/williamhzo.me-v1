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

import { ChevronDownIcon } from "@radix-ui/react-icons";
import React from "react";

const AccordionItem = ({ children, ...props }: AccordionItemProps) => {
  return <Item {...props}>{children}</Item>;
};

const AccordionTrigger = ({ children }: AccordionTriggerProps) => {
  return (
    <Header>
      <Trigger>
        {children}

        <ChevronDownIcon aria-hidden />
      </Trigger>
    </Header>
  );
};

const AccordionContent = ({ children, ...props }: AccordionContentProps) => {
  return <Content {...props}>{children}</Content>;
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
