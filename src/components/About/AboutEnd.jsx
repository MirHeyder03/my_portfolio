import React from "react";

const AboutEnd = () => {
  return (
    <div className="flex flex-col items-center py-16 justify-evenly md:flex-row bg-[#1A2238] gap-4">
      <div class="px-4 rounded-2xl flex flex-col items-center pb-10 border-black border shadow-xs aboutEndCards bg-contactBg text-white text-center max-w-sm">
        <img
          class="my-3 w-24 h-24 rounded-full shadow-lg"
          src="https://pbs.twimg.com/profile_images/1011277014924496897/aTMLLVVZ_400x400.jpg"
          alt="Bonnie image"
        />
        <h5 class="mb-1 text-2xl font-bold tracking-widest">Frontend</h5>
        <span class="text-md text-indigo-800 font-bold mt-2">Languages</span>
        <span className="tracking-wide">Html , CSS , JavaScript</span>
        <span class="text-md text-indigo-800 font-bold mt-4">Technologies</span>
        <span className="tracking-wide">
          Bootstrap ,TailwindCSS , MaterialUI <br /> React/Redux/Redux-toolkit{" "}
        </span>
      </div>
      <div class="px-14 rounded-2xl flex flex-col items-center pb-10 border-black border bg-contactBg text-white text-center max-w-md py-5 aboutEndCards">
        <img
          class="my-3 w-24 h-24 rounded-full shadow-lg"
          src="https://pbs.twimg.com/profile_images/1011277014924496897/aTMLLVVZ_400x400.jpg"
          alt="Bonnie image"
        />
        <h5 class="mb-1 text-2xl font-medium tracking-widest">Backend</h5>
        <span class="text-md text-indigo-800 font-bold mt-2">Languages</span>
        <span className="tracking-wide">JavaScript</span>
        <span class="text-md text-indigo-800 font-bold mt-4">Technologies</span>
        <span className="tracking-wide">Node , Express , Mongo</span>
      </div>
    </div>
  );
};

export default AboutEnd;
