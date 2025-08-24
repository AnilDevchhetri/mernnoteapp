
import mongoose from "mongoose"


export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("db connected")
    } catch (eror) {
        console.error("error conect to mongo dbe", erorr)
        process.exit(1);
    }
}