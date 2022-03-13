import { DoctorModel } from "./DoctorModel";

export interface  AppointmentTimeModal   {
  doctor?: DoctorModel;
  time: string;
  available: boolean;
};
