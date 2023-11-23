import React from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
}

const ButtonPrimary = ({ children, className }: Props) => {
  return (
    <button
      className={
        "py-3 px-12 text-white font-semibold rounded-xl bg-[#263138] transition-all outline-none " +
        className
      }
    >
      {children}
    </button>
  );
};

export default ButtonPrimary;
