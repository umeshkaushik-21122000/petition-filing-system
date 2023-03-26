
import Head from 'next/head'
import Header from './components/Header'
import Description from './components/Description'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Productfeed from './components/Productfeed'
import Smooth from './components/Smooth'
import Ball from './components/ball'
import { motion } from 'framer-motion'
function Home(){
  return (
    <motion.div exit={{opacity:0}} initial={{opacity:0}} animate={{opacity:1}} transition={{delay:.2}}>
    <div>
      <Smooth />
      <Head>
        <title>MyPetition</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Ball />
      <Hero />
      <Productfeed />
      <Description />
      <Footer />
    </div>
    </motion.div>
  )
}

export default Home
