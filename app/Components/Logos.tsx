'use client'
import React from 'react'
import Image from 'next/image'

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);


const Logos = () => {

  const logosRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (logosRef.current) {
      // GSAP animation with ScrollTrigger
      gsap.fromTo(
        logosRef.current.children,
        { opacity: 0, y: 20 }, // Starting state
        {
          opacity: 1,
          y: 0,
          stagger: 0.2,
          duration: 0.6,
          scrollTrigger: {
            trigger: logosRef.current, // Element to trigger animation
            start: "top 80%", // Starts when the top of the element hits 80% of the viewport height
          },
        }
      );
    }
  }, []);





  return (
    <div ref={logosRef} className='grid grid-cols-2 sm:grid-cols-3 items-center md:grid-cols-5 gap-8 mt-4 md:pb-12 px-8 pb-8 '>
        <Image src='/logo1.png' width={140} height={100} alt='Service1'/>
        <Image src='/logo2.png' width={140} height={100} alt='Service1'/>
        <Image src='/logo3.png' width={140} height={100} alt='Service1'/>
        <Image src='/logo4.png' width={140} height={100} alt='Service1'/>
        <Image src='/logo5.png' width={140} height={100} alt='Service1'/>

    </div>
  )
}

export default Logos
