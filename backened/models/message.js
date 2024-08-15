import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true,
    },
    email:{
        type:String,
        require:true,
    },
    phone:{
        type:String,
        require:true
    },
    message:{
        type:String,
        require:true
    }
})

export const Message = mongoose.model("Message" , messageSchema);