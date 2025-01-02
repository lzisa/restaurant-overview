"use client";
import { useState } from "react";
import {
  IconDeviceDesktopAnalytics,
  IconGauge,
  IconHome2,
  IconSettings,
} from "@tabler/icons-react";
import { Stack } from "@mantine/core";
import { NavbarLink, NavbarLinkProps } from "./MenuLink";

const navigationItems: NavbarLinkProps[] = [
  {
    icon: IconHome2,
    label: "Home",
    path: "/",
  },
  {
    icon: IconGauge,
    label: "Dashboard",
    path: "/test",
  },
  {
    icon: IconDeviceDesktopAnalytics,
    label: "Restaurants",
    path: "/restaurants",
  },
  {
    icon: IconSettings,
    label: "Settings",
    path: "/",
  },
];

interface PrimaryMenuProps {
  onNavigate?: () => void;
}

export function PrimaryMenu({ onNavigate }: PrimaryMenuProps) {
  const [active, setActive] = useState(2);

  function navigate(index: number) {
    setActive(index);
    onNavigate?.();
  }

  const links = navigationItems.map((link, index) => (
    <NavbarLink
      {...link}
      key={link.label}
      active={active === index}
      onClick={() => {
        navigate(index);
      }}
    />
  ));

  return (
    <Stack className="flex md:items-center gap-2 my-2 flex-col">{links}</Stack>
  );
}
