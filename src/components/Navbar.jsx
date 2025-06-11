import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className=" w-full h-screen flex flex-col justify-center items-center gap-y-8">
      <ul className="flex flex-col justify-center items-end gap-y-8">
        <li>
          <NavLink to="/"  className={({ isActive }) => (isActive ? 'p-1 text-white text-lg transition-all duration-500 drop-shadow-xl drop-shadow-orange-500 py-1' : 'duration-500 text-sm text-gray-600')}>
            Education
          </NavLink>
        </li>
        <li>
          <NavLink to="/experience"  className={({ isActive }) => (isActive ? 'p-1 text-white text-lg transition-all duration-500 drop-shadow-xl drop-shadow-orange-500 py-1' : 'duration-500 text-sm text-gray-600')}>
            Experience
          </NavLink>
        </li>
        <li>
          <NavLink to="/projects" className={({ isActive }) => (isActive ? 'p-1 text-white text-lg transition-all duration-500 drop-shadow-xl drop-shadow-blue-500 py-1' : 'duration-500 transition-all text-sm text-gray-600')}>
            Projects
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;