import { darkPrimary1, lightPrimary2 } from "@/constants/color";
import { useColorModeValue } from "@chakra-ui/react";
import React from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const ButtonPrimary = ({ children, className, onClick }: Props) => {
  const primary2 = useColorModeValue(lightPrimary2, darkPrimary1);

  const textColor = useColorModeValue("white", "#1A202C");

  return (
    <button
      style={{
        backgroundColor: primary2,
        color: textColor,
      }}
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
