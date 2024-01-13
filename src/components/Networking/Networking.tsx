import Footer from "../Footer";
import Nav from "../Nav";
import "./Networking.css";
import NetworkingImage from "../../assets/image-2023-04-29T162607.360.webp";
import { useTranslation } from "react-i18next";
import { ScrollRestoration } from "react-router-dom";

const Networking = () => {
  const { t } = useTranslation();
  return (
    <div
      style={{
        background: "white",
      }}
    >
      <ScrollRestoration />
      <Nav staticMode />
      <section className="networking-section">
        <h1>{t("networking.title")}</h1>
        <img src={NetworkingImage} alt="" />
        <p
          className="networking-section-description"
          dangerouslySetInnerHTML={{ __html: t("networking.description") }}
        />
      </section>
      <Footer />
    </div>
  );
};

export default Networking;
