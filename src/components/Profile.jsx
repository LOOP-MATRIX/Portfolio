import React from 'react'
import img from '../assets/react.svg'
import { CiLocationOn } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { AiOutlineLinkedin } from "react-icons/ai";
import { VscGithub } from "react-icons/vsc";
import { MdFileDownload } from "react-icons/md";

const Profile = () => {
  return (
    <div className=' w-full h-screen flex flex-col justify-center items-center '>
      <img src={img} alt="Profile Image" className='w-40 h-40 border rounded-full'/>
      
      {/* Hello emoji with wave effect */}
      <p className='text-lg font-bold group'>
        <span 
        >
          👋
        </span>
        &nbsp;Hello!, I&apos;m Omkar Sutar
      </p>

      <p className='flex justify-center items-center opacity-60'>
        <span><CiLocationOn /></span> &nbsp;Virar, Maharashtra
      </p>

      <p>Full Stack Web Developer</p>

      <div className='flex gap-1 justify-center items-center '>
        <FaInstagram />
        <AiOutlineLinkedin />
        <VscGithub fontSize={14}/>
        <div className='border-r-1 h-full mx-2'/>
        <button className='border rounded-sm flex justify-center items-center px-1'><MdFileDownload /> Resume</button> 
      </div>
    </div>
  )
}

export default Profile
