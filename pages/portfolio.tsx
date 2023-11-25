import ScrollAnimationWrapper from "@/components/ScrollAnimation";
import getScrollAnimation from "@/utils/getScrollAnimation";
import { Button } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Roboto } from "next/font/google";
import React, { useMemo } from "react";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

function portfolio({ isOpen }: { isOpen: boolean }) {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  const [selectedFilter, setSelectedFilter] = React.useState(1);

  const portfolioFilterButton = [
    {
      id: 1,
      name: "Todos",
    },
    {
      id: 2,
      name: "Web App",
    },
    {
      id: 3,
      name: "Data Analysis",
    },
    {
      id: 4,
      name: "Outros",
    },
  ];

  return (
    <div
      className={`max-w-screen-2xl mt-24 xl:mt-[8%] lg:mt-[15%] px-8 xl:px-16 mx-auto overflow-x-hidden`}
      style={{
        filter: isOpen ? "blur(2px)" : "none",
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
              <h1 className="text-4xl lg:text-5xl font-extrabold text-[#263138]">
                Meu
              </h1>
              <div className="flex flex-col lg:flex-row justify-center items-start lg:items-end lg:gap-20 text-[#445964] max-w-xl">
                <h1 className="text-4xl lg:text-5xl font-extrabold ">
                  Portifólio
                </h1>
                <h4 className="text-lg lg:text-xl font-semibold">
                  Estes são alguns dos trabalhos e projetos que já realizei
                </h4>
              </div>
            </div>
            <div className="grid lg:grid-row-1 lg:grid-cols-4 grid-cols-2 gap-5 w-full">
              {portfolioFilterButton.map((item) => (
                <Button
                  key={item.id}
                  className="font-semibold"
                  bg={selectedFilter === item.id ? "#263138" : "#DFDFDF"}
                  color={selectedFilter === item.id ? "#FFFFFF" : "#263138"}
                  py={2}
                  px={4}
                  _hover={{
                    bg: selectedFilter === item.id ? "#263138" : "#DFDFDF",
                    color: selectedFilter === item.id ? "#FFFFFF" : "#263138",
                  }}
                  onClick={() => {
                    setSelectedFilter(item.id);
                  }}
                >
                  {item.name}
                </Button>
              ))}
            </div>
          </div>
          <div className="flex justify-center items-center w-full">
            <div
              className={`flex  w-full flex-col items-center justify-center ${roboto.className}`}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div
                  className={`flex justify-center items-center bg-[#263138] text-[#DFDFDF] p-6 rounded-xl lg:rounded-3xl shadow-md row-span-3 lg:row-span-6 w-64 lg:w-80 xl:w-96 h-40 lg:h-60 select-none`}
                >
                  Content 1
                </div>
                <div
                  className={`flex justify-center items-center bg-[#445964] text-[#FFFFFF] p-6 rounded-xl lg:rounded-2xl shadow-md row-span-3 w-64 lg:w-80 xl:w-96 h-40 select-none`}
                >
                  Content 2
                </div>
                <div
                  className={`flex justify-center items-center bg-[#DFDFDF] p-6 rounded-xl shadow-md row-span-3 lg:row-span-6 w-64 lg:w-80 xl:w-96 h-40 lg:h-60 select-none`}
                >
                  Content 3
                </div>
                <div
                  className={`flex justify-center items-center  bg-[#263138] text-[#DFDFDF] p-6 rounded-xl shadow-md row-span-3 lg:row-span-6 w-64 lg:w-80 xl:w-96 h-40 lg:h-60 select-none`}
                >
                  Content 4
                </div>
                <div
                  className={`flex justify-center items-center bg-[#DFDFDF] p-6 rounded-xl lg:rounded-3xl shadow-md row-span-3 w-64 lg:w-80 xl:w-96 h-40 select-none`}
                >
                  Content 5
                </div>
                <div
                  className={`flex justify-center items-center bg-[#445964] text-[#FFFFFF] p-6 rounded-xl lg:rounded-2xl shadow-md row-span-3 w-64 lg:w-80 xl:w-96 h-40 select-none`}
                >
                  Content 6
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </ScrollAnimationWrapper>
      <div className="h-16" />
    </div>
  );
}

export default portfolio;
