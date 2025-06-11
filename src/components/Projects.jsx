import React from 'react';

const projects = [
  {
    title: "Mauli Business",
    link: "https://maulibusiness.com/",
    stack: "React.js, Node.js, MongoDB, Tailwind CSS, JWT",
    description: "Built a full-stack learning platform with course release scheduling, QR-based payments, user auth, and progress tracking."
  },
  {
    title: "BachatGat",
    link: "https://bachatfrontend.codifyinstitute.org/",
    stack: "React.js, Node.js, MongoDB, JWT, Vercel",
    description: "Created a rural loan platform for women SHGs with CRP onboarding, loan workflows, EMI tracking, and admin panel."
  },
  {
    title: "School of Ayurveda",
    link: "http://schoolofayurveda.in/",
    stack: "React.js, Node.js, MongoDB, Tailwind CSS",
    description: "Developed a video course platform for Ayurveda with batch-controlled access, student progress tracking, and automation."
  },
  {
    title: "SafeArea",
    link: "#", // Replace with the actual live link if available
    stack: "React.js, Node.js, MongoDB, Leaflet.js, Tailwind CSS",
    description: "Developed a community-driven crime-reporting platform where users can post crime incidents with location and details. Other users can view these on a map to assess safety before relocating or buying property."
  },
];

const Projects = () => {
  return (
    <section className="p-4 md:p-6">
      <h2 className="text-2xl font-semibold mb-4">Projects</h2>
      <div className="space-y-5">
        {projects.map((proj, index) => (
          <div key={index} className="border-l-4 border-blue-500 pl-4">
            <a href={proj.link} target="_blank" rel="noopener noreferrer" className="text-lg font-medium text-blue-600 hover:underline">
              {proj.title}
            </a>
            <p className="text-sm text-gray-600 italic">{proj.stack}</p>
            <p className="text-sm text-gray-700 mt-1">{proj.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
