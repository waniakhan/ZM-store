import React from 'react'
import { BsInstagram } from 'react-icons/bs';
import { AiFillGithub } from 'react-icons/ai';
import { BsLinkedin } from 'react-icons/bs';
import { BsWhatsapp } from 'react-icons/bs';
export default function Footer() {
  return (
 <>
 {/* footer  */}

 <footer className="footer" style={{ backgroundColor: "gray", marginTop: "50px" }}>
        <div className="footer__container">
          <div className="footer__top">
            <div className="company__info">
              <h2 className="company__logo">ZM STORE</h2>
              <p className="company__description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, iure.
                Harum, animi dolores, nam, ad magni expedita.
              </p>
              <h2>Contact us</h2>
              <ul className="footer__list">
                <li className="footer__list-item">
                  <a href="https://www.linkedin.com/in/wania-khan-42527122a/" className="footer__list-link">
                    <i className="icon icon--linkedin"><BsLinkedin /></i>
                  </a>
                </li>
                <li className="footer__list-item">
                  <a href="https://manoo_khan67/" className="footer__list-link ">
                    <i className="icon icon--instagram"><BsInstagram /></i>

                  </a>
                </li>
                <li className="footer__list-item">
                  <a href="https://github.com/waniakhan" className="footer__list-link">
                    <i className="icon icon--github"><AiFillGithub /></i>
                  </a>
                </li>

                <li className="footer__list-item">
                  <a href="#" className="footer__list-link">
                    <i className="icon icon--whatsapp"><BsWhatsapp /></i>
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
      <div className="container-fluid copyright-section">
        <p className="p-0">
          copyright @ 2023 ZM Store All Rights Reserved <span className="gap"></span>Designed by WANIA KHAN.
        </p>
      </div>
 </>
  )
}
