import { Logo } from "@/constants/Icons/Icons";
import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  IconButton,
  useBreakpointValue,
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
  {
    name: "Portfolio",
    href: "/portfolio",
    icon: <MdWork size={25} />,
  },
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

  // const imageWidthHeight = useBreakpointValue({
  //   base: 60,
  //   lg: 60,
  //   md: 60,
  // });

  const router = useRouter();

  useEffect(() => {
    const path = router.asPath;

    setActiveLink(path);
  }, [router]);

  return (
    <header className={"fixed top-0 w-full z-30 bg-white"}>
      <nav className="max-w-screen-2xl px-4 sm:px-8 lg:px-16 mx-auto grid grid-cols-1 lg:grid-cols-3 py-3 sm:py-4">
        <div
          className="flex items-center justify-between lg:col-span-1"
          style={{
            filter: isOpen ? "blur(2px)" : "none",
            transition: "filter 0.3s ease-in-out",
          }}
        >
          <div
            className="flex items-center gap-4 cursor-pointer"
            onClick={() => router.push("/")}
          >
            <Image
              src="https://iili.io/JxsTv0x.png"
              width={60}
              height={60}
              alt="logo"
            />
            {/* <Logo height={imageWidthHeight} width={imageWidthHeight} /> */}
            <p
              className={`text-[#445964] font-extrabold text-2xl xl:text-3xl flex-nowrap ${roboto.className}`}
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
          className={`col-start-2 lg:col-start-3 justify-end gap-4 xl:gap-10 md:gap-5 items-center text-[#445964] text-lg lg:text-xl font-medium hidden lg:flex ${roboto.className}`}
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
        </ul>
        <Drawer
          isOpen={isOpen}
          placement="right"
          onClose={() => {
            onClose();
            handleChange(false);
          }}
          finalFocusRef={btnRef}
          variant="secondary"
          size="xs"
        >
          <DrawerContent
            bg={"#f8f8f8"}
            style={{
              boxShadow:
                "20px 20px 50px rgba(0, 0, 0, 0.05), -10px -10px 50px rgba(255, 255, 255, 0.7)",
              borderRadius: "15px",
            }}
          >
            <DrawerCloseButton />
            <DrawerBody display={"flex"} justifyContent={"center"} p={10}>
              <ul
                className={`flex-col flex items-center text-[#445964] text-lg  font-medium ${roboto.className} `}
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
              </ul>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </nav>
    </header>
  );
}

export default Header;
