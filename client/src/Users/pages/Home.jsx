import React from 'react';

import Navigation from '../components/Navigation';
import Carousel from 'react-bootstrap/Carousel';
import { AiFillStar } from 'react-icons/ai'
import { BsStarHalf } from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'
import { AiFillGithub } from 'react-icons/ai'
import { BsLinkedin } from 'react-icons/bs'
import Footer from '../components/Footer';


export default function Home() {

  return (
    <>
      <Navigation />

      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg?cs=srgb&dl=pexels-craig-dennis-205421.jpg&fm=jpg"

            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1562616261-7bb659f860ed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=869&q=80"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1032&q=80"
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1623998021450-85c29c644e0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=957&q=80"
            alt="Fourth slide"
          />
        </Carousel.Item>
      </Carousel>

      <>
        {/* new arrival heading */}

        <section className="products" >
          <div className="container-fluid my-5" data-aos="fade-up"
            data-aos-duration="3000">
            <div>
              <h2 className="text-center col-sm-12 glowing-text" >
                New Arrival
              </h2>
              <hr className="w-25 m-auto" />
            </div>
          </div>
        </section>

        {/* new arrival cards  */}

        <div id='arrival'>
          <div className="many-row">
            <div>
              <div className="responsive-card">
                <div className="responsive-imgbox">
                  <img src="https://media.istockphoto.com/id/1177589023/photo/light-bulb-hanging-by-the-ceiling-in-a-restaurant.webp?b=1&s=170667a&w=0&k=20&c=WEBVPscDAL3MiPrWWzbgrA3qupXbq3RG4lsQkao0qhw=" className="responsive-img" />
                </div>
                <div className="responsive-content">
                  <h2>Lights</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                  <h5 className="card__price">Price: $9.5</h5>
                </div>
              </div>
            </div>
            <div>
              <div className="responsive-card">
                <div className="responsive-imgbox">
                  <img src="https://st3.depositphotos.com/1177973/15307/i/600/depositphotos_153075942-stock-photo-jewelry-accessories-in-box.jpg" className="responsive-img" />
                </div>
                <div className="responsive-content">
                  <h2>Jewellery</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                  <h5 className="card__price">Price: $9.5</h5>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="responsive-card">
                <div className="responsive-imgbox">
                  <img src="https://www.webbikeworld.com/wp-content/uploads/2020/08/wallpaperflare.com_wallpaper-2.jpg" className="responsive-img" />
                </div>
                <div className="responsive-content">
                  <h2>Motorcycle</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                  <h5 className="card__price">Price: $9.5</h5>
                </div>
              </div>
            </div>
          </div>
        </div>



        {/* upcoming sale banner */}

        <div className="background">
          <h1 className="fw-bold text-center col-sm-12">Upcoming Sale</h1>
          <h2 className="fw-bold text-center col-sm-12">Up to 20% off</h2>
          <div className="blinking-cover"></div>
        </div>


        {/* upcoming sale card */}

        <div id="services" className="container">
          <div className="card-row row justify-content-center">
            <div className="col-md-4 col-sm-6 mb-4 text-center">
              <div className="card-container">
                <figure className="card">
                  <img
                    src="https://media.istockphoto.com/id/1155023238/photo/female-legs-in-stylish-black-jeans-in-white-leather-sneakers-with-snake-pattern-on-the.webp?b=1&amp;s=170667a&amp;w=0&amp;k=20&amp;c=QdQpNvPG9RQH9Ap8AHAyDbFRNk6te8r7FCil8nbEVgo="
                    alt=""
                    className="card__image"
                  />
                  <figcaption className="card__body">
                    <h2 className="card__title">Sneakers</h2>
                    <div>
                      <p className="card__description">
                        Some description about this card and its purpose.
                      </p>
                    </div>
                    <button className="card__sale-button">Sale</button>
                  </figcaption>
                </figure>
                <div className="product-details">
                  <h5 className="card__heading">Women sneakers</h5>
                  <AiFillStar></AiFillStar>
                  <AiFillStar></AiFillStar>
                  <AiFillStar></AiFillStar>
                  <AiFillStar></AiFillStar>
                  <BsStarHalf></BsStarHalf>
                  <h5 className="card__price">Price: $9.5</h5>
                </div>
              </div>
            </div>

            <div className="col-md-4 col-sm-6 mb-4 text-center">
              <div className="card-container">
                <figure className="card">
                  <img
                    src="https://media.istockphoto.com/id/1034939250/photo/mid-century-modern-chair-with-a-blanket-and-a-large-sofa-with-colorful-cushions-in-a-spacious.webp?b=1&amp;s=170667a&amp;w=0&amp;k=20&amp;c=57OPhvhKvW3OVpB0kGGPs_FMpVxoFn-qZVxguaDspaU="
                    alt=""
                    className="card__image"
                  />
                  <figcaption className="card__body">
                    <h2 className="card__title">Sofa</h2>
                    <p className="card__description">
                      Some description about this card and its purpose.
                    </p>
                    <button className="card__sale-button">Sale</button>
                  </figcaption>
                </figure>
                <div className="product-details">
                  <h5 className="card__heading">Sofa </h5>
                  <AiFillStar></AiFillStar>
                  <AiFillStar></AiFillStar>
                  <AiFillStar></AiFillStar>
                  <AiFillStar></AiFillStar>
                  <BsStarHalf></BsStarHalf>
                  <h5 className="card__price">$10.6</h5>
                </div>
              </div>
            </div>

            <div className="col-md-4 col-sm-6 mb-4 text-center">
              <div className="card-container">
                <figure className="card">
                  <img
                    src="https://images.unsplash.com/photo-1591375372226-3531cf2eb6d3?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGlvciUyMHBlcmZ1bWV8ZW58MHx8MHx8fDA%3D&amp;w=1000&amp;q=80"
                    alt=""
                    className="card__image"
                  />
                  <figcaption className="card__body">
                    <h2 className="card__title">perfume</h2>
                    <p className="card__description">
                      Some description about this card and its purpose.
                    </p>
                    <button className="card__sale-button">Sale</button>
                  </figcaption>
                </figure>
                <div className="product-details">
                  <h5 className="card__heading">Dior perfume</h5>
                  <AiFillStar></AiFillStar>
                  <AiFillStar></AiFillStar>
                  <AiFillStar></AiFillStar>
                  <AiFillStar></AiFillStar>
                  <BsStarHalf></BsStarHalf>
                  <h5 className="card__price">$15</h5>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* banner card  */}
     
        <section id="banner" className="section-m1">
          <h4>ZM OFFERS</h4>
          <h2>
            UP TO <span className="discount">70% OFF</span> WATCHES &amp;
            <span className="fragrance" style={{ display: "block" }}>
              FRAGNANCE
            </span>
          </h2>
          <button className="btn-explore" >
            <a href="/products" style={{ textDecoration: "none", color: "white" }}>Explore NOW</a></button>
        </section>

        {/* our team members */}

        <h2 className="heading fw-bold text-center fs-3 fs-sm-4 fs-md-5">Our Team Members</h2>

        <div id="team">
          <div className="card-row row justify-content-center">
            <div className="col-md-3 col-sm-6 mb-4 text-center">
              <article className="custom-card card1">
                <div className="custom-card__body">
                  <h2 className="custom-card__title">Alina</h2>
                  <p>Incharge</p>
                  <div className="icons">
                    <i className="icon icon--github"><a href="https://github.com/waniakhan"><AiFillGithub></AiFillGithub></a></i>
                    <i className="icon icon--instagram"><a href="https://manoo_khan67/"><BsInstagram></BsInstagram></a></i>
                    <i className="icon icon--linkedin"><a href="https://www.linkedin.com/in/wania-khan-42527122a/"><BsLinkedin></BsLinkedin></a></i>
                  </div>
                </div>
              </article>
            </div>

            <div className="col-md-3 col-sm-6 mb-4 text-center">
              <article className="custom-card card2">
                <div className="custom-card__body">
                  <h2 className="custom-card__title">Sufyan</h2>
                  <p>HOD</p>
                  <div className="icons">
                    <i className="icon icon--github"><a href="https://github.com/waniakhan"><AiFillGithub></AiFillGithub></a></i>
                    <i className="icon icon--instagram"><a href="https://manoo_khan67/"><BsInstagram></BsInstagram></a></i>
                    <i className="icon icon--linkedin"><a href="https://www.linkedin.com/in/wania-khan-42527122a/"><BsLinkedin></BsLinkedin></a></i>
                  </div>
                </div>
              </article>
            </div>

            <div className="col-md-3 col-sm-6 mb-4 text-center">
              <article className="custom-card card3">
                <div className="custom-card__body">
                  <h2 className="custom-card__title">Jennifer</h2>
                  <p>Co-Director</p>
                  <div className="icons">
                    <i className="icon icon--github"><a href="https://github.com/waniakhan"><AiFillGithub></AiFillGithub></a></i>
                    <i className="icon icon--instagram"><a href="https://manoo_khan67/"><BsInstagram></BsInstagram></a></i>
                    <i className="icon icon--linkedin"><a href="https://www.linkedin.com/in/wania-khan-42527122a/"><BsLinkedin></BsLinkedin></a></i>
                  </div>
                </div>
              </article>
            </div>

            <div className="col-md-3 col-sm-6 mb-4 text-center">
              <article className="custom-card card4">
                <div className="custom-card__body">
                  <h2 className="custom-card__title">Faisal</h2>
                  <p>Assistant</p>
                  <div className="icons">
                    <i className="icon icon--github"><a href="https://github.com/waniakhan"><AiFillGithub></AiFillGithub></a></i>
                    <i className="icon icon--instagram"><a href="https://manoo_khan67/"><BsInstagram></BsInstagram></a></i>
                    <i className="icon icon--linkedin"><a href="https://www.linkedin.com/in/wania-khan-42527122a/"><BsLinkedin></BsLinkedin></a></i>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>


        {/* services cards  */}

        <h2 className="heading fw-bold text-center fs-3 fs-sm-4 fs-md-5">Our Services</h2>

        <div className="my-container">
          <article className="my-card">
            <div className="my-card__inner">
              <div className="my-card__side my-card__side--front">
                <div className="my-card__image-wrapper">
                  <img
                    src="https://media.istockphoto.com/id/1214019831/vector/covid-19-quarantine-coronavirus-epidemic-free-delivery-man-in-a-protective-mask-carries-food.jpg?s=612x612&w=0&k=20&c=9OxkYpgE4EXJuykWMX97Gg0nMtUw5_Aqqsygf9gVy7o="
                    alt=""
                    className="my-card__image"
                  />
                </div>
                <div className="my-card__body my-card__body--flex">
                  <h2 className="my-card__title">HOME DELIVERY</h2>
                  <span className="my-card__arrow">→</span>
                </div>
              </div>
              <div className="my-card__side my-card__side--back">
                <div className="my-card__body">
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam unde adipisci quas nulla dolores esse dolor magnam repudiandae perferendis eaque, ex eveniet inventore iure ipsum incidunt quaerat, obcaecati sint hic.
                  </p>
                </div>
              </div>
            </div>
          </article>
          <article className="my-card">
            <div className="my-card__inner">
              <div className="my-card__side my-card__side--front">
                <div className="my-card__image-wrapper">
                  <img
                    src="https://pictures.dealer.com/a/asbury/1067/21591f6a6c9a0f81df5148b3e1d6c903x.jpg?impolicy=downsize&w=568"
                    alt=""
                    className="my-card__image"
                  />
                </div>
                <div className="my-card__body my-card__body--flex">
                  <h2 className="my-card__title">REFUND POLICY</h2>
                  <span className="my-card__arrow">→</span>
                </div>
              </div>
              <div className="my-card__side my-card__side--back">
                <div className="my-card__body">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio pariatur ex dignissimos est sunt corrupti commodi aut autem culpa, aperiam saepe consectetur. Enim consectetur nostrum itaque iure eligendi id tempore.
                  </p>
                </div>
              </div>
            </div>
          </article>
          <article className="my-card">
            <div className="my-card__inner">
              <div className="my-card__side my-card__side--front">
                <div className="my-card__image-wrapper">
                  <img
                    src="https://us.123rf.com/450wm/mashmuh/mashmuh2101/mashmuh210100194/161741875-faq-concept-vector-icon-for-website-information-colorful-flat-illustration.jpg?ver=6"
                    alt=""
                    className="my-card__image"
                  />
                </div>
                <div className="my-card__body my-card__body--flex">
                  <h2 className="my-card__title">FAQs</h2>
                  <span className="my-card__arrow">→</span>
                </div>
              </div>
              <div className="my-card__side my-card__side--back">
                <div className="my-card__body">
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis dolorem quasi saepe. Repellendus et provident, sit quidem aliquam eligendi animi nam voluptatum nobis sapiente itaque nulla perspiciatis odio distinctio facilis.
                  </p>
                </div>
              </div>
            </div>
          </article>
        </div>
        <>
          {/* footer  */}

          <Footer />





        </>

      </>
    </>
  )
}
