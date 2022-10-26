import React from "react";
const AboutMain = () => {
  return (
    <section className="px-10 py-10 md:px-20 sm:px-15 bg-[#1A2238]">
      <div className="gap-10 lg:flex">
        <div className="items-center justify-center flex-1 p-10 my-10 text-center shadow-lg rounded-xl dark:bg-white">
          <img
            src="https://pbs.twimg.com/profile_images/1011277014924496897/aTMLLVVZ_400x400.jpg"
            width={100}
            height={100}
            className="mx-auto rounded-3xl"
          />
          <h3 className="pt-8 pb-2 text-2xl font-medium ">Frontend</h3>
          <h4 className="py-4 text-xl text-teal-600">Languages</h4>
          <p className="py-1 text-lg font-bold text-gray-800">
            HTML , CSS , JavaScript
          </p>
          <h4 className="py-4 text-xl text-teal-600">Texnolgies</h4>
          <p className="py-1 text-lg font-bold text-gray-800">
            Bootstrap MaterialUI TailwindCSS Sass
          </p>
          <p className="py-1 text-lg font-bold text-gray-800">
            React Redux/toolkit
          </p>
        </div>
        <div className="items-center justify-center flex-1 p-10 my-10 text-center shadow-lg rounded-xl dark:bg-white">
          <img
            src="https://pbs.twimg.com/profile_images/1011277014924496897/aTMLLVVZ_400x400.jpg"
            width={100}
            height={100}
            className="mx-auto rounded-3xl"
          />
          <h3 className="pt-8 pb-2 text-2xl font-medium ">Backend</h3>
          <h4 className="py-4 text-xl text-teal-600">Languages</h4>
          <p className="py-1 text-lg font-bold text-gray-800">JavaScript</p>
          <h4 className="py-4 text-xl text-teal-600">Texnolgies</h4>
          <p className="py-1 text-lg font-bold text-gray-800">
            Node Express Mongo
          </p>
        </div>
        <div className="items-center justify-center flex-1 p-10 my-10 text-center shadow-lg rounded-xl dark:bg-white">
          <img
            src="https://pbs.twimg.com/profile_images/1011277014924496897/aTMLLVVZ_400x400.jpg"
            width={100}
            height={100}
            className="mx-auto rounded-3xl"
          />
          <h3 className="pt-8 pb-2 text-2xl font-medium ">Backend</h3>
          <h4 className="py-4 text-xl text-teal-600">Languages</h4>
          <p className="py-1 overflow-hidden text-lg font-bold text-gray-800">
            xxxxxxxxxxxxxxxx
          </p>
          <h4 className="py-4 text-xl text-teal-600">Texnolgies</h4>
          <p className="py-1 overflow-hidden text-lg font-bold text-gray-800">
            xxxxxxxxxxxxxxxx
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMain;
