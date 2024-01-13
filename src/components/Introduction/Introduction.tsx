import Footer from "../Footer";
import Nav from "../Nav";
import TamasProfile from "../../assets/Background-10.webp";
import "./Introduction.css";
import { useTranslation } from "react-i18next";
import { ScrollRestoration } from "react-router-dom";

const Introduction = () => {
  const { t } = useTranslation();
  return (
    <div style={{ background: "white" }}>
      <ScrollRestoration />
      <Nav staticMode />
      <section className="top-section">
        <h1>{t("introduction.title")}</h1>
        <img src={TamasProfile} />
        <p
          className="top-section-description"
          dangerouslySetInnerHTML={{ __html: t("introduction.description-1") }}
        />
      </section>
      <section className="bottom-section">
        <p
          className="bottom-section-description"
          dangerouslySetInnerHTML={{ __html: t("introduction.description-2") }}
        />
      </section>
      <Footer />
    </div>
  );
};

export default Introduction;
