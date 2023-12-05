import Particles from "@/components/Misc/ParticleComp";
import ScrollAnimationWrapper from "@/components/ScrollAnimation";
import { DoubleQuotes } from "@/constants/Icons/Icons";
import { darkPrimary1, lightPrimary1, lightPrimary2 } from "@/constants/color";
import getScrollAnimation from "@/utils/getScrollAnimation";
import { useColorModeValue } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Roboto } from "next/font/google";
import { useMemo } from "react";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

function Testimonial({ isOpen }: { isOpen: boolean }) {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  const primary2 = useColorModeValue(lightPrimary1, darkPrimary1);

  return (
    <div
      className={`max-w-screen-2xl mt-24 xl:mt-[7%] lg:mt-[15%] px-8 xl:px-16 mx-auto overflow-x-hidden `}
      style={{
        filter: isOpen ? "blur(2px)" : "none",
        transition: "filter 0.3s ease-in-out",
      }}
    >
      <Particles />
      <ScrollAnimationWrapper
        className={`flex justify-center w-full items-center ${roboto.className}`}
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
          className={`flex flex-col justify-center w-full items-center gap-5 ${roboto.className}`}
        >
          <div className="flex flex-col justify-center items-end w-full max-w-7xl">
            <div className="flex flex-col lg:flex-row-reverse justify-end items-end max-w-xl gap-4">
              <div className="flex lg:flex-col justify-end items-end gap-3 lg:gap-0">
                <h1
                  className="text-3xl lg:text-5xl font-extrabold"
                  style={{
                    color: primary2,
                  }}
                >
                  Professional
                </h1>
                <h1 className="text-3xl lg:text-5xl font-extrabold tracking-wider text-[#445964]">
                  Experience
                </h1>
              </div>
              <h4 className="text-lg lg:text-xl font-semibold text:center lg:text-end text-[#445964] ">
                My journey is just beginning, always learning
              </h4>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row justify-center items-center w-full pt-10 lg:pt-20 gap-8 h-full">
            <div className="flex flex-col items-center bg-[#263138] p-10 rounded-2xl gap-6 ">
              <h1 className="text-[#445964] font-extrabold text-3xl">Cargo</h1>
              <p className="text-white text-center">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </p>
            </div>
            <div className="flex flex-col items-center bg-[#445964] p-10 rounded-2xl gap-6 lg:-translate-y-10">
              <h1 className="text-[#263138] font-extrabold text-3xl">Cargo</h1>
              <p className="text-white text-center">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </p>
            </div>
            <div className="flex flex-col items-center bg-[#263138] p-10 rounded-2xl gap-6 ">
              <h1 className="text-[#445964] font-extrabold text-3xl">Cargo</h1>
              <p className="text-white text-center">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </p>
            </div>
          </div>
          <DoubleQuotes fill={primary2} />
          <h1 className="text-[#445964] font-bold text-2xl max-w-xl text-center">
            “Learning is the only thing that the mind never gets tired of, is
            never afraid of and never regrets”
          </h1>
          <h1
            className="text-4xl font-extrabold"
            style={{
              color: primary2,
            }}
          >
            ~Leonardo da Vinci
          </h1>
        </motion.div>
      </ScrollAnimationWrapper>
      <div className="h-16" />
    </div>
  );
}

export default Testimonial;
