import express from "express";
import { deleteProductById, getAllProducts, getProductById, postProduct, updateProduct } from "../controller/product.controller.js";

const router = express.Router()


router.post("/", postProduct)

router.get("/", getAllProducts)

router.get("/:id", getProductById)

router.put("/:id", updateProduct)

router.delete("/:id", deleteProductById)

export default router