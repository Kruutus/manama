import { useTranslation } from "react-i18next";
import Nav from "../components/Nav";
import { ScrollRestoration } from "react-router-dom";
import AgricultureEng from "../assets/research-and-development/agriculture_eng.pdf";
import AgricultureHun from "../assets/research-and-development/agriculture_hun.pdf";

const Agriculture = () => {
  const { i18n } = useTranslation();

  return (
    <div>
      <ScrollRestoration />
      <Nav staticMode />
      <iframe
        src={i18n.resolvedLanguage === "hu" ? AgricultureHun : AgricultureEng}
        style={{ width: "100vw", height: "100vh" }}
      ></iframe>
    </div>
  );
};

export default Agriculture;
