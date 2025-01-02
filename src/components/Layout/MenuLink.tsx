import { Tooltip, UnstyledButton } from "@mantine/core";
import { IconHome2 } from "@tabler/icons-react";
import clsx from "clsx";
import Link from "next/link";

export interface NavbarLinkProps {
  icon: typeof IconHome2;
  label: string;
  active?: boolean;
  path: string;
  onClick?: () => void;
}

export const NavbarLink = ({
  icon: Icon,
  label,
  active,
  path,
  onClick,
}: NavbarLinkProps) => {
  return (
    <Tooltip label={label} position="right" transitionProps={{ duration: 0 }}>
      <Link
        onClick={onClick}
        href={path}
        className={clsx(
          "rounded-md flex items-center md:justify-center  text-primary-700 dark:text-primary-200 hover:bg-primary-100 dark:hover:bg-gray-700 data-[active]:bg-blue-500 data-[active]:text-white"
        )}
      >
        <UnstyledButton
          data-active={active || undefined}
          className="w-[50px] h-[50px] items-center justify-center flex"
        >
          <Icon size={20} stroke={1.5} />
        </UnstyledButton>
        <div className="md:hidden">{label}</div>
      </Link>
    </Tooltip>
  );
};
