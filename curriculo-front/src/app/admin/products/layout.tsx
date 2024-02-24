import Footer from "../components/footer";
import Header from "../components/header";
import Navbar from "../components/navbar";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
