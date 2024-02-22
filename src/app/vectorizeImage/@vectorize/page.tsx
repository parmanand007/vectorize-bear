import React from "react";

const Vectorize = () => {
  return (
    <div className=" flex gap-10 h-[80vh] w-[100vw] justify-center items-center">
      <div className=" flex justify-center items-center min-w-80 h-[350px] bg-violet-600 bg-[url('/images/checked_back.png')]">
        <img src="/images/imgback.png" alt="" height="200px" width="300px" />
      </div>
      <div className="min-w-60 h-[300px] flex flex-col gap-5">
        <div className=" min-h-40 bg-gray-100 p-5 flex flex-col justify-between">
          <div>
            <p>Useful tip 🥳</p>
            <p className="flex-wrap"> you can extend image using a new AI</p>
          </div>
          <button
            type="button"
            className="focus:outline-none items-end  text-white bg-orange-800  focus:ring-4  font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900 w-[90%]"
          >
            Vectorize image
          </button>
        </div>
        <button
          type="button"
          className="focus:outline-none text-yellow-800 bg-white font-medium rounded-lg text-xl px-5 py-2 me-2 mb-2  w-full border-yellow-800 border-2"
        >
          Re-Upload
        </button>
        <button
          type="button"
          className="focus:outline-none  text-yellow-800 bg-orange-200 hover:bg-orange-300 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-xl px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900 w-full"
        >
          Vectorize image
        </button>
      </div>
    </div>
  );
};

export default Vectorize;
