'use client'
import Image from 'next/image'
import React from 'react'

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);

const Destinations = () => {
  
  const destRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (destRef.current) {
      // GSAP animation with ScrollTrigger
      gsap.fromTo(
        destRef.current.children,
        { opacity: 0, y: 20 }, // Starting state
        {
          opacity: 1,
          y: 0,
          stagger: 0.2,
          duration: 0.8,
          scrollTrigger: {
            trigger: destRef.current, // Element to trigger animation
            start: "top 80%", // Starts when the top of the element hits 80% of the viewport height
          },
        }
      );
    }
  }, []);
  
  return (
    <div ref={destRef} className='pb-8 md:pt-24 md:pb-10 mt-3 relative font-poppins '>
        <Image src='/Group 4.png' width={90} height={500} alt={'HeroImage'} className='absolute right-8 top-20 hidden md:block overflow-visible opacity-60 '/>
        <Image src='/Group 4.png' width={90} height={500} alt={'HeroImage'} className='absolute left-8 top-20 hidden md:block overflow-visible opacity-60 '/>

      <Image src='/Decore (2).png' width={130} height={500} alt={'HeroImage'} className='absolute md:right-5 md:top-56 hidden -z-10 md:block '/>
      <p className='text-[#5E6282] text-center mx-auto font-bold text-lg '>TOP SELLING</p>
      <h1 className='text-black text-center mx-auto font-bold sm:text-4xl text-2xl mt-1 '>Top Destinations</h1>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 px-10  md:gap-16 gap-8 mt-10 md:mt-10'>
            <Image src='/Destination.png' width={290} height={500} alt={'HeroImage'}  className='shadow-lg rounded-[20px]'/>
            <Image src='/Destination3.png' width={290} height={500} alt={'HeroImage'} className='shadow-lg rounded-[20px]' />
            <Image src='/Destination (1).png' width={290} height={500} alt={'HeroImage'} className='shadow-lg rounded-[20px]' />
      </div>


    </div>
  )
}

export default Destinations
