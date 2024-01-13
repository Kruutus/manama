import Nav from "../components/Nav";
import { ScrollRestoration, useParams } from "react-router-dom";
import upcomingEventsArray from "../constants/events/upcomingEvents";
import pastEventsArray from "../constants/events/pastEvents";

const Event = () => {
  const { eventId } = useParams();

  if (!eventId) {
    return <div></div>;
  }

  const aggregatedEvents = [...upcomingEventsArray, ...pastEventsArray];
  const loadedEvent = aggregatedEvents.find((event) => event.id === +eventId);
  return (
    <div>
      <ScrollRestoration />
      <Nav staticMode />
      <iframe
        src={loadedEvent?.link}
        style={{ width: "100vw", height: "100vh" }}
      ></iframe>
    </div>
  );
};

export default Event;
