import React from "react";
import useDoctors from "../../useHook/useDoctors";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import DoctorsItem from "./DoctorsItem";
const Doctors = ({ home }) => {
  const [doctors] = useDoctors();
  return (
    <>
      {!home && <Breadcrumbs title="ДОКТОРА" />}

      <div className="bg-white">
        <div className="container pb-16">
          <div className="text-center py-8">
            {home ? (
              <h1 className="text-4xl py-2 font-Poppins font-semibold">
                  
              </h1>
            ) : (
              <h1 className="text-4xl py-2 font-Poppins font-semibold">
             
              </h1>
            )}

            
          </div>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">

           {doctors.length > 0 && home
              ? doctors
                  .slice(0, 6)
                  .map((doctor) => (
                    <DoctorsItem key={doctor.id} doctor={doctor} />
                  ))
              : doctors.map((doctor) => (
                  <DoctorsItem key={doctor.id} doctor={doctor} />
                ))} 
          </div>
        </div>
      </div>
    </>
  );
};

export default Doctors;
