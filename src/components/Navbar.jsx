import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center gap-y-8">
      <ul className="flex flex-col justify-center items-end gap-y-8">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `px-2 py-1 transition-all duration-300 ease-in-out ${
                isActive
                  ? 'text-white text-[19px] drop-shadow-xl drop-shadow-blue-300'
                  : 'text-gray-600 text-sm hover:drop-shadow-[0_8px_16px_rgba(59,130,246,0.4)]'
              }`
            }
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/education"
            className={({ isActive }) =>
              `px-2 py-1 transition-all duration-300 ease-in-out ${
                isActive
                  ? 'text-white text-[19px] drop-shadow-xl drop-shadow-blue-300'
                  : 'text-gray-600 text-sm hover:drop-shadow-[0_8px_16px_rgba(59,130,246,0.4)]'
              }`
            }
          >
            Education
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/experience"
            className={({ isActive }) =>
              `px-2 py-1 transition-all duration-300 ease-in-out ${
                isActive
                  ? 'text-white text-[19px] drop-shadow-xl drop-shadow-blue-300'
                  : 'text-gray-600 text-sm hover:drop-shadow-[0_8px_16px_rgba(59,130,246,0.4)]'
              }`
            }
          >
            Experience
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              `px-2 py-1 transition-all duration-300 ease-in-out ${
                isActive
                  ? 'text-white text-[19px] drop-shadow-xl drop-shadow-blue-300'
                  : 'text-gray-600 text-sm hover:drop-shadow-[0_8px_16px_rgba(59,130,246,0.4)]'
              }`
            }
          >
            Projects
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;