import React,{useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Education = () => {
useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section className="flex flex-col w-full lg:w-7/9 xl:w-5/9  py-12 items-center justify-center" data-aos="fade-up">
      <h2 className="text-3xl md:text-4xl font-bold  mb-8 tracking-tight">
        Education
      </h2>
      <div className="space-y-6 w-full px-6">
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
    </section>
  );
};

export default Education;