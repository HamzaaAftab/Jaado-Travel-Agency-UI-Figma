'use client'
import React from "react";
import Image from "next/image";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);
const Hero = () => {
  
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (heroRef.current) {
      // GSAP animation with ScrollTrigger
      gsap.fromTo(
        heroRef.current.children,
        { opacity: 0, y: 20 }, // Starting state
        {
          opacity: 1,
          y: 0,
          stagger: 0.2,
          duration: 1,
          scrollTrigger: {
            trigger: heroRef.current, // Element to trigger animation
            start: "top 80%", // Starts when the top of the element hits 80% of the viewport height
          },
        }
      );
    }
  }, []);
  
  
  return (
    <div ref={heroRef} className="md:pt-16 pt-10  ">
      <div className="flex flex-col md:flex-row items-center relative justify-between">
        {/* 1st Div */}
        <div className="flex-col space-y-5">
          <span className="text-[#DF6951] text-center mx-auto md:text-lg text-[12px] font-bold tracking-wider">
            BEST DESTINATIONS AROUND THE WORLD
          </span>

          <div className="md:mt-2 relative">
            <h1 className="md:text-7xl text-4xl font-bold md:leading-[76px] ">
              Travel, enjoy <br /> and live a new <br /> and full life
            </h1>
            <Image
              src={"/Decore (1).png"}
              width={100}
              height={100}
              alt={"HeroImage"}
              className="absolute md:left-60 md:top-16 top-8 left-28 md:w-[370px] w-[180px] "
            />
          </div>

          <span className=" hidden md:block text-sm font-thin text-[#5E6282] ">
            Built Wicket longer admire do barton vanity itself do in it. <br />{" "}
            Preferred to sportsmen it engrossed listening. Park gate <br /> sell
            they west hard for the.
          </span>

          {/* For Small Screens */}
          <div className="mt-1">
            <span className="text-justify md:hidden mx-auto md:text-lg text-[12px] font-bold text-[#5E6282] ">
              Built Wicket longer admire do barton vanity itself do in it.
              Preferred to sportsmen it engrossed listening. Park gate sell they
              west hard for the.
            </span>
          </div>

          {/*  */}
          <div className="flex items-center md:mx-0 mx-auto md:space-x-16 space-x-8">
            <div className="bg-[#F1A501] mt-2 text-white md:mx-0 mx-auto font-semibold md:px-7 md:py-3 px-6 py-3 rounded-md shadow-md">
              Find out more
            </div>

          </div>
        </div>

        {/* 2nd Div */}
        <div className="mt-5">
            <Image src="/Image.png" width={525} height={500} alt={"HeroImage"} className="absolute md:right-20 md:-top-12 right-6" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
