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

const MediumNav=()=>
{
    return(
        <>

        <div className="flex items-center gap-4 lg:w-3/4 ">
        <div className="w-36">
             <img src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
             alt="Zomato logo"
             className="w-full h-full"/>
         </div>

         <div className="flex items-center gap-3 w-full bg-white shadow-md p-3 border border-gray-200 rounded">
             <div className="flex items-center gap-2 border-r-2 border-gray-300 pr-2 w-full">
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

         <div className="flex gap-2">
             <button className="text-gray-500 text-xl hover:text-gray-800">Login</button>
             <button className="text-gray-500 text-xl hover:text-gray-800">Signup</button>
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
          <div className="md:hidden w-full">
              <MobileNav/>
          </div>
          <div className="hidden md:block w-full">
              <MediumNav/>
          </div>  
        </nav>
        </>
    );

};


export default Navbar;