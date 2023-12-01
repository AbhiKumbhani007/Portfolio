import ScrollAnimationWrapper from "@/components/ScrollAnimation";
import { ActiveRing, InActiveRing } from "@/constants/Icons/Icons";
import {
  darkPrimary1,
  darkPrimary2,
  lightPrimary1,
  lightPrimary2,
} from "@/constants/color";
import getScrollAnimation from "@/utils/getScrollAnimation";
import { useColorModeValue } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Roboto } from "next/font/google";
import Image from "next/image";
import { useMemo } from "react";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});
export default function About({ isOpen }: { isOpen: boolean }) {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  const primary1 = useColorModeValue(lightPrimary1, darkPrimary1);

  const primary2 = useColorModeValue(lightPrimary2, darkPrimary1);

  const skills = [
    {
      id: 1,
      name: "Js/Ts",
      active: 4,
      inactive: 1,
    },
    {
      id: 2,
      name: "HTML/CSS",
      active: 3,
      inactive: 2,
    },
    {
      id: 3,
      name: "Tailwind",
      active: 4,
      inactive: 1,
    },
    {
      id: 4,
      name: "SqLite3",
      active: 2,
      inactive: 3,
    },
    {
      id: 5,
      name: "React.JS",
      active: 4,
      inactive: 1,
    },
    {
      id: 6,
      name: "Electron.JS",
      active: 2,
      inactive: 3,
    },
    {
      id: 7,
      name: "Next.Js",
      active: 3,
      inactive: 2,
    },
    {
      id: 8,
      name: "Git",
      active: 3,
      inactive: 2,
    },
  ];

  return (
    <div
      className={`max-w-screen-2xl mt-24 xl:mt-[5%] lg:mt-[15%] px-8 xl:px-16 mx-auto overflow-x-hidden `}
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
          <div className=" flex flex-col justify-center items-center gap-6 w-full max-w-3xl">
            <div className="w-[240px] h-[240px] rounded-full p-4 hover:shadow-2xl hover:bg-slate-300 duration-75  ease-in-out">
              <Image
                src="/about_logo_4.png"
                width={200}
                height={200}
                alt=""
                className="hover:-translate-y-1 hover:translate-x-1 duration-1000 ease-in-out"
              />
            </div>
            <div className="flex gap-3 text-3xl lg:text-5xl font-bold tracking-wider pt-10">
              <p className="text-[#445964]">Abhishek</p>
              <p
                style={{
                  color: primary2,
                }}
              >
                Kumbhani
              </p>
            </div>
            <p
              className={`text-center text-base lg:text-lg font-medium tracking-normal leading-8 lg:leading-relaxed`}
              style={{
                color: primary1,
              }}
            >
              I'm Abhishek Kumbhani 👋, a front-end developer passionate about
              user-friendly websites with a focus on aesthetics, responsiveness,
              and seamless online experiences.
            </p>
            <div className="flex gap-3 text-5xl font-bold tracking-wider pt-6">
              <p
                style={{
                  color: primary2,
                }}
              >
                Hard
              </p>
              <p className="text-[#445964]">Skills</p>
            </div>
            <div className="grid grid-rows-1 grid-cols-1 lg:grid-rows-2 lg:grid-cols-4 md:grid-rows-4 md:grid-cols-2 lg:gap-x-44 lg:gap-y-10 md:gap-y-10 gap-y-10 w-full pt-10">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.id}
                  className="flex flex-col items-center gap-2"
                  initial={{ opacity: 0, y: 100 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    transition: {
                      type: "spring",
                      duration: 2,
                    },
                  }}
                >
                  <p
                    className="text-xl font-semibold"
                    style={{
                      color: primary1,
                    }}
                  >
                    {skill.name}
                  </p>
                  <div className="flex justify-center items-center gap-1">
                    {Array.from({ length: skill.active }, (_, i) => (
                      <motion.div
                        initial={{ opacity: 0, x: -100 }}
                        animate={{
                          opacity: 1,
                          x: 0,
                          transition: {
                            type: "spring",
                            duration: 3,
                          },
                        }}
                      >
                        <ActiveRing fill={primary1} />
                      </motion.div>
                    ))}
                    {Array.from({ length: skill.inactive }, (_, i) => (
                      <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        animate={{
                          opacity: 1,
                          x: 0,
                          transition: {
                            type: "spring",
                            duration: 3,
                          },
                        }}
                      >
                        <InActiveRing fill={primary1} />
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </ScrollAnimationWrapper>
      <div className="h-10 lg:h-0" />
    </div>
  );
}
