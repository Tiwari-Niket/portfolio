// next image
import Image from 'next/image';

// next link
import Link from 'next/link';

// components
import Socials from '../components/Socials';

const Header = () => {
  return(
    <header className="absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px]">
      <div className='container xl:w-full xl:pr-[10px] mx-auto'>
        <div className='flex flex-col lg:flex-row justify-end items-center gap-y-6 py-8'>
          {/* socials */}
          <Socials />
        </div>
      </div>
    </header>
  )};

export default Header;
