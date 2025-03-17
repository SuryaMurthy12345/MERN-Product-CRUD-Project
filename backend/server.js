import dotenv from "dotenv";
import express from "express";
import { connectDB } from "./config/db.js";
import productRoutes from "./routes/product.route.js";
import cors from "cors";
import path from "path";

const app = express();
const __dirname = path.resolve();
dotenv.config();

app.use(express.json());
app.use(cors());

app.use("/api/products", productRoutes);

app.get("/", (req, res) => {
    res.send("Hello, server is ready");
});

const port = process.env.PORT || 5000;

connectDB()
    .then(() => {
        app.listen(port, () => {
            console.log(`Server started at http://localhost:${port}`);
        });
    })
    .catch((err) => {
        console.error("Database connection failed", err);
        process.exit(1);
    });
