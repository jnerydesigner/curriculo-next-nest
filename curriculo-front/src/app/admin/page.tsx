"use client";

import { usePathname } from "next/navigation";
import Footer from "./components/footer";
import Header from "./components/header";
import Main from "./components/main";
import Navbar from "./components/navbar";

export default function Admin() {
  return (
    <>
      <Header />
      <Navbar />
      <Main />
      <Footer />
    </>
  );
}
