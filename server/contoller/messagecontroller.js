import { Message } from "../models/message.js";


export const message = async(req,res,next) => {
    const {name,email,phone,message} = req.body;

    if(!name || !email || !phone || !message){
        return res.status(400).json({
            success:false,
            message: "Please Fill Full Form"
        })
    }
    try {
        await Message.create({name,email,phone,message});
        res.status(201).json({
            success:true,
            message:"Your Query has been Submit"
        })
    } catch (error) {
        if(error.name === "ValidationError"){
            const validationerror = Object.values(error.errors).map(
                (err) => err.message
            );

            const errormessage=  validationerror.join(", ");
            return res.status(400).json({
                success:false,
                message: errormessage
            })
        }
        return res.status(500).json({
            success:false,
            message:"Internal Server Error"
        })
    }
}