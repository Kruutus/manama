import "./UpcomingEvents.css";
import upcomingEventsArray from "../../constants/events/upcomingEvents";
import EventCard from "../EventCard/EventCard";
import { useTranslation } from "react-i18next";

const UpcomingEvents = () => {
  const { t } = useTranslation();
  return (
    <section id="ue" className="upcoming-events-section">
      <div
        className="max-width"
        style={{
          margin: "auto",
        }}
      >
        <h2 className="ue-title">{t("upcoming.title")}</h2>
        <div className="ue-container">
          {upcomingEventsArray.map((event) => (
            <EventCard key={event.id} {...event} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;
