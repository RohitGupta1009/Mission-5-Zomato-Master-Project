import React from "react";
import {FaUserAlt} from "react-icons/fa";
import {HiLocationMarker} from "react-icons/hi";
import {IoMdArrowDropdown,IoMdArrowDropup} from "react-icons/io";
import {RiSearch2Line} from "react-icons/ri";



const MobileNav=()=>
{
    return (
        <>
        <div className="flex items-center justify-between">
        <div className="w-24">
             <img src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
             alt="Zomato logo"
             className="w-full h-full"/>
         </div>

          <div className="flex items-center gap-3">
              <button className="bg-zomato-400 text-white py-2 px-3 rounded-full">Use App</button>
              <span className="border border-gray-300 text-zomato-400 rounded-full p-2"><FaUserAlt/></span>
          </div>
        </div>
        </>
    );
};

const LargeNav=()=>
{
    return(
        <>
        <div className="container px-20 mx-auto">
        <div className="flex items-center gap-4 h-2">
         <div className="w-32">
             <img src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
             alt="Zomato logo"
             className="w-full h-full"/>
         </div>
         <div className="flex items-center gap-3 w-3/5 bg-white shadow-md p-3 border border-gray-200 rounded ml-2">
             <div className="flex items-center gap-2 border-r-2 border-gray-300 pr-2 w-1/2">
                 <span className="text-zomato-400">
                     <HiLocationMarker/>
                 </span>
                 <input type="text" placeholder="Udaipur" 
                 className="w-full focus:outline-none"/>
                 <IoMdArrowDropdown/>
             </div>
             <div className="flex items-center gap-2 w-full" >
                 <RiSearch2Line/>
                 <input type="search" placeholder="Search for restaurant,cuisine or a dish"
                 className="w-full focus:outline-none" />
             </div>
         </div>

         <div className="flex gap-12 ml-20">
             <button className="text-gray-500 text-xl hover:text-gray-800 ml-2">Login</button>
             <button className="text-gray-500 text-xl hover:text-gray-800">Sign up</button>
         </div>

        </div>
        </div>
        </>
    );
};


const Navbar=()=>
{
    return(
        <>
        <nav className="py-3 px-4 flex bg-white shadow-md w-full items-center">
          <div className="lg:hidden w-full">
              <MobileNav/>
          </div>  
        </nav>
        <nav className="py-3 px-4 flex bg-white w-full items-center hidden lg:flex">
        <div className="hidden lg:flex w-full">
              <LargeNav/>
          </div>
        </nav>
        </>
    );

};


export default Navbar;