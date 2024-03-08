import { fetchCurriculo } from "../service/fetch-curriculo";
import { Progress } from "./progress";

const Habilities: React.FC = async () => {
  const data = await fetchCurriculo();

  return (
    <>
      {data.habilities?.map((hability: any) => (
        <div
          key={hability.id}
          className="flex flex-col justify-center items-center w-[100%] mb-2"
        >
          <h3 className="text-lg text-curriculo-text">
            {hability.name} - {hability.value}
          </h3>
          <Progress value={hability.value} />
        </div>
      ))}
    </>
  );
};

export default Habilities;
