import { DoctorModel, TypicodeUserModel,ReviewModel } from "../models";

export default class DoctorsService {
  public static getDoctors(): Promise<DoctorModel[]> {
       
    var typeiCodeUsers2 = fetch('http://25.46.200.59:3002/DoktorBilgi')
        .then((response) => response.json())
        .then((json) => {
            var typeiCodeUsers: TypicodeUserModel[] = json;
            console.log(typeiCodeUsers)
            return typeiCodeUsers;
        })
        .catch((error) => {
            console.error(error);
        });
    return typeiCodeUsers2.then((items) => {
        var items2 = items as TypicodeUserModel[];

        var doctorModel = [] as DoctorModel[];
        
        for (var i = 0; i < items2.length; i++) {
            var user = items2[i];
            var doctor = {} as DoctorModel;
            doctor.fullName = user.imya +" "+ user.familiya;
            doctor.about = user.perbilgi;
            doctor.title = user.zvanye;
            doctor.imageUrl = "http://25.46.200.59:3002/tmp/"+user.vracid+".png";
            doctor.rating = 5;
            doctor.isOnline = true;
            doctor.reviews=[] as ReviewModel[]
                    console.log(doctor),

            doctorModel.push(doctor);
        }
        return doctorModel;
    }); 
}}
