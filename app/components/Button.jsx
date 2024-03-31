import { grotesque } from "../ui/fonts";

const Button = ({ text }) => {
  return (
    <button
      type="button"
      className={`${grotesque.className} bg-accentButton text-base tracking-wide p-2 uppercase text-white cursor-pointer `}
    >
      {text}
    </button>
  );
};

export default Button;
