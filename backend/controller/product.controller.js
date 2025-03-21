import mongoose from "mongoose"
import Product from "../models/product.model.js"

export const postProduct = async (req, res) => {
    const product = req.body
    if (!product.name || !product.price || !product.image) {
        return res.status(400).json({ success: false, message: "please provide all details" })
    }

    const newProduct = new Product(product)

    try {
        await newProduct.save()
        res.status(201).json({ success: true, data: newProduct })
    }
    catch (err) {
        console.error("Error in creating product:", err.message)
        res.status(500).json({ success: false, message: "Server Error" })
    }

}

export const getAllProducts = async (req, res) => {
    try {
        const allProducts = await Product.find({})
        res.status(200).json({ success: true, data: allProducts })
    } catch (error) {
        console.error("Error:", error.message)
        res.status(500).json({ success: false, message: "Server Error" })
    }

}

export const getProductById = async (req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ success: false, message: "Invalid id" })
    }
    try {
        const data = await Product.findById(id)
        res.status(200).json({ success: true, data })
    } catch (error) {
        console.log("Error:", err)
        res.status(500).json({ succes: false, message: "Server Error" })
    }
}

export const updateProduct = async (req, res) => {
    const { id } = req.params
    const product = req.body
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(500).json({ success: false, message: "invalid id" })
    }

    try {
        const updatedProduct = await Product.findByIdAndUpdate(id, product, { new: true }) //new:true gives you updatedobject
        res.status(200).json({ success: true, data: updatedProduct })
    } catch (error) {
        console.log("Error:", error.message)
        res.status(500).json({ success: false, message: "Server Error " })
    }

}

export const deleteProductById = async (req, res) => {
    const { id } = req.params
    try {
        await Product.findByIdAndDelete(id)
        res.status(200).json({ success: true, message: "Product Deleted" })
    } catch (err) {
        console.error("Error:", err.message)
        res.status(404).json({ success: false, message: "Product not found" })
    }
}