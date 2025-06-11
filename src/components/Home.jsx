import React, { useState, useEffect, useRef } from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Profile from './Profile';

const Home = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const outletRef = useRef(null);
  const [lastScrollTime, setLastScrollTime] = useState(0);

  // Ordered list of routes
  const routes = ['/', '/experience', '/projects'];

  // Handle scroll
  const handleScroll = (event) => {
    const now = Date.now();
    if (now - lastScrollTime < 550) return;
    setLastScrollTime(now);

    const deltaY = event.deltaY;
    const currentIndex = routes.indexOf(location.pathname);

    if (deltaY > 0) {
      // Scroll down
      navigate(currentIndex === routes.length - 1 ? routes[0] : routes[currentIndex + 1]);
    } else if (deltaY < 0) {
      // Scroll up
      navigate(currentIndex === 0 ? routes[routes.length - 1] : routes[currentIndex - 1]);
    }
  };

  // Add scroll listener
  useEffect(() => {
    const outletDiv = outletRef.current;
    if (outletDiv) {
      outletDiv.addEventListener('wheel', handleScroll);
    }
    return () => {
      if (outletDiv) {
        outletDiv.removeEventListener('wheel', handleScroll);
      }
    };
  }, [location.pathname]);

  return (
    <>
      <div className="flex w-full h-screen text-white bg-[linear-gradient(45deg,#000000,#161722)] bg-[length:400%_400%] animate-[gradient_15s_ease_infinite]">
        <div className="w-5/12">
          <Profile />
        </div>
        <div
          ref={outletRef}
          className="w-6/12 overflow-y-auto"
        >
          <Outlet />
        </div>
        <div className="w-1/12">
          <Navbar />
        </div>
      </div>

      <style>
        {`
          @keyframes gradient {
            0% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
            100% {
              background-position: 0% 50%;
            }
          }
        `}
      </style>
    </>
  );
};

export default Home;
