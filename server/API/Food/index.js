//Libraries
import express from "express";
import passport from "passport";

//Database Model
import { FoodModel } from "../../database/allModels";


//Validation
import {ValidateRestaurantId,ValidateCategory} from "../../validation/food"

const Router=express.Router();



/*
Route         /r
description:  Get all food based on particular restaurant
Params        id
access        public
Method        GET
*/

Router.get("/r/:_id",async(req,res)=>
{
    try {
        await ValidateRestaurantId(req.params);            //req.params will be an object,inside there will be id
        const{_id}=req.params;
        const foods=await FoodModel.find({restaurant:_id});

        return res.json({foods});
    } catch (error) {
        res.status(500).json({error:error.message});
    }
});



/*
Route         /c
description:  Get all food based on particular category
Params        category
access        public
Method        GET
*/


Router.get("/c/:category",async(req,res)=>
{
    try {
        await ValidateCategory(req.params);            //req.params will be an object,inside there will be category
        const{category}=req.params;
        const foods=await FoodModel.find(
            {
                category:{$regex:category,$options:"i"},
            }
            );

        return res.json({foods});
    } catch (error) {
        res.status(500).json({error:error.message});
    }
});



export default Router;