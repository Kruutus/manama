import TurboJets from "../../assets/news-images/Page-4-local-1_page-0001.webp";
import StayCations from "../../assets/news-images/page-3-2_page-0001-1.webp";
import TheDailyTribune from "../../assets/news-images/The-Daily-Tribune-news.webp";
import TheDailyTribune2 from "../../assets/news-images/The-Daily-Tribune2.webp";
import TheDailyTribunePdf from "../../assets/news-pdfs/The-Daily-Tribune-1.pdf";
import Interview from "../../assets/news-images/Bitmap-8.webp";
import GdnNews from "../../assets/news-images/GDN-News_page-0001.webp";
import AlBiladPress from "../../assets/news-images/Al-Bilad-press.webp";
import CeoMeet from "../../assets/news-images/Bitmap-7.webp";
import CeoMeetPdf from "../../assets/news-pdfs/1404022425-1.pdf";
import ProfileImage from "../../assets/news-images/image-2023-04-28T174201.314.webp";

export const latestNewsArray = [
  {
    id: 1,
    thumbnail: TurboJets,
    title:
      "Turbo jets, four-wheel-drive vehicles, gold life Bahrain's re-exports in May",
    descriptionShort: "",
    link: TurboJets,
  },
  {
    id: 2,
    thumbnail: StayCations,
    title: "Staycations are the new vacations",
    descriptionShort: "",
    link: StayCations,
  },
  {
    id: 3,
    thumbnail: TheDailyTribune,
    title: "The Daily Tribune",
    descriptionShort: "",
    link: [TheDailyTribune, TheDailyTribune2],
    pdf: TheDailyTribunePdf,
  },
  {
    id: 4,
    thumbnail: Interview,
    title: "GDN News",
    descriptionShort: "",
    link: GdnNews,
  },
  {
    id: 5,
    thumbnail: AlBiladPress,
    title: "Al Bilad press",
    descriptionShort: "",
    link: AlBiladPress,
  },
  {
    id: 6,
    thumbnail: CeoMeet,
    title:
      "Executive President of the Hungarian Economic Circle Foundation in Bahrain",
    descriptionShort: "– Tamas Hovany meet with the Ceo of Al Bilad...",
    link: CeoMeet,
    pdf: CeoMeetPdf,
  },
  {
    id: 7,
    thumbnail: ProfileImage,
    title: "Bahraini-Hungarian Medical Conference & Expo",
    descriptionShort:
      "TDT | Manama The Daily Tribune – www.newsofbahrain.com ...",
    description: `TDT | Manama<br/><br/>

    The Daily Tribune – www.newsofbahrain.com<br/><br/>     
    
    Report by Ashen Tharaka<br/><br/>
    
    The inaugural Bah – raini-Hungarian Medical, Pharmaceutical Conference & Expo will be held in Gulf Hotel on the 7th and 8th of May.<br/><br/>
    
    The expo, under the patronage of Lieutenant-General Dr. Sheikh Mohammed bin Abdullah Al Khalifa, Chairman of the Supreme Council of Health, will feature 20- 25 specialist companies  from Hungary and Bahrain.<br/><br/>
    
    Speaking to the the Daily Tribune, Tamas Hovany , Chairman of Bahrain- Hungary Relations, Friendships & Business Society said the conference aims to encourage competition among healthcare providers in the kingdom to deliver the highest quality care.<br/><br/>
    
    “We can utilise this opportunity to learn about the country as well as advance technology in the health industry,” he stressed.<br/><br/>
    
     The expo comes as the Kingdom is taking a new direction with the national medical insurance programme, enabling citizens to freely access medical care from any hospital of their choice.`,
  },
];
