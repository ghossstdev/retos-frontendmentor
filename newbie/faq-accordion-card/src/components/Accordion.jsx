import "./accordion.css";
import { useState } from "react";

const Accordion = ({ title, description }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openAcordion = () => {
    setIsOpen(!isOpen);
  };

  const accordionClass = isOpen ? "accordion--open" : "";

  return (
    <div className={`accordion ${accordionClass}`} onClick={openAcordion}>
      <div>
        <p className="accordion__title">{title}</p>
        <img className="accordion__icon" src='/assets/icon-arrow-down.svg' alt="Icon Arrow" />
      </div>

      <p className="accordion__description">{description}</p>
    </div>
  );
};

export default Accordion;
