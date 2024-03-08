/* eslint-disable @next/next/no-async-client-component */
import { fetchLanguage } from "../service/fetch-language";
import LanguagesData from "./languages-data";

interface LanguageClientProps {
  userId: string;
}

const LanguageClient = async ({ userId }: LanguageClientProps) => {
  const dataLanguages = await fetchLanguage(userId);

  return (
    <div className="w-full p-2">
      +
      {dataLanguages?.map((language: LanguageType) => (
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
