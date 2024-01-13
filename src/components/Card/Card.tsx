import { ForwardRefExoticComponent, RefAttributes, SVGProps } from "react";
import "./Card.css";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

interface ICard {
  description: string;
  Icon: ForwardRefExoticComponent<
    Omit<SVGProps<SVGSVGElement>, "ref"> & {
      title?: string | undefined;
      titleId?: string | undefined;
    } & RefAttributes<SVGSVGElement>
  >;
  link: string;
  className?: string;
}

const Card: React.FC<ICard> = ({ description, Icon, link, className }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(link);
  };
  return (
    <div className={`card ${className}`} onClick={handleClick}>
      <Icon className="icon" />
      <p>{t(description)}</p>
    </div>
  );
};

export default Card;
