import React from 'react'
import Link from 'next/link'
import {motion} from 'framer-motion';
function Category(props) {

    const prop=props;
    const easing=[.0,-.05,.01,.99]
    const fadeinup={
        initial:{
            y:60,
            opacity:0,
        },
        animate:{
            y:0,
            opacity:1,
            transition:{
                duration:0.6,
                ease : easing
            }
        }
    }
  return (
    <motion.div variants={fadeinup}>
    <div className="col-span-1 mx-auto ">
<div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:translate-y-2  hover:transition-all  cursor-pointer">
    <Link href={`/${props.name}`}>
        <img className="rounded-t-lg" src={prop.image} alt="" />
    </Link>
    <div className="p-5">
        <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{prop.name}</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{prop.description.slice(0,100)} ....</p>
        <Link href={`/${prop.name}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-500 rounded-lg hover:bg-green-200 focus:ring-4 focus:outline-none focus:ring-green-900 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
            Read more
            <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </Link>
    </div>
</div>
  </div>
  </motion.div>
  )
}

export default Category