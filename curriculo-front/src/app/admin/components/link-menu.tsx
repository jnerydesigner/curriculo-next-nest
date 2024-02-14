import Link from "next/link";

interface LinkMenuProps {
  title: string;
  link: string;
}

const LinkMenu: React.FC<LinkMenuProps> = async ({ title, link }) => {
  return (
    <li className="flex w-full h-[36px] mt-1 mb-1">
      <Link
        href={link}
        className="flex justify-center items-center w-full h-[36px] bg-curriculo-primary pl-2 pr-2 text-curriculo-text font-bold hover:bg-violet-600 rounded"
      >
        {title}
      </Link>
    </li>
  );
};

export default LinkMenu;
