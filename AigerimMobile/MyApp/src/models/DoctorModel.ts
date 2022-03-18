import { ReviewModel } from "./ReviewModel";

export type DoctorModel = {
  fullName: string;
  title: string;
  imageUrl: string;
  about: string;
  isOnline: boolean;
  rating: number;
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  resim: string;
  vracid: string;
  perbilgi: string;
  imya: string;
  familiya: string;
  ocest: string;
  zvanye:string;

  reviews: ReviewModel[];
};
