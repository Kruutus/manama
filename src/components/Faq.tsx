import Accordion from "./Accordion";
import { FaqArray } from "../constants/Faq";
import { useTranslation } from "react-i18next";

const Faq = () => {
  const { t } = useTranslation();
  return (
    <section className="faq">
      <h2 style={{ color: "black", fontSize: "2em" }}>{t("faq.title")}</h2>
      <div
        className="max-width"
        style={{ margin: "auto", border: "1px solid black" }}
      >
        {FaqArray.map(({ title, content }) => (
          <Accordion key={title} title={title} content={content} />
        ))}
      </div>
    </section>
  );
};

export default Faq;
