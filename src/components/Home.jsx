import React, { useEffect, useState } from 'react';
import Profile from './Profile';
import Education from './Education';
import Experience from './Experience';
import Projects from './Projects';
import Navbar from './Navbar';
import About from './About'
import axios from 'axios'
import Spinner from './Spinner'

const Home = () => {
  const [contactus, setcontactus] = useState(false);

  const[ loading , setloading]=useState(false)

  const[servermessage,setservermessage]=useState('')

  const [formData, setformData]=useState({
    email:'',
    name:'',
    message:''
  })

  const handlechange = (e) =>{
    setformData((prev)=>{
      return{
        ...prev,
        [e.target.name]:e.target.value
      }
    })
  }

  const handlesubmit = async () =>{
    setservermessage('')
    setloading(true)
    try {
      const response = await axios.post('https://portfoliobackend-r3d2.onrender.com/api/send-mail', formData);
      if (response.status === 200) {
        setservermessage('message send')
      setformData({ email: '', name: '', message: '' });
      setcontactus(false);
      } else {
      setservermessage('Failed to send message');
      }
    } catch (error) {
      setservermessage('server error')
      console.error('Error sending message:', error);
    } finally{
      setloading(false)
    }
  }

  return (
    <div className="relative w-full">
      <Navbar />
      <div className="bg-black pt-24 text-white w-full min-h-screen flex flex-col items-center">
        <section id="" className="w-full flex flex-col items-center">
          <Profile setcontact={setcontactus} />
        </section>
        <section id="about" className="w-full flex flex-col items-center">
          <About />
        </section>
        <section id="experience" className="w-full flex flex-col items-center">
          <Experience />
        </section>
        <section id="projects" className="w-full flex flex-col items-center">
          <Projects />
        </section>
        <section id="education" className="w-full flex flex-col items-center">
          <Education />
        </section>
      </div>
      {contactus && (
        <div className="fixed top-[50%] left-[50%] translate-x-[-50%] text-white translate-y-[-50%] w-[60vh] h-[50vh] rounded-lg backdrop-blur-sm flex flex-col border border-gray-600 items-center z-50 px-8 justify-evenly">
          <div className='flex w-full justify-end'>
            <button className='text-xl hover:text-red-500' onClick={() => {setcontactus(false)}}>x</button>
          </div>
          <p className='text-4xl font-bold'>Contact</p>
          <p>{servermessage}</p>
          <input type="text" placeholder='Name Here' name='name' onChange={handlechange} value={formData.name} className='border w-full p-2 py-3 rounded-lg text-center' />
          <input type="text" placeholder='Email Here' name='email' onChange={handlechange} value={formData.email} className='border w-full p-2 rounded-md py-3 text-center' />
          <input type="text" placeholder='Details Here' name='message' onChange={handlechange} value={formData.message} className='border w-full p-2 py-3 rounded-md text-center' />
          <button onClick={handlesubmit} className='bg-blue-500 w-full p-2 rounded-md flex justify-center'>{
            loading?(<Spinner/>):('send message')
            }</button>
        </div>
      )}
    </div>
  );
};

export default Home;