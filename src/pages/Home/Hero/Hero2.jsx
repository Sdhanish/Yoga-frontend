import React from 'react';
import bgImg1 from '../../../assets/home/art.jpg';
import { useNavigate } from 'react-router-dom';

const Hero2 = () => {
  const navigate = useNavigate();
  const classpages = () => {
    navigate('/classes');
  };

 return (
<div className="relative min-h-screen bg-white flex items-center justify-between pl-14 dark:bg-black ">
      {/* Left side content */}
      <div className="w-full md:w-1/2 space-y-5 pl-5 pt-5 dark:text-white"  style={{ background: "linear-gradient(to bottom right, rgba(34, 197, 94, 0.4)0.8%, rgba(255, 255, 255, 0) 40%)"}}>
        <p className="md:text-4xl text-2xl text-gray-900 dark:text-white">Achieve Total Wellness with</p>
        <h1 className="md:text-5xl text-4xl text-teal-700 dark:text-primary font-bold ">
          Our <span className="text-gray-900 dark:text-white">Yoga</span> and <span className="text-gray-900 dark:text-white">Mindfulness</span> <br />
          Experience
        </h1>
        <p className="text-gray-700 md:w-4/5 dark:text-white">
          Discover a transformative path to holistic well-being with our top-notch yoga and mindfulness platform. We offer expert guidance, personalized classes, and a supportive community to help you harmonize your mind and body, fostering balance and inner peace.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap items-center gap-5 dark:text-white">
          <button
            onClick={classpages}
            className="px-7 py-3 bg-primary rounded-lg font-bold uppercase transition duration-300 hover:bg-[#11ca58] hover:bg-opacity-80 text-white"
          >
            Join Today
          </button>
          <button
            onClick={classpages}
            className="px-7 py-3 border border-primary rounded-lg font-bold uppercase transition duration-300 hover:bg-primary hover:bg-opacity-50 text-gray-800 dark:text-white"
          >
            View Courses
          </button>
        </div>
      </div>

   
            {/* Right side - Circular Image with Dark Overlay */}
            <div className="hidden md:flex w-full md:w-1/2 justify-center relative">
           <div className="relative w-[50%] rounded-full overflow-hidden">
             {/* Image */}
             <img
               src={bgImg1}
               alt="Yoga"
               className="w-full h-full object-cover "
             />
           </div>
         </div>
    </div>
  );
};

export default Hero2;
