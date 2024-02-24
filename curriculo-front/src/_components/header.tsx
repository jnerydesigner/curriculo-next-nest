import { Roboto } from "next/font/google";
import { cn } from "@/lib/utils";

const font = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

interface HeaderProps {
  label: string;
}

export const HeaderComp = ({ label }: HeaderProps) => {
  return (
    <div>
      <h1 className="text-zinc-100">🔒{label}</h1>
    </div>
  );
};
