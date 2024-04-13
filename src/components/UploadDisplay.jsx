import React, { useEffect, useState } from "react";
import { AiOutlineFileImage } from "react-icons/ai";
import ImageUploading from "react-images-uploading";
import { UserAuth } from "../contexts/UserContext";
import SignInModel from "../utilities/SignInModel";
import { redirect } from "next/navigation";

const UploadDisplay = ({ setFile }) => {
  const [images, setImages] = React.useState([]);
  const [open, setOpen] = useState(false);
  const onOpenModal = () => {
    setOpen(true);
  };
  const { setIsUploaded, user } = UserAuth();
  const maxNumber = 69;
  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    // console.log(imageList, addUpdateIndex);
    setFile(imageList);
    setImages(imageList);
  };

  return (
    <>
      <div className="App">
        <ImageUploading
          multiple
          value={images}
          onChange={onChange}
          maxNumber={maxNumber}
          dataURLKey="data_url"
          acceptType={["jpg", "png", "jpeg"]}
        >
          {({
            imageList,
            onImageUpload,
            onImageRemoveAll,
            onImageUpdate,
            onImageRemove,
            isDragging,
            dragProps,
            errors,
          }) => (
            // write your building UI
            <div className="upload__image-wrapper h-[100vh] flex items-center justify-center flex-col gap-4 ">
              {imageList.length == 0 && (
                <div
                  className="bg-gray-200 h-[300px]  w-[90%] md:w-[40%] mx-auto flex flex-col items-center justify-center  border-dotted rounded-xl border-2 border-gray-400 gap-4 hover:cursor-pointer"
                  style={isDragging ? { color: "red" } : null}
                  onClick={async () => {
                    if (!user) onOpenModal();
                    else onImageUpload();
                  }}
                  {...dragProps}
                >
                  <div className="flex justify-center">
                    <AiOutlineFileImage size={50} />
                  </div>
                  <div className=" flex flex-col justify-center items-center gap-4">
                    <p className=" text-xl">Upload or drop a file</p>
                    <p className=" font-light text-xs text-stone-500 ">
                      (up to 4MB)
                    </p>
                  </div>
                  <div className="pt-7">
                    <p className="font-light text-sm text-stone-500">
                      PNG,JPG,JPEG are supported
                    </p>
                  </div>
                </div>
              )}
              {imageList.length > 0 && (
                <div className="bg-gray-200 min-h-[300px] w-[90%] md:min-w-[40%] md:max-w-[70%] p-2  mx-auto flex flex-wrap items-center justify-center  border-dotted rounded border-2 border-gray-400 gap-4">
                  {imageList.map((image, index) => (
                    <div key={index} className="">
                      <div className=" relative top-5 left-20">
                        {/* <button onClick={() => onImageUpdate(index)}>
                          Update
                        </button> */}
                        <div
                          onClick={() => onImageRemove(index)}
                          className=" bg-red-500 w-[20px] h-[20px]  flex items-center justify-center text-sm hover:cursor-pointer text-white"
                        >
                          x
                        </div>
                      </div>
                      <img src={image.data_url} alt="" width="100" />
                    </div>
                  ))}
                </div>
              )}
              {imageList.length > 0 && (
                <div className="flex gap-2">
                  <button
                    onClick={() => {
                      setIsUploaded(true);
                    }}
                    className={
                      user
                        ? "w-[100px] text-center bg-orange-200 border-2 border-orange-500 rounded p-2 hover:cursor-pointer"
                        : "w-[100px] text-center opacity-50 text-orange-800 bg-orange-200 border-2 border-orange-500 rounded p-2  hover:cursor-not-allowed"
                    }
                  >
                    Next
                  </button>
                  <div
                    onClick={onImageRemoveAll}
                    className="bg-slate-200 border-2 border-slate-500 rounded p-2 hover:cursor-pointer"
                  >
                    Remove all images
                  </div>
                </div>
              )}

              {errors && (
                <div>
                  {errors.maxNumber && (
                    <span className=" text-red-500  font-bold">
                      Number of selected images exceed maxNumber
                    </span>
                  )}
                  {errors.acceptType && (
                    <span className=" text-red-500  font-bold">
                      Your selected file type is not allow
                    </span>
                  )}
                  {errors.maxFileSize && (
                    <span className=" text-red-500  font-bold">
                      Selected file size exceed maxFileSize
                    </span>
                  )}
                  {errors.resolution && (
                    <span className=" text-red-500  font-bold">
                      Selected file is not match your desired resolution
                    </span>
                  )}
                </div>
              )}
              {!user && (
                <span className=" w-[80%] text-center  ">
                  <SignInModel
                    heading={"Sign In with Google"}
                    buttonType="signin"
                    setOpen={setOpen}
                    open={open}
                  />
                  {/* Please{" "}
                  <a
                    className=" underline text-blue-400 cursor-pointer"
                    onClick={onOpenModal}
                  >
                    SignIn
                  </a>{" "}
                  to proceed further */}
                </span>
              )}
            </div>
          )}
        </ImageUploading>
      </div>
    </>
  );
};

export default UploadDisplay;
