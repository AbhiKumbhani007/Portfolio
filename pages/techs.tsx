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
import { skillsImage } from "@/utils/SkillImageMapper";
import getScrollAnimation from "@/utils/getScrollAnimation";
import { useBreakpointValue, useColorModeValue } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Roboto } from "next/font/google";
import Image from "next/image";
import { useMemo } from "react";
import Marquee from "react-fast-marquee";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

function Techs({ isOpen }: { isOpen: boolean }) {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  const primary1 = useColorModeValue(lightPrimary1, darkPrimary1);

  const primary2 = useColorModeValue(lightPrimary2, darkPrimary2);

  const cardBg = useColorModeValue("#E4E4E4", "#445964");

  const size = useBreakpointValue({
    base: 60,
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
          <div className=" flex flex-col justify-center items-center w-11/12 lg:w-full max-w-screen-2xl">
            <div className="flex gap-3 text-3xl lg:text-4xl font-extrabold tracking-wider">
              <p
                style={{
                  color: primary1,
                }}
              >
                Technologies
              </p>
            </div>
            <div className="flex w-full items-center justify-center">
              <Marquee
                gradient={false}
                speed={80}
                pauseOnHover={true}
                pauseOnClick={true}
                delay={0}
                play={true}
                direction="left"
                autoFill={true}
              >
                {technologies.map((skill, id) => (
                  <div
                    className="shadow-[0px_10px_20px_rgba(0,0,0,0.12)] rounded-[10px] w-32 h-32 lg:w-40 lg:h-40 m-6 flex flex-col items-center justify-center p-8 px-4 transition-all duration-300 ease-in-out"
                    key={`${skill}-${id}`}
                    style={{
                      background: cardBg,
                    }}
                  >
                    <Image
                      src={skillsImage(skill)}
                      alt={skill}
                      width={size}
                      height={size}
                    />
                    <h3 className="pt-3">{getCapitalString(skill)}</h3>
                  </div>
                ))}
              </Marquee>
            </div>
            <div className="flex gap-3 text-3xl lg:text-4xl font-extrabold tracking-wider pt-8">
              <p
                style={{
                  color: primary2,
                }}
              >
                Libraries
              </p>
            </div>
            <div className="flex w-full items-center justify-center">
              <Marquee
                gradient={false}
                speed={100}
                pauseOnHover={true}
                pauseOnClick={true}
                delay={0}
                play={true}
                direction="left"
                autoFill={true}
              >
                {libraries.map((skill, id) => (
                  <div
                    className="shadow-[0px_10px_20px_rgba(0,0,0,0.12)] rounded-[10px] w-32 h-32 lg:w-40 lg:h-40 m-6 flex flex-col items-center justify-center p-8 px-4 transition-all duration-300 ease-in-out"
                    key={`${skill}-${id}`}
                    style={{
                      background: cardBg,
                    }}
                  >
                    <Image
                      src={skillsImage(skill)}
                      alt={skill}
                      width={size}
                      height={size}
                    />
                    <h3 className="pt-3">{getCapitalString(skill)}</h3>
                  </div>
                ))}
              </Marquee>
            </div>

            <div className="flex gap-3 text-3xl lg:text-4xl font-extrabold tracking-wider pt-8">
              <p
                style={{
                  color: primary1,
                }}
              >
                Platforms
              </p>
            </div>
            <div className="flex w-full items-center justify-center">
              <Marquee
                gradient={false}
                speed={80}
                pauseOnHover={true}
                pauseOnClick={true}
                delay={0}
                play={true}
                direction="left"
                autoFill={true}
              >
                {platforms.map((skill, id) => (
                  <div
                    className="shadow-[0px_10px_20px_rgba(0,0,0,0.12)] rounded-[10px] w-32 h-32 lg:w-40 lg:h-40 m-6 flex flex-col items-center justify-center p-8 px-4 transition-all duration-300 ease-in-out"
                    key={`${skill}-${id}`}
                    style={{
                      background: cardBg,
                    }}
                  >
                    <Image
                      src={skillsImage(skill)}
                      alt={skill}
                      width={size}
                      height={size}
                    />
                    <h3 className="pt-3">{getCapitalString(skill)}</h3>
                  </div>
                ))}
              </Marquee>
            </div>
          </div>
        </motion.div>
      </ScrollAnimationWrapper>
      <div className="h-16" />
    </div>
  );
}

export default Techs;

export const technologies = [
  "html",
  "css",
  "javascript",
  "typescript",
  "react",
  "electronjs",
  "socketio",
  "sass",
  "graphql",
  "git",
];

export const libraries = [
  "nextjs",
  "redux",
  "tailwind",
  "materialui",
  "chakraui",
  "gsap",
  "sqlite",
];

export const platforms = [
  "github",
  "jira",
  "contentful",
  "clickup",
  "figma",
  "firebase",
];

const getCapitalString = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};
