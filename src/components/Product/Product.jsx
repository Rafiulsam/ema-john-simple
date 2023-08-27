import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'


const Product = (props) => {
    const { name, img, price, seller, ratings } = props.product
    const handleAddToCart = props.handleAddToCart
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='details'>
                <h6 className='name'>{name}</h6>
                <p className='price'>Price: ${price}</p>
                <p className='manufacturer'><small>Manufacturer: {seller}</small></p>
                <p className='rating'><small>Rating:{ratings} Stars</small></p>
            </div>
            <button onClick={()=>handleAddToCart(props.product)} className='btn-cart'> Add To Cart <FontAwesomeIcon icon={faShoppingCart} /></button>
        </div>
    );
};

export default Product;