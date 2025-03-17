import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true
    },

}, { timestamps: true })

const product = mongoose.model('Product', productSchema) //it is converts Product to Products in mongodb . it is collection name

export default product