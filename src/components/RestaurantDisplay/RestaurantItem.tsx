"use client";
import { Button, Card, Text, Image, Group, Badge } from "@mantine/core";
import { Restaurant } from "models/Restaurant";

export const RestaurantItem = ({ restaurant }: { restaurant: Restaurant }) => {
  console.warn(restaurant);
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section>
        {restaurant.image && (
          <Image
            src={"" + `${process.env.STRAPI_API_URL}` + restaurant.image?.url}
            height={160}
            alt="Norway"
          />
        )}
      </Card.Section>

      <Group justify="space-between" mt="md" mb="xs">
        <Text fw={500}>{restaurant.Name}</Text>
        {restaurant.category && (
          <Badge color="pink">{restaurant.category.Name}</Badge>
        )}
      </Group>

      <Text size="sm" c="dimmed">
        {"" + restaurant.Description}
      </Text>

      <Button color="blue" fullWidth mt="md" radius="md">
        Book classic tour now
      </Button>
    </Card>
  );
};
