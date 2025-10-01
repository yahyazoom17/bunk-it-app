import type { IconType } from "react-icons";

interface Props {
  text: string;
  icon?: IconType;
  iconSize?: number;
  disabled?: boolean;
  reverse?: boolean;
  onClick: () => void;
  className?: string;
}

const PrimaryBtn = ({
  text,
  onClick,
  disabled,
  icon: Icon,
  iconSize,
  className,
  reverse,
}: Props) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`text-white bg-purple-600 font-semibold px-3 py-2 rounded-full cursor-pointer hover:bg-purple-500 flex ${
        reverse ? "flex-row-reverse" : "flex-row"
      } items-center justify-between transition-all gap-1 disabled:opacity-50 disabled:cursor-not-allowed ${
        className ?? ""
      }`}
    >
      {Icon && <Icon size={iconSize} />}
      {text}
    </button>
  );
};

export default PrimaryBtn;
