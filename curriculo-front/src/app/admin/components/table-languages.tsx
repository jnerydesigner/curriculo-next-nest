import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { FaStar, FaRegStar } from "react-icons/fa";

const TableLanguages: React.FC = async () => {
  const response = await fetch("http://localhost:3000/v1/curriculo/languages");

  const data: LanguageType[] = await response.json();

  function renderStars(stars: number) {
    const starsArray = [];

    for (let i = 0; i < stars; i++) {
      starsArray.push(<FaStar key={i} className="fill-amber-500" />);
    }

    for (let i = 0; i < 5 - stars; i++) {
      starsArray.push(<FaRegStar key={i} className="fill-amber-500" />);
    }

    return (
      <div className="w-[100%] flex flex-row justify-between items-center p-2">
        {starsArray}
      </div>
    );
  }

  return (
    <Table>
      <TableCaption>Lista de Idiomas</TableCaption>
      <TableHeader className="bg-curriculo-primary  border-white border-b-4">
        <TableRow>
          <TableHead className="w-[50%] text-center text-curriculo-text font-bold text-lg">
            Idioma
          </TableHead>
          <TableHead className="text-center text-curriculo-text font-bold text-lg">
            Estrelas
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((item) => (
          <TableRow key={item.id}>
            <TableCell className="font-medium text-center text-white">
              {item.name}
            </TableCell>
            <TableCell className="text-center">
              {renderStars(item.stars)}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default TableLanguages;

export type LanguageType = {
  id: string;
  name: string;
  slug: string;
  stars: number;
  userId: string;
};
