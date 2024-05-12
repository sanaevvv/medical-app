import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import React from 'react';

export type Accordion = {
  question: string;
  answer: string | React.ReactNode;
};
export default function CustomAccordion({ FAQS }: { FAQS: Accordion[] }) {
  return (
    <Accordion type="single" collapsible className="w-full">
      {FAQS.map((faq) => (
        <AccordionItem key={faq.question} value={faq.question}>
          <AccordionTrigger>{faq.question}</AccordionTrigger>
          <AccordionContent>{faq.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
