import React from "react";

const index = () => {
  return (
    <div id="contact" className="flex flex-col justify-center py-8 mx-auto text-center text-white select-none bg-contactBg">
      <div className="mx-auto md:w-[30rem] sm:w-[20rem] max-smm:w-[15rem]">
        <h2 className="mb-8 text-4xl font-bold text-white md:text-5xl">
          Get in touch
        </h2>
        <form
          action=""
          className="flex flex-col w-full max-w-lg gap-4 text-black"
        >
          <input
            type="text"
            placeholder="Name"
            className="py-3 pl-4 rounded-2xl"
          />
          <input
            type="text"
            placeholder="Email"
            className="py-3 pl-4 rounded-2xl"
          />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Message"
            className="py-3 pl-4 resize-none rounded-2xl"
          ></textarea>
          <button className="py-3 text-xl tracking-widest text-white bg-indigo-700 hover:bg-gray-600 rounded-2xl">
            Send
          </button>
        </form>
      </div>
      <div className="flex justify-center gap-8 mt-8 text-contactLink">
        <a
          href="https://www.linkedin.com/uas/login-submit?_l=en_US"
          className="hover:text-contactLinkVisited"
        >
          LinkedIn
        </a>
        <a href="mhyahyayev03@gmail.com" className="hover:text-contactLinkVisited">
          Email
        </a>
        <a href="https://github.com/MirHeyder03" className="hover:text-contactLinkVisited">
          GitHub
        </a>
      </div>
    </div>
  );
};

export default index;
