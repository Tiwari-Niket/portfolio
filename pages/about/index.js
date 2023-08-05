import React, { useState } from 'react';

// icons
import { FaHtml5, FaJava, FaGithub, FaBootstrap, FaCss3, FaJs, FaNodeJs, FaReact } from 'react-icons/fa';
import { SiNextdotjs, SiMongodb, SiRedux, SiExpress, SiPostman, SiTailwindcss, } from 'react-icons/si';
import { GrMysql } from 'react-icons/gr';

//  data
const aboutData = [
  {
    id: 0,
    title: 'skills',
    info: [
      {
        id: 1,
        title: 'Web Development',
        icons: [
          { id: 1, icon: <FaHtml5 /> },
          { id: 2, icon: <FaCss3 /> },
          { id: 3, icon: <FaJs /> },
          { id: 4, icon: <FaBootstrap /> },
          { id: 5, icon: <SiTailwindcss /> },
          { id: 6, icon: <FaReact /> },
          { id: 7, icon: <FaNodeJs /> },
          { id: 8, icon: <FaJava /> },
          { id: 9, icon: <SiExpress /> },
          { id: 10, icon: <SiNextdotjs /> },
          { id: 11, icon: <SiRedux /> },
        ],
      },
      {
        id: 2,
        title: 'Database',
        icons: [
          { id: 1, icon: <SiMongodb /> },
          { id: 2, icon: <GrMysql /> },
        ],
      },
      {
        id: 3,
        title: 'Tools',
        icons: [
          { id: 1, icon: <SiPostman /> },
          { id: 2, icon: <FaGithub /> },
        ],
      },
    ],
  },
  {
    id: 1,
    title: 'certificates',
    info: [
      {
        id: 1,
        title: 'AWS Academy Cloud Foundation',
        stage: 'Jul 2022 – Aug 2022',
        link: 'https://drive.google.com/file/d/1AvmQuUqVeVDoJRb2x1l_HUlfZGL8qF6K/view?usp=drive_link'
      },
      {
        id: 2,
        title: 'HTML, CSS and Bootstrap - Udemy',
        stage: 'Dec 2021 – Jan 2022',
        link: 'https://drive.google.com/file/d/1SzVyff7usXzTvqOesb3NAozd1wdYwUyX/view?usp=drive_link'
      },
    ],
  },
  {
    id: 2,
    title: 'experience',
    info: [
      {
        id: 1,
        title: 'Web Developer - SAASO',
        stage: 'June 2023 - July 2023',
      },
      {
        id: 2,
        title: 'Web Developer - I-Kadambari Website ',
        stage: 'February 2023 - April 2023',
      },
      {
        id: 3,
        title: 'Amazon Web Services ',
        stage: 'July 2022 - August 2022',
      },
    ],
  },
  {
    id: 3,
    title: 'credentials',
    info: [
      {
        id: 1,
        title: 'Computer Engineering - Mumbai University',
        stage: '2020 - 2024',
      },
    ],
  },
];

// components
import Avatar from '../../components/Avatar';
import Circles from '../../components/Circles';

// framer motion
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';
import Link from 'next/link';

const About = () => {
  const [index, setIndex] = useState(0);
  return (
    <div className='h-full bg-primary/30 py-32 xl:mb-[50px] text-center xl:text-left'>
      <Circles />
      {/* avatar image */}
      <motion.div variants={fadeIn('right', 0.2)} initial='hidden' animate='show' exit='hidden' className='hidden xl:flex absolute bottom-0 -left-[370px]'>
        <Avatar />
      </motion.div>
      <div className='container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6'>
        {/* text */}
        <div className='flex-1 flex flex-col justify-center p-5'>
          <motion.h2 variants={fadeIn('right', 0.2)} initial='hidden' animate='show' exit='hidden' className='h2'>My Journey: <span className='text-accent'>Path of Growth and Expertis.</span></motion.h2>
          <motion.p variants={fadeIn('right', 0.4)} initial='hidden' animate='show' exit='hidden' className='max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0'>Here&apos;s a glimpse into my journey of self-improvement and professional development. From obtaining certifications to mastering various programming languages and tools, I strive to stay ahead in the fast-paced world of technology.</motion.p>
        </div>
        {/* info */}
        <motion.div variants={fadeIn('left', 0.4)} initial='hidden' animate='show' exit='hidden' className='flex flex-col w-full xl:max-w-[48%] h-[480px]'>
          <div className='flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4'>
            {aboutData.map((item) => {
              return (
                <div key={item.id} className={`${index === item.id && 'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300'} 
                  cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                  onClick={() => setIndex(item.id)}>
                  {item.title}
                </div>
              )
            }
            )}
          </div>
          <div className='py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start'>
            {aboutData[index].info.map((item) => {
              return (
                <div key={item.id} className='flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60'>
                  {/* title */}
                  <Link href={item?.link?item.link:''} className={`${item.link? 'cursor-pointer' : 'cursor-auto'} flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60`}>
                    <div className='font-light mb-2 md:mb-0'>{item.title}</div>
                    <div className='hidden md:flex'>-</div>
                    <div>{item.stage}</div>
                  </Link>
                  {/* icons */}
                  <div className='flex gap-x-4'>
                    {item.icons?.map((icon) => {
                      return <div key={icon.id} className='text-2xl text-white'>{icon.icon}</div>
                    })}
                  </div>
                </div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </div>
  )
};

export default About;
