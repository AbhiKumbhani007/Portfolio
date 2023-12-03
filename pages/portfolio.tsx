import ScrollAnimationWrapper from "@/components/ScrollAnimation";
import {
  darkPrimary1,
  darkPrimary2,
  lightPrimary1,
  lightPrimary2,
} from "@/constants/color";
import getScrollAnimation from "@/utils/getScrollAnimation";
import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Text,
  useColorMode,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { color, motion } from "framer-motion";
import { Roboto } from "next/font/google";
import { useEffect, useMemo, useState } from "react";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

function portfolio({ isOpen: open }: { isOpen: boolean }) {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  const primary1 = useColorModeValue(lightPrimary1, darkPrimary1);

  const primary2 = useColorModeValue(lightPrimary2, darkPrimary1);

  const detailsDesc = useColorModeValue(lightPrimary1, "#FFFFFF");

  const { isOpen, onOpen, onClose } = useDisclosure();

  const [hoveredDiv, setHoveredDiv] = useState<null | number>(null);

  const [clickedDiv, setClickedDiv] = useState<null | number>(null);

  const handleMouseEnter = (divId: number) => setHoveredDiv(divId);

  const { colorMode } = useColorMode();

  const [deviceType, setDeviceType] = useState(0);

  useEffect(() => {
    fetch("/api/device")
      .then((response) => response.json())
      .then((data) => {
        setDeviceType(data.deviceType);
      });
  }, []);

  const handleDivClick = (divId: number) => {
    setClickedDiv(divId);
    onOpen();
  };

  const handleMouseLeave = () => setHoveredDiv(null);

  return (
    <div
      className={`max-w-screen-2xl mt-12 xl:mt-[8%] lg:mt-[15%] px-8 xl:px-16 mx-auto overflow-x-hidden`}
      style={{
        filter: open ? "blur(2px)" : "none",
        transition: "filter 0.3s ease-in-out",
      }}
    >
      <ScrollAnimationWrapper
        className={`flex justify-start items-center ${roboto.className}`}
      >
        <motion.div
          variants={scrollAnimation}
          initial={{
            y: 150,
            opacity: 0,
          }}
          animate={{
            y: 50,
            opacity: 1,
            transition: {
              type: "spring",
              duration: 2,
            },
          }}
          className={`flex w-full flex-col justify-center items-start gap-10 ${roboto.className}`}
        >
          <div className="flex flex-col justify-center items-start lg:items-start gap-6 lg:gap-16 w-full max-w-3xl">
            <div className="flex flex-col justify-start items-start">
              <h1
                className="text-4xl lg:text-5xl font-extrabold"
                style={{
                  color: primary2,
                }}
              >
                My
              </h1>
              <div className="flex flex-col lg:flex-row justify-center items-start lg:items-end lg:gap-20 text-[#445964] max-w-2xl">
                <h1 className="text-4xl lg:text-5xl font-extrabold ">
                  Portfolio
                </h1>
                <h4
                  className="text-lg lg:text-xl font-semibold"
                  style={{
                    color: primary1,
                  }}
                >
                  These are some of the works and projects I have already
                  carried out
                </h4>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center w-full pt-0 lg:pt-10">
            <div
              className={`flex  w-full flex-col items-center justify-center ${roboto.className}`}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div
                  onClick={() => handleDivClick(1)}
                  onMouseEnter={() => handleMouseEnter(1)}
                  onMouseLeave={handleMouseLeave}
                  className={`flex relative justify-center items-center rounded-2xl shadow-md row-span-3 lg:row-span-6 w-80 xl:w-96 h-[180px] lg:h-[220px] select-none cursor-pointer`}
                >
                  <div
                    style={{
                      backgroundImage: "url('/fuota-login.png')",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      filter: hoveredDiv === 1 ? "brightness(20%)" : "none",
                      transition: "filter 0.5s ease-in-out",
                      width: "100%",
                      height: "100%",
                      position: "absolute",
                      borderRadius: "16px",
                    }}
                  ></div>
                  {deviceType && hoveredDiv === 1 ? (
                    <OverlayComponent divId={1} />
                  ) : (
                    <></>
                  )}
                </div>
                <div
                  onClick={() => handleDivClick(2)}
                  onMouseEnter={() => handleMouseEnter(2)}
                  onMouseLeave={handleMouseLeave}
                  className={`flex relative justify-center items-center p-6 rounded-2xl shadow-md row-span-3 w-80 xl:w-96 h-[180px] select-none cursor-pointer`}
                >
                  <div
                    style={{
                      backgroundImage: "url('/bpt-dashboard.png')",
                      backgroundSize: "100%",
                      backgroundPositionY: "top",
                      backgroundPositionX: "center",
                      filter: hoveredDiv === 2 ? "brightness(20%)" : "none",
                      transition: "filter 0.5s ease-in-out",
                      width: "100%",
                      height: "100%",
                      position: "absolute",
                      borderRadius: "16px",
                    }}
                  ></div>
                  {deviceType && hoveredDiv === 2 ? (
                    <OverlayComponent divId={2} />
                  ) : (
                    <></>
                  )}
                </div>
                <div
                  onClick={() => handleDivClick(3)}
                  onMouseEnter={() => handleMouseEnter(3)}
                  onMouseLeave={handleMouseLeave}
                  className={`flex relative justify-center items-center bg-[#DFDFDF] p-6 rounded-2xl shadow-md row-span-3 lg:row-span-6 w-80 xl:w-96 h-[180px] lg:h-[220px] select-none cursor-pointer`}
                >
                  <div
                    style={{
                      backgroundImage: "url('/helperplace.jpg')",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      filter: hoveredDiv === 3 ? "brightness(20%)" : "none",
                      transition: "filter 0.5s ease-in-out",
                      width: "100%",
                      height: "100%",
                      position: "absolute",
                      borderRadius: "14px",
                    }}
                  ></div>
                  {deviceType && hoveredDiv === 3 ? (
                    <OverlayComponent divId={3} />
                  ) : (
                    <></>
                  )}
                </div>
                <div
                  onClick={onOpen}
                  className={`flex justify-center items-center  bg-[#263138] text-[#DFDFDF] p-6 rounded-2xl shadow-md row-span-3 lg:row-span-6 w-80 xl:w-96 h-[180px] lg:h-[220px] select-none cursor-pointer`}
                >
                  Content 4
                </div>
                <div
                  onClick={onOpen}
                  className={`flex justify-center items-center bg-[#DFDFDF] p-6 rounded-2xl shadow-md row-span-3 w-80 xl:w-96 h-[180px] select-none cursor-pointer`}
                >
                  Content 5
                </div>
                <div
                  onClick={onOpen}
                  className={`flex justify-center items-center bg-[#445964] text-[#FFFFFF] p-6 rounded-2xl shadow-md row-span-3 w-80 xl:w-96 h-[180px] select-none cursor-pointer`}
                >
                  Content 6
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </ScrollAnimationWrapper>
      <Drawer onClose={onClose} isOpen={isOpen} placement="bottom">
        <DrawerOverlay />
        <DrawerContent borderTopRadius={"16px"}>
          <DrawerCloseButton autoFocus={false} />
          <DrawerHeader className="flex flex-col lg:flex-row w-full items-start lg:items-end gap-0 lg:gap-2">
            <Text
              className="text-2xl"
              style={{
                color: colorMode === "light" ? primary1 : "#FFFFFF",
              }}
            >
              {clickedDiv && detailedContent[clickedDiv - 1].title}
            </Text>
            <Text
              className="text-base font-medium"
              style={{
                color: primary2,
              }}
            >
              {clickedDiv && detailedContent[clickedDiv - 1].tagLine}
            </Text>
          </DrawerHeader>
          <DrawerBody maxH={"90vh"} overflowY={"auto"}>
            {clickedDiv &&
              detailedContent[clickedDiv - 1].desc.map((item, index) => (
                <Text
                  key={index}
                  color={detailsDesc}
                  className={`text-sm ${
                    colorMode === "light" && "font-semibold"
                  } lg:text-md opacity-70 ${
                    colorMode === "dark" ? "tracking-wider" : "tracking-wide"
                  }   ${roboto.className} pt-4`}
                >
                  {item}
                </Text>
              ))}
            <Box className="h-6" />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
      <div className="h-16" />
    </div>
  );
}

