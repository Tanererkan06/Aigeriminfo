import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import LocationOnIcon from '@mui/icons-material/LocationOn';


const Footer = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="container lg:flex lg:text-center lg:justify-between">
        <div className="lg:w-1/3">
          <div className="flex">
            
            <span className="text-2xl font-Poppins">
           
            Айгерим  <span className="text-primary"></span>
            </span>
          </div>
          <p className="text-justify py-4">
          Режим работы:
        
          <br/>
          будни07:00 - 22:00
          <br/>
          суббота08:00 - 18:00
          <br/>
          воскресенье08:00 - 18:00
          </p>
          <div className="text-primary text-2xl flex">
            <a
              rel="noreferrer"
              target="_blank"
              href="https://www.facebook.com/"
            >
              <i className="fab fa-facebook-square ml-2"></i>
            </a>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://www.instagram.com/"
            >
              <i className="fab fa-instagram-square  ml-2"></i>
            </a>
           
            <a
              rel="noreferrer"
              target="_blank"
              href="https://vk.com/klinika_aigerim/"
            >
              <i className="fab fa-vk ml-2"></i>
            </a>
          </div>
        </div>
        <div className="w-1/3 lg:py-0 py-8">
          <h1 className="text-2xl font-Poppins">Быстрые ссылки</h1>
          <ul className="py-4">
            <li className="py-1 hover:text-primary">
              <Link to="contact">Задать вопрос</Link>
            </li>
            <li className="py-1 hover:text-primary">
              <Link to="/contact">Получить назначение</Link>
            </li>
            <li className="py-1 hover:text-primary">
              <Link to="/contact">Оставить отзыв</Link>
            </li>
            <li className="py-1 hover:text-primary">
              <Link to="/contact">Написать в администрацию</Link>
            </li>
          </ul>
        </div>
       
         <div className="lg:w-1/3">
         
          <h1 className="text-2xl font-Poppins">КОНТАКТЫ</h1>
          
          <i className="fa fa-map-marker"></i>
          03000, РК, г.Актобе ул. Пацаева 7/1<br/>
          <i className="fa fa-map-marker"></i>
          03000, РК, г.Актобе ул. Шернияза 35<br/>
          <i className="fa fa-map-marker"></i>
          03000, РК, г.Актобе ул.Маресьева 87<br/>
          <i className="fas fa-phone"></i>
          +77132905100<br/>
          <i className="fas fa-phone"></i>
          +77750905100<br/>
          <i className="fas fa-phone"></i>
          +77780905100<br/>
         
        </div> 
      </div>
    </div>
  );
};

export default Footer;
