import React from 'react'
import { AiOutlineFileImage } from "react-icons/ai";

const UploadDisplay = () => {
  return (
    < div className='mx-10 mt-10 ' >
      <div className=''>
        <div className='flex justify-center'>
            <AiOutlineFileImage size={50}/>
        </div>
        <div className='ml-8'> 
      <p className=' text-xl' >Upload or drop a file</p>
      <p className='ml-10 mt-4 font-light text-xs text-stone-500' >(up to 4MB)</p>
        </div>
      </div >
      <div className='pt-20 ml-7'>
      <p className='font-light text-sm text-stone-500' >PNG,JPG,JPEG are supported</p>

      </div>
    </div>
  )
}

export default UploadDisplay