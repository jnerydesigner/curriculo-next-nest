import CardWrapper from "@/_components/card-wrapper";
import FormLanguages from "@/_components/form-languages";
import TableLanguages from "../components/table-languages";

async function Languages2() {
  return (
    <div className="flex flex-col justify-center items-center col-span-12 row-span-10 bg-curriculo-bgMain">
      <CardWrapper
        backButtonHref="/home"
        backButtonLabel="Home"
        headerLabel="Criação de Uma linguagem"
      >
        <FormLanguages />
      </CardWrapper>
      <TableLanguages />
    </div>
  );
}

export default Languages2;
