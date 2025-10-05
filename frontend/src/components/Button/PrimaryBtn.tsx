import type { IconType } from "react-icons";

interface Props {
  text: string;
  icon?: IconType;
  type?: "button" | "submit" | "reset" | undefined;
  iconSize?: number;
  disabled?: boolean;
  reverse?: boolean;
  onClick?: () => void;
  className?: string;
}

const PrimaryBtn = ({
  text,
  type,
  onClick,
  disabled,
  icon: Icon,
  iconSize,
  className,
  reverse,
}: Props) => {
  return (
    <button
      type={type || "button"}
      onClick={onClick}
      disabled={disabled}
      className={`text-white bg-purple-600 font-semibold px-3 py-2 rounded-full cursor-pointer hover:bg-purple-500 flex ${
        reverse ? "flex-row-reverse" : "flex-row"
      } items-center justify-center transition-all gap-2 disabled:opacity-50 disabled:cursor-not-allowed ${
        className ?? ""
      }`}
    >
      {Icon && <Icon size={iconSize} />}
      {text}
    </button>
  );
};

export default PrimaryBtn;
