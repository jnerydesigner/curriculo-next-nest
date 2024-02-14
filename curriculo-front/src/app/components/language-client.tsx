/* eslint-disable @next/next/no-async-client-component */
import { fetchCurriculo } from "../service/fetch-curriculo";
import LanguagesData from "./languages-data";

const LanguageClient = async () => {
  const data = await fetchCurriculo();

  return (
    <div className="w-full p-2">
      {data.languages.map((language: LanguageType) => (
        <LanguagesData
          key={language.id}
          name={language.name}
          stars={language.stars}
        />
      ))}
    </div>
  );
};

export default LanguageClient;

interface LanguageType {
  id: string;
  name: string;
  slug: string;
  userId: string;
  stars: number;
}
