import { Form } from 'react-bootstrap';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { BsInstagram } from 'react-icons/bs';
import { AiFillGithub } from 'react-icons/ai';
import { BsLinkedin } from 'react-icons/bs';
import { BsWhatsapp } from 'react-icons/bs';
import Navigation from '../components/Navigation'

export default function SignIn({setUser}) {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const saveUserDataToLocalStorage = (username, isLoggedIn) => {
    localStorage.setItem('username', username);
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);
    localStorage.setItem('confirm Password', confirmPassword);
    localStorage.setItem('loggedIn', isLoggedIn.toString());
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    console.log('Username:', username);
    console.log('Email:', email);
    console.log('Password:', password);

    setUsername('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setErrorMessage('');

    Swal.fire({
      title: 'Login Successful!',
      icon: 'success',
      timer: 1500,
      showConfirmButton: false
    }).then(() => {
      saveUserDataToLocalStorage(username, true);
      setUser(true)
      navigate('/');
    });
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setErrorMessage("Passwords don't match");
      return;
    }

    console.log('Username:', username);
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Confirm Password:', confirmPassword);

    setUsername('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setErrorMessage('');

    Swal.fire('Success', 'Sign up successful!', 'success').then(() => {
      setUsername('');
      setPassword('');
      setConfirmPassword('');

      saveUserDataToLocalStorage(username, true);
      setUser(true)

      navigate('/');
    });
  };

  return (
    <>
      <Navigation />
      <div className="custom-container">
        <input type="checkbox" id="custom-check" />
        <div className="custom-login-form">
          <header>Login</header>
          <form action="#" onSubmit={handleLoginSubmit}>
            <label htmlFor="username">User Name</label>
            <input
              type="text"
              id="username"
              placeholder="Enter your name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />

            <label htmlFor="useremail">Email</label>
            <input
              type="email"
              id="useremail"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
    
              title="Please enter a valid email address with the domain 'gmail.com'"

              required
            />

            <div style={{ position: 'relative', bottom: '20px' }}>
              <Form.Text style={{ color: 'black' }} >
                We'll never share your email with anyone else.
              </Form.Text>
            </div>

            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="signup-password"
              pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$"
              title="Use at least 8 characters (including uppercase, lowercase, and numbers)"
              placeholder="Enter your password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />


            <a href="#">Forgot password?</a>
            <input type="submit" className="custom-button" value="Login" />
          </form>
          <div className="custom-signup">
            <span className="custom-signup-text">
              Don't have an account?
              <label htmlFor="custom-check">Signup</label>
            </span>
          </div>
        </div>
        <div className="custom-registration-form">
          <header>Signup</header>
          <form action="#" onSubmit={handleSignupSubmit}>
            <label htmlFor="username">User Name</label>
            <input
              type="text"
              id="username"
              placeholder="Enter your name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />

            <label htmlFor="useremail">Email</label>
            <input
              type="email"
              id="useremail"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              pattern="[a-zA-Z0-9._%+-]+@gmail\.com$"
              title="Please enter a valid email address with the domain 'gmail.com'"
              required />
            <div style={{ position: 'relative', bottom: '20px' }}>
              <Form.Text style={{ color: 'black' }} >
                We'll never share your email with anyone else.
              </Form.Text>
            </div>

            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="signup-password"
              pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$"
              title="Use at least 8 characters (including uppercase, lowercase, and numbers)"
              placeholder="Enter your password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <label htmlFor="confirm-password">Confirm Password</label>
            <input
              type="password"
              id="confirm-password"
              placeholder="Confirm your password"
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            {errorMessage && <p className="error-message">{errorMessage}</p>}
            <input type="submit" className="custom-button" value="Signup" />
          </form>
          <div className="custom-signup">
            <span className="custom-signup-text">
              Already have an account?
              <label htmlFor="custom-check">Login</label>
            </span>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer" style={{ backgroundColor: 'gray', marginTop: '800px' }}>
        <div className="footer__container">
          <div className="footer__top">
            <div className="company__info">
              <h2 className="company__logo">ZM STORE</h2>
              <p className="company__description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, iure. Harum, animi dolores, nam, ad
                magni expedita.
              </p>
              <h2>Contact us</h2>
              <ul className="footer__list">
                <li className="footer__list-item">
                  <a href="#" className="footer__list-link">
                    <i className="icon icon--linkedin">
                      <BsLinkedin />
                    </i>
                  </a>
                </li>
                <li className="footer__list-item">
                  <a href="#" className="footer__list-link ">
                    <i className="icon icon--instagram">
                      <BsInstagram />
                    </i>
                  </a>
                </li>
                <li className="footer__list-item">
                  <a href="#" className="footer__list-link">
                    <i className="icon icon--github">
                      <AiFillGithub />
                    </i>
                  </a>
                </li>

                <li className="footer__list-item">
                  <a href="#" className="footer__list-link">
                    <i className="icon icon--whatsapp">
                      <BsWhatsapp />
                    </i>
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h6 className="footer__title"> Store</h6>
              <ul className="footer__list">
                <li className="footer__list-item">
                  <a href="/" className="footer__list-link">
                    Home
                  </a>
                </li>
                <li className="footer__list-item">
                  <a href="/products" className="footer__list-link">
                    Products
                  </a>
                </li>
                <li className="footer__list-item">
                  <a href="/about" className="footer__list-link">
                    About
                  </a>
                </li>
                <li className="footer__list-item">
                  <a href="/contact" className="footer__list-link">
                    Contact
                  </a>
                </li>

              </ul>
            </div>
            <div className="form-group mb-4">
              <input type="email" className="form-control bg-transparent" placeholder="Enter Your Email here" />
              <button className="mt-3 btn-style">Submit</button>
            </div>
          </div>
        </div>
      </footer>

      {/* Copyright */}
      <div className="container-fluid copyright-section">
        <p className="p-0">
          copyright @ 2023 ZM Store All Rights Reserved <span className="gap"></span>Designed by WANIA KHAN.
        </p>
      </div>
    </>
  );
}
