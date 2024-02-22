'use client'
import React, { useEffect, useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import UploadDisplay from "../../components/UploadDisplay"
const fileTypes = ["JPG", "PNG", "JPEG"];

function Upload() {
  const [file, setFile] = useState(null);

  const handleChange = (file) => {
    console.log("===========file",file)
    setFile(file);
  };
  const uploadSizeError=(err) =>{
    //show toast
    console.log("---------------->error",err)
  }
  const uploadTypeError=(err)=>{
    //show toast 
   console.log("===========typeerror,",err)
  }
  return (
    <div className=" flex justify-center items-center   h-[100vh] ">
        <div className="w-1/3 h-1/3 flex justify-center items-center rounded-lg border-dashed border-4 border-solid-blue-500 bg-gray-100">
        <FileUploader handleChange={handleChange} name="file" types={fileTypes}  maxSize={1} onTypeError={uploadTypeError} onSizeError={uploadSizeError} children={<UploadDisplay />}/>
        </div>
  
    </div>
  );
}

export default Upload;