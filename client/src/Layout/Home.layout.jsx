import React from "react";

//Components
import Navbar from "../Components/Navbar";
import FoodTab from "../Components/FoodTab";


const HomeLayout = (props) =>
{
   return (

    <> 

   <Navbar/>
   <FoodTab/> 
   <div className="lg:bg-purple-50 lg:h-96 lg:py-4">
   <div className="container mx-auto px-4 lg:px-20">  
     {props.children}   
   </div>
   </div>
    
    
    </>

   );
};

export default HomeLayout;