//Libraries
import express from "express";
import passport from "passport";

//Database Model
import { ReviewModel } from "../../database/allModels";

const Router=express.Router();

/*
Route         /new
description:  Add new review/rating
params        none
Body          review Object
access        public
Method        POST
*/

Router.post("/new",async(req,res)=>
{
     try {
         const {reviewData}=req.body;
         await ReviewModel.create(reviewData);
         return res.json({review:"Successfully created review"});

     } catch (error) {
        return res.status(500).json({error:error.message});
     }
});



/*
Route         /delete
description:  Delete review/rating
params        _id
Body          none
access        public
Method        DELETE
*/


Router.delete("/delete/:_id",async(req,res)=>
{
      try {
          const {_id}=req.params;
          await ReviewModel.findByIdAndDelete(_id);
          return res.json({review:"Successfully Deleted the review"});
      } catch (error) {
        return res.status(500).json({error:error.message});
      }
});


export default Router;