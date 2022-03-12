import React from "react";
import { Link } from "react-router-dom";

const DoctorsSidebar = ({ doctor }) => {
  const slug = doctor?.name
    .toLowerCase()
    .replace(/[^\w ]+/g, "")
    .replace(/ +/g, "-");
  return (
    <>
      <ul className="">
        <li className="border border-l-4 border-primary px-4 py-4 text-1xl font-Roboto hover:bg-secondary hover:text-white">
          <Link to={`/doctor/${doctor?.id}/${slug}`}>{doctor?.name}</Link>
        </li>
      </ul>
    </>
  );
};

export default DoctorsSidebar;
