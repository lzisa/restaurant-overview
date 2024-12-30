import { ICategory } from "./Category";
import { IImage } from "./Image";

export interface IRestaurant {
  documentId: string;
  id: number;
  Name: string;
  Description: string;
  category: ICategory | undefined;
  image: IImage | undefined;
}
