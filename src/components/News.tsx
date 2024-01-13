import { useTranslation } from "react-i18next";
import { latestNewsArray } from "../constants/news/latestNews";
import NewsCard from "./NewsCard";

const News = () => {
  const { t } = useTranslation();
  return (
    <section>
      <div
        className="max-width"
        style={{
          margin: "auto",
        }}
      >
        <h2 className="news-title">{t("news.title")}</h2>
        <div className="news-container">
          {latestNewsArray.map((news) => (
            <NewsCard
              key={news.title}
              id={news.id}
              thumbnail={news.thumbnail}
              title={news.title}
              description={news.descriptionShort}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;
