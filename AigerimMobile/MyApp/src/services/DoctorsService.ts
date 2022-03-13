import { DoctorModel } from "../models";
import { doctorsList } from "../datas";

export default class DoctorsService {
  public static getDoctors(): Promise<DoctorModel[]> {
    return new Promise((resolve, reject) => {
      resolve(doctorsList);
    });
  }
}
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