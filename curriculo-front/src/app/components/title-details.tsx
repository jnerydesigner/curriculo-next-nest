import {
  MdOutlineEmail,
  MdOutlineWhatsapp,
  MdOutlineHome,
} from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";

interface TitleDetailsProps {
  title: string;
  type: "mail" | "whatsapp" | "linkedin" | "address";
}

function resolveIcon(type: "mail" | "whatsapp" | "linkedin" | "address") {
  switch (type) {
    case "mail":
      return <MdOutlineEmail />;
    case "whatsapp":
      return <MdOutlineWhatsapp />;
    case "linkedin":
      return <FaLinkedin />;
    case "address":
      return <MdOutlineHome />;
    default:
      return <MdOutlineEmail />;
  }
}

const TitleDetails: React.FC<TitleDetailsProps> = ({ title, type }) => {
  return (
    <div className="mt-1 text-curriculo-brd flex justify-center items-center w-[40%]">
      <div className="flex justify-center items-center w-[10%]">
        {resolveIcon(type)}
      </div>
      <h4 className="flex flex-1 justify-center items-center">{title}</h4>
    </div>
  );
};

export default TitleDetails;
