import React from 'react';

const About = () => {
  const skills = [
    'HTML',
    'CSS',
    'Tailwind CSS',
    'JavaScript',
    'Python',
    'React',
    'Node.js',
    'Express.js',
    'MongoDB',
    'RESTful APIs',
    'Redux',
    'Zustand',
    'Socket.io',
    'JWT',
    'Git',
    'Github',
  ];

  return (
    <section className=" text-white flex flex-col items-center justify-center py-12 px-4 md:px-8">
      <div className="w-full lg:w-7/9 xl:w-5/9  animate-[fadeIn_0.8s_ease-in-out_forwards]">
        {/* About Me Header */}
        <h2 className="text-4xl  font-bold mb-6 text-center bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
          About Me
        </h2>

        {/* Description */}
        <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8 text-center">
          Full stack MERN developer with 6 months of experience, delivering 3+ projects, including an online education platform, using Node.js, Express.js, and MongoDB. Skilled in building RESTful APIs and React frontends, achieving up to 10% performance improvements through optimized database queries and API enhancements.
        </p>

        {/* Skills Section */}
        <div className="mt-8">
          <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-center">Skills</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="group flex justify-center items-center bg-gray-800 rounded-lg p-3 hover:bg-gray-700 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300"
              >
                <span className="text-base md:text-lg font-medium text-gray-200 group-hover:text-white">
                  {skill}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;