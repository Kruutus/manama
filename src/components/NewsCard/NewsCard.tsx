import "./NewsCard.css";
import { useNavigate } from "react-router-dom";

interface INewsCard {
  thumbnail: string;
  id: number;
}

const NewsCard: React.FC<INewsCard> = ({ thumbnail, id }) => {
  const navigate = useNavigate();

  const handleClick = () => navigate("/articles/" + id);
  return (
    <div className="news-card">
      <img
        src={thumbnail}
        style={{
          maxWidth: "100%",
          objectFit: "contain",
          cursor: "pointer",
        }}
        onClick={handleClick}
      />
      <div>
        <button className="action-button" onClick={handleClick}>
          Read more
        </button>
      </div>
    </div>
  );
};

export default NewsCard;