export default portfolio;

const OverlayComponent = ({ divId }: { divId: number }) => {
  const contentMap = [
    {
      id: 1,
      title: "Fuota.io",
      desc: "A portal for Managing Firmware Updates for LoRaWAN IoT Devices",
    },
    {
      id: 2,
      title: "BPT",
      desc: "An Offline desktop app, to generate secure & upload ready binary files",
    },
    {
      id: 3,
      title: "HelperPlace",
      desc: "HelperPlace connects employers and domestic helpers in just a few clicks.",
    },
    { id: 4, title: "Fuota.io", desc: "" },
    { id: 5, title: "Fuota.io", desc: "" },
    { id: 6, title: "Fuota.io", desc: "" },
  ];

  return (
    <Box
      className={`overlay flex flex-col justify-center items-center w-full gap-2 relative ${roboto.className}`}
    >
      <Text className="text-white font-bold text-xl lg:text-2xl tracking-widest">
        {contentMap[divId - 1].title}
      </Text>
      <Text className="text-gray-200 font-medium text-md tracking-widest text-center w-3/4">
        {contentMap[divId - 1].desc}
      </Text>
    </Box>
  );
};

const detailedContent = [
  {
    id: 1,
    title: "Fuota.io",
    tagLine: "Firmware Update Over The Air",
    desc: [
      "FUOTA.IO is a cloud service for managing your LoRaWAN devices, built for remote firmware update as per LoRaWAN Alliance’s FUOTA Specifications.",
      "FUOTA.IO integrates with your existing LoRaWAN network server and starts working in the most secure manner without any development.",
      "Doing FUOTA on your entire batch of devices is just 3 simple steps: Enter the FUOTA session details, select the number of devices to be updated, and confirm.",
      "FUOTA.IO provides a summary of progress and success/failure rate during FUOTA sessions and allows you to export the report of each session.",
      "FUOTA.IO supports Delta Binary update to reduce firmware update size, and integrates with your software IDE to automatically generate signed and encrypted Delta builds.",
      "FUOTA.IO offers features beyond FUOTA process, like product management, generating unique credentials in factory settings, and managing LoRaWAN devices across multiple LNS environments.",
      "With FUOTA.IO, ensure the longevity and security of your IoT devices with efficient, reliable, and secure firmware updates.",
    ],
  },
  {
    id: 2,
    title: "BPT",
    tagLine: "Binary Preparation Tool",
    desc: [
      "BPT is a cutting-edge desktop application for enhancing the security of binary files for IoT devices.",
      "Initiate security tasks by creating organized projects and release channels, streamlining the process.",
      "Easily configure critical security aspects like encryption and integrity checks with a user-friendly interface.",
      "Protect binary files with advanced encryption, ensuring confidentiality during transmission.",
      "Implement integrity checks to prevent tampering and ensure the authenticity of your binary files.",
      "Optimize updates with delta generation, enhancing the efficiency of data transmission to IoT devices.",
      "Secure your files with digital signatures for heightened authentication and trust.",
      "Choose between direct server storage or local machine storage for your secured binary files.",
      "Transform unsecured firmware into secure versions with applied configured settings, ready for safe IoT deployment.",
    ],
  },
  {
    id: 3,
    title: "HelperPlace",
    tagLine:
      "HelperPlace connects employers and domestic helpers in Hong Kong, Macau Singapore, United Arab Emirates & Saudi Arabia, in just a few clicks.",
    desc: [
      "Contributed significantly to the HelperPlace project, a leading Hong Kong and Singapore platform",
      "Aimed to enhance the mobile user experience for the platform.",
      "Converted the job details page into a mobile-friendly format using Google AMP.",
      "Achieved notable reduction in loading times for users with low-end devices.",
      "Successfully demonstrated the new feature's performance, leading to its approval and further development.",
      "Currently mentoring an intern to extend Google AMP across all features of HelperPlace.",
      "Ensured uniform and efficient user experience across HelperPlace.",
      "Enhanced overall user satisfaction and platform usability, adhering to HelperPlace's commitment to quality service.",
    ],
  },
];
