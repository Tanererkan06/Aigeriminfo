import { DoctorModel } from "./DoctorModel";

export interface MediaModel {
  imageUrl: string;
  title: string; 
  htmlContent: string;  
  imageUrl1: string;
  title2: string; 
  htmlContent1: string;  
  tags: string[];
  doctor: DoctorModel;
  isLive: boolean;
  startedDate: Date;
  id: number,
  tarih: Date;
  rubaslik: string;
  ruhaber: string;
  ruresim: string;
  kzbaslik: string;
  kzhaber: string;
  kzresim: string;
};
