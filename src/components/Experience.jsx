import React from 'react';

const Experience = () => {
  return (
    <section className="w-full lg:w-7/9 xl:w-5/9 px-2 md:px-0 py-12 flex flex-col items-center justify-center">
      
        <h2 className="text-3xl md:text-4xl font-bold  mb-8 tracking-tight">
          Experience
        </h2>
        <div className=" rounded-xl  p-6 md:p-8 border hover:shadow-[rgb(77,85,122)] hover:border-[rgb(77,85,122)] hover:scale-101
         border-gray-800 hover:shadow-md transition-all ease-in-out duration-300">
          <div className="border-l-4 border-indigo-500 pl-4">
            <h3 className="text-xl md:text-2xl font-semibold ">
              Full Stack Developer Intern
            </h3>
            <p className="text-base md:text-lg text-indigo-600 font-medium">
              Codehub Technologies Pvt. Ltd.
            </p>
            <p className="text-sm md:text-base text-gray-400 mt-1">
              Nov 2024 – Apr 2025
            </p>
          </div>
          <ul className="mt-4 space-y-3 text-gray-300 text-sm md:text-base">
            <li className="flex items-start">
              <span className="w-2 h-2 bg-indigo-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Developed multiple live websites using React and Node.js with real-world functionality.
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-indigo-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Gained hands-on experience in backend integration and modern libraries.
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-indigo-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Collaborated in Agile sprints and utilized Git/GitHub for version control.
            </li>
          </ul>
        </div>
    </section>
  );
};

export default Experience;