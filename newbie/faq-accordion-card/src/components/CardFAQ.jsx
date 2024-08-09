import "./card-faq.css";
import Accordion from "./Accordion";
import { accordionsData } from "../data";

const CardFAQ = () => {
  return (
    <article className="card-faq">
      <div className="card-faq__illustration">
        <img
          className="card-faq__illustration-box"
          src='/assets/illustration-box-desktop.svg'
          alt="Illustration Box"
        />
        <picture>
          <source media="(min-width: 1024px)" srcSet='/assets/illustration-woman-online-desktop.svg' />
          <img src='/assets/illustration-woman-online-mobile.svg' alt="Illustration Woman" />
        </picture>
      </div>
      <div className="card-faq__details">
        <h1 className="card-faq__title">FAQ</h1>

        <div className="card-faq__accordions">
          {accordionsData.map((accordion, idx) => (
            <Accordion
              key={idx}
              title={accordion.title}
              description={accordion.description}
            />
          ))}
        </div>
      </div>
    </article>
  );
};

export default CardFAQ;
