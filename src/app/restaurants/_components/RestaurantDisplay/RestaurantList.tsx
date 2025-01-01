import { IRestaurant } from "models/Restaurant";
import { RestaurantItem } from "./RestaurantItem";
import { Stack, Title } from "@mantine/core";
import { getRestaurants } from "API/GetRestaurants";
import { Suspense } from "react";

export const RestaurantList = async () => {
  const restaurants: IRestaurant[] = await getRestaurants();
  return (
    <div>
      <Title order={1}>Restaurants</Title>

      <Suspense fallback={<p>Loading Restaurants...</p>}>
        <Stack gap="md">
          {restaurants.map((restaurant) => (
            <RestaurantItem key={restaurant.id} restaurant={restaurant} />
          ))}
        </Stack>
      </Suspense>
    </div>
  );
};

export default RestaurantList;
