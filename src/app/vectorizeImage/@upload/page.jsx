"use client";
// import React, { useState } from "react";
// import { FileUploader } from "react-drag-drop-files";
import UploadDisplay from "../../../components/UploadDisplay";
// import UploadedDocuments from "../../../components/UploadedDocuments";
// const fileTypes = ["JPG", "PNG", "JPEG"];

// function Upload() {
//   const [file, setFile] = useState(null);
//   const handleChange = (file) => {
//     setFile(file);
//   };

//   return (
//     <div className=" flex justify-center items-center   h-[100vh] ">
//       <div className="w-1/3 h-1/3 flex justify-center items-center rounded-lg border-dashed border-4 border-solid-blue-500 bg-gray-100">
//         <FileUploader
//           handleChange={handleChange}
//           name="file"
//           types={fileTypes}
//           children={!file ? <UploadDisplay  />:<UploadedDocuments file={file} />}
//           maxSize={4}
//           multiple={true}
          

//         />
//       </div>
//     </div>
//   );
// }

// export default Upload;

import React, {useCallback} from 'react'
import {useDropzone} from 'react-dropzone'

function MyDropzone() {
  const onDrop = useCallback(acceptedFiles => {
    // Do something with the files
  }, [])
  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      {
        !isDragActive ?

        <div className=" flex justify-center items-center   h-[100vh] " >
          <div className="w-1/3 h-1/3 flex justify-center items-center rounded-lg border-dashed border-4 border-solid-blue-500 bg-gray-100">
            
            
            <UploadDisplay />
            </div>

        </div>:""
          // <p>Drop the files here ...</p> :
          // <p>Drag 'n' drop some files here, or click to select files</p>
      }
    </div>
  )
}

export default MyDropzone