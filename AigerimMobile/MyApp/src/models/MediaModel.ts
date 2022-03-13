import { DoctorModel } from "./DoctorModel";

export interface  MediaModel   {
  imageUrl: string;
  title: string;
  tags: string[];
  htmlContent: string;
  doctor: DoctorModel;
  isLive: boolean;
  startedDate: Date;
};
