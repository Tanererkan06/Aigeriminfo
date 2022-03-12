import React from "react";
import useServices from "../../useHook/useServices";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import ServicesItem from "./ServicesItem";
const Services = ({ home }) => {
  const [services] = useServices();
  return (
<>
      {!home && <Breadcrumbs title="УСЛУГИ" />}

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
          
           {services.length >0 && home
              ? services
                  .slice(0, 6)
                  .map((service) => (
                    <ServicesItem key={service.upid} service={service} />
                  ))
              : services.map((service) => (
                  <ServicesItem key={service.upid} service={service} />
                ))} 
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
