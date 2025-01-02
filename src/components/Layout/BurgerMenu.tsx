"use client";

import { Burger, Drawer } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { NavbarMinimal } from "./SidebarNavigation";

export function BurgerMenu() {
  const [opened, { toggle }] = useDisclosure();

  return (
    <>
      <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
      <Drawer opened={opened} onClose={toggle} title="Menu" hiddenFrom="sm">
        <NavbarMinimal onNavigate={toggle} />
      </Drawer>
    </>
  );
}
