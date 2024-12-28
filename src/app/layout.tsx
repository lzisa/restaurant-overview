// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import "@mantine/core/styles.css";

import {
  ColorSchemeScript,
  MantineProvider,
  createTheme,
  mantineHtmlProps,
} from "@mantine/core";

export const metadata = {
  title: "My Mantine app",
  description: "I have followed setup instructions carefully",
};

const myTheme = createTheme({
  primaryColor: "grape",
  defaultRadius: 0,
  colors: {
    grape: [
      "#ffeef9",
      "#f3deea",
      "#dfbcd0",
      "#cc98b6",
      "#bb799f",
      "#b26591",
      "#ae5a8b",
      "#994a78",
      "#89416b",
      "#7a355e",
    ],
    orange: [
      "#fff0e3",
      "#ffe0cd",
      "#febf9c",
      "#fc9c67",
      "#fb7e3a",
      "#fa6b1e",
      "#fb610d",
      "#e05002",
      "#c84600",
      "#ae3a00",
    ],
  },
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider defaultColorScheme="dark" theme={myTheme}>
          {children}
        </MantineProvider>
        {/* Layout UI */}
        {/* Place children where you want to render a page or nested layout */}
        {/* <main>{children}</main> */}
      </body>
    </html>
  );
}
