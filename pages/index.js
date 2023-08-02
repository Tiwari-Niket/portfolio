// components
import ParticlesContainer from '../components/ParticlesContainer';
import ProjectsBtn from '../components/ProjectsBtn';
import Avatar from '../components/Avatar';

// framer motion
import { motion } from 'framer-motion';

// variants
import { fadeIn } from '../variants';

const Home = () => {
  return (
    <div className='bg-primary/60 sm:h-full mb-[50px] sm:mb-[210px] xl:mb-[50px]'>
      {/* text */}
      <div className='w-full md:h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10'>
        <div className='text-center flex flex-col justify-center xl:pt-30 xl:text-left md:h-full container mx-auto'>
          {/* title */}
          <motion.h1 variants={fadeIn('down', 0.2)} initial="hidden" animate="show" exit="hidden" className='h1 lg:pt-0 pt-8 mt-8 md:mt-20'>
            Niket <span className='text-accent'>Tiwari</span>
          </motion.h1>
          {/* subtitle */}
          <motion.p variants={fadeIn('down', 0.3)} initial="hidden" animate="show" exit="hidden" className='max-w-sm md:max-w-xl xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-13'>
          <div className='mb-2'>&nbsp;&nbsp;&nbsp;&nbsp;Hi there! I&apos;m a final year Computer Engineering student, weaving captivating web experiences through the art of clean code and innovative solutions. As a MERN stack developer, I am on a mission to bring ideas to life, one line of code at a time. Take a glimpse into my world of projects and skills, where each creation reflects my unwavering dedication to excellence and my relentless pursuit of technical mastery.</div>
          &nbsp;&nbsp;&nbsp;&nbsp;On days that I&apos;m not coding or fulfilling my college responsibilities, you&apos;ll find me on the cricket field, reveling in the thrill of a good game, or strolling through nature to refresh myself and welcome new ideas. Challenges are what drive me, and I approach them with a business mindset, seeking opportunities for growth and innovation. 
          </motion.p>
          {/* btn */}
          <motion.div className='hidden xl:flex' variants={fadeIn('down', 0.4)} initial="hidden" animate="show" exit="hidden">
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>
      {/* image */}
      <div className='w-[1200px] h-full absolute right-0 bottom-0'>
        {/* bg-image */}
        <div className='bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full 
          absolute mix-blend-color-dodge translate-z-0'>
        </div>
        {/* particles */}
        <ParticlesContainer />
        {/* avtar img */}
        <motion.div variants={fadeIn('up', 0.5)} transition={{ duration: 1, ease: 'easeInOut' }} initial="hidden" animate="show" exit="hidden"
          className='w-full h-full max-w-[737px] max-h-[678px] absolute -bottom-32 lg:bottom-0 lg:right-[8%]'>
          <Avatar />
        </motion.div>
      </div>
    </div>
  )
};

export default Home;
