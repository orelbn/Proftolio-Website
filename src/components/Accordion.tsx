import { ReactNode, useEffect, useState } from "react";

interface AccordionProps {
  header: ReactNode;
  content: ReactNode;
}

const Accordion = ({ header, content }: AccordionProps) => {
  const [accordionClass, setAccordionClass] = useState<string>(
    "accordion--collapse",
  );
  const [accordionHeaderClass, setAccordionHeaderClass] =
    useState<string>("accordion--header");

  const toggleAccordion = (): void => {
    setAccordionHeaderClass((accordionHeaderClass) => {
      return accordionHeaderClass === "accordion--header"
        ? "accordion--header open"
        : "accordion--header";
    });

    setAccordionClass((accordionClass) => {
      return accordionClass === "accordion--collapse"
        ? "accordion--open"
        : "accordion--collapse";
    });
  };

  useEffect(() => {
    document.querySelectorAll(`div.${accordionClass}`).forEach((accordion) => {
      const element = accordion as HTMLElement;
      const transationTime =
        element.scrollHeight > 300
          ? element.scrollHeight * 1
          : element.scrollHeight * 3;
      element.style.transition = `max-height ${transationTime}ms ease`;
      if (accordionClass === "accordion--open") {
        element.style.maxHeight = element.scrollHeight + "px";
      } else {
        element.style.maxHeight = "0px";
      }
    });
  }, [accordionClass]);

  return (
    <div className="accordion">
      <div className="accordion--item">
        <button className={accordionHeaderClass} onClick={toggleAccordion}>
          {header}
        </button>
        <div className={accordionClass}>
          <div className="accordion--content">{content}</div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
