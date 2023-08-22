import React from 'react';
import './Product.css'

const Product = (props) => {
    const { name, img, price, seller, ratings } = props.product
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='details'>
                <h6 className='name'>{name}</h6>
                <p className='price'>Price: ${price}</p>
                <p className='manufacturer'><small>Manufacturer: {seller}</small></p>
                <p className='rating'><small>Rating:{ratings} Stars</small></p>
            </div>
            <button className='btn-cart'> Add To Cart</button>
        </div>
    );
};

export default Product;