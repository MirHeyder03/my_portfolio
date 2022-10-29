import React from "react";

const index = () => {
  return (
    <>
      <footer className="bg-[#111] text-white flex max-sm:text-lg flex-col sm:flex-row text-center justify-evenly py-6 font-bold text-xl">
        <p>
          © Created by
          <span className="text-xl text-red-700 max-sm:text-xl">
            {" "}
            Mirheydər Yəhyayev
          </span>
        </p>
        <p className="mt-2 sm:mt-0">2022</p>
      </footer>
    </>
  );
};

export default index;
