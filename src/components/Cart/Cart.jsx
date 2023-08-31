import React from 'react';
import './Cart.css'
const Cart = ({ cart }) => {
    let total = 0
    for (const product of cart) {
        total += product.price
    }
    return (
        <div className='cart'>
            <h3 style={{ textAlign: 'center', fontWeight:"400", fontSize:'25px'}}>Oder summary</h3>
            <p>Selected Items: {cart.length}</p>
            <p>Total Price: ${total}</p>
            <p>Shipping Charge: $</p>
            <p>Tax: $</p>
            <h4 style={{fontSize:"21px", fontWeight:"400"}}>Grand Total:</h4>
        </div>
    );
};

export default Cart;