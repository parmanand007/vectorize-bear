"use client";
import React, { useState } from "react";
import { IoIosSettings } from "react-icons/io";
import { LiaClipboardListSolid } from "react-icons/lia";
import { VscSignOut } from "react-icons/vsc";
import "react-responsive-modal/styles.css";
import "./customStyle.css";
import { UserAuth } from "../contexts/UserContext";
import Plans from "./Plans";
import SignInModel from "../utilities/SignInModel";
import { FaQuestion } from "react-icons/fa";
import Credits from "./Credits";

const Header = () => {
  const [open, setOpen] = useState(false);
  const { user, logout } = UserAuth();
  const [Upgrade, setUpgrade] = useState(false);
  const [ModalButtonType, setModalButtonType] = useState("");
  const [toggleUserDropDown, setToggleUserDropDown] = useState(false);
  const onOpenModal = (e) => {
    console.log(e.target.innerText.toLowerCase());
    setModalButtonType(e.target.innerText.toLowerCase());
    setOpen(true);
  };
  return (
    <div>
      <div className="flex justify-between px-7 py-2 h-[60px]">
        <div className="flex items-center gap-1">
          <img width="200px" src="./images/VB.png"></img>
        </div>
        {!user?.displayName && (
          <div className="flex items-center gap-1 font-semibold">
            <svg fill="#000000" width="20px" height="20px" viewBox="0 0 36 36">
              <title>sign-in-line</title>
              <path
                d="M28,4H12a2,2,0,0,0-2,2H28V30H12V20.2H10V30a2,2,0,0,0,2,2H28a2,2,0,0,0,2-2V6A2,2,0,0,0,28,4Z"
                className="clr-i-outline clr-i-outline-path-1"
              ></path>
              <path
                d="M15.12,18.46a1,1,0,1,0,1.41,1.41l5.79-5.79L16.54,8.29a1,1,0,0,0-1.41,1.41L18.5,13H4a1,1,0,0,0-1,1,1,1,0,0,0,1,1H18.5Z"
                className="clr-i-outline clr-i-outline-path-2"
              ></path>
              <rect x="0" y="0" width="36" height="36" fillOpacity="0" />
            </svg>
            <h1 className="font-mono text-xl" onClick={onOpenModal}>
              SignIn
            </h1>
            <SignInModel
              heading={
                ModalButtonType == "signin"
                  ? "Sign In with Google"
                  : "Upgrade Now"
              }
              title={
                ModalButtonType == "signin"
                  ? ""
                  : "your don't have credits enough"
              }
              buttonType={ModalButtonType}
              setOpen={setOpen}
              open={open}
            />
          </div>
        )}
        {user?.displayName && (
          <div className="bg-red-20 flex">
            <button
              onClick={onOpenModal}
              type="button"
              className=" absolute top-[12px] right-[280px] focus:outline-none text-baseBrown bg-white font-medium rounded-lg text-s px-2 py-1 me-1 mb-1  w-30 border-yellow-800 border-2"
            >
              Upgrade
            </button>

            <Credits />
            {Upgrade && <Plans setUpgrade={setUpgrade} />}
            <div className="flex  w-fit mt-1 ">
              <div class="flex  items-end  flex-col">
                <button
                  type="button"
                  class="flex text-sm   rounded-full md:me-0  w-fit"
                  id="user-menu-button"
                  aria-expanded="false"
                  data-dropdown-toggle="user-dropdown"
                  data-dropdown-placement="bottom"
                  onClick={() => {
                    setToggleUserDropDown(!toggleUserDropDown);
                  }}
                >
                  <span class="sr-only">Open user menu</span>
                  <img
                    class="w-8 h-8 rounded-full overflow-hidden"
                    src={"./images/user.png"}
                    alt="user photo"
                  />
                </button>

                {toggleUserDropDown && (
                  <div
                    class="z-50  my-2 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow "
                    id="user-dropdown"
                  >
                    <div class="px-4 py-3">
                      <span class=" flex items-center gap-2 text-sm text-gray-900 ">
                        {user?.displayName}
                      </span>
                      <span class=" flex items-center gap-2 text-sm  text-gray-500 truncate ">
                        {user?.email}
                      </span>
                    </div>
                    <ul class="py-2" aria-labelledby="user-menu-button">
                      <li>
                        <a
                          href="#"
                          class=" flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          <IoIosSettings /> Billing
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          class=" flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          <LiaClipboardListSolid /> Plans
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          class=" flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          <FaQuestion /> Help
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          class=" flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          onClick={async () => {
                            console.log("hello");
                            try {
                              await logout();
                            } catch (e) {
                              console.log(e);
                            }
                          }}
                        >
                          <VscSignOut /> Sign out
                        </a>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
      {/* <UpgradeModal /> */}
      <SignInModel
        heading={
          ModalButtonType == "signin" ? "Sign In with Google" : "Upgrade Now"
        }
        title={
          ModalButtonType == "signin" ? "" : "your don't have credits enough"
        }
        buttonType={ModalButtonType}
        setOpen={setOpen}
        open={open}
      />
    </div>
  );
};

export default Header;
