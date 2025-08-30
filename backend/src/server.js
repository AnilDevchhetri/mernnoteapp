import express from "express"
import notesRoutes from "./routes/notesRoutes.js"
import { connectDB } from "./config/db.js";
import dotenv from 'dotenv'
import rateLimiter from "./middleware/rateLimit.js";
import cors from "cors"

dotenv.config();

const app = express();



const PORT = process.env.PORT || 5001;




//Middleware
app.use(cors({
    origin: "http://localhost:5173"
}))
app.use(express.json())//this middleware will parse json bodies

app.use(rateLimiter)

//simgple custom midlleware
// app.use((req, res, next) => {
//     console.log(`Req url is ${req.method} & req usr is ${req.url}`);
//     next();
// })

app.use("/api/notes", notesRoutes)
connectDB().then(() => {
    app.listen(PORT, () => {
        console.log("server start on PORT: ", PORT)
    })
})



//https://www.youtube.com/watch?v=F9gB5b4jgOI
//time 01:46:
//dbname: thinkboard
//mongo password: rdvQqyRbVpPWaXmB

//mongo connection stirng: mongodb+srv://chhetrivision:rdvQqyRbVpPWaXmB@cluster0.5dkl3tr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
