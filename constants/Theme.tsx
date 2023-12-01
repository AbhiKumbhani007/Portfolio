import { extendTheme } from "@chakra-ui/react";
const CustomTheme = extendTheme({
  components: {
    Drawer: {
      parts: ["dialog", "header", "body"],
      variants: {
        primary: {
          secondary: {
            dialog: {
              maxW: "220px !important",
            },
          },
        },
      },
    },
  },
});
export default CustomTheme;
