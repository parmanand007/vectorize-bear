import React from "react";

const UsefulTip = () => {
  return (
    <>
      <div className=" min-h-[55%] bg-gray-100 p-5 flex flex-col rounded-lg border-2 ">
        <div>
          <p>Useful tip 🥳</p>
          <p className="flex-wrap"> you can extend image using a new AI</p>
        </div>
        <button
          type="button"
          className="focus:outline-none items-end  text-white bg-baseBrown  focus:ring-4  font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900 w-[90%] m-auto"
        >
          Extend my image
        </button>
      </div>
    </>
  );
};

export default UsefulTip;
