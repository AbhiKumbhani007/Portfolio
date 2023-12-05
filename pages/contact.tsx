import Particles from "@/components/Misc/ParticleComp";
import ScrollAnimationWrapper from "@/components/ScrollAnimation";
import { darkPrimary1, lightPrimary2 } from "@/constants/color";
import getScrollAnimation from "@/utils/getScrollAnimation";
import {
  Box,
  Button,
  Input,
  Textarea,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import { ValidationError, useForm } from "@formspree/react";
import { motion } from "framer-motion";
import { Roboto } from "next/font/google";
import { useEffect, useMemo, useRef } from "react";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

function Contact({ isOpen }: { isOpen: boolean }) {
  const [state, handleSubmit] = useForm("myyqrgrn");

  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  const primary2 = useColorModeValue(lightPrimary2, darkPrimary1);

  const formRef = useRef<any>(null);

  const toast = useToast();

  useEffect(() => {
    if (state.succeeded) {
      toast({
        title: "Submitted.",
        description: "I will get back to you soon.",
        status: "success",
        duration: 9000,
        isClosable: true,
        variant: "left-accent",
        position:"bottom-right"
      });
      formRef.current.reset();
    }
  }, [state]);

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
              <p className="text-[#445964]">Contact</p>
              <p
                style={{
                  color: primary2,
                }}
              >
                Me
              </p>
            </div>
          </div>
          <div className="flex flex-col w-full pt-16 lg:pt-20 max-w-xl gap-8 pb-10">
            <form
              onSubmit={(e) => {
                handleSubmit(e);
              }}
              ref={formRef}
            >
              <label htmlFor="Name">Name</label>
              <Box className="h-3" />
              <Input
                focusBorderColor="#445964"
                id="Name"
                type="text"
                name="name"
                placeholder="David Smith"
              />
              <ValidationError
                prefix="Name"
                field="Name"
                errors={state.errors}
              />
              <Box className="h-7" />
              <label htmlFor="email">Email Address</label>
              <Box className="h-3" />
              <Input
                focusBorderColor="#445964"
                id="email"
                type="email"
                name="email"
                placeholder="Email Address"
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
              <Box className="h-7" />
              <label htmlFor="email">Message</label>
              <Box className="h-3" />
              <Textarea
                focusBorderColor="#445964"
                id="message"
                name="message"
                height={"150px"}
                placeholder="Please provide a short description of your business and any questions you have about our services."
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
              <Box className="h-10" />
              <Button type="submit" disabled={state.submitting}>
                Submit
              </Button>
            </form>
          </div>
        </motion.div>
        <div className="h-16" />
      </ScrollAnimationWrapper>
    </div>
  );
}

export default Contact;
