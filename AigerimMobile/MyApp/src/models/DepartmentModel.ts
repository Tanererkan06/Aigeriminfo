import { DepartmentServiceModel } from "./DepartmentServiceModel";
import { NewsPostModel } from "./NewsPostModel";
import { ImageModel } from "./ImageModel";

export interface  DepartmentModel  {
  title: string;
  imageUrl: string;
  shortDescription: string;
  htmlContent: string;
  departmentServices: DepartmentServiceModel[];
  newsPosts: NewsPostModel[];
  images: ImageModel[];
};
