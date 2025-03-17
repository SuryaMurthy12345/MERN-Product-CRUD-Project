import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import './All.css';


const Dashboard = () => {
    const [prod, setProd] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        fetch("https://mern-product-crud-project-1.onrender.com/api/products").then(res => res.json()).then(res => setProd(res.data)).catch(err => console.error(err))
    }, [])

    const handleDelete = async (id) => {
        try {
            if (window.confirm("Are you sure you want to delete this product?")) {
                await fetch(`https://mern-product-crud-project-1.onrender.com/api/products/${id}`, {
                    method: 'DELETE'
                })
                setProd(prod.filter(product => product._id != id))
            }
        }
        catch (err) {
            console.error("Couldnt be delete", err.message)
        }
    }


    return (
        <div>
            <div className='container'>
                {
                    prod.length !== 0 ?
                        prod.map(value => (
                            <div className='box' key={value._id}>
                                <img src={value.image} alt={value.name} width={250} height={250} />
                                <h3>Name:{value.name}</h3>
                                <p>Price: {value.price}</p>
                                <button style={{ fontSize: "20px" }} onClick={() => navigate(`/Form`, { state: { product: value } })}>
                                    <FontAwesomeIcon icon={faEdit} />
                                </button>
                                <button style={{ fontSize: "20px" }} onClick={() => handleDelete(value._id)}>
                                    <FontAwesomeIcon icon={faTrash} />
                                </button>
                            </div>
                        ))
                        : <p>No products Found... 
                            <button onClick={()=>navigate('/addproduct')} className="createlink">
                            Create a product
                            </button>
                        </p>
                }
            </div>
        </div>
    )
}

export default Dashboard