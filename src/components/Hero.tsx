import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();
  const handleClick = () => {
    const upcomingEvents = document.getElementById("ue");
    if (upcomingEvents) {
      upcomingEvents.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <section className="hero">
      <h1 className="main-description">{t("home.title")}</h1>
      <button className="button" onClick={handleClick}>
        {t("home.eventButton")}
      </button>
    </section>
  );
};

export default Hero;
