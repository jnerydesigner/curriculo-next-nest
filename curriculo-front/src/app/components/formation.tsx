import { fetchCurriculo } from "../service/fetch-curriculo";
import { formatPeriod } from "../utils/format-date";

const Formation: React.FC = async () => {
  const data = await fetchCurriculo();

  return (
    <>
      {data.academicEducations.map((formation: any) => (
        <div
          key={formation.id}
          className="flex flex-col justify-center items-center"
        >
          <div>
            <h3 className="text-2xl">{formation.title}</h3>
          </div>
          <div className="w-[80%] flex flex-row justify-between items-center p-2">
            <h3>{formation.university}</h3>
            <p>
              {formatPeriod(`${formation.dateInit} - ${formation.dateEnd}`)}
            </p>
          </div>

          <div className="p-4 text-justify">
            <p>{formation.description}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default Formation;
