"use client";

import React, { useState } from "react";
import { UserAuth } from "../../../contexts/UserContext";

const Vectorize = () => {
  const { file, setIsUploaded } = UserAuth();
  const { setIsVectorize } = UserAuth();

  console.log(file);
  return (
    <div className=" flex gap-10 h-[80vh] w-[100vw] justify-center items-center">
      <div className=" rounded-lg border-2 border-slate-300 flex gap-2 flex-wrap p-4 justify-center items-center min-w-80 h-fit min-h-[350px] bg-violet-600 bg-[url('/images/checked_back.png')] bg-cover">
        {file.map((e) => {
          return (
            <img
              src={e.data_url}
              className={e.file.name}
              alt=""
              height="200px"
              width="300px"
            />
          );
        })}
      </div>
      <div className="min-w-60 h-[300px] flex flex-col gap-2">
        <div className=" min-h-[60%] bg-gray-100 p-5 flex flex-col rounded-lg border-2 ">
          <div>
            <p>Useful tip 🥳</p>
            <p className="flex-wrap"> you can extend image using a new AI</p>
          </div>
          <button
            type="button"
            className="focus:outline-none items-end  text-white bg-orange-800  focus:ring-4  font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900 w-[90%] m-auto"
          >
            Extend my image
          </button>
        </div>
        <button
          onClick={() => {
            setIsUploaded(false);
          }}
          type="button"
          className="focus:outline-none text-yellow-800 bg-white font-medium rounded-lg text-xl px-5 py-2 me-2 mb-2  w-full border-yellow-800 border-2"
        >
          Re-Upload
        </button>
        <button
          onClick={() => {
            setIsVectorize(true);
          }}
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
