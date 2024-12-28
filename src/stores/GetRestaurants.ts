import { IRestaurant } from "../models/Restaurant";

export async function getRestaurants(): Promise<IRestaurant[]> {
  const res = await fetch(
    `${process.env.STRAPI_API_URL}/api/restaurants?populate=*`,
    {
      next: {
        revalidate: 3600,
      },
    }
  ).then((data) => data.json());
  const restaurants: IRestaurant[] = res.data;
  return restaurants;
}
