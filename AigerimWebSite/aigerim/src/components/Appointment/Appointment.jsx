import React, { useState } from "react";
import useServices from "../../useHook/useServices";
import useDoctors from "../../useHook/useDoctors"
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";

const Appointment = () => {
  const [services] = useServices();
  const [startDate, setStartDate] = useState(new Date());
  const [doctors] = useDoctors();
  const [DoctorstartDate, DoctorsetStartDate] = useState(new Date());

  return (
    <>
      <Breadcrumbs title="ЗАПИСАТЬСЯ НА ПРИЕМ " />
      <div className="container py-16">
        <h1 className="text-4xl text-center font-bold font-Roboto">
        ЗАПИСАТЬСЯ НА ПРИЕМ 
        </h1>
        <p className="text-gray-400 py-2 text-center">
        Заполните поля в форме, после чего менеджер нашей клиники свяжется с вами для уточнения деталей . Ваши контактные данные не передаются по четырем сторонам.
        </p>
        <fieldset>
          <label for="fname">Ваше имя</label>
          <input
            className="border-opacity-100 w-full border px-4 border-gray-800 py-2"
            type="text"
            id="name"
            name="name"
          />
          <br />
          <br />
          <label for="fname">Ваша фамилия</label>
          <input
            className="border-opacity-100 w-full border px-4 border-gray-800 py-2"
            type="text"
            id="name"
            name="name"
          />
          <br />
          <br />
          <label for="date">Дата рождения</label>
          <input
            className="border-opacity-100 w-full border px-4 border-gray-800 py-2"
            type="text"
            id="date"
            name="date"
          />

          <br />
          <br />
          <label for="email">Телефон</label>
          <input
            className="border-opacity-100 w-full border px-4 border-gray-800 py-2"
            type="phone"
            id="phone"
            name="phone"
          />
          <br />
          <br />
          <label for="services">Направление </label>
          <select
            name="cars"
            id="cars"
            className="border-opacity-100 w-full border px-4 border-gray-800 py-2"
          >
            <option selected>Выбирать Направление</option>
            {services.length > 0 &&
              services.map((service) => (
                <option key={service.id} value={service?.title}>
                  {service?.title}
                </option>
              ))}
          </select>
          <br />
          <br />
          <label for="services">Под направление</label>
          <select
            name="cars"
            id="cars"
            className="border-opacity-100 w-full border px-4 border-gray-800 py-2"
          >
            <option selected>Выбирать Под направление</option>
            {services.length > 0 &&
              services.map((service) => (
                <option key={service.id} value={service?.title}>
                  {service?.title}
                </option>
              ))}
          </select>
          <br />
          <br />
          <label for="services">Выберите врача  </label>
          <select
            name="cars"
            id="cars"
            className="border-opacity-100 w-full border px-4 border-gray-800 py-2"
          >
            <option selected>Выбирать Выберите врача </option>
            {doctors.length > 0 &&
              doctors.map((doctor) => (
                <option key={doctor.id} value={doctor?.name}>
                  {doctor?.name}
                </option>
              ))}
          </select>
          <br />
          <br />
          <label for="date">Дата и время</label>
          <input
            className="border-opacity-100 w-full border px-4 border-gray-800 py-2"
            type="text"
            id="date"
            name="date"
          />

          <br />
          <br />
          
          <button className="bg-white mt-4 border border-primary text-black py-3 px-6 rounded-md hover:bg-transparent hover:bg-primary hover:text-white transition">
          Создать встречу
          </button>
        </fieldset>
      </div>
    </>
  );
};

export default Appointment;
