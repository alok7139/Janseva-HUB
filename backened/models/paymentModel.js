import mongoose from 'mongoose'


const paymentSchema = new mongoose.Schema({
    name:{type:String , require:true},
    email:{type:String , require:true},
    phone:{type:String,require:true},
    message:{type:String,require:true},
    razorpay_order_id:{
        type:String,
        require:true,
    },
    razorpay_payment_id:{
        type:String,
        require:true,
    },
    razorpay_signature:{
        type:String,
        require:true,
    }
})

export const Payment = mongoose.model("Payemnt" , paymentSchema);