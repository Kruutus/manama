import Footer from "../components/Footer";
import Nav from "../components/Nav";
import { ScrollRestoration, useParams } from "react-router-dom";
import { latestNewsArray } from "../constants/news/latestNews";

const Article = () => {
  const { articleId } = useParams();

  if (!articleId) {
    return <div></div>;
  }
  const loadedArticle = latestNewsArray.find(
    (article) => article.id === +articleId
  );

  const isArticleArray = Array.isArray(loadedArticle?.link);
  return (
    <div style={{ backgroundColor: "white" }}>
      <ScrollRestoration />
      <Nav staticMode />
      <h1 className="article-title">{loadedArticle?.title}</h1>
      {isArticleArray
        ? (loadedArticle?.link as string[]).map((link) => (
            <img className="article-img" src={link} />
          ))
        : loadedArticle?.link && (
            <img src={loadedArticle?.link} className="article-img" />
          )}
      {loadedArticle?.description && (
        <p
          style={{
            color: "black",
            maxWidth: "50%",
            margin: "auto",
            textAlign: "start",
            fontFamily: "Roboto, sans-serif",
            fontSize: "1.1em",
            lineHeight: "140%",
            paddingBottom: "2em",
          }}
          dangerouslySetInnerHTML={{ __html: loadedArticle?.description }}
        />
      )}
      {loadedArticle?.pdf && (
        <iframe
          src={loadedArticle.pdf}
          style={{ width: "1280px", height: "100vh" }}
        ></iframe>
      )}
      <Footer />
    </div>
  );
};

export default Article;
