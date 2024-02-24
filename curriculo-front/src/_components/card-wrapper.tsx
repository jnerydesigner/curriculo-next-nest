"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { HeaderComp } from "./header";
import Link from "next/link";
import { IoMdArrowRoundBack } from "react-icons/io";
import { FaClipboardUser } from "react-icons/fa6";

interface CardWrapperProps {
  children: React.ReactNode;
  headerLabel: string;
  backButtonLabel: string;
  backButtonHref: string;
}

export const CardWrapper = ({
  children,
  backButtonLabel,
  backButtonHref,
}: CardWrapperProps) => {
  return (
    <Card className="w-[90%] flex flex-col justify-center items-center shadow-md bg-curriculo-primary border-0 p-2 my-2 relative">
      <CardHeader>
        <HeaderComp label="Formulário de Criação de uma Linguagem" />
      </CardHeader>
      <CardContent>{children}</CardContent>

      <div className="w-[100px] h-[40px] absolute bottom-[280px] left-[10px] bg-indigo-700/40 rounded flex justify-center items-center drop-shadow-md hover:bg-indigo-700/80 cursor-pointer">
        <Link
          href={"/dashboard"}
          className="text-slate-200 flex justify-center items-center flex-row"
        >
          <IoMdArrowRoundBack className="mr-2" />
          Voltar
        </Link>
      </div>

      <div className="w-[120px] h-[40px] absolute bottom-[280px] left-[900px] bg-indigo-700/40 rounded flex justify-center items-center drop-shadow-md hover:bg-indigo-700/80 cursor-pointer">
        <Link
          href={"/curriculo"}
          target="_blank"
          className="text-slate-200 flex justify-center items-center flex-row"
        >
          <FaClipboardUser className="mr-2" />
          Curriculo
        </Link>
      </div>
    </Card>
  );
};
export default CardWrapper;

// <div className="w-[90%] flex flex-col justify-center items-center col-span-9 row-span-10 bg-curriculo-primary rounded shadow-xl py-2 gap-y-2">
//       <HeaderComp label="Formulário de Criação de uma Linguagem" />
//       {children}

//       <a
//         href={backButtonHref}
//         className="bg-primary text-primary-foreground hover:bg-primary/90"
//       >
//         {backButtonLabel}
//       </a>
//     </div>
