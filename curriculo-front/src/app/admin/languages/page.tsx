import FormLanguage from "../components/forms/form-language";
import TableLanguages from "../components/table-languages";
async function Languages() {
  return (
    <div className="flex flex-col justify-center items-center col-span-9 row-span-10 bg-curriculo-bgMain">
      <FormLanguage />
      <TableLanguages />
    </div>
  );
}

export default Languages;
