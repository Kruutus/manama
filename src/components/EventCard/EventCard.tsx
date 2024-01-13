import "./EventCard.css";
import { useNavigate } from "react-router-dom";

interface IEventCard {
  id?: number;
  thumbnail: string;
}

const EventCard: React.FC<IEventCard> = ({ thumbnail, id }) => {
  const navigate = useNavigate();

  const handleClick = () => navigate("/events/" + id);
  return (
    <img
      src={thumbnail}
      onClick={handleClick}
      style={{
        maxWidth: "100%",
        height: "80vh",
        objectFit: "contain",
        marginBottom: "2em",
        cursor: "pointer",
      }}
    />
  );
};

export default EventCard;
