import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Form.css';

const AddProduct = () => {
    const [data, setData] = useState({ name: "", price: "", image: "" });
    const navigate = useNavigate();

    const { name, price, image } = data;

    const changeHandle = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const handleAppend = async (e) => {
        e.preventDefault();

        // 🛑 Validate Inputs
        if (!name.trim() || !price || !image.trim()) {
            alert("Please fill out all fields before submitting.");
            return;
        }

        try {
            const response = await fetch("https://mern-product-crud-project-1.onrender.com/api/products", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                const errorData = await response.json();
                alert(`Failed to add product: ${errorData.message || "Unknown error"}`);
                return;
            }

            alert("Product added successfully!");
            
            // ✅ Clear Form After Submission
            setData({ name: "", price: "", image: "" });

            // 🔄 Redirect to Dashboard
            navigate("/");
        } catch (err) {
            console.error("Error:", err.message);
            alert("An error occurred while adding the product. Please try again.");
        }
    };

    return (
        <div>
            <form onSubmit={handleAppend} className='form'>
                <p>Name:</p>
                <input type='text' onChange={changeHandle} name="name" value={name} className='input' />

                <p>Price:</p>
                <input type='number' onChange={changeHandle} name="price" value={price || ""} className='input' />

                <p>Image URL:</p>
                <input type='text' onChange={changeHandle} name="image" value={image} className='input' />

                <input type='submit' className='button' value="Add Product" />
            </form>
        </div>
    );
};

export default AddProduct;
