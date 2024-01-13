import Footer from "../Footer";
import Nav from "../Nav";
import "./PartnerSearch.css";
import ShowingHands from "../../assets/image-2023-04-29T162326.936.webp";
import { useTranslation } from "react-i18next";
import { ScrollRestoration } from "react-router-dom";

const PartnerSearch = () => {
  const { t } = useTranslation();
  return (
    <div style={{ background: "white" }}>
      <ScrollRestoration />
      <Nav staticMode />
      <section className="partner-search-section">
        <h1>{t("partnerSearch.title")}</h1>
        <img src={ShowingHands} />
        <p
          className="partner-search-section-description"
          dangerouslySetInnerHTML={{ __html: t("partnerSearch.description") }}
        />
      </section>
      <Footer />
    </div>
  );
};

export default PartnerSearch;
