// components
import Bulb from '../../components/Bulb';
import Circles from '../../components/Circles';

// icons
import { BiLogoGmail } from 'react-icons/bi'

// framer motion
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';
import { RiLinkedinFill } from 'react-icons/ri';

const Contact = () => {
  return (
    <div className='h-full lg:mb-[200px] mb-[270px] bg-primary/30'>
      <Circles />
      <div className='container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full'>
        {/* text & form */}
        <div className='flex flex-col w-full max-w-[1000px]'>
          {/* text */}
          <motion.h2 variants={fadeIn('up', 0.2)} initial="hidden" animate="show" exit="hidden" className='h2 text-center mb-12'>Let’s <span className='text-accent'>connect</span> and discuss how I can contribute to your project’s <span className='text-accent'>success.</span></motion.h2>
          <motion.a href='mailto:nikettiwari@gmail.com' variants={fadeIn('up', 0.4)} initial="hidden" animate="show" exit="hidden" className='cursor-pointer flex-1 flex justify-center items-center w-full text-center gap-x-2 items-center text-white/60'>
            <h2 className='h2 text-3xl text-white'><BiLogoGmail /></h2>
            <h2 className='h2 text-xl hover:text-accent'> - nikettiwari9967@gmail.com</h2>
          </motion.a>
          <motion.a href='https://www.linkedin.com/in/tiwari-niket/' variants={fadeIn('up', 0.4)} initial="hidden" animate="show" exit="hidden" className='cursor-pointer flex-1 flex justify-center items-center w-full text-center gap-x-2 items-center text-white/60'>
            <h2 className='h2 text-3xl text-white'><RiLinkedinFill /></h2>
            <h2 className='h2 text-xl hover:text-accent'> - Niket Tiwari</h2>
          </motion.a>
        </div>
      </div>
      <Bulb />
    </div>
  )
};

export default Contact;
