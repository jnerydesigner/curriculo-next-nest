import Image from "next/image";
import TitleDetails from "./title-details";
import { createAddress } from "../utils/create-address";
import { fetchCurriculo } from "../service/fetch-curriculo";

const HeaderData: React.FC = async () => {
  const data = await fetchCurriculo();

  return (
    <>
      <div className="w-[300px] h-[280px] p-2">
        <Image
          src={data.personalData[0].avatarUrl}
          alt={data.personalData[0].fullname}
          width={400}
          height={400}
          className="rounded-[50%] w-[100%] h-[100%] border-4 border-curriculo-foreground shadow-md ml-12"
        />
      </div>
      <div className="flex flex-1 justify-center items-center flex-col ">
        <h2 className="text-5xl font-semibold text-curriculo-brd mb-2">
          {data.name}
        </h2>
        <TitleDetails title={data.email} type="mail" />
        <TitleDetails title={data.contacts[0].phone} type="whatsapp" />
        <TitleDetails
          title={createAddress(
            data.address[0].street,
            data.address[0].number,
            data.address[0].district
          )}
          type="address"
        />
        <TitleDetails
          title={
            data.contacts[0].socialMedias.find(
              (social: any) => social.name === "LinkedIn"
            ).url
          }
          type="linkedin"
        />
      </div>
    </>
  );
};

export default HeaderData;
