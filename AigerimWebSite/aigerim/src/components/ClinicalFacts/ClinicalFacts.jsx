import React from "react";
import bgImg2 from "./../../images/bg_3.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const ClinicalFacts = () => {
  return (
    <>
      <div
        className="bg-cover bg-no-repeat bg-center  w-full h-80"
        style={{
          backgroundImage: `url(${bgImg2})`,
        }}
      >
        <div className="opacity-80 absolute bg-black  w-full h-80"></div>
        <div className="container relative py-8 text-center text-white">
          <h1 className="text-4xl py-2 font-Poppins font-semibold">
          данные отображены за последние 30 дней 
          </h1>
          
          <div className="flex justify-between items-center py-16">
            <div className="">
            
              
              <h1 className="text-4xl font-Poppins font-extrabold">170</h1>
              <p className="text-secondary italic text-2xl font-Roboto font-semibold">
              СПЕЦИАЛИСТОВ
              </p>
            </div>

            <div className="">
              <h1 className="text-4xl font-Poppins font-extrabold">28 000</h1>
              <p className="text-secondary italic text-2xl font-Roboto font-semibold">
              ПАЦИЕНТОВ
              </p>
            </div>

            <div className="">
              <h1 className="text-4xl font-Poppins font-extrabold">3</h1>
              <p className="text-secondary italic text-2xl font-Roboto font-semibold">
              КЛИНИКИ
              </p>
            </div>
            <div className="">
              <h1 className="text-4xl font-Poppins font-extrabold">150</h1>
              <p className="text-secondary italic text-2xl font-Roboto font-semibold">
              КАБИНЕТОВ
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ClinicalFacts;
