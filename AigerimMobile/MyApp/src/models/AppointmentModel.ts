import { DoctorModel } from "./DoctorModel";

export interface  AppointmentModel   {
  title: string;
  doctor: DoctorModel;
  appointmentDate: Date;
  locationName: string;
};
