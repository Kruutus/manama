import { useTranslation } from "react-i18next";
import Nav from "../components/Nav";
import { ScrollRestoration } from "react-router-dom";
import InfoPaperEng from "../assets/research-and-development/infra_paper_eng.pdf";
import InfoPresentationEng from "../assets/research-and-development/infra_presentation_eng.pdf";
import InfoPaperHun from "../assets/research-and-development/infra_paper_hun.pdf";
import InfoPresentationHun from "../assets/research-and-development/infra_presentation_hun.pdf";

const Infracheramy = () => {
  const { i18n } = useTranslation();

  return (
    <div>
      <ScrollRestoration />
      <Nav staticMode />
      <div
        style={{
          display: "flex",
        }}
      >
        <iframe
          src={
            i18n.resolvedLanguage === "hu"
              ? InfoPresentationHun
              : InfoPresentationEng
          }
          style={{ width: "50vw", height: "100vh" }}
        ></iframe>
        <iframe
          src={i18n.resolvedLanguage === "hu" ? InfoPaperHun : InfoPaperEng}
          style={{ width: "50vw", height: "100vh" }}
        ></iframe>
      </div>
    </div>
  );
};

export default Infracheramy;
