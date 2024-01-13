import { interactivesArray } from "../constants/Interactives";
import Card from "./Card";

const Interactives = () => {
  return (
    <section
      style={{
        background: "#e5e5e5",
      }}
    >
      <div className="max-width interactives-container">
        {interactivesArray.map(({ Icon, description, link }) => (
          <Card
            className="interactives-card"
            Icon={Icon}
            description={description}
            key={description}
            link={link}
          />
        ))}
      </div>
    </section>
  );
};

export default Interactives;
