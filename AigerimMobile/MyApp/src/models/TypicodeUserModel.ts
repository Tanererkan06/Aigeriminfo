import { DepartmentServiceModel } from "./DepartmentServiceModel";
import { NewsPostModel } from "./NewsPostModel";
import { ImageModel } from "./ImageModel";

export interface TypicodeUserModel 
{
    id: number;
    name: string;
    username: string;
    email: string;
    address: Address;
    phone: string;
    vrcid:string;
    website: string;
    company: Company;
    resim: Blob;
    vracid: number;
    perbilgi: string;
    imya: string;
    familiya: string;
    ocest: string;
    zvanye:string;
    title: string;
    imageUrl: string;
    shortDescription: string;
    htmlContent: string;
    departmentServices: DepartmentServiceModel[];
    newsPosts: NewsPostModel[];
    images: ImageModel[];
    profs :string;
    isim:string;
    aciklama:string;
  
}

export interface Address {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: Geo;
}

export interface Geo {
    lat: string;
    lng: string;
}

export interface Company {
    name: string;
    catchPhrase: string;
    bs: string;
}
