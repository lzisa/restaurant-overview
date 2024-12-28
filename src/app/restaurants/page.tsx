import { IRestaurant } from "models/Restaurant";
import { atom } from "jotai";
import { getRestaurants } from "stores/GetRestaurants";
import { Shell } from "./_components/Shell";
import { Suspense } from "react";

export const restaurantsAtom = atom<IRestaurant[] | undefined>(undefined);

export default async function Page() {
  const restaurants = await getRestaurants();

  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Shell restaurants={restaurants} />
    </Suspense>
  );
}
