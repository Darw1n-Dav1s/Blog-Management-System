const mongoose = require("mongoose")          // creating schema 

const Schema = mongoose.Schema

const blogSchema = new Schema({

    title:{
        type: String,
        required:true,
    
    },

    snippet:{
        type:String,
        required:true,
    },

    body:{
        type: String,
        required:true,
    },
},{timeStamps: true})


const Blog = mongoose.model("Blog",blogSchema)    // creating a model

module.exports = Blog