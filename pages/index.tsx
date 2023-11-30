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
import { useBreakpointValue } from "@chakra-ui/react";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export default function Home({ isOpen }: { isOpen: boolean }) {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  const height = useBreakpointValue({
    base: "auto",
    lg: 600,
    md: "auto",
  });

  const router = useRouter();

  const options = {
    animationData: animation,
    loop: true,
  };

  const style = {
    height: height,
    width: 705,
  };

  const { View } = useLottie(options, style);

  const socialMedia = [
    {
      id: 1,
      alt: "github",
      href: "",
      src: <Github height={30} width={30} />,
    },
    {
      id: 2,
      alt: "linkedin",
      href: "",
      src: <Linkedin />,
    },
    {
      id: 3,
      alt: "instagram",
      href: "",
      src: <Instagram />,
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
          className="flex lg:flex-row flex-col-reverse justify-between gap-8 py-6 sm:py-16 w-full"
          variants={scrollAnimation}
        >
          <div className=" flex flex-col justify-end items-center lg:items-start md:items-start sm:items-start gap-16 lg:gap-20 w-full lg:w-[70%] row-start-2 sm:row-start-1 text-[#445964]">
            <div className="flex flex-col justify-center items-center lg:items-start md:items-start sm:items-start">
              <p className={`text-md ${roboto.className}`}>Hello people,</p>
              <h1
                className={`flex items-center text-3xl lg:text-5xl font-extrabold text-black-600 leading-normal break-words ${roboto.className} text-center lg:text-left md:text-left sm:text-left gap-1.5 lg:gap-3.5 `}
              >
                I'm a
              </h1>
              <h1
                className={`flex items-center h-8 lg:h-14 text-3xl lg:text-5xl font-extrabold text-black-600 leading-normal break-words ${roboto.className} text-center lg:text-left md:text-left sm:text-left gap-1.5 lg:gap-3.5 `}
              >
                {" "}
                <Typewriter
                  texts={["Programmer", "Web Developer", "React Developer"]}
                />
              </h1>
              <p className={`text-lg font-medium pt-3 ${roboto.className}`}>
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
          <div className="flex w-full justify-end">
            <motion.div
              className="h-full w-full contents"
              variants={scrollAnimation}
              style={{
                width: 705,
                height: 600,
              }}
            >
              {/* <Image
                src="https://svgshare.com/i/10F5.svg"
                width={705}
                height={600}
                alt="art"
              /> */}
              {View}
            </motion.div>
          </div>
        </motion.div>
      </ScrollAnimationWrapper>
    </div>
  );
}
