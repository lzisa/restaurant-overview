import { IRestaurant } from "models/Restaurant";
import { CardItem } from "../../../components/CardItem";
import { getRestaurants } from "API/GetRestaurants";
import { Suspense } from "react";
import { ActionIcon, Button } from "@mantine/core";
import Link from "next/link";
import { IconHeart } from "@tabler/icons-react";

export const RestaurantList = async () => {
  const restaurants: IRestaurant[] = await getRestaurants();
  return (
    <Suspense fallback={<p>Loading Restaurants...</p>}>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4">
        {restaurants.map((restaurant) => (
          <CardItem
            key={restaurant.id}
            image={restaurant.image}
            title={restaurant.Name}
            badge={restaurant.category?.Name}
            description={restaurant.Description}
          >
            {{
              actions: (
                <>
                  <Link
                    href={"./restaurants/" + restaurant.documentId}
                    className="flex flex-1"
                  >
                    <Button style={{ flex: 1 }}>Show details</Button>
                  </Link>
                  <ActionIcon variant="default" radius="md" size={36}>
                    <IconHeart className="text-red-600" stroke={1.5} />
                  </ActionIcon>
                </>
              ),
            }}
          </CardItem>
        ))}
      </div>
    </Suspense>
  );
};

export default RestaurantList;
