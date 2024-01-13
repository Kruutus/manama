import { useTranslation } from "react-i18next";
import ManamaLogo from "../assets/ManamaLogo";
import {
  BuildingOfficeIcon,
  DocumentTextIcon,
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  return (
    <footer>
      <div className="max-width footer-container">
        <div
          style={{
            flex: 1,
          }}
        >
          <div className="footer-logo-container">
            <ManamaLogo />
          </div>
        </div>
        <div
          style={{
            flex: 2,
            display: "flex",
            justifyContent: "flex-start",
          }}
        >
          <div>
            <h2
              style={{
                fontSize: "1.8em",
                margin: "unset",
                letterSpacing: "2px",
                textAlign: "start",
                marginBottom: "1em",
              }}
            >
              {t("footer.title")}
            </h2>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "0.5em",
              }}
            >
              <BuildingOfficeIcon
                style={{
                  width: "1.2em",
                  height: "1.2em",
                  color: "#CA1313",
                  marginRight: "0.5em",
                }}
              />
              <p
                style={{
                  display: "inline",
                  color: "white",
                  fontWeight: 300,
                  marginTop: "unset",
                }}
              >
                GCC Export Import Ügynökség Kft.
              </p>
            </div>
            <div
              style={{
                marginBottom: "0.5em",
                textAlign: "start",
                display: "flex",
                alignItems: "center",
              }}
            >
              <MapPinIcon
                style={{
                  width: "1.2em",
                  height: "1.2em",
                  color: "#CA1313",
                  marginRight: "0.5em",
                }}
              />
              <p
                style={{
                  display: "inline",
                  color: "white",
                  fontWeight: 300,
                  marginTop: "unset",
                }}
              >
                1054 Budapest, Honvéd utca 8.
              </p>
            </div>
            <div
              style={{
                marginBottom: "0.5em",
                textAlign: "start",
                display: "flex",
                alignItems: "center",
              }}
            >
              <UserIcon
                style={{
                  width: "1.2em",
                  height: "1.2em",
                  color: "#CA1313",
                  marginRight: "0.5em",
                }}
              />
              <p
                style={{
                  display: "inline",
                  color: "white",
                  fontWeight: 300,
                  marginTop: "unset",
                }}
              >
                Nyilas Csaba
              </p>
            </div>
            <div
              style={{
                marginBottom: "0.5em",
              }}
            >
              <a
                style={{
                  textAlign: "start",
                  display: "flex",
                  alignItems: "center",
                  lineHeight: "2em",
                  color: "white",
                  fontWeight: 300,
                }}
                href="tel:+36703822143"
              >
                <PhoneIcon
                  style={{
                    color: "#CA1313",
                    width: "1.2em",
                    height: "1.2em",
                    marginRight: "0.5em",
                  }}
                />
                +36 70 382 2143
              </a>
              <a
                style={{
                  textAlign: "start",
                  display: "flex",
                  alignItems: "center",
                  lineHeight: "2em",
                  color: "white",
                  fontWeight: 300,
                  cursor: "pointer",
                }}
                onClick={() => navigate("/privacy")}
              >
                <DocumentTextIcon
                  style={{
                    color: "#CA1313",
                    width: "1.2em",
                    height: "1.2em",
                    marginRight: "0.5em",
                  }}
                />
                {t("privacy")}
              </a>
            </div>
            <a
              style={{
                display: "flex",
                alignItems: "center",
                textAlign: "start",
                color: "white",
                fontWeight: 300,
              }}
              href="mailto:info@manama.hu"
            >
              <EnvelopeIcon
                style={{
                  color: "#CA1313",
                  width: "1.2em",
                  height: "1.2em",
                  marginRight: "0.5em",
                }}
              />
              info@manama.hu
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
