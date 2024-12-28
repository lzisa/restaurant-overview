"use client";
import { Button, Card, Text, Image, Group, Badge, Flex } from "@mantine/core";
import { myTheme } from "app/layout";
import { IImage } from "./../../models/Image";
import { IRestaurant } from "models/Restaurant";

export const RestaurantItem = ({ restaurant }: { restaurant: IRestaurant }) => {
  console.warn(restaurant);
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section>
        {restaurant.image && (
          <Image
            src={getStrapiMedia(restaurant.image)}
            height={160}
            alt="Norway"
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
        {"" + restaurant.Description}
      </Text>
      <Flex justify="flex-end" align="flex-end">
        <Button color="grape" mt="md" radius="md" fullWidth={false}>
          Book classic tour now
        </Button>
      </Flex>
    </Card>
  );
};

const getStrapiMedia = (img: IImage) => {
  const baseUrl = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337"; // Use a default fallback
  return img?.url.startsWith("/") ? `${baseUrl}${img?.url}` : img?.url;
};
