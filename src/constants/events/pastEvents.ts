import MedicalConference from "../../assets/events/Bahrain-Hungary-VIP-Medical-Gathering-2_compressed.pdf";
import MedicalConferenceThumbnail from "../../assets/events/image-2023-04-20T115032.125.webp";
import NetworkingEvent from "../../assets/events/Bahrain-Hungary-Relations-Hungary-Networking-Event-Bahrain_compressed.pdf";
import NetworkingEventThumbnail from "../../assets/events/image-2023-04-20T115531.487.webp";
import upcomingEventsArray from "./upcomingEvents";

const pastEventsArray = [
  {
    id: upcomingEventsArray.length + 1,
    title: "past.eventTitles.networkingEvent",
    date: "21ST OF JUNE 2023",
    link: NetworkingEvent,
    thumbnail: NetworkingEventThumbnail,
    hasGallery: true,
  },
  {
    id: upcomingEventsArray.length + 2,
    title: "past.eventTitles.medicalConference",
    link: MedicalConference,
    thumbnail: MedicalConferenceThumbnail,
  },
];

export default pastEventsArray;
