import ScrollAnimationWrapper from "@/components/ScrollAnimation";
import {
  CSS,
  EclipseIde,
  HTML,
  JS,
  Javascript,
  Python,
  REACT,
} from "@/constants/Icons";
import getScrollAnimation from "@/utils/getScrollAnimation";
import { useBreakpointValue } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Roboto } from "next/font/google";
import { useMemo } from "react";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

function Techs({ isOpen }: { isOpen: boolean }) {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  const size = useBreakpointValue({
    base: 70,
    lg: 90,
    md: 80,
  });

  return (
    <div
      className={`max-w-screen-2xl mt-24 xl:mt-[7%] lg:mt-[15%] px-8 xl:px-16 mx-auto overflow-x-hidden `}
      style={{
        filter: isOpen ? "blur(2px)" : "none",
        transition: "filter 0.3s ease-in-out",
      }}
    >
      <ScrollAnimationWrapper
        className={`flex justify-center items-center ${roboto.className}`}
      >
        <motion.div
          variants={scrollAnimation}
          initial={{
            y: 150,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              type: "spring",
              duration: 2,
            },
          }}
          className={`flex justify-center items-center ${roboto.className}`}
        >
          <div className=" flex flex-col justify-center items-center w-full max-w-3xl">
            <div className="flex gap-3 text-3xl lg:text-5xl font-bold tracking-wider">
              <p className="text-[#445964]">Minhas</p>
              <p className="text-[#263138]">Techs</p>
            </div>
            <p className="text-center text-base lg:text-lg text-[#445964] font-medium tracking-normal leading-8 lg:leading-relaxed pt-16 lg:pt-20">
              Tecnologias
            </p>
            <div className="flex gap-3 text-3xl lg:text-4xl font-extrabold tracking-wider pt-3">
              <p className="text-[#445964]">Já</p>
              <p className="text-[#263138]">utilizadas</p>
            </div>
            <motion.div
              className="flex gap-x-8 lg:gap-x-20 pt-10"
              initial={{ opacity: 0, x: 100 }}
              animate={{
                opacity: 1,
                x: 0,
                transition: {
                  type: "spring",
                  duration: 4,
                },
              }}
            >
              <Javascript height={size} width={size} />
              <Python height={size} width={size} />
              <EclipseIde height={size} width={size} />
            </motion.div>
            <p className="text-center text-base lg:text-lg text-[#445964] font-medium tracking-normal leading-8 lg:leading-relaxed pt-20">
              Tecnologias
            </p>
            <div className="flex flex-col lg:flex-row text-center gap-3 text-3xl lg:text-4xl font-extrabold tracking-wider pt-3">
              <p className="text-[#445964]">Atualmente</p>
              <p className="text-[#263138]">Desenvolvendo</p>
            </div>
            <motion.div
              className="grid grid-cols-2 lg:grid-cols-4 lg:grid-rows-1 gei gap-8 lg:gap-x-20 pt-10"
              initial={{ opacity: 0, x: -100 }}
              animate={{
                opacity: 1,
                x: 0,
                transition: {
                  type: "spring",
                  duration: 4,
                },
              }}
            >
              <HTML height={size} width={size} />
              <CSS height={size} width={size} />
              <JS height={size} width={size} />
              <REACT height={size} width={size} />
            </motion.div>
          </div>
        </motion.div>
      </ScrollAnimationWrapper>
    </div>
  );
}

export default Techs;
