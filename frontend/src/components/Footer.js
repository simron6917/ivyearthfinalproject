
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer >
      <div className='container p-0'>
        <div className='row text-left'>
          <div className='col-md-5 col-12'>
            <h3>About Us</h3>
            <p>
            Our website aims to provide information by 
            recommending as user's needs for sustainable
            gardening.
            </p>
            <div className='contact-info'>
              <div>
                <i className='far fa-compass'></i>
                <span>Kathmandu,</span>
                <span style={{ fontWeight: 'bold' }}> Nepal</span>
              </div>
              <div>
                <i className='fas fa-phone-alt'></i>
                <span>+ 977 9883746389</span>
              </div>
              <div>
                <i className='fas fa-envelope'></i>
                <span>ivyearth01@gmail.com</span>
              </div>
            </div>
          </div>
          
          <div className='col-md-3 col-sm-12 offset-lg-4'>
            <h3>Follow Us</h3>
            <p>Contact us through social media</p>
            <div className='column'>
              <Link>
                <i className='fab fa-facebook fa-sm'></i>
              </Link>
              <Link>
                <i className='fab fa-twitter fa-sm'></i>
              </Link>
              <Link>
                <i className='fab fa-instagram fa-sm'></i>
              </Link>
            </div>
          </div>
        </div>
        <span className='pt-3 col-lg-5 offset-lg-4'>
              Copyright &copy; 2020 All rights reserved IvyEarth
            </span>
      </div>
    </footer>
  );
};

export default Footer;
