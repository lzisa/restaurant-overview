import "@mantine/core/styles.css";
import "./globals.css";
import {
  ColorSchemeScript,
  MantineProvider,
  mantineHtmlProps,
} from "@mantine/core";
import { myTheme } from "theme/myTheme";
import Shell from "../components/Layout/Shell";

export const metadata = {
  title: "Restaurant Overview",
  description: "Best Restaurants in the city",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript defaultColorScheme="dark" />
      </head>
      <body>
        <MantineProvider defaultColorScheme="dark" theme={myTheme}>
          <Shell>{children}</Shell>
        </MantineProvider>
      </body>
    </html>
  );
}
