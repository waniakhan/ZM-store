
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import Spinner from 'react-bootstrap/Spinner';
import Breadcrumb from 'react-bootstrap/Breadcrumb';


export default function CategoryPage() {
  const { categoryName } = useParams();
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    setIsLoading(true); // Show the loader
  
    axios.get(`https://dummyjson.com/products/category/${categoryName}`).then((json) => {
      setProducts(json.data.products);
      setTimeout(() => {
        setIsLoading(false); // Hide the loader after 2000ms
      }, 2000);
    });
  }, [categoryName]);

  return (
    <>
      <Navigation/>

      <div className="container">
        <div className="my-5 text-center">
          <h1 style={{ marginTop: '100px' }}>{categoryName.toUpperCase()}</h1>
          <p className="text-secondary">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat, officia nihil! Nemo sunt reprehenderit
            voluptates amet itaque ibero in unde, molestias illo veniam, dolore veritatis eaque ipsum. Molestiae, nam
            architecto!
          </p>
        </div>
        <Breadcrumb>
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="/Products">Products</Breadcrumb.Item>
      </Breadcrumb>
        <section>
          <div className="pricing-table">
            {isLoading ? (
              <div className="loader">
                <Spinner animation="grow" />
              </div>
            ) : (
              products &&
              products.map((val, key) => (
               
                <Link className="text-decoration-none" to={`/products/${val.id}`} key={key}>
                  <div className="pricing-table__item">
                    <h3 className="pricing-table__title">{val.title}</h3>
                    <p className="pricing-table__subtitle">{val.subtitle}</p>
                    <div className="pricing-table__thumbnail">
                      <img src={val.thumbnail} alt={val.title} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                    </div>
                    <div className="pricing-table__plan">
                      <span className="pricing-table__plan-currency">$</span>
                      <span className="pricing-table__plan-price">{val.price}</span>
                    </div>
                    <p className="pricing-table__description">{val.description}</p>
                  </div>
                </Link>
              ))
            )}
          </div>
        </section>
      </div>
<Footer />
    
    </>
  );
}
