import React from "react";

const AboutHead = () => {
  return (
    <div className="bg-[#181A1B] text-center font-bold flex flex-col gap-4 text-gray-200 py-10">
      <h3 className="text-4xl md:text-5xl max-smm:text-3xl">
        Full Stack Developer
      </h3>
      <h4 className="text-2xl md:text-3xl max-sm:text-xl">I love what I do</h4>
      <p className="mx-auto space-x-12 text-lg text-gray-600 max-smm:max-w-xs max-sm:max-w-xs lg:max-w-lg sm:max-w-sm md:max-w-xl max-sm:text-sm md:text-xl">
        Hard worker with great passion for innovation and work. Currently
        looking for THE company which is the place of gaining experience and
        friends. As well as to benefit to the organization I work with my energy
        and experience
      </p>
    </div>
  );
};

export default AboutHead;
