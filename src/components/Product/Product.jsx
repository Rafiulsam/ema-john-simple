import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';

const Product = ({ product, handleAddToCart }) => {
    const { name, img, price, seller, ratings } = product;

    return (
        <div className='product'>
            <img src={img} alt={name} />
            <div className='details'>
                <h6 className='name'>{name}</h6>
                <p className='price'>Price: ${price}</p>
                <p className='manufacturer'><small>Manufacturer: {seller}</small></p>
                <p className='rating'>
                    <small>Rating: </small>
                    {[...Array(Math.floor(ratings))].map((_, i) => (
                        <FontAwesomeIcon key={i} icon={faStar} style={{ color: 'gold' }} />
                    ))}
                    {ratings % 1 !== 0 && <FontAwesomeIcon icon={faStarHalfAlt} style={{ color: 'gold' }} />}
                </p>
            </div>
            <button onClick={() => handleAddToCart(product)} className='btn-cart'>
                Add To Cart <FontAwesomeIcon icon={faShoppingCart} />
            </button>
        </div>
    );
};

export default Product;