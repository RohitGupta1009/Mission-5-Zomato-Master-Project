//Libraries
import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

//Models
import { UserModel } from "../../database/user";


const Router=express.Router();

/*
Route         /signup
description:  Register new User
params        None
access        public
Method        Post
*/

Router.post("/signup",async (req,res)=>{
    try
    {
       await UserModel.findByEmailAndPhone(req.body.credentials);

       //save to DB
      const newUser= await UserModel.create(req.body.credentials);


       //generate JWT Auth Token
       const token=newUser.generateJwtToken();

       //return
       return res.status(200).json({token,status:"success"});

    } catch (error)
    {
        return res.status(500).json({error: error.message});
    }

});



/*
Route         /signin
description:  Sign in with email and password
params        None
access        public
Method        Post
*/


Router.post("/signin",async (req,res)=>{
    try
    {
      const user = await UserModel.findByEmailAndPassword(req.body.credentials);

       //generate JWT Auth Token
       const token=user.generateJwtToken();

       //return
       return res.status(200).json({token,status:"success"});

    } catch (error)
    {
        return res.status(500).json({error: error.message});
    }

});





export default Router;
