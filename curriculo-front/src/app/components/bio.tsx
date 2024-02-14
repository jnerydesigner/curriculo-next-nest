import React from "react";
import { fetchCurriculo } from "../service/fetch-curriculo";

const Bio: React.FC = async () => {
  const data = await fetchCurriculo();

  return (
    <div className="p-4 text-justify">
      <p>{data.bio}</p>
    </div>
  );
};

export default Bio;
