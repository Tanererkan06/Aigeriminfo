import React from "react";
import { Link } from "react-router-dom";
import banner from "../../images/banner.png";
import ban from "../../images/ban.png"
import bannerr from "../../images/bannerr.png"


const Banner = () => {
  return (
    <div
      className="bg-cover bg-no-repeat bg-center py-36"
      style={{
        backgroundImage:`url(${ban})`
        
        
      }}
    >
      <div className="container lg:flex lg:text-center lg:justify-between">
        <h1 className="text-4xl text-center italic  font-Roboto font-semibold">
        
        Клиника <br/>Агерим Желаем Вам <br/>крепкого здоровья
        </h1>
        
      
    </div>
    </div>
  );
};

export default Banner;
