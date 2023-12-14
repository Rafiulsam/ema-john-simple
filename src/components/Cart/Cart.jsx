import React from 'react';
import './Cart.css'
const Cart = ({ cart }) => {
    let totalPrice = 0
    let totalShipping = 0
    let quantity = 0;
    for (const product of cart) {
        if (product.quantity === 0) {
            product.quantity = 1
        }
        totalPrice += product.price * product.quantity
        totalShipping += product.shipping
        quantity += product.quantity
    }
    const tax = totalPrice * 5 / 100
    const grandTotal = totalPrice + totalShipping + tax
    return (
        <div className='cart'>
            <h3 style={{ textAlign: 'center', fontWeight: "400", fontSize: '25px' }}>Order Summary</h3>
            <p>Selected Items: {quantity}</p>
            <p>Total Price: ${totalPrice}</p>
            <p>Shipping Charge: ${totalShipping}</p>
            <p>Tax(5%): ${tax}</p>
            <h4 style={{ fontSize: "21px", fontWeight: "400" }}>Grand Total: ${grandTotal}</h4>
        </div>
    );
};

export default Cart;