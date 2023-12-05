import Particles from "@/components/Misc/ParticleComp";
import ScrollAnimationWrapper from "@/components/ScrollAnimation";

import {
  CSS,
  ChakraUI,
  ElectronJs,
  Github,
  HTML,
  JS,
  Jira,
  MUI,
  NextJs,
  REACT,
  Redux,
  Tailwind,
  TypeScript,
  VsCode,
} from "@/constants/Icons/TechLogo";
import {
  darkPrimary1,
  darkPrimary2,
  lightPrimary1,
  lightPrimary2,
} from "@/constants/color";
import getScrollAnimation from "@/utils/getScrollAnimation";
import { useBreakpointValue, useColorModeValue } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Roboto } from "next/font/google";
import { useMemo } from "react";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

function Techs({ isOpen }: { isOpen: boolean }) {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  const primary1 = useColorModeValue(lightPrimary1, darkPrimary1);

  const primary2 = useColorModeValue(lightPrimary2, darkPrimary2);

  const size = useBreakpointValue({
    base: 70,
    lg: 90,
    md: 80,
  });

  return (
    <div
      className={`max-w-screen-2xl mt-24 xl:mt-[7%] lg:mt-[10%] px-8 xl:px-16 mx-auto overflow-x-hidden `}
      style={{
        filter: isOpen ? "blur(2px)" : "none",
        transition: "filter 0.3s ease-in-out",
      }}
    >
      <Particles />
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
            <div className="flex gap-3 text-3xl lg:text-4xl font-extrabold tracking-wider">
              <p
                style={{
                  color: primary1,
                }}
              >
                Technologies
              </p>
            </div>
            <motion.div
              className="grid lg:grid-cols-6 grid-cols-3 md:grid-cols-6 gap-8 lg:gap-x-36 lg:gap-y-20 pt-10"
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
              <HTML height={size} width={size} tooltip="HTML" />

              <CSS height={size} width={size} tooltip="CSS" />
              <JS height={size} width={size} tooltip="JavaScript" />
              <TypeScript height={size} width={size} tooltip="TypeScript" />
              <REACT height={size} width={size} tooltip="React.Js" />
              <ElectronJs height={size} width={size} tooltip="Electron.Js" />
            </motion.div>
            <div className="flex gap-3 text-3xl lg:text-4xl font-extrabold tracking-wider pt-16 lg:pt-20">
              <p
                style={{
                  color: primary2,
                }}
              >
                Libraries
              </p>
            </div>
            <motion.div
              className="grid lg:grid-cols-5 grid-cols-3 md:grid-cols-5 gap-8 lg:gap-x-36 lg:gap-y-20 pt-10"
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
              <Redux height={size} width={size} tooltip="Redux Toolkit" />
              <NextJs height={size} width={size} tooltip="Next.Js" />
              <Tailwind height={size} width={size} tooltip="Tailwind Css" />
              <MUI height={size} width={size} tooltip="Material UI" />
              <ChakraUI height={size} width={size} tooltip="Chakra UI" />
            </motion.div>

            <div className="flex gap-3 text-3xl lg:text-4xl font-extrabold tracking-wider pt-16 lg:pt-20">
              <p
                style={{
                  color: primary1,
                }}
              >
                Platforms
              </p>
            </div>
            <motion.div
              className="grid lg:grid-cols-3 grid-cols-3 md:grid-cols-3 gap-8 lg:gap-x-20 lg:gap-y-20 pt-10 justify-center"
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
              <Github height={size} width={size} tooltip="Github" />
              <VsCode height={size} width={size} tooltip="VsCode" />
              <Jira height={size} width={size} tooltip="Jira" />
            </motion.div>
          </div>
        </motion.div>
      </ScrollAnimationWrapper>
      <div className="h-16" />
    </div>
  );
}

export default Techs;
