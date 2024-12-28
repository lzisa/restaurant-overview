import { Restaurant } from "models/Restaurant";
import axios from "axios";
import { RestaurantList } from "components/RestaurantItem";

export default async function Page() {
  //   const restaurants = await getServerSideProps();
  const res = await axios.get(`${process.env.STRAPI_API_URL}/restaurants`);
  // const restaurants = await getServerSideProps()
  if (res) {
    console.warn(res);

    const restaurants = res.data.data as Restaurant[];
    console.warn(restaurants);
    return (
      <>
        <h1>Restaurants Page</h1>
        <RestaurantList restaurants={restaurants} />
      </>
    );
  }
}

// Server-side rendering to fetch initial data
// export const getServerSideProps = async () => {
//   const res = await axios.get(`${process.env.STRAPI_API_URL}/api/restaurants`);
//   return res.data;
//   // const restaurants = await fetchProjects();
//   // return { props: { restaurants } };
// };
