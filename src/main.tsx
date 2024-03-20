import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/App";
import Article from "./pages/Article";
import Event from "./pages/Event";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import "./constants/i18n";
import Introduction from "./components/Introduction";
import PartnerSearch from "./components/PartnerSearch";
import Forum from "./components/Forum";
import Networking from "./components/Networking";
import Countries from "./components/Countries";
import Calendar from "./components/Calendar";
import CookieConsent from "react-cookie-consent";
import Privacy from "./pages/Privacy";
import ResearchAndDevelopment from "./pages/ResearchAndDevelopment";
import Infracheramy from "./pages/InfraCheramy";
import WindEnergy from "./pages/WindEnergy";
import Agriculture from "./pages/Agriculture";
import GreenHidrogen from "./pages/GreenHidrogen";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "articles/:articleId",
    element: <Article />,
  },
  {
    path: "events/:eventId",
    element: <Event />,
  },
  {
    path: "introduction",
    element: <Introduction />,
  },
  {
    path: "partner-search",
    element: <PartnerSearch />,
  },
  {
    path: "forum",
    element: <Forum />,
  },
  {
    path: "networking",
    element: <Networking />,
  },
  {
    path: "countries",
    element: <Countries />,
  },
  {
    path: "calendar",
    element: <Calendar />,
  },
  {
    path: "privacy",
    element: <Privacy />,
  },
  {
    path: "research-and-development",
    element: <ResearchAndDevelopment />,
  },
  {
    path: "research-and-development/infracheramy",
    element: <Infracheramy />,
  },
  {
    path: "research-and-development/wind-energy",
    element: <WindEnergy />,
  },
  {
    path: "research-and-development/agriculture",
    element: <Agriculture />,
  },
  {
    path: "research-and-development/green-hidrogen",
    element: <GreenHidrogen />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <CookieConsent>
      This website uses cookies to enhance the user experience.
    </CookieConsent>
  </React.StrictMode>
);
