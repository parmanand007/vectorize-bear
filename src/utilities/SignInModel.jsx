"use client";
import React, { useState } from "react";
import { UserAuth } from "../contexts/UserContext";
import Modal from "react-responsive-modal";

const SignInModel = ({
  heading = "",
  title = "",
  buttonType = "",
  open,
  setOpen,
}) => {
  const { googleSignIn, user, logout } = UserAuth();
  const onCloseModal = () => setOpen(false);
  const handleSubmit = async () => {
    try {
      if (buttonType === "signin") await googleSignIn();
      setOpen(false);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <Modal
      open={open}
      onClose={onCloseModal}
      center
      className="bg-slate-400"
      classNames={{
        overlay: "customOverlay",
        modal: "SignInModal",
      }}
    >
      <div className=" container">
        <div>
          <p className="text-2xl font-serif">{heading}</p>
          {title && <p>{title}</p>}
        </div>
        {buttonType == "signin" ? (
          <button className="px-4 py-2 border flex gap-2 border-slate-200  rounded-lg text-slate-600 hover:border-slate-800  hover:text-slate-900  hover:shadow transition duration-150 bg-slate-200">
            <img
              className="w-6 h-6"
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              loading="lazy"
              alt="google logo"
            />
            <span onClick={handleSubmit}>Continue with Google</span>
          </button>
        ) : (
          <button className=" up-btn px-4 py-2 border justify-center flex gap-2 border-slate-200  rounded-lg text-slate-600 hover:border-slate-800  hover:text-slate-900  hover:shadow transition duration-150 bg-slate-200 w-[90%]">
            <span onClick={handleSubmit}>Upgrade Now</span>
          </button>
        )}
      </div>
    </Modal>
  );
};

export default SignInModel;
