// data
const workSlides = {
  slides: [
    {
      images: [
        {
          title: 'title',
          path: '/thumb1.png',
          link: 'https://promptopia-m22clk21b-tiwari-niket.vercel.app/',
          desc: 'Promptopia is an open-source AI prompting tool for mordern world to discover, create and share creative prompts'
        },
      ],
    },
    {
      images: [
        {
          title: 'title',
          path: '/thumb2.png',
          link: 'https://diabot-snowy.vercel.app/',
          desc: `Diabot: A Smart Chatbot For Diabetes Prediction and Prevention.`
        },
      ],
    },
  ],
};

// swiper react
import { Swiper, SwiperSlide } from 'swiper/react';

// swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// icons
import { BsArrowRight } from 'react-icons/bs';

// next image
import Image from 'next/image';

// required modules
import { Pagination } from 'swiper';

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true
      }}
      modules={[Pagination]}
      className='h-[400px] mb-[100px]'
    >
      {
        workSlides.slides.map((slide, index) => {
          return (
            <SwiperSlide key={index}>
              <div className='cursor-pointer'>
                {slide.images.map((image, index)=>{
                  return(
                    <a href={image.link} key={index} className='relative rounded-lg overflow-hidden flex items-center justify-center group'>
                      <div className='flex flex-col items-center justify-center relative overflow-hidden group'>
                        {/* image */}
                        <Image src={image.path} width={500} height={300} alt='' />
                        <div className='mt-2 mx-10 px-5 text-center'>{image.desc}</div>
                        {/* overlay gradient */}
                        <div className='absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700'></div>
                        {/* title */}
                        <div className='absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300'>
                          <div className='flex items-center gap-x-2 text-[13px] tracking-[0.2em]'>
                            {/* title part 1 */}
                            <div className='delay-100'>LIVE</div>
                            {/* title part 2 */}
                            <div className='translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150'>PROJECT</div>
                            {/* icon */}
                            <div className='text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200'><BsArrowRight /></div>
                          </div>
                        </div>
                      </div>
                    </a>
                  )
                })}
              </div>
            </SwiperSlide>
          )
        })
      }
    </Swiper>
  )
};

export default WorkSlider;
