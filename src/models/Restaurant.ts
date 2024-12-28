import { Category } from "./Category";
import { Image } from "./Image";

export interface Restaurant {
  id: number;
  Name: string;
  Description: string;
  category: Category | undefined;
  image: Image | undefined;
}
