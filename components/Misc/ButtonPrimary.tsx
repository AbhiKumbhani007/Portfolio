import { darkPrimary1, lightPrimary2 } from "@/constants/color";
import { useColorModeValue } from "@chakra-ui/react";
import React from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  outlined?: boolean;
}

const ButtonPrimary = ({ children, className, onClick, outlined }: Props) => {
  const primary2 = useColorModeValue(lightPrimary2, darkPrimary1);

  const textColor = useColorModeValue("white", "#1A202C");

  return (
    <button
      style={{
        backgroundColor: outlined ? "" : primary2,
        color: outlined ? "" : textColor,
        border: outlined ? "1px solid" : "",
        borderColor: primary2,
      }}
      className={
        `py-3 px-12 font-semibold rounded-xl transition-all border hover:border-2` +
        className
      }
      onClick={() => onClick && onClick()}
    >
      {children}
    </button>
  );
};

export default ButtonPrimary;
