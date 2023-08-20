
import React, { useEffect, useReducer, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ReactStars from 'react-stars';
import Swal from 'sweetalert2';
import ImageSection from '../Components/ImageSection';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import { CartContext } from '../CartContext/context'


export default function ProductPage() {
  const { productID } = useParams();
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1)
  const [review, setReview] = useState('');
  const [ratingStar, setRatingStar] = useState(0);


 const { cart_state, cart_dispatch } = useContext(CartContext)

  const ratingChanged = (newRating) => {
    setRatingStar(newRating);
  };

  const submitReview = () => {
    const payload = {
      productID: productID,
      review: review,
      rating: ratingStar
    };

    console.log(payload);

    Swal.fire({
      title: 'Successfully Submitted!',
      text: 'Thanks for reviewing our product',
      icon: 'success',
      confirmButtonText: 'Continue Shopping'
    });

    setReview('');
    setRatingStar(0);
  };

  useEffect(() => {
    console.log(cart_state)
    axios.get(`https://dummyjson.com/products/${productID}`).then((json) => setProduct(json.data));
  }, []);

  const addtocart = () => {
    const existingCartItem = cart_state.cart.find(item => item.id === product.id);

    if (existingCartItem) {
        // Product is already in the cart, show a message or perform any other action
        console.log("Product already in the cart!");
        return;
    }

    const payload = { ...product, quantity };
    console.log(payload);

    cart_dispatch({
        type: "ADD_TO_CART",
        payload
    });

    Swal.fire({
      icon: 'success',
      title: 'Success!',
      text: 'Product added to cart',
      showConfirmButton: false,
      timer: 2000,
      customClass: {
        container: 'custom-swal-container',
        popup: 'custom-swal-popup',
        title: 'custom-swal-title',
        content: 'custom-swal-content',
      } 
  });
};


  return (
    <>
      <Navigation />
      <div className="text-center my-5 ">
        <h1 style={{ marginTop: '100px' }}>
          {product.title} - {product.price}$
        </h1>
        <p className="text-secondary">{product.description}</p>
      </div>
      <div className="container">
        <div className="row">
          <div className="">
            <div className="product-image  ">
              {product?.images?.length > 0 && <ImageSection images={product.images} />}
            </div>

            <div className="d-flex justify-content-center my-3">
              <ReactStars count={5} size={24} edit={false} value={product.rating} color2={'#ffd700'} />
            </div>

            <div className="d-flex justify-content-center my-3">
            <div className="d-flex justify-content-center my-3 ">
            <button className="btn btn-dark mx-3" style={{width: '50px'}} disabled={quantity <= 1 ? true : false} onClick={() => setQuantity(quantity - 1)}>-</button>
                        {quantity}
                        <button className="btn btn-dark mx-3"  style={{width: '50px'}} onClick={() => setQuantity(quantity + 1)}>+</button>

</div>   
            </div>

            <div className="d-flex justify-content-center my-3">
            <button className="btn btn-dark" style={{width: '150px'}} onClick={addtocart} disabled={cart_state.cart.some(item => item.id === product.id)}>
    {cart_state.cart.some(item => item.id === product.id) ? "Already in Cart" : "Add to Cart"}
</button>
            </div>
          </div>

          <div className="col-md-12 my-5">
            <div className="container">
              <div className="mb-5">
                <h2 className="text-center">Reviews Us</h2>
                <p className="text-center text-secondary">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, sed.
                </p>
              </div>

              <div>
                <div className="form-floating">
                  <textarea
                    className="form-control"
                    placeholder="Leave a comment here"
                    id="floatingTextarea2"
                    style={{ height: 100 }}
                    defaultValue={review}
                    onChange={(e) => setReview(e.target.value)}
                  />
                  <label htmlFor="floatingTextarea2">Comments</label>
                </div>

                <div className="mt-3">
                  Rate Us :
                  <div className="d-flex align-items-center">
                    <ReactStars
                      count={5}
                      size={24}
                      value={ratingStar}
                      onChange={ratingChanged}
                      color2={'#ffd700'}
                    />
                    <span className="ms-3">({ratingStar})</span>
                  </div>
                </div>
                <button className="my-3 btn btn-dark" style={{width: '130px'}} onClick={submitReview}>
                  Submit review
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* footer  */}
      <Footer />
    </>
  );
}
