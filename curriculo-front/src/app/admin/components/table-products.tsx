import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const TableProducts: React.FC = async () => {
  const response = await fetch(
    "https://65ce3462c715428e8b403033.mockapi.io/api/v1/products",
    {
      cache: "no-cache",
    }
  );

  const data: ProductsType[] = await response.json();

  return (
    <Table>
      <TableCaption>Lista de Produtos</TableCaption>
      <TableHeader className="bg-curriculo-primary  border-white border-b-4">
        <TableRow>
          <TableHead className="w-[50%] text-center text-curriculo-text font-bold text-lg">
            Produtos
          </TableHead>
          <TableHead className="text-center text-curriculo-text font-bold text-lg">
            Preco
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((item) => (
          <TableRow key={item.id}>
            <TableCell className="font-medium text-center text-white">
              {item.name}
            </TableCell>
            <TableCell className="text-center">{item.price}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default TableProducts;

export type ProductsType = {
  id: string;
  name: string;
  price?: string;
  createdAt?: string;
  stars: number;
};
