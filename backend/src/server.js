import express from "express"
import notesRoutes from "./routes/notesRoutes.js"
import { connectDB } from "./config/db.js";
import dotenv from 'dotenv'

dotenv.config();

const app = express();


const PORT = process.env.PORT || 5001;

app.use("/api/notes", notesRoutes)

connectDB(); 

app.listen(PORT, ()=> {
    console.log("server start on PORT: ",PORT)
    
})


//https://www.youtube.com/watch?v=F9gB5b4jgOI
//time 01:07:10
//dbname: thinkboard
//mongo password: rdvQqyRbVpPWaXmB

//mongo connection stirng: mongodb+srv://chhetrivision:rdvQqyRbVpPWaXmB@cluster0.5dkl3tr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0