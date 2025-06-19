// import React from 'react';

// const navItems = [
//   { id: 'about', label: 'About' },
//   { id: 'experience', label: 'Experience' },
//   { id: 'projects', label: 'Projects' },
//   { id: 'education', label: 'Education' },
// ];

// const Navbar = () => {
//   return (
//     <div className="w-full backdrop-blur-lg h-[10vh] flex justify-center items-center fixed top-0 z-50">
//       <ul className="flex justify-center items-center gap-x-8">
//         {navItems.map((item) => (
//           <li key={item.id}>
//             <a
//               href={`#${item.id}`}
//               className="px-2 py-1 transition-all duration-300 ease-in-out text-gray-200 text-sm hover:text-white hover:text-[16px] "
//             >
//               {item.label}
//             </a>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Navbar;

import React, { useState } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import { IoClose } from 'react-icons/io5';

const navItems = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full backdrop-blur-lg backdrop-filter h-[10vh] flex justify-between md:justify-center items-center px-6 fixed top-0 z-50">

      <div className="md:hidden text-white text-xl font-bold">Portfolio</div>

      <ul className="hidden md:flex justify-center items-center gap-x-8">
        {navItems.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className="px-2 py-1 transition-all duration-300 ease-in-out text-gray-200 text-sm hover:text-white hover:text-[16px]"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>

      {/* Hamburger Icon - mobile only */}
      <div className="md:hidden text-white z-50" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <IoClose size={28} /> : <RxHamburgerMenu size={28} />}
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="absolute top-[10vh] left-0 w-full   bg-gray-950/60 flex flex-col items-center gap-y-6 py-8 md:hidden">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={() => setIsOpen(false)}
                className="text-gray-200 text-base hover:text-white transition-all duration-300"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
