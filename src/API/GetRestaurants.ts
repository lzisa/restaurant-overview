import { IRestaurant } from "../models/Restaurant";

// In-memory cache for restaurants and individual restaurant details
let restaurantCache: IRestaurant[] | null = null;

export async function getRestaurants(): Promise<IRestaurant[]> {
  // Return cached restaurants if available
  // if (restaurantCache) {
  //   console.log("Using cached restaurants.");
  //   return restaurantCache;
  // }

  // Fetch and cache restaurants
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
  // restaurantCache = restaurants; // Cache the result
  return restaurants;
}

export async function getRestaurantById(id: string): Promise<IRestaurant> {
  const cachedRestaurant = filterFromCache(id);
  if (cachedRestaurant) {
    console.log(`Using cached restaurant with id ${id}.`);
    return cachedRestaurant;
  }

  // Fetch and cache the restaurant by id
  console.log(`Fetching restaurant with id ${id} from API.`);
  const res = await fetch(
    `${process.env.STRAPI_API_URL}/api/restaurants/${id}`,
    {
      next: {
        revalidate: 3,
      },
    }
  ).then((data) => data.json());

  const restaurant: IRestaurant = res.data;
  // addToCache(restaurant);
  return restaurant;
}

function filterFromCache(id: string): IRestaurant | undefined {
  const restaurant = restaurantCache?.find(
    (restaurant) => restaurant.documentId === id
  );
  return restaurant;
}

function addToCache(restaurant: IRestaurant) {
  console.warn("addToCache", restaurant, restaurantCache);
  if (restaurantCache?.length === 0 || !restaurantCache) {
    restaurantCache = [restaurant];
  } else if (
    restaurantCache?.some((item) => restaurant.documentId !== item.documentId)
  ) {
    restaurantCache.push(restaurant);
  }
}
