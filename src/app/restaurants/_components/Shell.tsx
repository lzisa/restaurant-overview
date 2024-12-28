"use client";
import { AppShell, Burger } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import RestaurantList from "components/RestaurantDisplay/RestaurantList";
import { IRestaurant } from "models/Restaurant";

export const Shell = ({ restaurants }: { restaurants: IRestaurant[] }) => {
  const [opened, { toggle }] = useDisclosure();

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
