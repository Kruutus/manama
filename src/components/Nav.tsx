import { useEffect, useState } from "react";
import ManamaLogo from "../assets/ManamaLogo";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

interface INav {
  staticMode?: boolean;
}

const Nav: React.FC<INav> = ({ staticMode }) => {
  const navigate = useNavigate();

  const [navColor, setNavColor] = useState(
    staticMode ? "white" : "transparent"
  );

  const [i18BtnColor, setI18BtnColor] = useState(
    staticMode ? "blackFont" : "whiteFont"
  );

  const [logoFillColor, setLogoFillColor] = useState(
    staticMode ? "#CA1313" : "#fff"
  );

  const handleLogoClick = () => {
    navigate("/");
  };

  const changeNavBg = () => {
    setNavColor(window.scrollY >= 200 ? "white" : "transparent");
    setI18BtnColor(window.scrollY >= 200 ? "blackFont" : "whiteFont");
    setLogoFillColor(window.scrollY >= 200 ? "#CA1313" : "#fff");
  };

  useEffect(() => {
    if (!staticMode) {
      window.addEventListener("scroll", changeNavBg);
      return () => {
        window.removeEventListener("scroll", changeNavBg);
      };
    }
  }, [staticMode]);

  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <nav
      className={`${navColor}`}
      style={{
        position: staticMode ? "initial" : "fixed",
        width: "100%",
      }}
    >
      <div className="nav-content max-width">
        <div
          className="logo"
          onClick={handleLogoClick}
          style={{ cursor: "pointer" }}
        >
          <ManamaLogo logoFillColor={logoFillColor} />
        </div>
        <div>
          <a className="nav-anchor" href="mailto:info@manama.hu">
            {t("contactUs")}
          </a>
          <button
            className={`${i18BtnColor}`}
            style={{
              marginRight: "0.5em",
              background: "unset",
              border: "unset",
              cursor: "pointer",
            }}
            onClick={() => changeLanguage("en")}
          >
            EN
          </button>
          <button
            className={`${i18BtnColor} nav-button`}
            onClick={() => changeLanguage("hu")}
          >
            HU
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
