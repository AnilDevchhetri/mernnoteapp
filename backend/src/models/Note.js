import mongoose, { mongo } from "mongoose";

// 1- create a schema
//2- model base of that schema

const notesSchema = new mongoose.Schema({
            title:{
                type:String,
                required: true
            },
            content: {
                type:String,
                required: true
            }, 
        },
        {timestamps: true}//createdAt updatedAt fields
)

const Note = mongoose.model("Note", notesSchema)
export default Note