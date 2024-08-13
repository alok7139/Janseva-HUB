import mongoose from "mongoose";

const volunteerSchema = new mongoose.Schema({
    name:String,
    email:String,
    amount:{
        type:String,
        require:true
    },
    orderID: {
        type:String,
        require:true
    },
    paymentStatus: String,
})

export const Volunteer = mongoose.model("Volunteer" , volunteerSchema);