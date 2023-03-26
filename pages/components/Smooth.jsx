import { motion, useScroll } from "framer-motion"

function Smooth() {
  const { scrollYProgress } = useScroll();
  
  return (
    <motion.div className="fixed inset-0 h-[5px] bg-green-600 origin-top-left z-50" style={{ scaleX: scrollYProgress }} />  
  )
}

export default Smooth