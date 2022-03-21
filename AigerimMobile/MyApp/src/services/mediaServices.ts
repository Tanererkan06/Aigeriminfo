import { DoctorModel, TypicodeUserModel, ReviewModel, MediaModel } from "../models";

export default class MediaService {
    public static getMedia(): Promise<MediaModel[]> {

        var haberler = fetch('http://25.46.200.59:3002/haberler')
            .then((response) => response.json())
            .then((json) => {
                var typeiCodeUsers: TypicodeUserModel[] = json;
                console.log(typeiCodeUsers)
                return typeiCodeUsers;
            })
            .catch((error) => {
                console.error(error);
            });
        return haberler.then((items) => {
            var haberler2 = items as TypicodeUserModel[];

            var doctorModel = [] as MediaModel[];

            for (var i = 0; i < haberler2.length; i++) {
                var media = haberler2[i];
                var yenihaberler = {} as MediaModel; 
                yenihaberler.imageUrl = "http://25.46.200.59:3002/tmp/haber/"+"ru"+media.id+".png";
                yenihaberler.title = media.rubaslik;
                yenihaberler.htmlContent = media.ruhaber; 
                yenihaberler.imageUrl1 = "http://25.46.200.59:3002/tmp/haber/"+"kz"+media.id+".png";
 
                yenihaberler.title2 = media.kzbaslik;
                yenihaberler.htmlContent1 = media.kzhaber;

                /*  
                 imageUrl: string;
        title: string;
        tags: string[];
        htmlContent: string;
        doctor: DoctorModel;
        isLive: boolean;
        startedDate: Date;
                
                
                doctor.fullName = user.imya +" "+ user.familiya;
                  doctor.about = user.perbilgi;
                  doctor.title = user.zvanye;
                  doctor.imageUrl = "http://25.46.200.59:3002/tmp/"+user.vracid+".png";
                  doctor.rating = 5;
                  doctor.isOnline = true; */

                console.log(yenihaberler),

                    doctorModel.push(yenihaberler);
            }
            return doctorModel;
        });
    }
}
