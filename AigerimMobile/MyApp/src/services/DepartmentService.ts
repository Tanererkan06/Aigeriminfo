import { DoctorModel, TypicodeUserModel, ReviewModel, DepartmentModel, DepartmentServiceModel } from "../models";

export default class DepartmentService {
    public static getDepartment(): Promise<DepartmentModel[]> {

        var typeiCodeUsers2 = fetch('http://25.46.200.59:3002/kategoriler')
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

            var deparmanModel = [] as DepartmentModel[];

            for (var i = 0; i < items2.length; i++) {
                var departman = items2[i];
                var deparmans = {} as DepartmentModel;


                deparmans.title = departman.isim;
                 deparmans.imageUrl =  "http://25.46.200.59:3002/tmp/kategoriler/"+departman.id+".png";
                deparmans.shortDescription = departman.aciklama;
                deparmans.htmlContent = departman.htmlContent;
           /*
           "profs":  "isim":   "aciklama":    */

                console.log(deparmans),

                    deparmanModel.push(deparmans);
            }
            return deparmanModel;
        });
    }
}
