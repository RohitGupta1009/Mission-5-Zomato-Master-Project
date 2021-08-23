import React from 'react'


const DeliverySmCard=({image,title})=>
{
   return (
       <>
       <div className="lg:hidden bg-white shadow rounded-md mb-2 w-24 h-18 md:w-56">
             <div className="w-full h-16 md:h-20 border-rounded ">
                 <img src={image}
                 alt="Food"
                 className="w-full h-full object-cover rounded-t-md"/>
             </div>
             <div>
                 <h3 className="text-sm font-light text-center my-1">{title}</h3>
             </div>
         </div>
       </>
   );
};

const DeliveryLgCard=({image,title})=>
{
    return (
        <>
        <div className="hidden lg:block w-64 h-48">
              <div className="w-full h-full">
                  <img src={image}
                  alt="Food"
                  className="w-full h-full object-cover rounded-md shadow-lg"/>
              </div>
              <div>
                  <h3 className="text-xl font-medium my-1">{title}</h3>
              </div>
          </div>
        </>
    );
};


const DeliveryCategory = (props) => {
    return (
        <>
         
         <DeliverySmCard {...props}/>
         <DeliveryLgCard {...props}/>

        </>
    );
};

export default DeliveryCategory;
