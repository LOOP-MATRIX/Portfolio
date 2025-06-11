import React from 'react';

const Education = () => {
  return (
    <section className="p-4 md:p-6">
      <h2 className="text-2xl font-semibold mb-4">Education</h2>
      <div className="space-y-3">
        <div>
          <h3 className="text-lg font-medium">B.Sc. in Computer Science</h3>
          <p className="text-sm text-gray-600">Viva College (Mumbai University) | Virar,Mh</p>
          <p className="text-sm text-gray-500">Jul 2021 - May 2024 | CGPA: 8.3</p>
        </div>
        <div>
          <h3 className="text-lg font-medium">H.S.C. (Science)</h3>
          <p className="text-sm text-gray-600">Bhavans College | Andheri,Mh</p>
          <p className="text-sm text-gray-500">Jun 2019 - Mar 2021</p>
        </div>
      </div>
    </section>
  );
};

export default Education;
