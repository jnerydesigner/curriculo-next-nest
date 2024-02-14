import { FaStar, FaRegStar } from "react-icons/fa";

interface LanguagesDataProps {
  name: string;
  stars: number;
}

const LanguagesData: React.FC<LanguagesDataProps> = ({ name, stars }) => {
  function renderStars(stars: number) {
    const starsArray = [];

    for (let i = 0; i < stars; i++) {
      starsArray.push(<FaStar key={i} className="fill-amber-500" />);
    }

    for (let i = 0; i < 5 - stars; i++) {
      starsArray.push(<FaRegStar key={i} className="fill-amber-500" />);
    }

    return (
      <div className="w-[100%] flex flex-row justify-between items-center p-2">
        {starsArray}
      </div>
    );
  }
  return (
    <div className="w-[80%] flex flex-row justify-center items-center">
      <h2 className="text-lg text-curriculo-text w-[50%]">{name}</h2>
      <div className="w-[80%] p-[10px] flex flex-1">{renderStars(stars)}</div>
    </div>
  );
};

export default LanguagesData;
