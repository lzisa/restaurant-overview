import { Card, Text, Image, Group, Badge, CardSection } from "@mantine/core";
import { IImage } from "../models/Image";
import { ReactNode } from "react";

export type CardProps = {
  title: string;
  badge?: string;
  description: string;
  image?: IImage;
  children: {
    actions?: ReactNode;
  };
};

export const CardItem = ({
  image,
  title,
  badge,
  description,
  children,
}: CardProps) => {
  return (
    <Card shadow="sm" padding="lg" p="md" radius="md" withBorder>
      <CardSection>
        {image && (
          <Image
            radius="md"
            h={250}
            src={getStrapiMedia(image)}
            alt={title + "Picture"}
          />
        )}
      </CardSection>
      <CardSection className="flex flex-1 flex-col h-full p-4">
        <Group justify="space-between" mt="md" mb="xs">
          <Text fw={500}>{title}</Text>
          {badge && <Badge variant="light">{badge}</Badge>}
        </Group>

        <Text size="sm" c="dimmed">
          {"" + description}
        </Text>
        <Group mt="md">{children.actions}</Group>
      </CardSection>
    </Card>
  );
};

const getStrapiMedia = (img: IImage) => {
  const baseUrl = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337"; // Use a default fallback
  return img?.url.startsWith("/") ? `${baseUrl}${img?.url}` : img?.url;
};
