'use client'
import React from 'react'
import Image from 'next/image'

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);
const Services = () => {
  
  const serviceRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (serviceRef.current) {
      // GSAP animation with ScrollTrigger
      gsap.fromTo(
        serviceRef.current.children,
        { opacity: 0, y: 20 }, // Starting state
        {
          opacity: 1,
          y: 0,
          stagger: 0.2,
          duration: 0.9,
          scrollTrigger: {
            trigger: serviceRef.current, // Element to trigger animation
            start: "top 70%", // Starts when the top of the element hits 80% of the viewport height
          },
        }
      );
    }
  }, []);
  

  
  return (
    <div className='pt-80 md:pt-24 px-7 md:pb-10 relative '>
        <Image src='/Group 4.png' width={110} height={500} alt={'HeroImage'} className='absolute right-8 top-20 hidden md:block overflow-visible '/>
        <Image src='/Group 4.png' width={110} height={500} alt={'HeroImage'} className='absolute left-8 top-20 hidden md:block overflow-visible '/>
      <p className='text-[#5E6282] text-center mx-auto font-bold text-lg '>CATEGORY</p>
      <h1 className='text-black text-center mx-auto font-bold sm:text-4xl text-2xl mt-1 '>We Offer Best Services</h1>

      {/* Service Cards */}
        <div ref={serviceRef} className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-16 mt-6 md:mt-12'>

          {/* Service Card 1 */}    
          <div className='bg-white flex flex-col items-center justify-center space-y-4 rounded-lg p-8'>
                <Image src='/Group 48.png' width={70} height={100} alt='Service1'/>
                <h1 className='text-[#1E1D4C] text-center mx-auto font-bold sm:text-md text-md '>Calculated Weather</h1>
                <p className='text-[#5E6282] text-center text-sm mx-auto font-medium'>Built Wicket longer admire do barton vanity itself do in it.</p>
          </div>

          

          {/* Service Card 2 */}
          <div className='bg-white flex flex-col items-center justify-center space-y-3 rounded-[40px] shadow-md p-8'>
                <Image src='/Group 51.png' width={120} height={100} alt='Service1'/>
                <h1 className='text-[#1E1D4C] text-center mx-auto font-bold sm:text-md text-md '>Best Flights</h1>
                <p className='text-[#5E6282] text-center text-sm mx-auto font-medium'>Engrossed listening. Park gate sell they west hard for the.</p>
          </div>

          {/* Service Card 3 */}    
          <div className='bg-white flex flex-col items-center justify-center space-y-4 rounded-lg p-8'>
                <Image src='/Group 50.png' width={70} height={100} alt='Service1'/>
                <h1 className='text-[#1E1D4C] text-center mx-auto font-bold sm:text-md text-md '>Local Events</h1>
                <p className='text-[#5E6282] text-center text-sm mx-auto font-medium'>Barton vanity itself do in it. Preferd to men it engrossed listening. </p>
          </div>

          {/* Service Card 4 */}
          <div className='bg-white flex flex-col items-center justify-center space-y-4 rounded-lg p-8'>
                <Image src='/Group 49.png' width={70} height={100} alt='Service1'/>
                <h1 className='text-[#1E1D4C] text-center mx-auto font-bold sm:text-lg text-md '>Customization</h1>
                <p className='text-[#5E6282] text-center text-sm mx-auto font-medium'>We deliver outsourced aviation services for military customers </p>
          </div>

        </div>

        <Image src='/Rectangle 157.png' width={95} height={500} alt={'HeroImage'} className='absolute left-72 -z-10 bottom-6 hidden md:block overflow-visible '/>

    </div>
  )
}

export default Services 
