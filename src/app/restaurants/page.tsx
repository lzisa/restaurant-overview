import { Suspense } from "react";
import { getRestaurants } from "API/GetRestaurants";
import RestaurantList from "components/RestaurantDisplay/RestaurantList";
import { IRestaurant } from "models/Restaurant";

export default async function Page() {
  const restaurants: IRestaurant[] = await getRestaurants();
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <p>Test</p>
      <RestaurantList restaurants={restaurants} />
    </Suspense>
  );
}
