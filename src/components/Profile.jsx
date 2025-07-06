import React from 'react'
import img from '../assets/react.svg'
import { CiLocationOn } from "react-icons/ci";
import { MdEmail } from "react-icons/md";
import { AiOutlineLinkedin } from "react-icons/ai";
import { VscGithub } from "react-icons/vsc";
import { MdFileDownload } from "react-icons/md";

const Profile = ({ setcontact }) => {

  let size = 22

  const handleDownload = () => {
  const link = document.createElement('a');
  link.href = 'public/Omkar_Sutar_Resume.pdf'; // path to your file (in public folder)
  link.download = 'Omkar_Sutar_Resume.pdf'; // name of file to download
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

  let styletl = ' hover:rounded-full hover:bg-gray-600 hover:h-9 hover:w-9 hover:p-[5px] transition-all duration-300 ease-in-out'
  return (
    <div className='w-full lg:w-7/9 xl:w-5/9 flex flex-col-reverse gap-8 md:flex-row items-center md:justify-evenly px-8 py-10 '>
      <div className='flex flex-col items-center'>
        <p className='text-2xl md:text-4xl font-bold group'>
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
          <a href="mailto:omsutar1210@gmail.com" target='_blank'><MdEmail fontSize={size} className={styletl} /></a>
          <a href="https://www.linkedin.com/in/omkar-sutar-251656296/" target='_blank'><AiOutlineLinkedin fontSize={size} className={styletl} /></a>
          <a href="https://github.com/LOOP-MATRIX" target='_blank'><VscGithub fontSize={size} className={styletl} /></a>
          <div className='border-r-1 h-3/5 mx-2' />
          <button onClick={()=>handleDownload()} className='border border-gray-600 rounded-sm flex justify-center items-center px-2 py-1  hover:shadow-md hover:shadow-gray-600 hover:scale-103 transition-all duration-300 ease-in-out'><MdFileDownload /> Resume</button>
        </div>
        <button onClick={() => { setcontact(true) }} className=' rounded-sm flex justify-center items-center px-2 py-1 bg-gray-900 hover:shadow-md hover:shadow-gray-600 hover:scale-103 hover:bg-gray-800 transition-all duration-300 ease-in-out'>Get In Touch</button>
      </div>
      <img src={img} alt="Profile Image" className='w-40 h-40 border rounded-lg' />


    </div>
  )
}

export default Profile
