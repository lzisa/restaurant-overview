import "@mantine/core/styles.css";
import "./globals.css";
import {
  ColorSchemeScript,
  MantineProvider,
  mantineHtmlProps,
} from "@mantine/core";
import { myTheme } from "theme/myTheme";

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
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider defaultColorScheme="dark" theme={myTheme}>
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
