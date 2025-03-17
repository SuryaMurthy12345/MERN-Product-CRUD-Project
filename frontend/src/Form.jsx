import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Form.css';

const Form = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const presentData = location.state?.product || { name: "", price: "", image: "", _id: "" };
    const [val, setVal] = useState(presentData);
    const { name, price, image, _id } = val;

    const changeHandle = (e) => {
        setVal({ ...val, [e.target.name]: e.target.value });
    };

    const handleUpdate = async (e) => {
        e.preventDefault();
        try {
            if (window.confirm("Are you sure you want to update this product?")) {
                const response = await fetch(`http://localhost:5000/api/products/${_id}`, {
                    method: 'PUT',
                    headers: { 'Content-Type': "application/json" },
                    body: JSON.stringify(val),
                });

                if (!response.ok) {
                    const errorData = await response.json();
                    alert(`Update failed: ${errorData.message || "Unknown error"}`);
                    return;
                }

                alert("Product updated successfully");
                navigate("/");
            }
        } catch (err) {
            console.error("Couldn't update product", err.message);
            alert("An error occurred while updating. Please try again.");
        }
    };

    return (
        <div className='container'>
            <form onSubmit={handleUpdate} className='form'>
                <p>Name:</p>
                <input type='text' onChange={changeHandle} name="name" value={name} className='input' />

                <p>Price:</p>
                <input type='number' onChange={changeHandle} name="price" value={price || ""} className='input' />

                <p>Image Url:</p>
                <input type='text' onChange={changeHandle} name="image" value={image} className='input' />

                <input type='submit' className='button' value="Update Product" />
            </form>
        </div>
    );
};

export default Form;
