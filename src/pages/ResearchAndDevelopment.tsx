import Nav from "../components/Nav";
import { ScrollRestoration, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import MainImage from "../assets/research-and-development/researchAndDevelopmentHero.jpg";
import Footer from "../components/Footer";

const ResearchAndDevelopment = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <div style={{ background: "white" }}>
      <ScrollRestoration />
      <Nav staticMode />
      <section className="top-section">
        <h1>{t("r&d.title")}</h1>
        <img src={MainImage} width="40%" />
        <p
          className="top-section-description"
          dangerouslySetInnerHTML={{ __html: t("r&d.description") }}
        />
      </section>
      <section className="bottom-section">
        <div
          style={{
            width: "75%",
            margin: "auto",
            height: "600px",
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "5em",
          }}
        >
          <div
            style={{
              background: "white",
              boxShadow: "1px 1px 3px lightgray",
              cursor: "pointer",
              color: "black",
              fontSize: "1.4em",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            onClick={() => navigate("/research-and-development/infracheramy")}
          >
            {t("r&d.infracheramy")}
          </div>
          <div
            style={{
              background: "white",
              boxShadow: "1px 1px 3px lightgray",
              cursor: "pointer",
              color: "black",
              fontSize: "1.4em",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            onClick={() => navigate("/research-and-development/wind-energy")}
          >
            {t("r&d.windEnergy")}
          </div>
          <div
            style={{
              background: "white",
              boxShadow: "1px 1px 3px lightgray",
              cursor: "pointer",
              color: "black",
              fontSize: "1.4em",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            onClick={() => navigate("/research-and-development/agriculture")}
          >
            {t("r&d.agriculture")}
          </div>
          <div
            style={{
              background: "white",
              boxShadow: "1px 1px 3px lightgray",
              cursor: "pointer",
              color: "black",
              fontSize: "1.4em",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            onClick={() => navigate("/research-and-development/green-hidrogen")}
          >
            {t("r&d.greenHidrogen")}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ResearchAndDevelopment;
