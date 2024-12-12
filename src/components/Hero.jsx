/*import image from "/image.png"
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <div id="home" className="px-16 flex min-h-screen w-full
    items-center justify-center py-28 md:px-32">
      <div className="flex flex-col items-center justify-center
      gap-10 text-white">
        <motion.div
        initial={{y: -50, opacity: 0}}
        animate={{y: 0, opacity:1}}
        transition={{duration: 0.8, delay:0.2}}
        >
          <img src={image} alt="" className="w-[300px]
          cursor-pointer rounded-full shadow-xl shadow-indigo-900
          transition-all duration-300 hover:-translate-y-5
          hover:scale-105 hover:shadow-2xl hover:shadow-indigo-600
          md:w-[350px]"/>
        </motion.div>

        <motion.div
         initial={{y: 50, opacity: 0}}
         animate={{y: 0, opacity:1}}
         transition={{duration: 0.8, delay:0.2}} 
        
        
        className="flex max-w-[600px] flex-col items-center
        justify-center gap-3 text-center">
        <h1 className="bg-gradient-to-r from-blue-500
        to-pink-500 bg-clip-text text-transparent text-5xl font-light 
        md:text 7xl">Amit Reddy</h1>
          <h3 className="bg-gradient-to-r from-pink-500
        to-blue-500 bg-clip-text text-transparent text-2xl
        md:text 3xl">Student</h3>
          <p className="md:text-base text pretty text-sm
          text-gray-400">
            Hi, I'm Amit, a college student passionate about coding, algorithm design, and tackling new challenges. I thrive on discovery and innovation, viewing the tech landscape as a canvas for creativity and problem-solving. Let's connect and explore opportunities together!
          </p>

        </motion.div>
      </div>
    </div>
  )
}

export default Hero*/ 

import image from "/image.png";
import resume from "/resume.pdf"; 
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div id="home" className="px-16 flex min-h-screen w-full items-center justify-center py-28 md:px-32">
      <div className="flex flex-col items-center justify-center gap-10 text-white">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img
            src={image}
            alt=""
            className="w-[300px] cursor-pointer rounded-full shadow-xl shadow-indigo-900 transition-all duration-300 hover:-translate-y-5 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-600 md:w-[350px]"
          />
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex max-w-[600px] flex-col items-center justify-center gap-3 text-center"
        >
          <h1 className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent text-5xl font-light md:text-7xl">
            Amit Reddy
          </h1>
          <h3 className="bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent text-2xl md:text-3xl">
            B-Tech Student
          </h3>
          <p className="md:text-base text-pretty text-sm text-gray-400">
            Hi, I'm Amit, a college student passionate about coding, algorithm design, and tackling new challenges. I thrive on discovery and innovation, viewing the tech landscape as a canvas for creativity and problem-solving. Let's connect and explore opportunities together!
          </p>
          <a
            href={resume}
            download
            className="mt-4 inline-block px-8 py-3 text-sm font-medium text-white transition bg-blue-600 rounded transform shadow-lg hover:shadow-2xl hover:-translate-y-2 focus:outline-none focus:ring"
          >
            My Resume
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;


