import React, { useState } from 'react'
import './Form.css'

const AddProduct = () => {
    const [data, setData] = useState({
        name: "", price: "", image: ""
    })
    const { name, price, image } = data
    const changeHandle = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    const handleAppend = async (e) => {
        e.preventDefault()
        try {
            const response = await fetch("http://localhost:5000/api/products", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })
            if (response.ok) {
                alert("Product added successfully")
            }
            else {
                console.error("Failed to add")
            }
        }
        catch (err) {
            console.error(err.message)
        }
    }

    return (
        <div>
            <form onSubmit={handleAppend} className='form'>
                <p>Name:</p>
                <input type='text' onChange={changeHandle} name="name" value={name} className='input' />
                <p>Price:</p>
                <input type='number' onChange={changeHandle} name="price" value={price} className='input' />
                <p>Image Url:</p>
                <input type='text' onChange={changeHandle} name="image" value={image} className='input' />

                <input type='submit' className='button' />
            </form>
        </div>
    )
}

export default AddProduct