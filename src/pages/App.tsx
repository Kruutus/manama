import "../App.css";
import Hero from "../components/Hero";
import Nav from "../components/Nav";
import Faq from "../components/Faq";
import Interactives from "../components/Interactives";
import News from "../components/News";
import Footer from "../components/Footer";
import UpcomingEvents from "../components/UpcomingEvents";
import { ScrollRestoration } from "react-router-dom";

function App() {
  return (
    <div>
      <ScrollRestoration />
      <Nav />
      <Hero />
      <Interactives />
      <News />
      <Faq />
      <UpcomingEvents />
      <Footer />
    </div>
  );
}

export default App;
