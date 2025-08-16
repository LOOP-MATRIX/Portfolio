import React, { useEffect } from 'react'
import img from '../assets/react.svg'
import { CiLocationOn } from "react-icons/ci";
import { MdEmail } from "react-icons/md";
import { AiOutlineLinkedin } from "react-icons/ai";
import { VscGithub } from "react-icons/vsc";
import { MdFileDownload } from "react-icons/md";
import { CiGlobe } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import { BsGenderMale } from "react-icons/bs";
import India from '../assets/india.png'
import profile from '../assets/profile pic shirt (1).jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Profile = ({ setcontact }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  let size = 22

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/Omkar_Sutar_Resume.pdf';
    link.download = 'Omkar_Sutar_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };


  return (
    <>
      <div className='w-full lg:w-7/9 xl:w-5/9 flex flex-row  gap-4 items-center px-8 py-10 '>
        <img src={profile} alt="Profile Image" className='w-30 md:w-40 h-30 md:h-40 p-1 border border-gray-700 rounded-full object-cover' data-aos="fade-left" data-aos-delay="300" />
        <div className='flex flex-col items-start justify-end h-40 '   >
          <p className='text-3xl md:text-4xl font-medium group' data-aos="fade-up" data-aos-delay="100">
            Omkar Sutar
          </p>
          <code className='text-gray-300' data-aos="fade-up" data-aos-delay="100" >Full Stack MERN Developer</code>
        <div className='flex gap-1 items-center h-10  w-52' data-aos="fade-up" data-aos-delay="300">
          <button onClick={() => handleDownload()} className='border border-gray-600 rounded-sm flex justify-center items-center px-2 py-1 hover:shadow-md hover:shadow-gray-600 hover:scale-103 transition-all duration-300 ease-in-out'><MdFileDownload /> Resume</button>
          <button onClick={() => { setcontact(true) }} className='rounded-sm flex justify-center items-center px-2 py-1 bg-gray-900 hover:shadow-md hover:shadow-gray-600 hover:scale-103 hover:bg-gray-800 transition-all duration-300 ease-in-out' data-aos="fade-up" data-aos-delay="400">Get In Touch</button> 
        </div>
        </div>
      </div>
      <div className='w-full lg:w-7/9 xl:w-5/9 h-fit px-8 py-4 flex flex-col gap-3'>
        <p className='flex gap-2 justify-start items-center opacity-60' data-aos="fade-up" data-aos-delay="200">
          <span><CiLocationOn size={24} className='border border-gray-700 bg-gray-800 rounded-md p-[2px]' /></span> &nbsp;Virar, Maharashtra
        </p>
        <p className='flex gap-2 justify-start items-center opacity-60' data-aos="fade-up" data-aos-delay="200">
          <span><IoCallOutline size={24} className='border border-gray-700 bg-gray-800 rounded-md p-[2px]' /></span> &nbsp;+91 74991 15693
        </p>
        <p className='flex gap-2 justify-start items-center opacity-60' data-aos="fade-up" data-aos-delay="200">
          <span><MdEmail size={24} className='border border-gray-700 bg-gray-800 rounded-md p-[2px]' /></span> &nbsp;omsutar1210@gmail.com
        </p>
        <p className='flex gap-2 justify-start items-center opacity-60' data-aos="fade-up" data-aos-delay="200">
          <span><CiGlobe size={24} className='border border-gray-700 bg-gray-800 rounded-md p-[2px]' /></span> &nbsp;portfolio-omkarsutar.vercel.app
        </p>
        <p className='flex gap-2 justify-start items-center opacity-60' data-aos="fade-up" data-aos-delay="200">
          <span><BsGenderMale size={24} className='border border-gray-700 bg-gray-800 rounded-md p-[2px]' /></span> &nbsp;HE/Him
        </p>
      </div>
    </>
  )
}

export default Profile