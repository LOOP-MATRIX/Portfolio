import React from 'react'
import img from '../assets/react.svg'
import { CiLocationOn } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { AiOutlineLinkedin } from "react-icons/ai";
import { VscGithub } from "react-icons/vsc";
import { MdFileDownload } from "react-icons/md";

const Profile = () => {

  let size = 22

  let styletl=' hover:rounded-full hover:bg-gray-600 hover:h-9 hover:w-9 hover:p-[5px] transition-all duration-300 ease-in-out'
  return (
    <div className=' w-full h-screen flex flex-col gap-2 justify-center items-center '>
      <img src={img} alt="Profile Image" className='w-40 h-40 border rounded-full'/>
      
      {/* Hello emoji with wave effect */}
      <p className='text-3xl font-bold group'>
        <span 
        >
          👋
        </span>
        &nbsp;Hello!, I&apos;m Omkar
      </p>

      <p>Full Stack Web Developer (MERN)</p>
      <p className='flex justify-center items-center opacity-60'>
        <span><CiLocationOn /></span> &nbsp;Virar, Maharashtra
      </p>


      <div className='flex gap-1 justify-center items-center  h-12 w-52 '>
        <FaInstagram fontSize={size} className={styletl}/>
        <AiOutlineLinkedin fontSize={size}  className={styletl}/>
        <VscGithub fontSize={size} className={styletl}/>
        <div className='border-r-1 h-3/5 mx-2'/>
        <button className='border border-gray-600 rounded-sm flex justify-center items-center px-2 py-1  hover:shadow-md hover:shadow-gray-600 hover:scale-103 transition-all duration-300 ease-in-out'><MdFileDownload /> Resume</button> 
      </div>
      <div>
        <button className=' rounded-sm flex justify-center items-center px-2 py-1 bg-gray-900 hover:shadow-md hover:shadow-gray-600 hover:scale-103 hover:bg-gray-800 transition-all duration-300 ease-in-out'>Get In Touch</button>
      </div>
    </div>
  )
}

export default Profile
