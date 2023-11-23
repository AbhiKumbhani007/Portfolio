import ScrollAnimationWrapper from "@/components/ScrollAnimation";
import getScrollAnimation from "@/utils/getScrollAnimation";
import { Roboto } from "next/font/google";
import Image from "next/image";
import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { ActiveRing, InActiveRing } from "@/constants/Icons";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});
export default function About({ isOpen }: { isOpen: boolean }) {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  const skills = [
    {
      id: 1,
      name: "Python",
      active: 4,
      inactive: 1,
    },
    {
      id: 2,
      name: "HTML",
      active: 4,
      inactive: 1,
    },
    {
      id: 3,
      name: "React",
      active: 3,
      inactive: 2,
    },
    {
      id: 4,
      name: "C",
      active: 2,
      inactive: 3,
    },
    {
      id: 5,
      name: "Javascript",
      active: 3,
      inactive: 2,
    },
    {
      id: 6,
      name: "CSS",
      active: 3,
      inactive: 2,
    },
    {
      id: 7,
      name: "MySQL",
      active: 3,
      inactive: 2,
    },
    {
      id: 8,
      name: "Postgres",
      active: 2,
      inactive: 3,
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
          <div className=" flex flex-col justify-center items-center gap-10 w-full max-w-3xl">
            <Image src="/icons/about.svg" width={120} height={120} alt="" />
            <div className="flex gap-3 text-3xl lg:text-5xl font-bold tracking-wider">
              <p className="text-[#445964]">Matheus</p>
              <p className="text-[#263138]">Campos</p>
            </div>
            <p className="text-center text-base lg:text-lg text-[#445964] font-medium tracking-normal leading-8 lg:leading-relaxed">
              My name is Matheus Amauri de Jesus Campos 👋 I'm from Brazil, São
              José dos Campos/SP. Studying, 4th period, Systems Analysis and
              Development at the Fatec - São José dos Campos.
            </p>
            <div className="flex gap-3 text-5xl font-bold tracking-wider pt-10">
              <p className="text-[#263138]">Hard</p>
              <p className="text-[#445964]">Skills</p>
            </div>
            <div className="grid grid-rows-1 grid-cols-1 lg:grid-rows-2 lg:grid-cols-4 md:grid-rows-4 md:grid-cols-2 lg:gap-x-44 lg:gap-y-10 md:gap-y-10 gap-y-10 w-full pt-10">
              {skills.map((skill) => (
                <div
                  key={skill.id}
                  className="flex flex-col items-center gap-2"
                >
                  <p className="text-xl font-semibold text-[#445964]">
                    {skill.name}
                  </p>
                  <div className="flex justify-center items-center gap-1">
                    {Array.from({ length: skill.active }, (_, i) => (
                      <ActiveRing />
                    ))}
                    {Array.from({ length: skill.inactive }, (_, i) => (
                      <InActiveRing />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </ScrollAnimationWrapper>
      <div className="h-16" />
    </div>
  );
}
