import {
  Card,
  Text,
  Image,
  Group,
  Button,
  Badge,
  CardSection,
  ActionIcon,
} from "@mantine/core";
import {
  IconArrowRight,
  IconHeart,
  IconToolsKitchen,
} from "@tabler/icons-react";
import { IImage } from "../../../../models/Image";
import Link from "next/link";

export type CardProps = {
  title: string;
  badge?: string;
  description: string;
  link: string;
  image?: IImage;
};

export const CardItem = ({
  image,
  title,
  badge,
  description,
  link,
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
        <Group mt="md">
          <Link href={link} className="flex flex-1">
            <Button
              style={{ flex: 1 }}
              leftSection={<IconToolsKitchen size={14} />}
              rightSection={<IconArrowRight size={14} />}
            >
              Show details
            </Button>
          </Link>
          <ActionIcon variant="default" radius="md" size={36}>
            <IconHeart className="text-red-600" stroke={1.5} />
          </ActionIcon>
        </Group>
      </CardSection>
    </Card>
  );
};

const getStrapiMedia = (img: IImage) => {
  const baseUrl = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337"; // Use a default fallback
  return img?.url.startsWith("/") ? `${baseUrl}${img?.url}` : img?.url;
};
