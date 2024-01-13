import { useTranslation } from "react-i18next";
import upcomingEventsArray from "../../constants/events/upcomingEvents";
import EventCard from "../EventCard";
import Footer from "../Footer";
import Nav from "../Nav";
import pastEventsArray from "../../constants/events/pastEvents";
import { ScrollRestoration } from "react-router-dom";

const Calendar = () => {
  const { t } = useTranslation();

  const aggregatedEvents = [...upcomingEventsArray, ...pastEventsArray];
  return (
    <div style={{ background: "white" }}>
      <ScrollRestoration />
      <Nav staticMode />
      <section id="ue" className="upcoming-events-section">
        <div
          className="max-width"
          style={{
            margin: "auto",
          }}
        >
          <h2 className="ue-title">{t("calendar.title")}</h2>
          <div className="ue-container">
            {aggregatedEvents.map((event) => (
              <EventCard key={event.id} {...event} />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Calendar;
