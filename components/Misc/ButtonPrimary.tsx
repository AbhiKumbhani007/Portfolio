import React from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const ButtonPrimary = ({ children, className, onClick }: Props) => {
  return (
    <button
      className={
        "py-3 px-12 text-white font-semibold rounded-xl bg-[#263138] transition-all outline-none " +
        className
      }
      onClick={() => onClick && onClick()}
    >
      {children}
    </button>
  );
};

export default ButtonPrimary;
