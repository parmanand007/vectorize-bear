"use client";
import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import UploadDisplay from "../../../components/UploadDisplay";
const fileTypes = ["JPG", "PNG", "JPEG"];

function Upload() {
  const [file, setFile] = useState(null);
  const handleChange = (file) => {
    setFile(file);
  };

  return (
    <div className=" flex justify-center items-center   h-[100vh] ">
      <div className="w-1/3 h-1/3 flex justify-center items-center rounded-lg border-dashed border-4 border-solid-blue-500 bg-gray-100">
        <FileUploader
          handleChange={handleChange}
          name="file"
          types={fileTypes}
          children={<UploadDisplay />}
          maxSize={4}
        />
      </div>
    </div>
  );
}

export default Upload;
