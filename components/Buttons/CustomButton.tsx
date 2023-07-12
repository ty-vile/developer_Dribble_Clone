import { MouseEventHandler } from "react";
import Image from "next/image";

type CustomButtonProps = {
  title: string;
  leftIcon?: string | null;
  rightIcon?: string | null;
  handleClick?: MouseEventHandler;
  isSubmitting?: boolean;
  type?: "button" | "submit";
  bgColor?: string;
  textColor?: string;
};

const CustomButton = ({
  title,
  type,
  bgColor,
  textColor,
  leftIcon,
  rightIcon,
  handleClick,
  isSubmitting,
}: CustomButtonProps) => {
  return (
    <button
      type={type}
      disabled={isSubmitting}
      onClick={handleClick}
      className={`flex items-center rounded-md gap-3 px-3 py-2 hover:scale-95 transition-fast ${
        bgColor ? bgColor : ""
      } ${textColor ? textColor : ""}`}
    >
      {leftIcon && (
        <Image src={leftIcon} width={14} height={14} alt="Left button icon" />
      )}
      {title}
      {rightIcon && (
        <Image src={rightIcon} width={14} height={14} alt="Left button icon" />
      )}
    </button>
  );
};

export default CustomButton;
