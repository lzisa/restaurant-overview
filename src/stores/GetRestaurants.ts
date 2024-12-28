import axios from "axios";
import { cache } from "react";

export const getRestaurants = cache(async () => {
  return await axios.get(
    `${process.env.STRAPI_API_URL}/api/restaurants?populate=*`
  );
});
