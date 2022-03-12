import React from "react";
import useDoctors from "../../useHook/useDoctors";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import DoctorItem from "./DoctorItem";
const Doctors = ({ home }) => {
  const [doctors] = useDoctors();
  return (
    <>
      {!home && <Breadcrumbs title="Our Services" />}

      <div className="bg-white">
        <div className="container pb-16">
          <div className="text-center py-8">
            {home ? (
              <h1 className="text-4xl py-2 font-Poppins font-semibold">
                Doctor <span className="text-primary"> Doctor</span>
              </h1>
            ) : (
              <h1 className="text-4xl py-2 font-Poppins font-semibold">
              Doctor <span className="text-primary"> Doctor</span>
              </h1>
            )}

            <p className="font-Roboto lg:px-64">
            DoctorDoctorDoctorDoctorDoctor
            </p>
          </div>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">

           {doctors.length > 0 && home
              ? doctors
                  .slice(0, 6)
                  .map((doctors) => (
                    <DoctorItem key={doctors.id} doctors={doctors} />
                  ))
              : doctors.map((doctor) => (
                  <DoctorItem key={doctors.id} doctors={doctors} />
                ))} 
          </div>
        </div>
      </div>
    </>
  );
};

export default Doctors;
