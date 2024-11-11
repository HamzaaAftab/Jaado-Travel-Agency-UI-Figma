'use client'
import Image from 'next/image'
import React from 'react'
import { MdOutlineMailOutline } from "react-icons/md";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);

const Subscribe = () => {
  
  const subRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (subRef.current) {
      // GSAP animation with ScrollTrigger
      gsap.fromTo(
        subRef.current.children,
        { opacity: 0, y: 20 }, // Starting state
        {
          opacity: 1,
          y: 0,
          stagger: 0.2,
          duration: 0.9,
          scrollTrigger: {
            trigger: subRef.current, // Element to trigger animation
            start: "top 80%", // Starts when the top of the element hits 80% of the viewport height
          },
        }
      );
    }
  }, []);
  
  return (
    <div ref={subRef} className='bg-[#DFD7F9] flex flex-col items-center justify-center md:pt-16 md:pb-10 pt-8 pb-8 px-8 py-8 left-border relative font-poppins  '>
      
      <Image src="/wave.png" width={260} height={500} alt={'HeroImage'} className='absolute right-0 top-0 overflow-visible hidden md:block '/>
      <Image src="/wave1.png" width={300} height={500} alt={'HeroImage'} className='absolute -left-[65px] bottom-1 overflow-visible hidden md:block '/>
      <Image src="/Group 77.png" width={50} height={500} alt={'HeroImage'} className='absolute -top-7 -right-4  overflow-visible '/>
      <Image src='/Group 4.png' width={100} height={500} alt={'HeroImage'} className='absolute -right-16 hidden md:block overflow-visible -bottom-8 -z-10 '/>

      <div className='px-4 md:px-12 mt-4 text-center mx-auto'>
        <span className='font-semibold hidden md:block text-xl md:text-3xl md:leading-[47px] text-center mx-auto text-[#5E6282]  '>
        Subscribe to get information, latest news and other <br /> interesting offers about Jadoo
        </span>
        <span className='font-semibold md:hidden text-xl md:text-3xl md:leading-[47px] text-center mx-auto text-[#5E6282]  '>
        Subscribe to get information, latest news and other interesting offers about Jadoo
        </span>
      </div>

        {/* 2nd Div */}
      <div className='md:mt-10 hidden md:block'>
        <div className='flex space-x-6 items-center'>

            <div className='flex items-start justify-start space-x-4 bg-white rounded-[19px] px-7 w-[360px] py-4 '>
                <MdOutlineMailOutline/>
                <span className='text-sm text-gray-700 '>Your email</span>
            </div>
            <button className='bg-[#FF946D] px-9 py-4 rounded-lg text-white '>Subscribe</button>


        </div>
      </div>

      {/* Small Screens */}
      <div className='flex flex-col mt-4 items-center justify-center space-y-4 md:hidden'>
      <div className='flex flex-col items-center justify-center space-y-1 md:hidden bg-white rounded-[13px] px-2 w-[160px] py-4 '>
                <MdOutlineMailOutline/>
                <span className='text-md text-gray-700 '>Your email</span>
            </div>
            <button className='bg-[#FF946D] px-9 py-4 rounded-lg text-white '>Subscribe</button>
      </div>


    </div>

    
  )
}

export default Subscribe
