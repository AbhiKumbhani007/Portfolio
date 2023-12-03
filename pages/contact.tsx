import Particles from "@/components/Misc/ParticleComp";
import ScrollAnimationWrapper from "@/components/ScrollAnimation";
import getScrollAnimation from "@/utils/getScrollAnimation";
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Roboto } from "next/font/google";
import { useMemo } from "react";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

function Contact({ isOpen }: { isOpen: boolean }) {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  return (
    <div
      className={`max-w-screen-2xl mt-24 xl:mt-[7%] lg:mt-[15%] px-8 xl:px-16 mx-auto overflow-x-hidden `}
      style={{
        filter: isOpen ? "blur(2px)" : "none",
        transition: "filter 0.3s ease-in-out",
      }}
    ><Particles />
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
          className={`flex flex-col w-full justify-center items-center ${roboto.className}`}
        >
          <div className=" flex flex-col justify-center items-center w-full max-w-3xl">
            <div className="flex gap-3 text-3xl lg:text-5xl font-bold tracking-wider">
              <p className="text-[#445964]">Contacte</p>
              <p className="text-[#263138]">Me</p>
            </div>
          </div>
          <div className="flex flex-col w-full pt-16 lg:pt-20 max-w-xl gap-8 pb-10">
            <FormControl>
              <FormLabel>
                <h5 className="text-[#445964] font-bold text-xl w-24">Name</h5>
              </FormLabel>
              <Input placeholder="David Smith" focusBorderColor="#445964" />
            </FormControl>
            <FormControl>
              <FormLabel>
                <h5 className="text-[#445964] font-bold text-xl w-24">Email</h5>
              </FormLabel>
              <Input placeholder="xyz@gmail.com" focusBorderColor="#445964" />
            </FormControl>
            <FormControl>
              <FormLabel>
                <h5 className="text-[#445964] font-bold text-xl w-24">
                  Message
                </h5>
              </FormLabel>
              <Textarea
                placeholder="Please provide a short description of your business and any questions you have about our services."
                focusBorderColor="#445964"
                height={"150px"}
              />
            </FormControl>
            <Button>Submit</Button>
          </div>
        </motion.div>
        <div className="h-16" />
      </ScrollAnimationWrapper>
    </div>
  );
}

export default Contact;
