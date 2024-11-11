'use client'
import Image from "next/image";
import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="font-poppins font-semibold">
      <Image src="/Decore.png" width={530} height={500} alt={"HeroImage"} className="absolute right-0 -z-20 top-0 overflow-visible " />
      <div className="max-w-screen-xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Image src={"/Logo.png"} width={100} height={100} alt={"Logo"} />

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-16 text- items-center text-gray-800">
          <a href="#" className="hover:text-yellow-700 text-[14px]">Destinations</a>
          <a href="#" className="hover:text-yellow-700 text-[14px]">Hotels</a>
          <a href="#" className="hover:text-yellow-700 text-[14px]">Flights</a>
          <a href="#" className="hover:text-yellow-700 text-[14px]">Bookings</a>
          <a href="#" className="hover:text-yellow-700 text-[14px]">Login</a>
          <button className="px-4 py-2 border-[1.5px] border-black rounded-lg text-gray-800 hover:bg-gray-100">
            Sign up
          </button>
          <div className="relative">
            <button className="flex items-center text-gray-800">
              EN <span className="ml-1">▼</span>
            </button>
          </div>
        </div>

        {/* Hamburger Menu (Mobile View) */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-3xl text-gray-800">
            {isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden  bg-gray-200 mt-5 rounded-2xl">
          <div className="flex flex-col items-center py-4 space-y-3 text-gray-800">
            <a href="#" className="hover:text-yellow-500 text-[17px]">Destinations</a>
            <a href="#" className="hover:text-yellow-500 text-[17px]">Hotels</a>
            <a href="#" className="hover:text-yellow-500 text-[17px]">Flights</a>
            <a href="#" className="hover:text-yellow-500 text-[17px]">Bookings</a>
            <a href="#" className="hover:text-yellow-500 text-[17px]">Login</a>
            <button className="px-4 py-2 border-2 border-gray-800 rounded-lg text-gray-800 hover:bg-gray-100">
              Sign up
            </button>
            <div className="relative">
              <button className="flex items-center text-gray-800">
                EN <span className="ml-1">▼</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
