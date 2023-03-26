import React from 'react'
import Category2 from './Category';
import Products from './Products';
  import {motion} from 'framer-motion';

function Productfeed() {

    const stagger={
        animate:{
            transition:{
                staggerChildren: 0.2,
            }
        }
    };

  return (
    <section className="text-gray-400 bg-gray-900 body-font  pt-3 ">
    <div className="mt-7 py-10">
        <div className="flex mt-7 "><h1 className="mx-auto text-4xl text-green-600 text-bold block"> Victories</h1></div>
        <motion.div variants={stagger}  className='grid md:grid-cols-3 lg:grid-cols-3 grid-cols-1 gap-7 py-7 justify-center mt-7 '> 
            {
        Products.map((product)=><Category2 key={product.id} id={product.id} name={product.name} image={product.image} description={product.description}/> )
            }
        
        </motion.div>
    </div>
    </section>

        )
}

export default Productfeed