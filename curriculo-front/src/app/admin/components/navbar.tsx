import LinkMenu from "./link-menu";

const Navbar: React.FC = async () => {
  return (
    <div className="flex flex-1 justify-center items-center bg-yellow-500 col-span-3 row-span-10">
      <ul className="w-full h-full flex flex-col justify-center items-center ml-2 mr-2 pt-2">
        <LinkMenu title="Dashboard" link="/admin/user" />
        <LinkMenu title="Endereço" link="/admin/address" />
        <LinkMenu title="Dados Pessoais" link="/admin/personal-data" />
        <LinkMenu title="Habilidades" link="/admin/habilities" />
        <LinkMenu title="Formação Academica" link="/admin/educations" />
        <LinkMenu title="Experiência Profissional" link="/admin/experiences" />
        <LinkMenu title="Idiomas" link="/admin/languages" />
        <LinkMenu title="Idiomas2" link="/admin/languages2" />
        <LinkMenu title="Products" link="/admin/products" />
        <LinkMenu title="Curriculo" link="/curriculo" />
      </ul>
    </div>
  );
};

export default Navbar;
