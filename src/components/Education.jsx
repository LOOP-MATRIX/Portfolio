import React from 'react';

const Education = () => {
  return (
    <section className="p-6 md:p-8 lg:p-12  min-h-screen">
      <h2 className="text-3xl font-bold mb-8 text-white tracking-tight">Education</h2>
      <div className="space-y-6 max-w-3xl mx-auto">
        <div className="p-6 bg-gray-800 rounded-lg border border-gray-700 shadow-md hover:shadow-lg hover:brightness-110 transition-all duration-300 ease-in-out">
          <h3 className="text-xl font-semibold text-white">B.Sc. in Computer Science</h3>
          <p className="text-sm text-gray-300 mt-1">Viva College (Mumbai University) | Virar, MH</p>
          <p className="text-sm text-gray-400 mt-1">Jul 2021 - May 2024 | CGPA: 8.3</p>
        </div>
        <div className="p-6 bg-gray-800 rounded-lg border border-gray-700 shadow-md hover:shadow-lg hover:brightness-110 transition-all duration-300 ease-in-out">
          <h3 className="text-xl font-semibold text-white">H.S.C. (Science)</h3>
          <p className="text-sm text-gray-300 mt-1">Bhavans College | Andheri, MH</p>
          <p className="text-sm text-gray-400 mt-1">Jun 2019 - Mar 2021</p>
        </div>
      </div>
    </section>
  );
};

export default Education;