"use client";

import React, { useState } from "react";
import { UserAuth } from "../../../contexts/UserContext";
import SignInModel from "../../../utilities/SignInModel";
import UsefulTip from "../../../components/UsefulTip";

const Vectorize = () => {
  const { file, setIsUploaded, user } = UserAuth();
  const [open, setOpen] = useState(false);
  const [ModalButtonType, setModalButtonType] = useState("");
  const onOpenModal = (e) => {
    setModalButtonType(e.target.innerText.toLowerCase());
    setOpen(true);
  };
  const { setIsVectorize } = UserAuth();

  console.log(file);
  return (
    <div className=" flex md:gap-10 h-[80%] w-[80%] md:h-[80vh] md:w-[100vw] justify-center items-center flex-col md:flex-row m-auto md:m-0">
      <div className=" rounded-lg  border-2 border-slate-300 flex gap-2 flex-wrap p-4 justify-center items-center min-w-80  max-w-[40%] max-h-[350px] md:h-fit min-h-[350px] bg-violet-600 bg-[url('/images/checked_back.png')] bg-cover overflow-scroll md:overflow-x-hidden md:overflow-y-auto">
        {file.map((e) => {
          return (
            <img
              src={e.data_url}
              className=" max-h-[80%] max-w-[70%] md:h-[300px] md:w-[300px]"
              alt=""
              // height="200px"
              // width="300px"
            />
          );
        })}
      </div>
      <div className="min-w-60 h-[370px] flex flex-col-reverse gap-2 mt-7">
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
            <div onClick={onOpenModal}> SignIn</div>
          )}
          <SignInModel
            heading={
              ModalButtonType == "signin"
                ? "Sign In with Google"
                : "Upgrade Your Plan"
            }
            title={
              ModalButtonType == "signin"
                ? ""
                : "your don't have credits enough."
            }
            buttonType={ModalButtonType}
            setOpen={setOpen}
            open={open}
          />
        </button>
      </div>
    </div>
  );
};

export default Vectorize;
