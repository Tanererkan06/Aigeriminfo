import { DoctorModel, TypicodeUserModel,ReviewModel } from "../models";

export default class DoctorsService {
  public static getDoctors(): Promise<DoctorModel[]> {
       
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
}}

/*
import React, { useEffect, useState } from 'react';
import {
  DoctorModel,
  CampaignModel,
  EventModel,
  DepartmentModel,
  DepartmentServiceModel,
  NewsPostModel,
  ImageModel,
  StoryModel,
  MediaModel
} from "../models";
//import { doctorsList } from "../datas";


//https://jsonplaceholder.typicode.com/users/

const [doctorsList, setdoctorsList] = useState<DoctorModel>();

export default class DoctorsService {
  public static getDoctors(): Promise<DoctorModel[]> {
    return new Promise((resolve, reject) => {

     
      const urlWorldOMeter = 'https://jsonplaceholder.typicode.com/users/';

      useEffect(() => {
        fetchData();
      }, []);

      async function fetchData() {
        fetch(urlWorldOMeter)
          .then((response) => response.json())
          .then((data) => {
             setdoctorsList(data);
          })
          .catch((err) => console.warn('Something went wrong.', err));
      }

console.log(doctorsList);
     //resolve(doctorsList);
    });
  }
}


*/