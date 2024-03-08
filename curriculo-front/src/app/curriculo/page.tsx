"use client";

import { useSearchParams } from "next/navigation";

import SubTitle from "../components/subtitle";

import Formation from "../components/formation";
import Experience from "../components/experience";
import LanguageClient from "../components/language-client";
import Bio from "../components/bio";
import HeaderData from "../components/header-data";
import Habilities from "../components/habilities";

export default function Curriculo() {
  const searchParams = useSearchParams();
  const userId = searchParams.get("userId");

  console.log(userId);

  return (
    <main className="flex min-h-screen flex-col items-center bg-curriculo-bgblack">
      <div className="h-auto w-7/12 bg-slate-200 grid grid-cols-8 mt-2">
        <div className="col-start-1 col-end-9 flex justify-center items-center flex-row h-[350px] bg-curriculo-background border-[10px] border-curriculo-brd">
          <HeaderData />
        </div>
        <div className="bg-curriculo-primary_cl col-start-1 col-end-4">
          <div className="flex flex-col justify-center items-center">
            <SubTitle title="COMPETÊNCIAS" />
            <Habilities />
          </div>
          <div className="w-[100%] flex flex-col justify-center items-center ">
            <SubTitle title="IDIOMAS" />
            <LanguageClient userId={userId !== null ? userId : ""} />
          </div>
          <div className="w-[100%] flex flex-col justify-center items-center ">
            <SubTitle title="REDES SOCIAIS" />
            <LanguageClient userId={userId !== null ? userId : ""} />
          </div>
        </div>
        <div className="bg-curriculo-foreground col-start-4 col-end-9">
          <div className="w-[100%] flex flex-col justify-center items-center ">
            <SubTitle title="BIOGRAFIA" />
            <Bio />
          </div>
          <div className="w-[100%] flex flex-col justify-center items-center ">
            <SubTitle title="FORMAÇÃO" />
            <Formation />
          </div>
          <div className="w-[100%] flex flex-col justify-center items-center ">
            <SubTitle title="EXPERIÊNCIA" />
            <Experience />
          </div>
        </div>
      </div>
    </main>
  );
}
