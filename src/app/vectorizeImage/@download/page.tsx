"use client";
import React, { useState } from "react";
import { UserAuth } from "../../../contexts/UserContext";
import SignInModel from "../../../utilities/SignInModel";
import UsefulTip from "../../../components/UsefulTip";
import {
  FaAlignLeft,
  FaAlignRight,
  FaArrowLeft,
  FaArrowRight,
} from "react-icons/fa";

const Download = () => {
  const { setIsUploaded, setIsVectorize, user } = UserAuth();
  const [open, setOpen] = useState(false);

  const [ModalButtonType, setModalButtonType] = useState("");
  const onOpenModal = (e) => {
    setModalButtonType(e.target.innerText.toLowerCase());
    setOpen(true);
  };
  const [mobileImageToggle, setMobileImageToggle] = useState(false);

  return (
    <div className=" flex flex-col gap-2 h-fit w-[100%] md:flex-row md:gap-10 md:h-[80vh] md:w-[100vw] justify-center items-center">
      <div
        className={
          "flex-col cursor-pointer  md:flex " +
          (!mobileImageToggle ? " flex" : " hidden")
        }
      >
        <p className="text-center p-2">Original Image </p>
        <div className=" flex rounded-lg border-2 border-slate-300  justify-center items-center min-w-80 h-[350px] bg-violet-600 bg-[url('/images/checked_back.png')] bg-cover">
          <img src="/images/imgback.png" alt="" height="200px" width="300px" />
        </div>
      </div>
      <div
        className={
          "flex-col cursor-pointer  md:flex " +
          (mobileImageToggle ? " flex" : " hidden")
        }
      >
        <p className="text-center p-2">Vectorized Image </p>
        <div className=" flex rounded-lg border-2 border-slate-300  justify-center items-center min-w-80 h-[350px] bg-violet-600 bg-[url('/images/checked_back.png')] bg-cover ">
          <img src="/images/logo.png" alt="" height="200px" width="300px" />
        </div>
      </div>
      <div className="  w-80 flex justify-between mb-5 md:hidden">
        <div
          className={
            "flex items-center gap-2 " +
            (!mobileImageToggle ? "opacity-10 cursor-not-allowed" : "")
          }
          onClick={() => {
            if (!mobileImageToggle) return;
            else setMobileImageToggle(!mobileImageToggle);
          }}
        >
          <FaArrowLeft /> Original
        </div>
        <div
          className={
            "flex items-center gap-2 " +
            (mobileImageToggle ? "opacity-40 cursor-not-allowed" : "")
          }
          onClick={() => {
            if (mobileImageToggle) return;
            else setMobileImageToggle(!mobileImageToggle);
          }}
        >
          Vectorized <FaArrowRight />
        </div>
      </div>
      <div className="min-w-60 h-[370px] flex md:flex-col gap-2 flex-col-reverse  md:mt-14">
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
