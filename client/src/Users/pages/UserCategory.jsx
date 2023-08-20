import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Spinner from 'react-bootstrap/Spinner'; // Import the Spinner component
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { AppRoute } from '../../App';


export default function UserCategory() {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Add a loading state

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/get-all-categories');
        const categoriesData = response.data.category;
        setCategories(categoriesData);
        setIsLoading(false); // Data is fetched, set loading to false
      } catch (error) {
        console.error('Error fetching categories:', error);
        setIsLoading(false); // If there's an error, still set loading to false
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Navigation />
      <div className="container ">
      <div className="my-5 text-center mt-5">
        <h1 >Category</h1>
        <p className="text-secondary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus illum, laudantium earum sit saepe dolore
          aperiam vitae ullam iusto deserunt, ipsam asperiores temporibus! Quis exercitationem neque porro nisi saepe
          autem?
        </p>
      </div>
      <div className="row">

        </div>
          {/* Display spinner if loading */}
          {isLoading ? (
            <div className="text-center">
              <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            </div>
          ) : (
            <div className="row">
              {categories.map((category, index) => (
                <div className="col-md-4 my-3" key={index}>
                  <Card className="bg-white" style={{ width: '300px', height: '300px' }}>
                    {category.CategoryImage && (
                      <Card.Img
                        variant="top"
                        src={category.CategoryImage}
                        alt={category.CategoryName}
                        style={{ width: '100%', height: '80%' }}
                      />
                    )}
                    <Card.Body>
                      <Card.Title className="text-center color-black">
                        <div>
                          <span style={{ color: 'black' }}>{category.CategoryName.toUpperCase().replace('-', ' ')}</span>
                        </div>
                      </Card.Title>
                    </Card.Body>
                  </Card>
                </div>
              ))}
            </div>
          )}
        </div>
      {/* footer  */}
      <Footer />
    </>
  );
}
