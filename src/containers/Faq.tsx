import { useState } from "react";
import { Accordion } from "../components";
import { OptFormContainer } from "./OptForm";

export declare interface FaqData {
  id: number;
  header: string;
  body: string;
}

export declare interface FaqContainerProps {
  faqData: FaqData[];
}

export function FaqContainer({ faqData }: FaqContainerProps) {
  const [activeId, setActiveId] = useState<number | null>(null);
  const toggleHandler = (id: number) => {
    setActiveId((activeId) => (activeId === id ? null : id));
  };

  return (
    <Accordion>
      <Accordion.Title>Frequently Asked Questions</Accordion.Title>
      <Accordion.Frame>
        {faqData.map((item) => (
          <Accordion.Item key={item.id}>
            <Accordion.Header
              onClick={toggleHandler.bind(null, item.id)}
              active={activeId === item.id}
            >
              {item.header}
            </Accordion.Header>
            <Accordion.Body active={activeId === item.id}>
              {item.body}
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion.Frame>

      <OptFormContainer id="faqFormId" />
    </Accordion>
  );
}
