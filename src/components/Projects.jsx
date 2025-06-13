import React from 'react';
import mauli from '../assets/mauli.png'
import ayurveda from '../assets/ayurveda.png'
import bachatgat from '../assets/bachatgat.png'
import { FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "SafeArea",
    img: null,
    link: "#",
    stack: ['React', 'Nodejs', 'MongoDB', 'TailwindCSS'],
    description: "Developed a community-driven crime-reporting platform where users can post crime incidents with location and details. Other users can view these on a map to assess safety before relocating or buying property."
  },
  {
    title: "Mauli Business",
    img: mauli,
    link: "https://maulibusiness.com/",
    stack: ['React.js', 'Node.js', 'MongoDB', 'Tailwind CSS', 'JWT'],
    description: "Built a full-stack learning platform with course release scheduling, QR-based payments, user auth, and progress tracking."
  },
  {
    title: "BachatGat",
    img: bachatgat,
    link: "https://bachatfrontend.codifyinstitute.org/",
    stack: ['React.js', 'Node.js', 'MongoDB', 'JWT', 'Vercel'],
    description: "Created a rural loan platform for women SHGs with CRP onboarding, loan workflows, EMI tracking, and admin panel."
  },
  {
    title: "School of Ayurveda",
    img: ayurveda,
    link: "http://schoolofayurveda.in/",
    stack: ['React.js', 'Node.js', 'MongoDB', 'Tailwind CSS'],
    description: "Developed a video course platform for Ayurveda with batch-controlled access, student progress tracking, and automation."
  },
];

const Projects = () => {
  return (
    <section className="p-2 md:p-6">
      <h2 className="text-4xl font-bold mb-2">Projects </h2>
      <div className="space-y-4 ">
        {projects.map((proj, index) => (
          <div key={index} className="border hover:shadow-md   shadow-[rgb(77,85,122)] hover:border-[rgb(77,85,122)] border-gray-600 rounded-lg p-4 hover:bg-[#1b1b1b49] flex hover:scale-101 transition-all duration-300 ease-in-out">
            <div className="w-[150px] h-[100px] flex-shrink-0 ">
              <img 
                src={proj.img} 
                alt={proj.title} 
                className='w-full h-full object-cover rounded'
              />
            </div>
            <div className="ml-4 flex flex-col gap-1">
              <div className='flex items-center gap-2'>
                <p className='text-2xl font-semibold'>{proj.title}</p>
                <a href={proj.link} target='_blank'><FaExternalLinkAlt fontSize={14}/></a>
                </div>
              <div className="text-sm text-white italic flex gap-2">{
                proj.stack.map((item, index) => (
                  <span key={index} className='px-[8px] text-[12px] text-gray-200 py-[2px] bg-gray-800 rounded-xl'>{item}</span>
                ))}</div>
              <p className="text-sm text-[rgb(190,190,190)] mt-1">{proj.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
