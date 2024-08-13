import mongoose from "mongoose";

export const dbconnection = () => {
    mongoose.connect(process.env.MONGO_URI , {
        dbName: "JansevaHUB"
    }).then(() => {
        console.log(`connected to database`)
    }).catch((error) => {
        console.log(`database error occured ${error}`)
    })
}