import Footer from "../Footer";
import Nav from "../Nav";
import "./Countries.css";
import CountryImage from "../../assets/image-2023-05-01T122201.102.webp";
import { useTranslation } from "react-i18next";
import { ScrollRestoration } from "react-router-dom";

const Countries = () => {
  const { t } = useTranslation();
  return (
    <div style={{ background: "white" }}>
      <ScrollRestoration />
      <Nav staticMode />
      <section className="countries-top-section">
        <h1>{t("countries.title")}</h1>
        <img src={CountryImage} />
        <p
          className="countries-top-section-description"
          dangerouslySetInnerHTML={{ __html: t("countries.description") }}
        />
      </section>
      <section className="bahrain-section">
        <h1>{t("countries.gcc.bahrain.title")}</h1>
        <p
          className="bahrain-section-description"
          dangerouslySetInnerHTML={{
            __html: t("countries.gcc.bahrain.description"),
          }}
        />
      </section>
      <section className="kuwait-section">
        <h1>{t("countries.gcc.kuwait.title")}</h1>
        <p
          className="kuwait-section-description"
          dangerouslySetInnerHTML={{
            __html: t("countries.gcc.kuwait.description"),
          }}
        />
      </section>
      <section className="oman-section">
        <h1>{t("countries.gcc.oman.title")}</h1>
        <p
          className="oman-section-description"
          dangerouslySetInnerHTML={{
            __html: t("countries.gcc.oman.description"),
          }}
        />
      </section>
      <section className="qatar-section">
        <h1>{t("countries.gcc.qatar.title")}</h1>
        <p
          className="qatar-section-description"
          dangerouslySetInnerHTML={{
            __html: t("countries.gcc.qatar.description"),
          }}
        />
      </section>
      <section className="saudi-section">
        <h1>{t("countries.gcc.saudi.title")}</h1>
        <p
          className="saudi-section-description"
          dangerouslySetInnerHTML={{
            __html: t("countries.gcc.saudi.description"),
          }}
        />
      </section>
      <section className="emirates-section">
        <h1>{t("countries.gcc.emirates.title")}</h1>
        <p
          className="emirates-section-description"
          dangerouslySetInnerHTML={{
            __html: t("countries.gcc.emirates.description"),
          }}
        />
      </section>
      <Footer />
    </div>
  );
};

export default Countries;
