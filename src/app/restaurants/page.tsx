import { Suspense } from "react";
import RestaurantList from "app/restaurants/_components/RestaurantDisplay/RestaurantList";

export default async function Page() {
  return (
    <>
      <Suspense fallback={<p>Loading...</p>}>
        <RestaurantList />
      </Suspense>
    </>
  );
}
