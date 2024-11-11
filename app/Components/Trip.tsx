'use client'
import Image from 'next/image'
import React from 'react'

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);



const Trip = () => {
 
  const tripRef = useRef<HTMLDivElement>(null);

useEffect(() => {
  if (tripRef.current) {
    // GSAP animation with ScrollTrigger
    gsap.fromTo(
      tripRef.current.children,
      { opacity: 0, y: 20 }, // Starting state
      {
        opacity: 1,
        y: 0,
        stagger: 0.2,
        duration: 1,
        scrollTrigger: {
          trigger: tripRef.current, // Element to trigger animation
          start: "top 80%", // Starts when the top of the element hits 80% of the viewport height
        },
      }
    );
  }
}, []);
 
 
  return (
    <div ref={tripRef} className='md:pt-16 md:pb-10 pt-8 pb-8 px-8 flex items-center justify-between flex-col md:flex-row font-poppins '>
      
      <div className='flex flex-col items-start'>
         <p className='text-[#5E6282] text-center mx-auto md:mx-0 md:text-left  font-bold text-lg '>Easy and Fast</p>
        <span className='text-black hidden md:block font-bold text-center mx-auto md:mx-0 md:text-left sm:text-3xl md:text-5xl  text-2xl mt-3 '>Book Your Next Trip <br /> 
        in 3 Easy Steps</span>

        <span className='text-black md:hidden font-bold text-center mx-auto md:mx-0 md:text-left sm:text-3xl md:text-5xl text-xl mt-3 '>Book Your Next Trip in 3 Easy Steps</span>

        <div className='space-y-8 md:ml-1 ml-8 mt-2 ' >
            {/* 1st Div */}
        <div className='flex items-center justify-center space-x-5 mt-6'>
                <Image src='/Group 7.png' width={40} height={30} alt='Service1'/>
                <div>
                    <h1 className='text-[#1E1D4C] font-bold sm:text-md text-md '>Choose Destination</h1>
                    <span className='text-[#5E6282] text-sm  font-medium'>Lorem ipsum dolor sit amet, consectetur adipiscing  </span>
                </div>
        </div>

        {/* 2st Div */}
        <div className='flex items-center justify-center space-x-5 mt-6'>
                <Image src='/Group 12.png' width={40} height={30} alt='Service1'/>
                <div>
                    <h1 className='text-[#1E1D4C] font-bold sm:text-md text-md '>Make Payment</h1>
                    <span className='text-[#5E6282] text-sm  font-medium'>Lorem ipsum dolor sit amet, consectetur adipiscing  </span>
                </div>
        </div>

        {/* 3st Div */}
        <div className='flex items-center justify-center space-x-5 mt-6'>
                <Image src='/Group 11.png' width={40} height={30} alt='Service1'/>
                <div>
                    <h1 className='text-[#1E1D4C] font-bold sm:text-md text-md '>Reach Airport on Selected Date</h1>
                    <span className='text-[#5E6282] text-sm  font-medium'>Lorem ipsum dolor sit amet, consectetur adipiscing  </span>
                </div>
        </div>
        </div>

      </div>

      <div>
        <Image src='/Image (1).png' width={340} height={200} alt={'HeroImage'}  className=' rounded-[20px] mt-5 md:mr-3 shadow-sm shadow-blue-400 '/>
      </div>

    </div>
  )
}

export default Trip
