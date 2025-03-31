import Particles from "@/components/Misc/ParticleComp";
import ScrollAnimationWrapper from "@/components/ScrollAnimation";
import { DoubleQuotes } from "@/constants/Icons/Icons";
import { darkPrimary1, lightPrimary2 } from "@/constants/color";
import getScrollAnimation from "@/utils/getScrollAnimation";
import {
  Avatar,
  Box,
  Step,
  StepDescription,
  StepIndicator,
  Stepper,
  StepSeparator,
  StepTitle,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Roboto } from "next/font/google";
import { useMemo } from "react";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

function Experience({ isOpen }: { isOpen: boolean }) {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  const primary2 = useColorModeValue(lightPrimary2, darkPrimary1);

  return (
    <div
      className={`max-w-screen-2xl mt-24 xl:mt-[5%] lg:mt-[15%] px-8 xl:px-16 mx-auto overflow-x-hidden `}
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
          <Box className="flex items-center flex-col w-2/3 justify-center pt-10">
            <Stepper
              index={Experiences.length - 1}
              orientation="vertical"
              height="auto"
              gap="0"
            >
              {Experiences.map((exp, index) => (
                <Step key={index}>
                  <StepIndicator>
                    <Avatar
                      name={exp.companyName}
                      src={exp.image}
                      bg={exp.image ? "" : "#445964"}
                      color={exp.image ? "" : "white"}
                    />
                  </StepIndicator>

                  <Box className="pl-5 pb-10 w-full">
                    <Box className="flex flex-col justify-start items-start gap-1 w-full">
                      <Box className="flex justify-between w-full">
                        <StepTitle className="text-xl">
                          {exp.companyName}
                        </StepTitle>
                        <Text color={primary2}>{exp.role}</Text>
                      </Box>
                      <Text color={primary2}>
                        {exp.joinDate} - {exp.leaveDate}
                      </Text>
                    </Box>
                    <StepDescription className="text-base text-justify py-2">
                      {exp.description}
                    </StepDescription>
                    <Box className="flex justify-start items-center gap-3 w-full">
                      <Text>
                        <span>Worked on:</span>{" "}
                        <span className="text-base">
                          {exp.techStack.join(", ")}
                        </span>
                      </Text>
                    </Box>
                  </Box>
                  <StepSeparator
                    style={{
                      background: primary2,
                      zIndex: -1,
                    }}
                  />
                </Step>
              ))}
            </Stepper>
          </Box>
          <DoubleQuotes fill={primary2} />
          <h1 className="text-[#445964] font-bold text-xl lg:text-2xl max-w-xl text-center">
            “Learning is the only thing that the mind never gets tired of, is
            never afraid of and never regrets”
          </h1>
          <h1
            className=" text-2xl lg:text-4xl font-extrabold"
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

export default Experience;

const Experiences = [
  {
    id: 1,
    companyName: "Emet Technology",
    companyUrl: "#",
    joinDate: "March 2024",
    leaveDate: "Present",
    role: "Software Engineer (Full-time)",
    description:
      "Built and managed a multi-site architecture using a single monorepo, supporting five websites with centralized codebase control. Developed custom applications in Contentful CMS, optimized content management workflows, and collaborated with cross-functional teams to translate business requirements into technical solutions.",
    techStack: [
      "ReactJs",
      "Contentful CMS",
      "NextJs",
      "SCSS",
      "Tailwind Css",
      "Redux",
      "Algolia",
      "SEO",
      "Typescript",
      "Javascript",
    ],
    image: "",
  },
  {
    id: 2,
    companyName: "Kuberns",
    companyUrl: "#",
    joinDate: "Sept. 2023",
    leaveDate: "Present",
    role: "Front-end Engineer (Part-time)",
    description:
      "Developed a PaaS based project deployment tool that enables rapid project deployment on servers. Integrated GitHub & Google OAuth authentication, designed a fully responsive UI, and built real-time application monitoring dashboards using React and WebSockets.",
    techStack: [
      "ReactJs",
      "NextJs",
      "Redux",
      "WebSockets",
      "Tailwind Css",
      "GSAP",
      "SEO",
      "Typescript",
      "Javascript",
    ],
    image: "/kuberns_logo.svg",
  },
  {
    id: 3,
    companyName: "Vrutti Technologies",
    companyUrl: "#",
    joinDate: "Feb. 2023",
    leaveDate: "Feb. 2024",
    role: "Software Developer",
    description:
      "Developed a SaaS product using ReactJS for over-the-air firmware updates for IoT devices. Integrated Socket.IO for real-time log updates, designed a unified platform to manage devices across multiple LNSs, and built an offline desktop application using ElectronJS and ReactJS.",
    techStack: [
      "ReactJs",
      "NextJs",
      "ElectronJS",
      "Redux",
      "WebSockets",
      "Tailwind Css",
      "SEO",
      "Typescript",
      "Javascript",
    ],
    image: "/vrutti_logo.jpeg",
  },
];
