import React from 'react'
import Image from 'next/image'
const About = () => {
  return (
    <div className='md:pt-12 md:pb-10 pt-8 pb-8 px-8 flex items-center justify-between flex-col md:flex-row font-poppins '>
      
    <div className='flex flex-col items-start'>
       <p className='text-[#5E6282] text-center mx-auto md:mx-0 md:text-left  font-bold text-lg '>Testimonials</p>
      <span className='text-black hidden md:block font-bold text-center mx-auto md:mx-0 md:text-left sm:text-3xl md:text-5xl  text-2xl mt-3 tracking-wide leading-relaxed '>What Peoples Say <br /> About Us
      </span>

      <span className='text-black md:hidden font-bold text-center mx-auto md:mx-0 md:text-left sm:text-3xl md:text-5xl text-xl mt-3 '>What Peoples Say About Us</span>

    </div>

    <div>
      <Image src='/Group 64.png' width={400} height={200} alt={'HeroImage'}  className='mt-5 md:mr-3 '/>
    </div>

  </div>
  )
}

export default About
