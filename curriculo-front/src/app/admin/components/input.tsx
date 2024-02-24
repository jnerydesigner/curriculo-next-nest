import { Input as InputShad } from "@/components/ui/input";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type: string;
  placeholder: string;
}

const Input: React.FC<InputProps> = async ({ placeholder, type, ...rest }) => {
  return <InputShad type={type} placeholder={placeholder} {...rest} />;
};

export default Input;
