interface SubTitleProps {
  title: string;
}
const SubTitle: React.FC<SubTitleProps> = ({ title }) => {
  return (
    <div className="mt-4 mb-4 text-bold text-curriculo-brd flex justify-center items-center w-auto text-xl bg-curriculo-bgTitle border-[1px] border-curriculo-brdTitle p-2 rounded shadow-md">
      <h4>{title}</h4>
    </div>
  );
};

export default SubTitle;
