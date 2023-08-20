

import React, { useState } from 'react';
import { Modal, Carousel } from 'react-bootstrap';

export default function ImageSection({ images }) {
  const [selectedImage, setSelectedImage] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const openModal = (image) => {
    setSelectedImage(image);
    setShowModal(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setShowModal(false);
  };

  return (
    <>
      <div className="container w-75">
        <div className="">
          {selectedImage && (
            <img src={selectedImage} alt="" className="img-fluid mb-5" />
          )}
          {!selectedImage && images.length > 0 && (
            <div>
              <img
                src={images[0]}
                alt=""
                className="img-fluid mb-5"
                onClick={() => openModal(images[0])}
                style={{ cursor: 'pointer' }}
              />
              <button
                className="btn btn-dark" style={{width: '210px'}}
                onClick={() => setShowModal(true)}
       
              >
                Click to see more images
              </button>
            </div>
          )}
        </div>
      </div>
      <Modal show={showModal} onHide={closeModal} centered>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
          <style>
            {`
            .carousel-control-prev-icon,
            .carousel-control-next-icon {
              background-color: black;
            }

            .carousel-control-prev,
            .carousel-control-next {
              width: 10%;
            }
            `}
          </style>
          <Carousel prevLabel="" nextLabel="">
            {images.map((image, index) => (
              <Carousel.Item key={index}>
                <img
                  className="d-block mx-auto"
                  src={image}
                  alt={`img-${index}`}
                  style={{ maxHeight: '400px', maxWidth: '100%', objectFit: 'contain' }}
                />
              </Carousel.Item>
            ))}
          </Carousel>
        </Modal.Body>
      </Modal>
    </>
  );
}
