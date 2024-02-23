"use client";
import React, { useContext, useState } from "react";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import "./customStyle.css";
import { UserAuth } from "../contexts/UserContext";
const Header = () => {
  const [open, setOpen] = useState(false);
  const { googleSignIn, user, logout } = UserAuth();
  const [toggleUserDropDown, setToggleUserDropDown] = useState(false);
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  const handleSubmit = async () => {
    console.log("hello");
    try {
      await googleSignIn();

      setOpen(false);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <div className="flex justify-between px-7 py-2 h-[60px]">
        <div className="flex items-center gap-1">
          <svg height="20px" width="20px" viewBox="0 0 512 512">
            <g>
              <path
                fill="#8D786F"
                d="M446.687,4.946c-10.483,5.993-28.819,17.535-44.262,27.395
		C390.732,19.392,374.029,8.507,353.25,8.507c-3.714,0-59.856,0-64.244,0c-13.936,0-22.013,0.839-33.007,9.888
		c-10.995-9.049-19.059-9.888-32.995-9.888c-4.4,0-60.542,0-64.26,0c-20.773,0-37.469,10.885-49.171,23.833
		c-15.44-9.86-33.774-21.402-44.259-27.395c-30.053-17.18-79.21,11.736-61.607,66.008c6.547,20.196,32.636,39.924,66.799,47.051
		c-20.789,56.61-45.587,127.587-48.395,136.013c-7.924,23.765-5.279,55.447,18.479,73.929
		c23.771,18.482,136.206,65.715,136.206,65.715h64.531H256h14.67h64.531c0,0,112.445-47.233,136.204-65.715
		c23.77-18.482,26.412-50.164,18.484-73.929c-2.804-8.426-27.609-79.404-48.388-136.013c34.155-7.127,60.243-26.855,66.787-47.051
		C525.901,16.681,476.74-12.234,446.687,4.946z"
              />
              <g>
                <g>
                  <path
                    fill="#8D786F"
                    d="M136.452,49.682c0,0-50.604-33.001-71.137-44.737c-30.053-17.18-79.21,11.736-61.607,66.008
				c8.193,25.272,46.939,49.871,93.879,49.871L136.452,49.682z"
                  />
                  <path
                    fill="#D5AD79"
                    d="M94.648,64.353c0,0-35.195-23.469-46.204-30.804c-7.766-5.179-26.401,24.936-2.929,46.94
				c15.889,14.896,44.736,8.065,44.736,8.065L94.648,64.353z"
                  />
                  <path
                    fill="#8D786F"
                    d="M158.746,8.507c-29.037,0-50.158,21.228-60.716,39.71c-10.567,18.479-71.418,192.311-75.917,205.8
				c-7.924,23.765-5.279,55.447,18.479,73.929c23.771,18.482,136.206,65.715,136.206,65.715h64.531H256V18.395
				c-10.995-9.049-19.059-9.888-32.995-9.888C218.605,8.507,162.464,8.507,158.746,8.507z"
                  />
                  <path
                    fill="#766256"
                    d="M163.598,176.561c0,9.321-7.557,16.868-16.875,16.868c-9.317,0-16.864-7.547-16.864-16.868
				c0-9.314,7.547-16.862,16.864-16.862C156.041,159.699,163.598,167.247,163.598,176.561z"
                  />
                </g>
                <g>
                  <path
                    fill="#7C685D"
                    d="M375.55,49.682c0,0,50.607-33.001,71.137-44.737c30.053-17.18,79.215,11.736,61.602,66.008
				c-8.189,25.272-46.931,49.871-93.873,49.871L375.55,49.682z"
                  />
                  <path
                    fill="#D5AD79"
                    d="M417.357,64.353c0,0,35.188-23.469,46.195-30.804c7.778-5.179,26.413,24.936,2.929,46.94
				c-15.88,14.896-44.737,8.065-44.737,8.065L417.357,64.353z"
                  />
                  <path
                    fill="#7C685D"
                    d="M353.25,8.507c29.043,0,50.171,21.228,60.729,39.71c10.558,18.479,71.411,192.311,75.911,205.8
				c7.928,23.765,5.286,55.447-18.484,73.929c-23.759,18.482-136.204,65.715-136.204,65.715H270.67H256V18.395
				c10.994-9.049,19.071-9.888,33.007-9.888C293.394,8.507,349.536,8.507,353.25,8.507z"
                  />
                  <path
                    fill="#604E45"
                    d="M348.414,176.561c0,9.321,7.541,16.868,16.865,16.868c9.311,0,16.865-7.547,16.865-16.868
				c0-9.314-7.553-16.862-16.865-16.862C355.955,159.699,348.414,167.247,348.414,176.561z"
                  />
                </g>
              </g>
              <g>
                <path
                  fill="#F6D3B0"
                  d="M247.199,346.719c-21.477,0-38.878-17.4-38.878-38.868c0-21.471,17.401-38.872,38.878-38.872H256
			v-98.762h-38.667c-17.538,0-33.169,10.268-38.965,25.612l-30.803,81.558c-3.116,8.261-3.085,17.263,0.087,25.497l17.667,45.839
			c5.87,15.22,21.426,25.384,38.877,25.384H256v-27.388H247.199z"
                />
                <path
                  fill="#F2CEA3"
                  d="M364.431,277.387l-30.813-81.558c-5.783-15.344-21.415-25.612-38.953-25.612H256v98.762h8.799
			c21.465,0,38.878,17.401,38.878,38.872c0,21.468-17.413,38.868-38.878,38.868H256v27.388h51.803
			c17.438,0,33.007-10.165,38.866-25.384l17.675-45.839C367.522,294.65,367.547,285.648,364.431,277.387z"
                />
                <path
                  fill="#6D594E"
                  d="M264.8,346.719c21.465,0,38.878-17.4,38.878-38.868c0-21.471-17.413-38.872-38.878-38.872H256
			v77.74H264.8z"
                />
                <path
                  fill="#766256"
                  d="M208.321,307.851c0,21.468,17.401,38.868,38.878,38.868H256v-77.74h-8.801
			C225.723,268.979,208.321,286.38,208.321,307.851z"
                />
              </g>
            </g>
          </svg>
          <h1 className="font-mono text-xl pb-2 font-semibold ">
            VectorizeBear
          </h1>
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
              SignIn{" "}
            </h1>
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
                <p className="text-2xl text-center font-serif">
                  Sign In with Google
                </p>
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
          </div>
        )}
        {user?.displayName && (
          <div class="flex  items-end  flex-col">
            <button
              type="button"
              class="flex text-sm bg-gray-800 border-black border-2 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600 w-fit"
              id="user-menu-button"
              aria-expanded="false"
              data-dropdown-toggle="user-dropdown"
              data-dropdown-placement="bottom"
              onClick={() => {
                setToggleUserDropDown(!toggleUserDropDown);
                handleSubmit;
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
                class="z-50  my-2 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
                id="user-dropdown"
              >
                <div class="px-4 py-3">
                  <span class="block text-sm text-gray-900 dark:text-white">
                    {user?.displayName}
                  </span>
                  <span class="block text-sm  text-gray-500 truncate dark:text-gray-400">
                    {user?.email}
                  </span>
                </div>
                <ul class="py-2" aria-labelledby="user-menu-button">
                  {/* <li>
                    <a
                      href="#"
                      class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      Dashboard
                    </a>
                  </li> */}
                  {/* <li>
                    <a
                      href="#"
                      class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      Settings
                    </a>
                  </li> */}
                  {/* <li>
                    <a
                      href="#"
                      class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      Earnings
                    </a>
                  </li> */}
                  <li>
                    <a
                      href="#"
                      class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                      onClick={async () => {
                        console.log("hello");
                        try {
                          await logout();
                        } catch (e) {
                          console.log(e);
                        }
                      }}
                    >
                      Sign out
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
