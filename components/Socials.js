// next links
import Link from 'next/link';

// icons
import {RiInstagramLine, RiLinkedinFill, RiYoutubeLine} from 'react-icons/ri';
import {BsGithub} from 'react-icons/bs';

const Socials = () => {
  return(
    <div className='flex items-center gap-x-5 text-lg'>
      <Link href={'https://www.instagram.com/nikettiwari_43/'} className='hover:text-accent transition-all duration-300'><RiInstagramLine /></Link>
      <Link href={'https://www.linkedin.com/in/tiwari-niket/'} className='hover:text-accent transition-all duration-300'><RiLinkedinFill /></Link>
      <Link href={'https://github.com/Tiwari-Niket'} className='hover:text-accent transition-all duration-300'><BsGithub /></Link>
    </div>
  )};

export default Socials;
