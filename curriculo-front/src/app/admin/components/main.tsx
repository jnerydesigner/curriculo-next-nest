"use client";

import { usePathname } from "next/navigation";
import PersonalDataPage from "../personal-data/page";

export default function Main() {
  const pathname = usePathname();

  function renderPage() {
    console.log(pathname);
    if (pathname === "/admin/personal-data") {
      return (
        <div className="flex justify-center items-center col-span-9 row-span-10 bg-lime-400">
          <PersonalDataPage />
        </div>
      );
    }
    return (
      <div className="flex justify-center items-center col-span-9 row-span-10 bg-lime-400">
        <p>Current pathname daqui: {pathname}</p>
      </div>
    );
  }

  return renderPage();
}
