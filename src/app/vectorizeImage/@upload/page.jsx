"use client";
import React, { useState } from "react";
import UploadDisplay from "../../../components/UploadDisplay";
import { UserAuth } from "../../../contexts/UserContext";

function Upload() {
  const { setFile } = UserAuth();
  return (
    <>
      <UploadDisplay setFile={setFile} />
      {/* <div className=" flex justify-center items-center   h-[100vh] ">
        <div className="w-1/3 h-1/3 flex justify-center items-center rounded-lg border-dashed border-4 border-solid-blue-500 bg-gray-100">
          <FileUploader
            handleChange={handleChange}
            name="file"
            types={fileTypes}
            children={
              !file ? <UploadDisplay /> : <UploadedDocuments file={file} />
            }
            maxSize={4}
          />
        </div>
      </div> */}
    </>
  );
}

export default Upload;
