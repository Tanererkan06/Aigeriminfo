import { DoctorModel } from "./DoctorModel";
import { AppointmentModel } from "./AppointmentModel";
import { CampaignModel } from "./CampaignModel";
import { DepartmentModel } from "./DepartmentModel";

export interface  DashboardItemsModel   {
  appointment: AppointmentModel;
  campaigns: CampaignModel[];
  doctors: DoctorModel[];
  departments: DepartmentModel[];
};
