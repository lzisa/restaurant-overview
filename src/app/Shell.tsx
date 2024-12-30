import {
  AppShell,
  AppShellHeader,
  AppShellMain,
  AppShellNavbar,
} from "@mantine/core";
import { ReactNode } from "react";
import { BurgerMenu } from "./client-side/components/BurgerMenu";

export default async function Shell({ children }: { children: ReactNode }) {
  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: "sm",
      }}
      padding="md"
    >
      <AppShellHeader>
        <BurgerMenu /> <div>Logo</div>
      </AppShellHeader>
      <AppShellNavbar>sidebarContent</AppShellNavbar>
      <AppShellMain>{children}</AppShellMain>
    </AppShell>
  );
}
