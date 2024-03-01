import { darkPrimary1, lightPrimary1 } from "@/constants/color";
import { CloseIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  IconButton,
  Switch,
  useColorMode,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { Roboto } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { FaUserAstronaut } from "react-icons/fa6";
import { GoHomeFill } from "react-icons/go";
import { GrContact } from "react-icons/gr";
import { HiDocumentDuplicate } from "react-icons/hi2";
import { MdWork } from "react-icons/md";
import { RiMenu3Fill, RiServiceFill } from "react-icons/ri";
import { WiMoonrise, WiSunrise } from "react-icons/wi";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

const navLinks = [
  {
    name: "Home",
    href: "/",
    icon: <GoHomeFill size={25} />,
  },
  {
    name: "About",
    href: "/about",
    icon: <FaUserAstronaut size={22} />,
  },
  // {
  //   name: "Portfolio",
  //   href: "/portfolio",
  //   icon: <MdWork size={25} />,
  // },
  {
    name: "Techs",
    href: "/techs",
    icon: <RiServiceFill size={25} />,
  },
  {
    name: "Experience",
    href: "/testimonial",
    icon: <HiDocumentDuplicate size={25} />,
  },
  {
    name: "contact",
    href: "/contact",
    icon: <GrContact size={22} />,
  },
];

function Header({ handleChange }: { handleChange: (x: boolean) => void }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef(null);

  const [activeLink, setActiveLink] = useState<any>("");

  const [isScrolled, setIsScrolled] = useState(false);

  const { colorMode, toggleColorMode } = useColorMode();

  const primary1 = useColorModeValue(lightPrimary1, darkPrimary1);

  const headerBg = useColorModeValue("white", "#1A202C");

  const [deviceType, setDeviceType] = useState(0);

  useEffect(() => {
    fetch("/api/device")
      .then((response) => response.json())
      .then((data) => {
        setDeviceType(data.deviceType);
      });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
  }, []);

  const router = useRouter();

  useEffect(() => {
    const path = router.asPath;

    setActiveLink(path);
  }, [router]);

  return (
    <header
      className={`fixed top-0 w-full z-30 duration-700 ${
        isScrolled ? "shadow-md" : ""
      }`}
      style={{ backgroundColor: headerBg }}
    >
      {/* {deviceType ? (
        <AnimatedCursor
          innerSize={10}
          outerSize={10}
          color={colorMode === "light" ? "68, 89, 100" : "255,255,255"}
          outerAlpha={0.2}
          innerScale={0.7}
          outerScale={5}
          clickables={[
            "a",
            'input[type="text"]',
            'input[type="email"]',
            'input[type="number"]',
            'input[type="submit"]',
            'input[type="image"]',
            "label[for]",
            "select",
            "textarea",
            "button",
            ".link",
          ]}
        />
      ) : (
        <></>
      )} */}
      <nav className="max-w-screen-2xl px-4 sm:px-8 lg:px-16 mx-auto grid grid-cols-1 lg:grid-cols-3">
        <div
          className="flex items-center justify-between lg:col-span-1"
          style={{
            filter: isOpen ? "blur(2px)" : "none",
            transition: "filter 0.3s ease-in-out",
          }}
        >
          <div
            className="flex items-center gap-0 lg:gap-4 cursor-pointer"
            onClick={() => router.push("/")}
          >
            <Image src="/logo.png" width={60} height={60} alt="logo" />
            <p
              className={` font-extrabold text-[18px] md:text-2xl lg:text-2xl xl:text-3xl flex-nowrap ${roboto.className}`}
              style={{
                color: primary1,
              }}
            >
              Abhishek Kumbhani
            </p>
          </div>
          <IconButton
            aria-label="Open Menu"
            ref={btnRef}
            icon={<RiMenu3Fill />}
            bg="#445964"
            color="#FFFFFF"
            _hover={{
              bg: "#445964",
              color: "#FFFFFF",
            }}
            opacity={0.6}
            size={{
              base: "sm",
              lg: "md",
            }}
            display={{
              base: "flex",
              lg: "none",
            }}
            onClick={() => {
              onOpen();
              handleChange(true);
            }}
          />
        </div>

        <ul
          className={`col-start-2 lg:col-start-3 justify-end gap-4 xl:gap-10 md:gap-5 items-center  text-lg lg:text-xl font-medium hidden lg:flex ${roboto.className}`}
          style={{
            color: primary1,
          }}
        >
          {navLinks.map((link) => (
            <li
              key={link.name}
              style={{
                textDecoration: activeLink === link.href ? "underline" : "",
                textDecorationThickness: activeLink === link.href ? "2px" : "",
                textUnderlineOffset: activeLink === link.href ? "5px" : "",
                transition: "all 0.3s ease-in-out",
              }}
              className="capitalize"
            >
              <Link href={link.href}>{link.name}</Link>
            </li>
          ))}
          <Flex onClick={toggleColorMode} cursor={"pointer"}>
            <IconButton
              aria-label="Toggle Color Mode"
              variant="ghost"
              size="sm"
              _hover={{
                bg:
                  colorMode === "dark"
                    ? "blue.500!important"
                    : "yellow.400!important",
              }}
              bg={
                colorMode === "dark"
                  ? "blue.500!important"
                  : "yellow.400 !important"
              }
              color={"white"}
            >
              {colorMode === "dark" ? (
                <WiMoonrise size={25} />
              ) : (
                <WiSunrise size={25} />
              )}
            </IconButton>
          </Flex>
        </ul>

        <Drawer isOpen={isOpen} onOpen={onOpen} onClose={onClose}>
          <Box display={"flex"} justifyContent={"flex-end"} p={5}>
            <CloseIcon
              onClick={() => {
                handleChange(false);
                onClose();
              }}
            />
          </Box>
          <Box display={"flex"} justifyContent={"center"} px={10}>
            <ul
              className={`flex-col flex items-center text-lg  font-medium ${roboto.className} `}
              style={{
                color: primary1,
              }}
            >
              {navLinks.map((link) => (
                <li
                  key={link.name}
                  className="w-full h-16 flex gap-3 items-center capitalize"
                >
                  {link.icon}
                  <Link
                    href={link.href}
                    onClick={() => {
                      onClose();
                      handleChange(false);
                    }}
                    style={{
                      textDecoration:
                        activeLink === link.href ? "underline" : "",
                      textDecorationThickness:
                        activeLink === link.href ? "2px" : "",
                      textUnderlineOffset:
                        activeLink === link.href ? "5px" : "",
                      transition: "all 0.3s ease-in-out",
                    }}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <Flex
                justifyContent={"center"}
                alignItems={"center"}
                gap={4}
                pt={3}
              >
                <WiSunrise size={25} />
                <Switch
                  isChecked={colorMode === "dark"}
                  onChange={toggleColorMode}
                  size="md"
                  border="black"
                />
                <WiMoonrise size={25} />
              </Flex>
            </ul>
          </Box>
        </Drawer>
      </nav>
    </header>
  );
}

export default Header;

const Drawer = ({ isOpen, children }: any) => {
  const { colorMode } = useColorMode();

  return (
    <div
      className={`fixed top-0 right-0 w-56 h-full shadow-md transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } transition-transform duration-300 ease-in-out`}
      style={{
        boxShadow: isOpen
          ? colorMode === "light"
            ? "20px 20px 50px rgba(0, 0, 0, 0.05), -10px -10px 50px rgba(255, 255, 255, 0.7)"
            : "20px 20px 50px rgba(0, 0, 0, 0.05), -10px -10px 50px rgba(10, 10, 10, 0.7)"
          : "none",
        borderRadius: "15px",
        backgroundColor: colorMode === "light" ? "white" : "#1A202C",
      }}
    >
      {children}
    </div>
  );
};
