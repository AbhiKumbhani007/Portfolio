import ScrollAnimationWrapper from "@/components/ScrollAnimation";
import {
  AntDesign,
  CSS,
  ChakraUI,
  ElectronJs,
  HTML,
  JS,
  Jira,
  MUI,
  NextJs,
  REACT,
  Redux,
  Sqlite,
  Tailwind,
  TypeScript,
  VsCode,
} from "@/constants/Icons/TechLogo";
import getScrollAnimation from "@/utils/getScrollAnimation";
import { Box, useBreakpointValue } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Roboto } from "next/font/google";
import { useMemo } from "react";
import styles from "../styles/tech.module.css";
import { Github } from "@/constants/Icons/SocialLogo";
import Image from "next/image";

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
            <div className="flex gap-3 text-3xl lg:text-4xl font-extrabold tracking-wider">
              <p className={`${styles.heading}`}>Technologies</p>
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
              {/* <Box
                w={size}
                h={size}
                filter={"grayscale(1)"}
                _hover={{
                  filter: "grayscale(0)",
                }}
                transition={"all 0.3s ease-in-out"}
              >
              </Box> */}
              <HTML height={size} width={size} />

              <CSS height={size} width={size} />
              <JS height={size} width={size} />
              <TypeScript height={size} width={size} />
              <REACT height={size} width={size} />
              <ElectronJs height={size} width={size} />
            </motion.div>
            <div className="flex gap-3 text-3xl lg:text-4xl font-extrabold tracking-wider pt-16 lg:pt-20">
              <p className={`${styles.heading_reverse}`}>Libraries</p>
            </div>
            <motion.div
              className="grid lg:grid-cols-6 grid-cols-3 md:grid-cols-6 gap-8 lg:gap-x-36 lg:gap-y-20 pt-10"
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
              <Redux height={size} width={size} />
              <NextJs height={size} width={size} />
              <Tailwind height={size} width={size} />
              <MUI height={size} width={size} />
              <ChakraUI height={size} width={size} />
              <AntDesign height={size} width={size} />
            </motion.div>
            <div className="flex gap-3 text-3xl lg:text-4xl font-extrabold tracking-wider pt-16 lg:pt-20">
              <p className={`${styles.heading}`}>Database</p>
            </div>
            <motion.div
              className="grid lg:grid-cols-1 grid-cols-1 md:grid-cols-1 gap-8 lg:gap-x-36 lg:gap-y-20 pt-10 "
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
              <Sqlite height={size} width={size} />
            </motion.div>
            <div className="flex gap-3 text-3xl lg:text-4xl font-extrabold tracking-wider pt-16 lg:pt-20">
              <p className={`${styles.heading_reverse}`}>Platforms</p>
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
              <Github height={size} width={size} />
              <VsCode height={size} width={size} />
              <Jira height={size} width={size} />
            </motion.div>
          </div>
        </motion.div>
      </ScrollAnimationWrapper>
      <div className="h-16" />
    </div>
  );
}

export default Techs;
