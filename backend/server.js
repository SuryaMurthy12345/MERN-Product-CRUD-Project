import dotenv from "dotenv";
import express from "express";
import { connectDB } from "./config/db.js";
import productRoutes from "./routes/product.route.js";
import cors from "cors" 
import path from "path"
const app = express()

const __dirname = path.resolve()
dotenv.config()

app.use(express.json()) //middleware to parse json requests and json data in req.body 

app.use(cors())

app.use("/api/products", productRoutes) 

if(process.env.NODE_ENV === "production"){
    app.use(express.static(path.join(__dirname,"/frontend/dist"))) 

    //for invalid route
    app.get("*",(req,res)=>{ 
        res.sendFile(path.resolve(__dirname,"frontend","disc","index.html"))
    })
}

app.get('/', (req, res) => {
    res.send("hello, server is ready")
})
const port = process.env.port
app.listen(port, () => {
    connectDB()
    console.log(`Server started at http://localhost:${port}`)
})


