import { useTranslation } from "react-i18next";
import Nav from "../components/Nav";
import { ScrollRestoration } from "react-router-dom";
import GreenHidrogenEng from "../assets/research-and-development/infra_paper_hun.pdf";
import GreenHidrogenHun from "../assets/research-and-development/green_hidrogen_hun.pdf";

const GreenHidrogen = () => {
  const { i18n } = useTranslation();

  return (
    <div>
      <ScrollRestoration />
      <Nav staticMode />
      <iframe
        src={
          i18n.resolvedLanguage === "hu" ? GreenHidrogenHun : GreenHidrogenEng
        }
        style={{ width: "100vw", height: "100vh" }}
      ></iframe>
    </div>
  );
};

export default GreenHidrogen;
