import { notFound } from "next/navigation";
import { Title } from "@mantine/core";
import { getRestaurantById } from "API/GetRestaurants";

export default async function Page({ params }: { params: { id: string } }) {
  const paramsResolved = await params;
  let restaurant;
  try {
    restaurant = await getRestaurantById(paramsResolved.id);
    console.warn(restaurant);
    if (!restaurant) {
      notFound(); // Navigate to a 404 page if the restaurant isn't found
    }
  } catch (error) {
    console.error("Error fetching restaurant:", error);
    notFound();
  }

  return (
    <div>
      <Title>Hi, welcome at Detail Page of {restaurant?.Name}</Title>
    </div>
  );
}
