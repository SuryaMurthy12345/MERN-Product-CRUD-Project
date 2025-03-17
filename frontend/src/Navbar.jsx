import { faPlus, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './All.css';

const Navbar = () => {
    const navigate = useNavigate()
    return (
        <div>
            <div className='navbar'>
                <div className='store'>
                    <button onClick={() => navigate('/')}>
                        Product Store
                        <FontAwesomeIcon icon={faShoppingCart} />
                    </button>
                </div>
                <div className='icons'>
                    <button onClick={() => navigate('/addproduct')}>
                        <FontAwesomeIcon icon={faPlus} />&nbsp;
                        Add Product
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Navbar 