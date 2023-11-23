import Header from "@/components/Layout/Header";
import CustomTheme from "@/constants/Theme";
import "@/styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleChange = (x: boolean) => setIsOpen(x);
  return (
    <ChakraProvider theme={CustomTheme}>
      <Header handleChange={handleChange} />
      <Component {...pageProps} isOpen={isOpen} />
    </ChakraProvider>
  );
}
