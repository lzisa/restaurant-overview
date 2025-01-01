import {
  AppShell,
  AppShellHeader,
  AppShellMain,
  AppShellNavbar,
} from "@mantine/core";
import { ReactNode } from "react";
import { BurgerMenu } from "./BurgerMenu";
import { NavbarMinimal } from "./SidebarNavigation";

export default async function Shell({ children }: { children: ReactNode }) {
  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 80,
        breakpoint: "sm",
        collapsed: { mobile: true },
      }}
      padding="md"
    >
      <AppShellHeader>
        <BurgerMenu />
        <div>Logo</div>
      </AppShellHeader>
      <AppShellNavbar>
        <NavbarMinimal />
      </AppShellNavbar>
      <AppShellMain>{children}</AppShellMain>
    </AppShell>
  );
}
