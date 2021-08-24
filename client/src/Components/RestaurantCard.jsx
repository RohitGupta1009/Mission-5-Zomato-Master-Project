import React from 'react'
import{AiTwotoneStar} from "react-icons/ai";

const RestaurantCard = (props) => {
    return (
        <>
        <div className="bg-white p-2 w-full mt-8 lg:mt-6 md:w-1/2 lg:w-1/3 rounded-3xl transition duration-400 ease-in-out hover:shadow-xl">
         
         <div className="w-full h-56 lg:h-64 relative">
             <div className="absolute w-full flex items-end justify-between bottom-3">
             {props.isOff && (
             <span className="bg-blue-500 text-white text-sm px-3 h-5 rounded ml-0">₹{`${props.isOff}`} OFF</span>
             )}
             <span className="bg-white text-sm bg-opacity-70 px-1 rounded mr-3">{props.durationOfdelivery} min</span>
             </div>
            <img src={props.photos.length && props.photos[0]}
            alt="Food"
            className="w-full h-full rounded-2xl mt-4"/>
         </div>
         <div>
            <div className="flex justify-between mt-3">
                <h4 className="text-xl font-medium">{props.name}</h4>
                <span className="bg-green-500 text-sm text-white px-1 rounded mr-3 flex justify-center items-center">{props.restaurantReviewValue} <AiTwotoneStar/></span>
            </div>
            <div  className="flex text-sm justify-between mt-3 text-gray-500">
                <p>{props.cuisine.join(", ")}</p>
                <p> ₹ {props.averageCost} for one</p>
            </div>
         </div>
         
        </div>
            
        </>
    );
};

export default RestaurantCard;
