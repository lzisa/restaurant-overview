"use client";
import { AppShell, Burger } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import RestaurantList from "components/RestaurantDisplay/RestaurantList";
import { Restaurant } from "models/Restaurant";

export const Shell = ({ restaurants }: { restaurants: Restaurant[] }) => {
  const [opened, { toggle }] = useDisclosure();
  // console.warn(restaurants);
  return (
    <>
      <AppShell
        header={{ height: 60 }}
        navbar={{
          width: 300,
          breakpoint: "sm",
          collapsed: { mobile: !opened },
        }}
        padding="md"
      >
        <AppShell.Header>
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <div>Logo</div>
        </AppShell.Header>

        <AppShell.Navbar p="md">Navbar</AppShell.Navbar>

        <AppShell.Main>
          <RestaurantList restaurants={restaurants} />
        </AppShell.Main>
      </AppShell>
    </>
  );
};
