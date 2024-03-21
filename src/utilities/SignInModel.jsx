"use client";
import React, { useState } from "react";
import { UserAuth } from "../contexts/UserContext";
import Modal from "react-responsive-modal";

const SignInModel = ({ open, setOpen }) => {
  const { googleSignIn, user, logout } = UserAuth();
  const onCloseModal = () => setOpen(false);
  const handleSubmit = async () => {
    try {
      await googleSignIn();
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
      <div className="flex items-center justify-evenly h-[200px] flex-col">
        <p className="text-2xl text-center font-serif">Sign In with Google</p>
        <button className="px-4 py-2 border flex gap-2 border-slate-200  rounded-lg text-slate-600 hover:border-slate-800  hover:text-slate-900  hover:shadow transition duration-150 bg-slate-200">
          <img
            className="w-6 h-6"
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            loading="lazy"
            alt="google logo"
          />
          <span onClick={handleSubmit}>Continue with Google</span>
        </button>
      </div>
    </Modal>
  );
};

export default SignInModel;
