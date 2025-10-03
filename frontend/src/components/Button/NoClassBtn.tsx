import type { IconType } from "react-icons";

interface Props {
  text: string;
  icon?: IconType;
  iconSize?: number;
  disabled?: boolean;
  reverse?: boolean;
  onClick?: () => void;
  className?: string;
}

const NoClassBtn = ({
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
      className={`border-2 border-purple-600 font-semibold p-2 rounded-full cursor-pointer flex text-xs ${
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

export default NoClassBtn;
