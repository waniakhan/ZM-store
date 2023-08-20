
import React, { useEffect, useState } from 'react';
import Navigation from '../components/Navigation';
import CategoriesSection from '../components/CategoriesSection';

import { Spinner } from 'react-bootstrap';
import Footer from '../components/Footer';
export default function Products() {
  const [isLoading, setIsLoading] = useState(true);
  const [days, setDays] = useState('00');
  const [hours, setHours] = useState('00');
  const [minutes, setMinutes] = useState('00');
  const [seconds, setSeconds] = useState('00');

  useEffect(() => {
    const timer = setInterval(() => {
      const currentDate = new Date().getTime();
      const launchDate = new Date('November 18, 2023 12:00:00').getTime();
      const duration = launchDate - currentDate;

      if (duration < 0) {
        clearInterval(timer);
      } else {
        const dayCount = Math.floor(duration / (1000 * 60 * 60 * 24));
        const hourCount = Math.floor((duration % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minuteCount = Math.floor((duration % (1000 * 60 * 60)) / (1000 * 60));
        const secondCount = Math.floor((duration % (1000 * 60)) / 1000);

        setDays(dayCount.toString().padStart(2, '0'));
        // setHours(hourCount.toString().padStart(2, '0'));
        setHours(((dayCount * 24) + hourCount).toString().padStart(2, '0'));

        setMinutes(minuteCount.toString().padStart(2, '0'));
        setSeconds(secondCount.toString().padStart(2, '0'));
      }
    }, 1000);

    // Clean up the timer when the component unmounts
    return () => {
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Change the delay value as desired (in milliseconds)

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <Navigation />
      <div id="coming-soon">
        <div className="wrapper ">
          <div className="custom-title mt-5">
            Our new category is <span>Coming soon</span>, stay connected with us!
          </div>
          <form action="#" className="custom-form">
            <div className="custom-email-field">
              <input type="email" placeholder="Enter Email Address" required="" />
              <button type="submit">Subscribe</button>
            </div>
          </form>
          <div className="custom-count-down">
            <div className="custom-timer custom-day">
              <div className="custom-count">
                <div className="numb">{days}</div>
                <div className="custom-text">Days</div>
              </div>
            </div>
            <div className="custom-clone">:</div>
            <div className="custom-timer custom-hour">
              <div className="custom-count">
                <div className="numb">{hours}</div>
                <div className="custom-text">Hours</div>
              </div>
            </div>
            <div className="custom-clone">:</div>
            <div className="custom-timer custom-min">
              <div className="custom-count">
                <div className="numb">{minutes}</div>
                <div className="custom-text">Minutes</div>
              </div>
            </div>
            <div className="custom-clone">:</div>
            <div className="custom-timer custom-sec">
              <div className="custom-count">
                <div className="numb">{seconds}</div>
                <div className="custom-text">Seconds</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isLoading ? (
        <div className="loader">
          <Spinner animation="grow" />
        </div>
      ) : (
        <CategoriesSection />
      )}
<Footer />
    
    </>
  );
}
