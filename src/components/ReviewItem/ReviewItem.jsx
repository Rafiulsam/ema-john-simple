import React from 'react';
import './ReviewItem.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt} from '@fortawesome/free-solid-svg-icons'

const ReviewItem = ({product, handleRemoveFromCart}) => {
    const {img, id, name, price, quantity } = product 
    return (
        <div className='review-item'>
            <img src={img} alt="" />
            <div className='review-details'>
                <p className='review-title'>{name}</p>
                <p>Price: <span className='orange-text'>{price}</span> </p>
                <p>Product Quantity: <span className='orange-text'>{quantity}</span></p>
            </div>
            <button onClick={()=>handleRemoveFromCart(id)} className='del-btn'><FontAwesomeIcon className='del-icon' icon={faTrashAlt}></FontAwesomeIcon></button>
        </div>
    );
};

export default ReviewItem;