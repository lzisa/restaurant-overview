import { IRestaurant } from "../models/Restaurant";

export async function getRestaurants(): Promise<IRestaurant[]> {
  console.log("Fetching restaurants from API.");
  const res = await fetch(
    `${process.env.STRAPI_API_URL}/api/restaurants?populate=*`,
    {
      next: {
        revalidate: 3,
      },
    }
  ).then((data) => data.json());

  const restaurants: IRestaurant[] = res.data;
  return restaurants;
}

export async function getRestaurantById(id: string): Promise<IRestaurant> {
  // Fetch and cache the restaurant by id
  const res = await fetch(
    `${process.env.STRAPI_API_URL}/api/restaurants/${id}`,
    {
      next: {
        revalidate: 3,
      },
    }
  ).then((data) => data.json());

  const restaurant: IRestaurant = res.data;
  return restaurant;
}
