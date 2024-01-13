import { useTranslation } from "react-i18next";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import { ScrollRestoration } from "react-router-dom";

const Privacy = () => {
  const { t } = useTranslation();
  return (
    <div>
      <ScrollRestoration />
      <Nav staticMode />
      <section
        style={{
          height: "40vh",
          background: "white",
        }}
      >
        <p style={{ color: "black", marginTop: "unset", paddingTop: "5em" }}>
          {t("underConstruction")}
        </p>
      </section>
      <Footer />
    </div>
  );
};

export default Privacy;
