import { useState } from "react";

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
