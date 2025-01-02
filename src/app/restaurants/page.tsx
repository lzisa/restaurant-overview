import RestaurantList from "app/restaurants/_components/RestaurantList";
import { Title } from "@mantine/core";

export default async function Page() {
  return (
    <div className="flex flex-col gap-4">
      <Title order={1}>Restaurants</Title>
      <RestaurantList />
    </div>
  );
}
