import React from 'react';

const Education = () => {
  return (
    <section className="py-8 px-4 md:px-8 lg:px-16  min-h-screen flex items-center justify-center">
      <div className="max-w-3xl w-full">
        <h2 className="text-3xl md:text-4xl font-bold  mb-8 tracking-tight">
          Education
        </h2>
        <div className="space-y-6">
          <div className="rounded-xl  p-6 md:p-8 border hover:shadow-[rgb(77,85,122)] hover:border-[rgb(77,85,122)] hover:scale-101
         border-gray-800 hover:shadow-md transition-all ease-in-out duration-300">
            <h3 className="text-xl md:text-2xl font-semibold ">
              B.Sc. in Computer Science
            </h3>
            <p className="text-base md:text-lg text-gray-400 font-medium mt-1">
              Viva College (Mumbai University) | Virar, MH
            </p>
            <p className="text-sm md:text-base text-gray-500 mt-1">
              Jul 2021 - May 2024 | CGPA: 8.3
            </p>
          </div>
          <div className="rounded-xl  p-6 md:p-8 border hover:shadow-[rgb(77,85,122)] hover:border-[rgb(77,85,122)] hover:scale-101
         border-gray-800 hover:shadow-md transition-all ease-in-out duration-300">
            <h3 className="text-xl md:text-2xl font-semibold ">
              H.S.C. (Science)
            </h3>
            <p className="text-base md:text-lg text-gray-400 font-medium mt-1">
              Bhavans College | Andheri, MH
            </p>
            <p className="text-sm md:text-base text-gray-500 mt-1">
              Jun 2019 - Mar 2021
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;