"use client";

import React, { useState } from "react";
import { UserAuth } from "../../../contexts/UserContext";
import SignInModel from "../../../utilities/SignInModel";
import UsefulTip from "../../../components/UsefulTip";

const Vectorize = () => {
  const { file, setIsUploaded, user } = UserAuth();
  const [open, setOpen] = useState(false);
  const onOpenModal = () => setOpen(true);
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
      <div className="min-w-60 h-[370px] flex flex-col gap-2 mt-7">
        <UsefulTip />
        <button
          onClick={() => {
            setIsUploaded(false);
          }}
          type="button"
          className="focus:outline-none text-baseBrown bg-white font-medium rounded-lg  text-lg px-5 py-3 me-2 mb-2 mt-3 w-full border-yellow-800 border-2"
        >
          Re-Upload
        </button>
        <button
          type="button"
          className="focus:outline-none  text-baseBrown bg-orange-200 hover:bg-orange-300 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-lg px-5 py-3 me-2 mb-2 dark:focus:ring-yellow-900 w-full"
        >
          {user ? (
            <div
              onClick={() => {
                setIsVectorize(true);
              }}
            >
              Vectorize Image
            </div>
          ) : (
            <div onClick={onOpenModal}> Sign In</div>
          )}
          <SignInModel setOpen={setOpen} open={open} />
        </button>
      </div>
    </div>
  );
};

export default Vectorize;
