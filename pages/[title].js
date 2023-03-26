import React from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import Products from './components/Products';
import {useRouter} from 'next/router';
import { motion } from 'framer-motion';
function detail() {


  const {query}=useRouter();
  const {title} = query;
  const props =Products.find(x => x.name === title)
  
  return (
    <motion.div exit={{opacity:0}} initial={{opacity:0}} animate={{opacity:1}} transition={{delay:.2}}>
    <div>
        <Header />
<section className="text-gray-400 bg-gray-900 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <motion.h1 initial={{y:-60, opacity:0}} animate={{y:0,opacity:1}} transition={{delay:.8}} className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">{props.name}
        <br className="hidden lg:inline-block" />
      </motion.h1>
      <motion.p initial={{x:-60, opacity:0}} animate={{x:0,opacity:1}} transition={{delay:.5}} className="mb-8 leading-relaxed">{props.description}</motion.p>
      <div className="flex justify-center">
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <motion.img initial={{x:60, opacity:0}} animate={{x:0,opacity:1}} transition={{delay:.5}} className="object-cover object-center rounded" alt="hero" src={props.image} />
    </div>
  </div>
</section>
    <Footer />
    </div>
    </motion.div>
  )
}

export default detail