import { useState } from 'react';
import './Order.css'
import Cart from '../Cart/Cart';
import { Link, useLoaderData } from 'react-router-dom';
import ReviewItem from '../ReviewItem/ReviewItem';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCreditCard } from '@fortawesome/free-solid-svg-icons'
const Order = () => {
    const savedCart = useLoaderData()
    const [cart, setCart] = useState(savedCart)

    const handleRemoveFromCart = id => {
        const remaining = cart.filter(product => product.id !== id)
        setCart(remaining)
        removeFromDb(id)
    }

    const handleClearCart = () => {
        setCart([])
        deleteShoppingCart()
    }
    return (
        <div className="shop-container">
            <div className='review-container'>
                {
                    cart.length != 0 ? cart.map(product => <ReviewItem
                        key={product.id}
                        product={product}
                        handleRemoveFromCart={handleRemoveFromCart}>
                    </ReviewItem>) : <div className='empty-cart'><h2>Your cart is empty!</h2>
                        <Link to="/"><button >Continue shopping</button></Link> </div>
                }
            </div>
            <div className="cart-container">
                <Cart
                    cart={cart}
                    handleClearCart={handleClearCart}
                >
                    <Link to='/checkout'>
                        <button className='btn-proceed'>Proceed Checkout <FontAwesomeIcon icon={faCreditCard}></FontAwesomeIcon></button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Order;