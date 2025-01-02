import { createTheme } from "@mantine/core";

// src/colors.ts
export const sharedColors = {
  primary: [
    "#ffeff6",
    "#f2dfe6",
    "#debdca",
    "#ca99ac",
    "#b97a93",
    "#b06784",
    "#ac5c7c",
    "#974c6a",
    "#88425e",
    "#793652",
  ] as const,
};

export const myTheme = createTheme({
  defaultRadius: "md",
  primaryColor: "primary",
  colors: {
    primary: sharedColors.primary,
  },
});
