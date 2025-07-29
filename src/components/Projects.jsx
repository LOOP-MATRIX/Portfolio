import React,{useEffect} from 'react';
import mauli from '../assets/mauli.png'
import pulselink from '../assets/pulselink.jpg'
import ayurveda from '../assets/ayurveda.png'
import bachatgat from '../assets/bachatgat.png'
import { FaExternalLinkAlt } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';

const projects = [
  {
    title: "PulseLink",
    ref:'personal',
    img: pulselink,
    link: "https://pulselink-one.vercel.app",
    stack: ['React', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Socket.io', 'Zustand', 'Tailwind CSS'],
    description: "Built a social platform with real-time chat and posts."
  },
  {
    title: "Mauli Business",
    ref:'codehub',
    img: mauli,
    link: "https://maulibusiness.com/",
    stack: ['React.js', 'Node.js', 'MongoDB', 'Tailwind CSS', 'JWT'],
    description: "Built a full-stack learning platform with course release scheduling, QR-based payments, user auth, and progress tracking."
  },
  {
    title: "BachatGat",
    ref:'codehub',
    img: bachatgat,
    link: "https://bachatfrontend.codifyinstitute.org/",
    stack: ['React.js', 'Node.js', 'MongoDB', 'JWT'],
    description: "Created a rural loan platform for women SHGs with CRP onboarding, loan workflows, EMI tracking, and admin panel."
  },
  {
    title: "School of Ayurveda",
    ref:'codehub',
    img: ayurveda,
    link: "http://schoolofayurveda.in/",
    stack: ['React.js', 'Node.js', 'MongoDB', 'Tailwind CSS'],
    description: "Developed a video course platform for Ayurveda with batch-controlled access, student progress tracking, and automation."
  },
];

const Projects = () => {
  useEffect(() => {
      AOS.init({
        duration: 1000,
        once: true,
      });
    }, []);

  return (
    <section className="p-4 md:p-6 w-full lg:w-7/9 xl:w-5/9 flex flex-col justify-center items-center" data-aos="fade-up">
      <h2 className="text-4xl font-bold mb-8 ">Projects </h2>
      <div className="w-full space-y-4 ">
        {projects.map((proj, index) => (
          <div key={index} className="border hover:shadow-md shadow-[rgb(77,85,122)] hover:border-[rgb(77,85,122)] border-gray-600 rounded-lg p-4 hover:bg-[#1b1b1b49] flex flex-col gap-8 md:flex-row hover:scale-101 transition-all duration-300 ease-in-out">
            <div className="w-full md:w-[180px] h-[150px] flex-shrink-0 ">
              <img 
                src={proj.img} 
                alt={proj.title} 
                className='w-full h-full object-cover rounded'
              />
            </div>

            <div className="ml-4 flex flex-col justify-center gap-2">
              <div className='flex items-center gap-2'>
                <p className='text-xl md:text-2xl font-semibold'>{proj.title}</p>
                {
                  proj.ref&&(
                    <p className='text-md text-blue-400'>({proj.ref})</p>
                  )
                }
                <a href={proj.link} target='_blank'><FaExternalLinkAlt fontSize={14}/></a>
                </div>
              <div className="text-sm text-white italic flex gap-2 flex-wrap">{
                proj.stack.map((item, index) => (
                  <span key={index} className='px-[8px] text-[12px] text-gray-200 py-[2px] bg-gray-800 rounded-xl'>{item}</span>
                ))}</div>
              <p className="text-md text-[rgb(190,190,190)] mt-2">{proj.description}</p>
            </div>
          </div>
          
        ))}
      </div>
    </section>
  );
};

export default Projects;
