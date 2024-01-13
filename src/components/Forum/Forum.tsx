import Footer from "../Footer";
import Nav from "../Nav";
import "./Forum.css";
import ForumImage from "../../assets/image-2023-04-29T162540.336.webp";
import { useTranslation } from "react-i18next";
import { ScrollRestoration } from "react-router-dom";

const Forum = () => {
  const { t } = useTranslation();
  return (
    <div style={{ background: "white" }}>
      <ScrollRestoration />
      <Nav staticMode />
      <section className="forum-top-section">
        <h1>{t("forum.title")}</h1>
        <img src={ForumImage} />
        <p
          className="forum-top-section-description"
          dangerouslySetInnerHTML={{ __html: t("forum.description-1") }}
        />
      </section>
      <section className="forum-bottom-section">
        <p
          className="forum-bottom-section-description"
          dangerouslySetInnerHTML={{ __html: t("forum.description-2") }}
        />
      </section>
      <Footer />
    </div>
  );
};

export default Forum;
