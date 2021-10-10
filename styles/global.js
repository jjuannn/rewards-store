import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";

const colors = {
  main: {
    cyan: "#0ad4fa",
  },
};

const breakpoints = createBreakpoints({
  sm: "320px",
  md: "450px",
  lg: "768px",
  xl: "1200px",
});

const global = {
  body: {
    background: colors.purple.background,
  },
  "*": {
    padding: 0,
    margin: 0,
    boxSizing: "border-box",
    fontFamily: ["Montserrat", "sans-serif"],
  },
};

export const customTheme = extendTheme({
  colors,
  breakpoints,
  styles: {
    global,
  },
});
