
import React, { useContext, useState, useEffect } from 'react';
import './cart.css';
import { CartContext } from '../../CartContext/context';
import axios from 'axios';
import { GlobalContext } from '../../../context/context';
import { decodeToken } from 'react-jwt'
import { Modal, Button } from 'react-bootstrap'; // Import the Modal and Button components
import Swal from 'sweetalert2';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import Spinner from 'react-bootstrap/Spinner';
import { AppRoute } from '../../../App';

export default function CustomCart() {
    const { cart_state, cart_dispatch } = useContext(CartContext);
    const [products, setProducts] = useState(cart_state.cart);
    const { state, dispatch } = useContext(GlobalContext)
    const user = decodeToken(state.token)
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [Orders, setAllOrders] = useState([]);
    const [isLoading, setIsLoading] = useState(false); // Track loading state

    const [address, setAddress] = useState(''); // State to store address input
    const [contact, setContact] = useState(''); // Stat

    const increaseQuantity = (index) => {
        const updatedProducts = [...products];
        updatedProducts[index].quantity += 1;
        setProducts(updatedProducts);
    };

    const decreaseQuantity = (index) => {
        const updatedProducts = [...products];
        if (updatedProducts[index].quantity > 1) {
            updatedProducts[index].quantity -= 1;
            setProducts(updatedProducts);
        }
    };

    const removeProduct = (index) => {
        const updatedProducts = [...products];
        updatedProducts.splice(index, 1);
        setProducts(updatedProducts);

        cart_dispatch({
            type: "REMOVE_FROM_CART",
            index: index
        });
    };

    const calculateSubtotal = () => {
        return products.reduce((total, product) => total + product.price * product.quantity, 0);
    };

    const calculateTax = () => {
        return calculateSubtotal() * 0.05;
    };

    const calculateTotal = () => {
        return calculateSubtotal() + calculateTax() + 5; // Assuming shipping cost is fixed
    };

    const checkout = () => {
        const payload = {
            items: cart_state.cart,
            totalBill: calculateTotal(),
            customerAddress: address,
            customerContact: contact,
            customerName: user.username,
            customerEmail: user.email,
        };

        setIsModalOpen(true); // Open the modal on checkout
        console.log(payload);
    };

    const closeModal = async () => {
        setIsModalOpen(false); // Close the modal
        setIsLoading(true); // Start loading
    

        const payload = {
            items: cart_state.cart,
            totalBill: calculateTotal(),
            customerAddress: address,
            customerContact: contact,
            customerName: user.username,
            customerEmail: user.email,
        };


        try {
            const response = await axios.post('/api/create-order', payload);
            console.log(response.data);
            Swal.fire({
                icon: 'success',
                title: 'Order Placed Successfully!',
                text: 'Check your email for order details.',
                confirmButtonText: 'OK'
            });
        } catch (err) {
            console.log(err.message);
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'An error occurred while placing the order.',
                confirmButtonText: 'OK'
            });
        } finally {
            setIsLoading(false); // Stop loading in both success and error cases
        }
    };


 
    return (
       <>
        <div>
            <Navigation />
            <header id="site-header">
                <div className="container" style={{marginTop: "30px"}}>
                    <h1>
                        Shopping cart

                    </h1>
                </div>
            </header>

            <div className="container">
                <section id="cart">
                    
                    {cart_state.cart.map((val, index) => (
                        <article key={index} className="product">
                            <header>
                                <a className="remove" onClick={() => removeProduct(index)}>
                                    <img src={val.thumbnail} alt={val.productName} />
                                    <h3>Remove product</h3>
                                </a>
                            </header>

                            <div className="content">
                                <h1>{val.title}</h1>
                                <p>{val.description}</p> {/* Display product description */}

                                <p>Quantity: {val.quantity}</p> {/* Display product quantity */}
                            </div>

                            <footer className="content">
                                <span className="qt-minus" onClick={() => decreaseQuantity(index)}>-</span>
                                <span className="qt">{val.quantity}</span>
                                <span className="qt-plus" onClick={() => increaseQuantity(index)}>+</span>
                                <h2 className="full-price">{val.price * val.quantity}</h2>
                               
                            </footer>
                        </article>
                        
                    ))}
                    
                    
                </section>
            </div>

            <footer id="site-footer">
                <div className="container clearfix">
                    <div className="left">
                        <h2 className="subtotal">Subtotal: {calculateSubtotal()}€</h2>
                        <h3 className="tax">Taxes (5%): {calculateTax()}€</h3>
                        <h3 className="shipping">Shipping: 5.00€</h3>
                    </div>

                    <div className="right">
                        <h1 className="total">Total: {calculateTotal()}€</h1>
                        <a className="btn" onClick={checkout}>
                            Checkout
                        </a>
                    </div>
                </div>
            </footer>
            {/* Modal */}
            <Modal show={isModalOpen} onHide={closeModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Your Order Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Customer Name: {user.username}</p>
                    <p>Customer Email: {user.email}</p>
                    <label>Customer Address:
                        <input required placeholder='Enter Your Address' type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
                    </label>
                    <label> Customer Contact:
                        <input required placeholder='Enter Your Number' type="text"value={contact}onChange={(e) => setContact(e.target.value)}/>
                    </label>
                    <p>Total Bill: {calculateTotal()}€</p>
                </Modal.Body>
                <Modal.Footer>
    {isLoading ? (
        <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
        </Spinner>
    ) : (
        <Button variant="secondary" onClick={closeModal} disabled={isLoading}>
            Confirm
        </Button>
    )}
</Modal.Footer>
            </Modal>
        </div>
{/* footer  */}
        <Footer />
       </>
    );
}