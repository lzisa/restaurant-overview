"use client";
import { Card, Text, Image, Group, Badge, Flex, NavLink } from "@mantine/core";
import { IImage } from "./../../models/Image";
import { IRestaurant } from "models/Restaurant";
import { myTheme } from "theme/myTheme";

export const RestaurantItem = ({ restaurant }: { restaurant: IRestaurant }) => {
  console.warn(restaurant);
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section>
        {restaurant.image && (
          <Image
            src={getStrapiMedia(restaurant.image)}
            height={160}
            alt={restaurant.Name + "Picture"}
          />
        )}
      </Card.Section>

      <Group justify="space-between" mt="md" mb="xs">
        <Text fw={500}>{restaurant.Name}</Text>
        {restaurant.category && (
          <Badge color={myTheme.colors?.orange?.[6]}>
            {restaurant.category.Name}
          </Badge>
        )}
      </Group>

      <Text size="sm" c="dimmed">
        {"" + restaurant.Description + " " + restaurant.id}
      </Text>
      <Flex justify="flex-end" align="flex-end">
        <NavLink
          href={"./restaurants/" + restaurant.documentId}
          label={"more"}
        />
      </Flex>
    </Card>
  );
};

const getStrapiMedia = (img: IImage) => {
  const baseUrl = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337"; // Use a default fallback
  return img?.url.startsWith("/") ? `${baseUrl}${img?.url}` : img?.url;
};
