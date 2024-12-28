import { IRestaurant } from "models/Restaurant";
import { atom } from "jotai";
import { getRestaurants } from "stores/GetRestaurants";
import { Shell } from "./_components/Shell";

export const restaurantsAtom = atom<IRestaurant[] | undefined>(undefined);

export default async function Page() {
  const res = await getRestaurants();
  if (res) {
    const restaurants = res.data.data as IRestaurant[];

    return <Shell restaurants={restaurants} />;
  }
}
