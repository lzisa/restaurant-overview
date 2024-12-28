"client side";

import { Restaurant } from "models/Restaurant";
import axios from "axios";
import { atom } from "jotai";

// Define the atom to store restaurants
export const restaurantsAtom = atom<Restaurant[] | undefined>(undefined);

// Fetch restaurants from Strapi
export const fetchProjects = async () => {
  const res = await axios.get(`${process.env.STRAPI_API_URL}/api/restaurants`);
  return res.data;
};

export const getServerSideProps = async () => {
  const res = await axios.get(`${process.env.STRAPI_API_URL}/api/restaurants`);
  return res.data;
  // const restaurants = await fetchProjects();
  // return { props: { restaurants } };
};

// Hydrate atom and render restaurants
export const RestaurantList = ({
  restaurants,
}: {
  restaurants: Restaurant[];
}) => {
  // Hydrate the atom with the server-provided data
  // useHydrateAtoms([[restaurantsAtom, restaurants]]);
  console.warn(restaurants);

  return (
    <div>
      <h1>Restaurants</h1>
      <ul>
        {restaurants.map((restaurant) => (
          <li key={restaurant.id}>{restaurant.Name}</li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantList;
