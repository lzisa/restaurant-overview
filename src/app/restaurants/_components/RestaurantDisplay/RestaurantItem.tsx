"use client";
import { Card, Text, Image, Group, Button, Badge } from "@mantine/core";
import { IconArrowRight, IconToolsKitchen } from "@tabler/icons-react";
import { IImage } from "../../../../models/Image";
import { IRestaurant } from "models/Restaurant";
import { myTheme } from "theme/myTheme";
import Link from "next/link";

export const RestaurantItem = ({ restaurant }: { restaurant: IRestaurant }) => {
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
      {/* <Flex justify="flex-end" align="flex-end"> */}

      <Group justify="right">
        <Link href={"./restaurants/" + restaurant.documentId}>
          <Button
            variant="light"
            leftSection={<IconToolsKitchen size={14} />}
            rightSection={<IconArrowRight size={14} />}
          >
            more
          </Button>
        </Link>
      </Group>

      {/* </Flex> */}
    </Card>
  );
};

const getStrapiMedia = (img: IImage) => {
  const baseUrl = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337"; // Use a default fallback
  return img?.url.startsWith("/") ? `${baseUrl}${img?.url}` : img?.url;
};
