import React from 'react';

const Experience = () => {
  return (
    <section className="p-4 md:p-6">
      <h2 className="text-2xl font-semibold mb-4">Experience</h2>
      <div>
        <h3 className="text-lg font-medium">Full Stack Developer Intern</h3>
        <p className="text-sm text-gray-600">Codehub Technologies Pvt. Ltd.</p>
        <p className="text-sm text-gray-500">Nov 2024 – Apr 2025</p>
        <ul className="list-disc list-inside mt-2 text-sm text-gray-700 space-y-1">
          <li>Developed multiple live websites using React and Node.js with real-world functionality.</li>
          <li>Gained hands-on experience in backend integration and modern libraries.</li>
          <li>Collaborated in Agile sprints and utilized Git/GitHub for version control.</li>
        </ul>
      </div>
    </section>
  );
};

export default Experience;
