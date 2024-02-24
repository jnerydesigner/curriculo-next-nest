import { Button as ButtonShad } from "@/components/ui/button";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
}
const Button: React.FC<ButtonProps> = async ({ title, ...rest }) => {
  return <ButtonShad {...rest}>{title}</ButtonShad>;
};

export default Button;
