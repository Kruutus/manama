import { useTranslation } from "react-i18next";
import Nav from "../components/Nav";
import { ScrollRestoration } from "react-router-dom";
import WindEnergyEng from "../assets/research-and-development/infra_paper_hun.pdf";
import WindEnergyHun from "../assets/research-and-development/WindEnergy_hun.pdf";

const WindEnergy = () => {
  const { i18n } = useTranslation();

  return (
    <div>
      <ScrollRestoration />
      <Nav staticMode />
      <iframe
        src={i18n.resolvedLanguage === "hu" ? WindEnergyHun : WindEnergyEng}
        style={{ width: "100vw", height: "100vh" }}
      ></iframe>
    </div>
  );
};

export default WindEnergy;
