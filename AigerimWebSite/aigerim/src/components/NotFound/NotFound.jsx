import React from "react";

const NotFound = () => {
  return (
    <>
      <div className="bg-gray-500">
        <div className="container text-center mt-8 py-20  ">
          <div className="inline-block align-middle mx-auto ">
            <h1 className="text-9xl text-red-300 font-Poppins">404</h1>
            <h1 className="text-7xl text-white font-Poppins py-2">
            ой! Страница не найдена
            </h1>
            <h1 className="text-2xl text-white font-Poppins">
            Ой! Страница, которую вы ищете, не существует. Это может иметь
               были перемещены или удалены.
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
