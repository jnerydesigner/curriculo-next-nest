import { fetchCurriculo } from "../service/fetch-curriculo";
import { formatPeriod } from "../utils/format-date";
import SubTitle from "./subtitle";

const Experience: React.FC = async () => {
  const data = await fetchCurriculo();
  return (
    <>
      {data.professionalExperiences.map((experience: any) => (
        <div
          key={experience.id}
          className="w-[100%] flex flex-col justify-center items-center"
        >
          <div>
            <h3 className="text-2xl">{experience.company}</h3>
          </div>
          <div className="w-[70%] flex flex-row justify-between items-center p-2">
            <h3>{experience.title}</h3>
            <p>
              {formatPeriod(`${experience.dateInit} - ${experience.dateEnd}`)}
            </p>
          </div>
          <div className="w-[100%] p-2">
            <ol className="w-[100%]">
              {experience.description.map((desc: any) => {
                const classModified = `my-6 before:content-['*'] before:text-purple-500 before:text-2xl before:ring-2 before:ring-offset-2 before:ring-purple-500 before:px-3 before:py-1 before:rounded-full before:mr-4 `;
                return (
                  <li key={desc.id} className={classModified}>
                    {desc.description}
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      ))}
    </>
  );
};

export default Experience;
