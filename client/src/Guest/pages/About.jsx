import React from 'react';
import Navigation from '../components/Navigation';

import Footer from '../components/Footer';
import Accordion from 'react-bootstrap/Accordion';
import {MdLibraryBooks} from 'react-icons/md'
import {GoEye} from 'react-icons/go'
import {RiSearchEyeLine} from 'react-icons/ri'
export default function About() {
  return (
    <>
      <Navigation />
      <div className="about-background">
        <h1 className="about-heading fw-bold text-center fs-1 fs-sm-2 fs-md-3">About us</h1>
      </div>

{/* accordions */}

      <div className='accordion-container'>
        <Accordion defaultActiveKey={['0']} alwaysOpen>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Accordion Item #1</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Accordion Item #2</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="2">
            <Accordion.Header>Accordion Item #3</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>Accordion Item #4</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>\

      <div className="your-container">
    <div className="your-card">
      <h2 className="your-card-heading">Mission</h2>
      <i><MdLibraryBooks></MdLibraryBooks></i>
      <p className="your-card-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce rutrum interdum nulla, ac varius quam lobortis a.</p>
    </div>

    <div className="your-card">
      <h2 className="your-card-heading">Vision</h2>
      <i><GoEye></GoEye></i>
      <p className="your-card-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce rutrum interdum nulla, ac varius quam lobortis a.</p>
    </div>

    <div className="your-card">
      <h2 className="your-card-heading">Objective</h2>
      <i><RiSearchEyeLine></RiSearchEyeLine></i>
      <p className="your-card-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce rutrum interdum nulla, ac varius quam lobortis a.</p>
    </div>
  </div>
<Footer />
    </>
  );
}
