import {
  AppShell,
  AppShellHeader,
  AppShellMain,
  AppShellNavbar,
} from "@mantine/core";
import { ReactNode } from "react";
import { BurgerMenu } from "./BurgerMenu";
import { Image } from "@mantine/core";
import { PrimaryMenu } from "./PrimaryMenu";

export const Shell = ({ children }: { children: ReactNode }) => {
  return (
    <AppShell
      header={{ height: 100 }}
      navbar={{
        width: 80,
        breakpoint: "sm",
        collapsed: { mobile: true },
      }}
      padding="md"
    >
      <AppShellHeader>
        <div className="flex gap-4  items-center pl-2 h-full">
          <BurgerMenu />
          <div className="p-2 flex gap-4 flex-1 justify-center">
            <Image src={"logo.png"} alt="logo" c={"white"} w={150} />
          </div>
        </div>
      </AppShellHeader>
      <AppShellNavbar>
        <PrimaryMenu />
      </AppShellNavbar>
      <AppShellMain>{children}</AppShellMain>
    </AppShell>
  );
};
