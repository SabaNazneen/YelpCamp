const express= require('express')
const mongoose=require('mongoose')
const Schema=mongoose.Schema
const passportLocalMongoose = require('passport-local-mongoose')

const UserScheam=new Schema({
    email:{
        type:String,
        required:true,
        unique:true
    }
})

UserScheam.plugin(passportLocalMongoose)  ///adding a password or checks 
module.exports=mongoose.model('User',UserScheam)  //compile