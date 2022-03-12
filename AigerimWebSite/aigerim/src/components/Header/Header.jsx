import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "./../Context/AuthContext";

const Header = () => {
  const { currentUser, logout } = useAuth();
  return (
    <div className="bg-gray-100">
      <div className="container flex items-center justify-between py-2">
        <div className="hidden md:flex">
          <span className="border-r-2 border-black px-2">
            <i className="far fa-envelope w-5 text-primary"></i>
            call@aigerim.info
          </span>
          <span className="px-2">
            <i className="fas fa-phone text-primary"></i> +77132905100
          </span>
        </div>
        <div className="flex items-center justify-between text-primary ">
          {currentUser?.email ? (
            <>
              <span className="font-bold border-r-2 border-black px-2">
              Добро пожаловать, {currentUser.displayName || currentUser.email}{" "}
              </span>
              <span>
                <button
                  onClick={logout}
                  className="px-4 font-bold text-red-500"
                >
                  Выйти
                </button>
              </span>
            </>
          ) : (
            <>
              <span className="border-r-2 border-black px-2">
                <Link to="/login">Вход</Link>
              </span>
              <span className="px-2">
                <Link to="/register">Регистрация</Link>
              </span>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
