import { extendTheme } from "@chakra-ui/react";
const CustomTheme = extendTheme({
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  },
});
export default CustomTheme;
