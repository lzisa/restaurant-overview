import { IRestaurant } from "models/Restaurant";
import { Suspense } from "react";
import { RestaurantItem } from "./RestaurantItem";
import { Stack, Title } from "@mantine/core";

export const RestaurantList = ({
  restaurants,
}: {
  restaurants: IRestaurant[];
}) => {
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
