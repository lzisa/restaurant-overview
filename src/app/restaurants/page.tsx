import { Restaurant } from "models/Restaurant";
import { atom } from "jotai";
import { getRestaurants } from "stores/GetRestaurants";
import { Shell } from "./_components/Shell";

export const restaurantsAtom = atom<Restaurant[] | undefined>(undefined);

export default async function Page() {
  const res = await getRestaurants();
  if (res) {
    const restaurants = res.data.data as Restaurant[];

    return <Shell restaurants={restaurants} />;
  }
}
