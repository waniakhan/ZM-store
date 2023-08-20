import React, { useContext, useState, useEffect } from 'react';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai'
import { FaHome, FaShoppingCart, FaInfoCircle, FaEnvelope } from 'react-icons/fa';
import { GlobalContext } from '../../context/context';
import Cookies from 'js-cookie';
import { useJwt } from 'react-jwt';
import { FaListAlt } from 'react-icons/fa';
import { CartContext } from '../CartContext/context';
import { Badge } from 'react-bootstrap'; // Import the Badge component
import { BiCategory } from 'react-icons/bi';

export default function Navigation() {
  const [adminName, setAdminName] = useState('');
  const { decodedToken } = useJwt(Cookies.get('token'));

  useEffect(() => {
    if (decodedToken) {
      setAdminName(decodedToken.username);
    }
  }, [decodedToken]);

  const handleLogout = () => {
    Cookies.remove('token');
    // Navigate to the home page after logout
    window.location.href = '/'; // Change this to your home URL
  };

  const { cart_state } = useContext(CartContext); // Get cart state from CartContext
  const getTotalQuantity = () => {
    return cart_state.cart.reduce((total, product) => total + product.quantity, 0);
  };
  return (
    <>
      <Navbar expand="lg" className="custom-navbar fixed-top">
        <Container fluid>
          <Navbar.Brand href="/">ZM Store</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">

            <Nav className="mx-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
              <Link to="/" className='text-decoration-none text-dark mx-3'><FaHome className='mx-1' />Home</Link>
              <Link to="/products" className='text-decoration-none text-dark mx-3'><FaShoppingCart className='mx-1' />Products</Link>
              <Link to="/userCategory" className='text-decoration-none text-dark mx-3'><BiCategory className='mx-1' />Category</Link>

              <Link to="/about" className='text-decoration-none text-dark mx-3'><FaInfoCircle className='mx-1' />About</Link>
              <Link to="/contact" className='text-decoration-none text-dark mx-3'><FaEnvelope className='mx-1' />Contact </Link>
            </Nav>

            {/* cart icon  */}
            <Link to='/cart' className='btn btn-dark position-relative nav-link ' style={{ width: "50px", color: "white" }}>
              <FaShoppingCart />
              {getTotalQuantity() > 0 && (
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger cart-badge">
                  {getTotalQuantity()}
                </span>
              )}
            </Link>
            {/* search icon  */}

            <div className="d-flex align-items-center">

              <form className="search mx-3">
                <input type="text" placeholder="Search" className="search__input" />
                <button type="button" className="search__button">
                  <AiOutlineSearch />
                </button>
              </form>
            </div>
            <div className="d-flex gap-3">
              <Link to='/profile' className="btn btn-outline-dark d-flex align-items-center gap-3 " style={{ width: '130px' }} >
                <img src="https://cdn-icons-png.flaticon.com/512/3177/3177440.png" style={{ height: '3vh', objectFit: 'contain' }} alt="" />
                {adminName}
              </Link>

              <button className="btn btn-outline-dark " style={{ width: '70px' }} onClick={handleLogout}>
                Logout
              </button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}
