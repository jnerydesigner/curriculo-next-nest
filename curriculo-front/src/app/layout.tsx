import { Inter } from "next/font/google";
import "./globals.css";

import Link from "next/link";
import { AppWrapper } from "@/context";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <AppWrapper> */}
      <body className={inter.className}>
        <h1>Navegação</h1>
        <nav>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/curriculo?userId=947aa786-6a48-4994-bd3c-daf4fdeb931c">
                Curriculo
              </Link>
            </li>
            <li>
              <Link href="/admin">Admin</Link>
            </li>
          </ul>
        </nav>
        <hr />
        {children}
      </body>
      {/* </AppWrapper> */}
    </html>
  );
}
