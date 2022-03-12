import React from "react";
import qualityServiceImg from "../../images/dental.jpg";
import teeth1 from "../../images/teeth1.jpg";
import stetoskop  from "../../images/stetoskop.jpg"
const QualityService = () => {
  return (
    <>
      <div className="container lg:flex py-16">
        <div className="h-full lg:w-2/3 w-full">
          <img className="w-full" src={qualityServiceImg} alt="" />
        </div>
        <div className="lg:ml-8"> 
          <h1 className="text-3xl font-Poppins font-semibold">
          Клиника «Айгерим» - это крупнейшая частная медицинская компания в Актюбинской области,  с опытом работы более 25 лет. 
          </h1>
          <p className="py-8">
         Более 700 сотрудников ежедневно обслуживают сотни клиентов и компаний. Клиника располагает современным оборудованием от ведущих иностранных производителей, высококвалифицированным персоналом с большим стажем работы, а также нами применяются современные методы управления и обслуживания клиентов.{" "}
          </p>
          <div className="lg:flex justify-between">
            <ul>
              <li className="flex">
                <i className="far fa-hand-point-right text-3xl text-green-500"></i>
                <h1 className="text-lg pb-8 px-4 uppercase font-bold leading-snug text-black hover:opacity-75">
                Обученный персонал
                </h1>
              </li>
              <li className="flex">
                <i className="far fa-hand-point-right text-3xl text-green-500"></i>
                <h1 className="text-lg pb-8 px-4 uppercase font-bold leading-snug text-black hover:opacity-75">
                Мы предоставляем качественное лечение
                </h1>
              </li>
              <li className="flex">
                <i className="far fa-hand-point-right text-3xl text-green-500"></i>
                <h1 className="text-lg pb-8 px-4 uppercase font-bold leading-snug text-black hover:opacity-75">
                Лучшая цена
                </h1>
              </li>
            </ul>
            <div className="h-full lg:w-2/3 w-full">
              <img  className="w-full"  src={stetoskop} alt="" />
            </div>
          </div>
          
        </div>
        
      </div>
    </>
  );
};

export default QualityService;
