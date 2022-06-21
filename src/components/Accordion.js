import { useState, useEffect } from "react";

const Accordion = ({ header, content }) => {
  const [accordionClass, setAccordionClass] = useState("accordion--collapse");
  const [accordionHeaderClass, setAccordionHeaderClass] =
    useState("accordion--header");

  const toggleAccordion = () => {
    accordionHeaderClass === "accordion--header"
      ? setAccordionHeaderClass("accordion--header open")
      : setAccordionHeaderClass("accordion--header");

    if (accordionClass === "accordion--collapse") {
      setAccordionClass("accordion--open");
    } else {
      setAccordionClass("accordion--collapse");
    }
  };

  useEffect(() => {
    document.querySelectorAll(`div.${accordionClass}`).forEach((accordion) => {
      const transationTime =
        accordion.scrollHeight > 300
          ? accordion.scrollHeight * 1
          : accordion.scrollHeight * 3;
      accordion.style.transition = `max-height ${transationTime}ms ease`;
      if (accordionClass === "accordion--open") {
        accordion.style.maxHeight = accordion.scrollHeight + "px";
      } else {
        accordion.style.maxHeight = "0px";
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
