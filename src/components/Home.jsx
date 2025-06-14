import React, { useState, useEffect, useRef } from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Profile from './Profile';

const Home = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const outletRef = useRef(null);
  const [lastScrollTime, setLastScrollTime] = useState(0);
  const [contact , setcontact ]=useState(false)

  // Handle scroll
  const routes = ['/', '/experience', '/projects', '/education'];

  const handleScroll = (event) => {
    const now = Date.now();
    if (now - lastScrollTime < 550) return;
    setLastScrollTime(now);

    const deltaY = event.deltaY;
    const currentIndex = routes.indexOf(location.pathname);

    if (deltaY > 0) {
      navigate(currentIndex === routes.length - 1 ? routes[0] : routes[currentIndex + 1]);
    } else if (deltaY < 0) {
      navigate(currentIndex === 0 ? routes[routes.length - 1] : routes[currentIndex - 1]);
    }
  };

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

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    console.log(formData)
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:5000/api/send-mail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (res.ok) {
        alert('Message sent!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        alert('Failed to send message.');
      }
    } catch (err) {
      alert('Something went wrong.');
    }
    setcontact(false)
  };

  return (
    <>
      <div className="flex w-full relative h-screen text-white bg-[linear-gradient(45deg,#000000,#0f1025)] bg-[length:400%_400%] animate-[gradient_15s_ease_infinite]">
        <div className="w-5/12">
          <Profile setcontact={setcontact}/>
        </div>
        <div ref={outletRef} className="w-6/12 overflow-y-auto custom-scrollbar">
          <Outlet />
        </div>
        <div className="w-1/12">
          <Navbar />
        </div>

        {
          contact && (
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[30vw] bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-xl border border-gray-600">
          <div className='flex justify-between items-center'>
            <h3 className="text-xl font-semibold mb-4">Send a Message</h3>
            <button onClick={()=>{setcontact(false)}} className="text-xl font-semibold  text-center rounded-full  transition-all border border-gray-400 duration-300 ease-initial hover:bg-red-500/30 w-8 mb-4 pb-[3px] text-red-200">x</button>
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="bg-transparent border border-gray-500 rounded px-3 py-2 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="bg-transparent border border-gray-500 rounded px-3 py-2 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <textarea
              name="message"
              rows="4"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              className="bg-transparent border border-gray-500 rounded px-3 py-2 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 transition-colors py-2 px-4 rounded text-white font-medium"
            >
              Send
            </button>
          </form>
        </div>
          )
        }
      </div>

      <style>
        {`
          @keyframes gradient {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
        `}
      </style>
    </>
  );
};

export default Home;
