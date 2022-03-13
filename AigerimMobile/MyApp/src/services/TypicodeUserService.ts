import { DoctorModel, TypicodeUserModel,ReviewModel } from "../models";


export default class TypicodeUserService {
    public static getUsers(): Promise<DoctorModel[]> {
       
        var typeiCodeUsers2 = fetch('https://jsonplaceholder.typicode.com/users/')
            .then((response) => response.json())
            .then((json) => {
                var typeiCodeUsers: TypicodeUserModel[] = json;
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
                doctor.fullName = user.name;
                doctor.about = user.company.catchPhrase;
                doctor.title = user.company.name;
                doctor.imageUrl = "https://github.com/publsoft/publsoft.github.io/raw/master/projects/medical-demo/assets/images/doctor1.jpg";
                doctor.rating = 5;
                doctor.isOnline = true;
                doctor.reviews=[] as ReviewModel[]
                doctorModel.push(doctor);
            }
            return doctorModel;
        }); 
    }
    /*
    public static getUsersReal(): Promise<DoctorModel[]> {
        return fetch('https://jsonplaceholder.typicode.com/users/'
        ).then((response) => response.json()).then((json) => {
            var typeiCodeUsers: TypicodeUserModel[] = json;
            var doctorModel = [] as DoctorModel[];
            for (var i = 0; i < typeiCodeUsers.length; i++) {
                var user = typeiCodeUsers[i];
                var doctor = {} as DoctorModel;
                doctor.fullName = user.name;
                doctor.about = user.company.catchPhrase;
                doctor.title = user.company.name;
                doctor.imageUrl = "https://github.com/publsoft/publsoft.github.io/raw/master/projects/medical-demo/assets/images/doctor1.jpg";
                doctor.rating = 5;
                doctor.isOnline = true;
                doctor.reviews=[] as ReviewModel[]
                doctorModel.push(doctor);
            }
            return doctorModel;
        });
    }*/
} 