import { useState } from "react";
import "./Accordion.css";
import { useTranslation } from "react-i18next";

interface IAccordion {
  title: string;
  content: string;
}

const Accordion: React.FC<IAccordion> = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);
  const { t } = useTranslation();

  return (
    <>
      <div className="accordion">
        <div className="accordion-item">
          <div
            className="accordion-title"
            onClick={() => setIsActive(!isActive)}
          >
            <div>{t(title)}</div>
            <div>{isActive ? "-" : "+"}</div>
          </div>
          {isActive && <div className="accordion-content">{t(content)}</div>}
        </div>
      </div>
    </>
  );
};

export default Accordion;
