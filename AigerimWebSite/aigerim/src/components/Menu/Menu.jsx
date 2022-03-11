import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo  from "../../images/logo.jpg";


const Menu = () => {
  const [menuOpen, setMenuOpen] = useState();
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full">
          <nav className="relative flex flex-wrap items-center justify-between px-2 py-3">
            <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
              <div className="w-full relative flex justify-between lg:w-auto  lg:static lg:block lg:justify-start">
                <Link
                  to="/"
                  className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-black"
                ><img src={logo} alt="" />
                 {/*  <i className="fas fa-hospital-symbol text-4xl text-primary"></i>
                  <span className="text-2xl font-Poppins">
                  
                  Айгерим <span className="text-primary"></span>
                  </span> */}
                </Link>
                <button
                  className="text-black cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                  type="button"
                  onClick={() => setMenuOpen(!menuOpen)}
                >
                  <i className="fas fa-bars"></i>
                </button>
              </div>

              <div
                className={
                  "lg:flex flex-grow items-center" +
                  (menuOpen ? " flex" : " hidden")
                }
                id="navbar-info"
              >
                <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                  <li className="nav-item">
                    <Link
                      to="/"
                      className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75"
                    >
                      Дома
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="/about"
                      className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75"
                    >
                      О КЛИНИКЕ 
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="/services"
                      className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75"
                    >
                      УСЛУГИ
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="/about"
                      className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75"
                    >
                      КОНТАКТЫ РЕЖИМ РАБОТЫ
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="/Doctors"
                      className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75"
                    >
                      ДОКТОРА

                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="/articles"
                      className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75"
                    >
                      СТАТЬИ

                    </Link>
                  </li>
                  <li className="nav-item bg-primary">
                    <Link
                      to="/appointment"
                      className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                    >
                      Получить назначение
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Menu;
