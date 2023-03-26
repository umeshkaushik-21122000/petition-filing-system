import React from 'react';
import Typed from 'react-typed';
import Link from 'next/link';
import {motion} from 'framer-motion';

const Hero = () => {
  return (
    <div className='text-white bg-[url(/assets/hero-bg.png)]'>
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <p className='text-[#00df9a] font-bold p-2'>
            Best platform in the world
        </p>
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>
        The world’s platform for change
        </h1>
        <div className='flex justify-center items-center'>
          <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4 block'>
          people taking action.
          </p>
          <Typed
          className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2'
            strings={['Victories', 'every', 'day.']}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <p className='md:text-2xl text-xl font-bold text-gray-500'>Create your  petition to support the cause</p>
        <Link href='/create'><motion.button whileHover={{ scale: 1.1 }}   whileTap={{ scale: 0.9 }} className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Start a Petition</motion.button></Link>
      </div>
    </div>
  );
};

export default Hero;