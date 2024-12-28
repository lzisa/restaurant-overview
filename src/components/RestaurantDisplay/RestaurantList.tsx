"use client";
import { Restaurant } from "models/Restaurant";
import { Suspense } from "react";
import { RestaurantItem } from "./RestaurantItem";
import { Stack, Title } from "@mantine/core";

// Define the atom to store restaurants

// Hydrate atom and render restaurants
export const RestaurantList = ({
  restaurants,
}: {
  restaurants: Restaurant[];
}) => {
  // Hydrate the atom with the server-provided data
  // useHydrateAtoms([[restaurantsAtom, restaurants]]);
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
