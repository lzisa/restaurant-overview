"use client";
import { useState } from "react";
import {
  IconDeviceDesktopAnalytics,
  IconGauge,
  IconHome2,
  IconSettings,
} from "@tabler/icons-react";
import { Stack, Tooltip, UnstyledButton } from "@mantine/core";
import Link from "next/link";
import clsx from "clsx";

export interface NavbarLinkProps {
  icon: typeof IconHome2;
  label: string;
  active?: boolean;
  path: string;
  onClick?: () => void;
}

function NavbarLink({
  icon: Icon,
  label,
  active,
  path,
  onClick,
}: NavbarLinkProps) {
  return (
    <Tooltip label={label} position="right" transitionProps={{ duration: 0 }}>
      <Link
        href={path}
        className={clsx(
          "w-[50px] h-[50px] rounded-md flex items-center justify-center  text-primary-700 dark:text-primary-200 hover:bg-primary-100 dark:hover:bg-gray-700 data-[active]:bg-blue-500 data-[active]:text-white"
        )}
      >
        <UnstyledButton onClick={onClick} data-active={active || undefined}>
          <Icon size={20} stroke={1.5} />
        </UnstyledButton>
      </Link>
    </Tooltip>
  );
}

const navigationItems: NavbarLinkProps[] = [
  {
    icon: IconHome2,
    label: "Home",
    path: "/",
  },
  {
    icon: IconGauge,
    label: "Dashboard",
    path: "",
  },
  {
    icon: IconDeviceDesktopAnalytics,
    label: "Analytics",
    path: "/restaurants",
  },
  {
    icon: IconSettings,
    label: "Settings",
    path: "",
  },
];

interface NavbarMinimalProps {
  onNavigate?: () => void;
}

export function NavbarMinimal({ onNavigate }: NavbarMinimalProps) {
  // const pathname = usePathname();
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
    // <Flex justify="start">
    <Stack className="flex items-center gap-2 my-2 flex-col">{links}</Stack>
  );
}