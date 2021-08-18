//Libraries
import express from "express";
import passport from "passport";

//Database Model
import { OrderModel } from "../../database/allModels";

const Router=express.Router();



/*
Route         /
description:  Get all orders based on id
Params        _id
access        public
Method        GET
*/


Router.get("/:_id",passport.authenticate("jwt",{session:false}),async(req,res)=>{
    try {
        const {_id}=req.params;
        const getOrders=await OrderModel.findOne({user:_id});
        if(!getOrders)
        {
            return res.status(404).json({error:"User not found"});
        }
        return res.status(200).json({orders:getOrders});

    } catch (error) {
        return res.status(500).json({error:error.message});
    }

});


/*
Route         /new
description:  Add new Order
Params        _id
access        public
Method        POST
*/


Router.post("/new",async(req,res)=>
{
       try {
           const {_id}=req.params;
           const {orderDetails}=req.body;

           const addNewOrder=await OrderModel.findOneAndUpdate(
               {
                   user:_id,
               },
               {
                   $push:{orderDetails},                        // same as $push:{orderDetails:orderDetails},
               },
               {
                   new:true,
               }
           );

           return res.json({order:addNewOrder});
       } catch (error) {
        return res.status(500).json({error:error.message});
           
       }
});


export default Router;