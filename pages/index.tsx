import ButtonPrimary from "@/components/Misc/ButtonPrimary";
import ScrollAnimationWrapper from "@/components/ScrollAnimation";
import Typewriter from "@/components/Typewriter";
import { Github, Instagram, Linkedin } from "@/constants/Icons/SocialLogo";
import getScrollAnimation from "@/utils/getScrollAnimation";
import { motion } from "framer-motion";
import { Roboto } from "next/font/google";
import { useRouter } from "next/router";
import { useMemo } from "react";
import { useLottie } from "lottie-react";
import animation from "../constants/animations/home_illustration.json";
import Image from "next/image";
import { useBreakpointValue, useColorModeValue } from "@chakra-ui/react";
import {
  darkPrimary1,
  darkPrimary2,
  lightPrimary1,
  lightPrimary2,
} from "@/constants/color";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export default function Home({ isOpen }: { isOpen: boolean }) {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  const primary1 = useColorModeValue(lightPrimary1, darkPrimary1);

  const primary2 = useColorModeValue(lightPrimary2, darkPrimary1);

  const textColor = useColorModeValue(lightPrimary1, "#c0c0c0");

  const height = useBreakpointValue({
    base: 350,
    lg: 600,
    md: 450,
    sm: 400,
  });

  const width = useBreakpointValue({
    base: 600,
    xl: 705,
    lg: 550,
    md: 600,
  });

  const router = useRouter();

  const options = {
    animationData: animation,
    loop: true,
  };

  const style = {
    height: height,
    width: width,
  };

  const { View } = useLottie(options, style);

  const socialMedia = [
    {
      id: 1,
      alt: "github",
      href: "",
      src: <Github height={30} width={30} fill={primary2} />,
    },
    {
      id: 2,
      alt: "linkedin",
      href: "",
      src: <Linkedin fill={primary2} />,
    },
    {
      id: 3,
      alt: "instagram",
      href: "",
      src: <Instagram fill={primary2} />,
    },
  ];

  return (
    <div
      className="max-w-screen-2xl mt-12 xl:mt-[5%] lg:mt-[15%] px-8 xl:px-16 mx-auto overflow-hidden"
      style={{
        filter: isOpen ? "blur(2px)" : "none",
        transition: "filter 0.3s ease-in-out",
      }}
    >
      <ScrollAnimationWrapper className="flex justify-center items-center">
        <motion.div
          className="flex lg:flex-row flex-col-reverse justify-between gap-8 py-6 sm:py-0 w-full"
          variants={scrollAnimation}
        >
          <div className=" flex flex-col pt-0 lg:pt-20 md:pt-0 justify-center items-center lg:items-start md:items-center sm:items-start gap-8 lg:gap-20 md:gap-8 w-full lg:w-[70%] row-start-2 sm:row-start-1 text-[#445964]">
            <div className="flex flex-col justify-center items-center lg:items-start md:items-start sm:items-start">
              <p
                className={`text-md ${roboto.className}`}
                style={{
                  color: primary1,
                }}
              >
                Hello people,
              </p>
              <h1
                className={`flex items-center text-3xl lg:text-5xl font-extrabold text-black-600 leading-normal break-words ${roboto.className} text-center lg:text-left md:text-left sm:text-left gap-1.5 lg:gap-3.5 `}
              >
                I'm a
              </h1>
              <h1
                className={`flex items-center h-8 lg:h-14 text-3xl lg:text-5xl font-extrabold text-black-600 leading-normal break-words ${roboto.className} text-center lg:text-left md:text-left sm:text-left gap-1.5 lg:gap-3.5 `}
                style={{
                  color: primary2,
                }}
              >
                {" "}
                <Typewriter
                  texts={["Programmer", "Web Developer", "React Developer"]}
                />
              </h1>
              <p
                className={`text-lg text-center font-medium pt-5 ${roboto.className}`}
                style={{
                  color: textColor,
                }}
              >
                Welcome to my portfolio website
              </p>
            </div>
            <ButtonPrimary
              className="w-fit capitalize"
              onClick={() => {
                router.push("/about");
              }}
            >
              About Me
            </ButtonPrimary>
            <div className="flex items-center gap-6 justify-center w-fit lg:w-[165px] xl:w-fit">
              {socialMedia.map((social) => (
                <div key={social.id}>{social.src}</div>
              ))}
            </div>
          </div>
          <div className="flex w-full justify-center xl:justify-end">
            <motion.div
              className="h-full w-full contents"
              variants={scrollAnimation}
            >
              {View}
            </motion.div>
          </div>
        </motion.div>
      </ScrollAnimationWrapper>
    </div>
  );
}
