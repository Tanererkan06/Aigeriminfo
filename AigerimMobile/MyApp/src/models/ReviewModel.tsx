import { UserModel } from "./UserModel";

export interface  ReviewModel   {
  user: UserModel;
  rating: number;
  comment: string;
};
