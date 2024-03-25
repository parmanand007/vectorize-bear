"use client";
import React, { useState } from "react";
import { UserAuth } from "../../../contexts/UserContext";
import SignInModel from "../../../utilities/SignInModel";
import UsefulTip from "../../../components/UsefulTip";

const Download = () => {
  const { setIsUploaded, setIsVectorize, user } = UserAuth();
  const [open, setOpen] = useState(false);

  const [ModalButtonType, setModalButtonType] = useState("");
  const onOpenModal = (e) => {
    setModalButtonType(e.target.innerText.toLowerCase());
    setOpen(true);
  };
  return (
    <div className=" flex gap-10 h-[80vh] w-[100vw] justify-center items-center">
      <div className="flex flex-col cursor-pointer ">
        <p className="text-center p-2">Original Image </p>
        <div className=" flex rounded-lg border-2 border-slate-300  justify-center items-center min-w-80 h-[350px] bg-violet-600 bg-[url('/images/checked_back.png')] bg-cover">
          <img src="/images/imgback.png" alt="" height="200px" width="300px" />
        </div>
      </div>
      <div className="flex flex-col cursor-pointer ">
        <p className="text-center p-2">Vectorize Image </p>
        <div className=" flex rounded-lg border-2 border-slate-300  justify-center items-center min-w-80 h-[350px] bg-violet-600 bg-[url('/images/checked_back.png')] bg-cover ">
          <img src="/images/imgback.png" alt="" height="200px" width="300px" />
        </div>
      </div>
      <div className="min-w-60 h-[370px] flex flex-col gap-2 mt-14">
        {/* <div className=" min-h-[60%] rounded-lg border-2 bg-gray-100 p-5 flex flex-col justify-between">
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
        </div> */}
        <UsefulTip />
        <button
          type="button"
          className="focus:outline-none text-baseBrown bg-white font-medium rounded-lg text-lg px-7 py-3 mb-2 mt-3 w-full border-yellow-800 border-2"
          onClick={() => {
            setIsUploaded(false);
            setIsVectorize(false);
          }}
        >
          Re-Upload
        </button>
        <button
          type="button"
          className="focus:outline-none  text-baseBrown bg-orange-200 hover:bg-orange-300 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-lg px-5 py-3 me-2 mb-2 dark:focus:ring-yellow-900 w-full"
        >
          {user ? "Download" : <div onClick={onOpenModal}> SignIn</div>}
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
export default Download;
