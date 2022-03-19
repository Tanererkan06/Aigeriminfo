import { DashboardItemsModel, AppointmentModel, DoctorModel, TypicodeUserModel } from "../models";
import {campaignList, departmentList } from "../datas";
 import moment from "moment";
 import {  DoctorsService } from "../services";

export const globalAppointmentDate = moment(new Date())
  .add(7, "days")
  .hour(14)
  .minute(30)
  .toDate();

export const globalAppointment: AppointmentModel = {
  title: "Upcoming appoinment",
  doctor: {
    fullName: "Dr. Busra Tekin",
    about: "About",
    title: "Doctor",
    imageUrl:
      "https://raw.githubusercontent.com/publsoft/publsoft.github.io/master/projects/dentist-demo/assets/images/profile_photo.png",
    isOnline: true,
    rating: 5,
    reviews: []
  },
  appointmentDate: globalAppointmentDate,
  locationName: "Central Hospital"
};

export default class DashboardService {
  public static getDashboardItems(): Promise<DashboardItemsModel> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const model: DashboardItemsModel = {
          appointment: globalAppointment,
          campaigns: campaignList,
          departments: departmentList
        };
        resolve(model);
      }, 100);
    });
  }
}
