import { faPlus, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './All.css';

const Navbar = () => {
    const navigate = useNavigate();

    return (
        <nav className="navbar">
            <div className="store">
                <button 
                    onClick={() => navigate('/')} 
                    aria-label="Go to Product Store"
                    className="nav-button"
                >
                    Product Store&nbsp;
                    <FontAwesomeIcon icon={faShoppingCart} />
                </button>
            </div>
            <div className="icons">
                <button 
                    onClick={() => navigate('/addproduct')} 
                    aria-label="Add a new product"
                    className="nav-button"
                >
                    <FontAwesomeIcon icon={faPlus} />&nbsp;
                    Add Product
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
