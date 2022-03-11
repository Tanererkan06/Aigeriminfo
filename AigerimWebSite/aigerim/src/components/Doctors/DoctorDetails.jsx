import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useDoctors from "../../useHook/useDoctors";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import DoctorsSidebar from "../Sidebar/DoctorsSidebar";

const DoctorsDetails = () => {
  const [data, setData] = useState([]);
  const { doctorId } = useParams();
  const [doctors] = useDoctors();
  useEffect(() => {
    let newData = [];
    if (doctors) {
      newData = doctors.find(
        (data) => parseInt(data.id) === parseInt(doctorId)
      );
   
    }
    setData(newData);
  }, [doctorId, doctors]);
  return (
    <>
      <Breadcrumbs name={data?.name} />
      <div className="container py-16">
        <div className="grid lg:grid-cols-3 gap-6 lg:justify-items-end">
          <div className="lg:col-span-2">
            <img src={data?.image} alt={data?.name} />
            <h1 className="text-2xl font-Poppins py-4 text-secondary">
              {data?.name}
            </h1>
            <p>{data?.doctors}</p>
          </div>
          <div className="lg:mt-0 mt-16">
            <h1 className="text-4xl text-center px-4 py-2 font-Poppins  bg-secondary text-white">
              All Services
            </h1>
             {doctors.length > 0 &&
              doctors.map((doctor)=> (
                <DoctorsSidebar key={doctor.id} doctors={doctor} />
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default DoctorsDetails;
