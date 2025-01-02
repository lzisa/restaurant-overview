import { IRestaurant } from "models/Restaurant";
import { CardItem } from "./RestaurantItem";
import { getRestaurants } from "API/GetRestaurants";
import { Suspense } from "react";

export const RestaurantList = async () => {
  const restaurants: IRestaurant[] = await getRestaurants();
  return (
    <Suspense fallback={<p>Loading Restaurants...</p>}>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:grid-cols-4 gap-4">
        {restaurants.map((restaurant) => (
          <CardItem
            key={restaurant.id}
            image={restaurant.image}
            title={restaurant.Name}
            badge={restaurant.category?.Name}
            description={restaurant.Description}
            link={"./restaurants/" + restaurant.documentId}
          />
        ))}
      </div>
    </Suspense>
  );
};

export default RestaurantList;
