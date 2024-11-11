'use client'
// components/Footer.tsx
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (footerRef.current) {
      gsap.fromTo(
        footerRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          scrollTrigger: {
            trigger: footerRef.current,
            start: 'top bottom',
            end: 'bottom bottom',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }
  }, []);

  return (
    <footer ref={footerRef} className="bg-white font-poppins px-6 py-12 md:px-8 md:pt-16 md:pb-8 text-gray-600 text-sm">
      <div className=" mx-auto flex flex-col items-center lg:flex-row lg:justify-between">
       
        <div className="text-center space-y-6 lg:text-left mb-6 lg:mb-8">
          <h2 className="text-4xl text-[#53545c]  font-semibold">Jadoo.</h2>
          <p>Book your trip in minute, get full <br />Control for much longer.</p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 md:gap-20 text-center lg:text-left">
          
          <div className="space-y-3 md:-mt-4">
            <h3 className="text-gray-800 font-bold text-lg ">Company</h3>
            <ul className='space-y-3'>
              <li><a href="#" className="hover:text-gray-900">About</a></li>
              <li><a href="#" className="hover:text-gray-900">Careers</a></li>
              <li><a href="#" className="hover:text-gray-900">Mobile</a></li>
            </ul>
          </div>


          <div className='space-y-3 md:-mt-4'>
            <h3 className="text-gray-800 font-bold text-lg">Contact</h3>
            <ul className='space-y-3'>
              <li><a href="#" className="hover:text-gray-900">Help/FAQ</a></li>
              <li><a href="#" className="hover:text-gray-900">Press</a></li>
              <li><a href="#" className="hover:text-gray-900">Affiliates</a></li>
            </ul>
          </div>

          <div className='space-y-3 md:-mt-4'>
            <h3 className="text-gray-800 font-bold text-lg">More</h3>
            <ul className='space-y-3'>
              <li><a href="#" className="hover:text-gray-900">Airlinefees</a></li>
              <li><a href="#" className="hover:text-gray-900">Airline</a></li>
              <li><a href="#" className="hover:text-gray-900">Low fare tips</a></li>
            </ul>
          </div>

        </div>

        <div className="text-center md:text-left mt-6 lg:mt-0 flex flex-col items-center md:items-start gap-4">
          <div className="flex space-x-1">
            <a href="#" className="hover:text-gray-900">
            <Image src="/fb.png" alt="Facebook" width={60} height={50}  />
            </a>
            <a href="#" className="hover:text-gray-900">
            <Image src="/insta.png" alt="Instagram" width={70} height={50}  />
            </a>
            <a href="#" className="hover:text-gray-900">
            <Image src="/twitter.png" alt="Twitter" width={60} height={50}  />
            </a>
          </div>
          <p className="text-[#5E6282] md:-mt-2 font-semibold text-lg">Discover our app</p>
          <div className="flex space-x-4">
            <a href="#" className="hover:opacity-90">
              <Image src="/Google.png" alt="Google Play" width={60} height={50}  />
            </a>
            <a href="#" className="hover:opacity-90">
            <Image src="/App.png" alt="Google Play" width={60} height={50}  />
            </a>
          </div>
        </div>

      </div>
      <p className="text-center mt-9 md:mt-12 text-gray-500">All rights reserved@jadoo.co</p>
    </footer>
  );
};

export default Footer;
