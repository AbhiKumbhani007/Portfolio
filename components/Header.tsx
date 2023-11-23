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
import { useRef } from "react";
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
    name: "sobre",
    href: "/sobre",
    icon: <FaUserAstronaut size={22} />,
  },
  {
    name: "portifólio",
    href: "/portifólio",
    icon: <MdWork size={25} />,
  },
  {
    name: "serviços",
    href: "/serviços",
    icon: <RiServiceFill size={25} />,
  },
  {
    name: "resumo",
    href: "/resumo",
    icon: <HiDocumentDuplicate size={25} />,
  },
  {
    name: "contato",
    href: "/contato",
    icon: <GrContact size={22} />,
  },
];

function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef(null);

  const imageWidthHeight = useBreakpointValue({
    base: 30,
    lg: 50,
    md: 40,
  });

  return (
    <header className={"fixed top-0 w-full z-30 bg-white"}>
      <nav className="max-w-screen-2xl px-4 sm:px-8 lg:px-16 mx-auto grid grid-cols-1 lg:grid-cols-3 py-3 sm:py-4">
        <div
          className="flex items-center justify-between lg:col-span-1"
          style={{
            filter: isOpen ? "blur(2px)" : "none",
            transition: "filter 0.6s ease-in-out",
          }}
        >
          <div className="flex items-center gap-4">
            <Image
              src="/icons/logo.svg"
              alt="logo"
              width={imageWidthHeight}
              height={imageWidthHeight}
              layout="intrinsic"
            />
            <p
              className={`text-[#445964] font-extrabold text-xl xl:text-3xl flex-nowrap ${roboto.className}`}
            >
              Matheus Campos
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
            onClick={onOpen}
          />
        </div>

        <ul
          className={`col-start-2 lg:col-start-3 justify-end gap-4 xl:gap-10 md:gap-5 items-center text-[#445964] text-lg lg:text-xl font-medium hidden lg:flex ${roboto.className}`}
        >
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link href={link.href}>{link.name}</Link>
            </li>
          ))}
        </ul>
        <Drawer
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerContent
            bg={"#f8f8f8"}
            style={{
              boxShadow:
                "20px 20px 50px rgba(0, 0, 0, 0.05), -20px -20px 50px rgba(255, 255, 255, 0.7)",
              borderRadius: "15px",
            }}
          >
            <DrawerCloseButton />
            <DrawerBody display={"flex"} justifyContent={"center"} p={10}>
              <ul
                className={`flex-col flex items-center text-[#445964] text-lg  font-medium ${roboto.className}`}
              >
                {navLinks.map((link) => (
                  <li
                    key={link.name}
                    className="w-full h-16 flex gap-3 items-center"
                  >
                    {link.icon}
                    <Link href={link.href}>{link.name}</Link>
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
