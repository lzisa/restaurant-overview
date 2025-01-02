import {
  Button,
  Container,
  Image,
  SimpleGrid,
  Text,
  Title,
} from "@mantine/core";
import image from "../../public/error404.png";
import classes from "./NotFoundImage.module.css";
import Link from "next/link";

export default function NotFoundImage() {
  return (
    <Container className={classes.root}>
      <SimpleGrid spacing={{ base: 40, sm: 80 }} cols={{ base: 1, sm: 2 }}>
        <Image
          src={image.src}
          className={classes.mobileImage}
          alt="Page not found"
        />
        <div>
          <Title className={classes.title}>Something is not right...</Title>
          <Text c="dimmed" size="lg">
            Page you are trying to open does not exist. You may have mistyped
            the address, or the page has been moved to another URL. If you think
            this is an error contact support.
          </Text>

          <Link href={"/"}>
            <Button
              variant="outline"
              size="md"
              mt="xl"
              className={classes.control}
            >
              Get back to home page
            </Button>
          </Link>
        </div>
        <Image
          src={image.src}
          className={classes.desktopImage}
          alt="Page not found"
        />
      </SimpleGrid>
    </Container>
  );
}
