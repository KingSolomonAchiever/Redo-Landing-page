import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes, FaShoppingCart, FaTwitter, FaLinkedinIn, FaYoutube, FaFacebookF } from "react-icons/fa";

import "./Redo.css";
import Logo from "./Assets copy 2/Landing Page Assets - Copy/about-background.png";
import Logo1 from "./Assets copy 2/Landing Page Assets - Copy/home-banner-background.png";
import Logo2 from "./Assets copy 2/Landing Page Assets - Copy/Logo.svg";
import Logo3 from "./Assets copy 2/Landing Page Assets - Copy/home-banner-image.png";
import Logo4 from "./Assets copy 2/Landing Page Assets - Copy/delivery-image.png";
import Logo5 from "./Assets copy 2/Landing Page Assets - Copy/choose-image.png";
import Logo6 from "./Assets copy 2/Landing Page Assets - Copy/pick-meals-image.png";

const LandingPage = () => {
  const [isToggle, setIsToggle] = useState(false);
  const toggleMenu = () => setIsToggle(!isToggle);

  const workItems = [
    { 
      id: 1,
      image: Logo5,
      title: "Pick Meals",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, fugiat asperiores quo quibusdam maxime.",
    },
    {
      id: 2,
      image: Logo6,
      title: "How Often You Choose",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, laborum.",
    },
    {
      id: 3,
      image: Logo4,
      title: "Fast Delivery",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, laborum.",
    },
  ];

  return (
    <div className="App">
      {/* Navbar */}
      <nav>
        <img src={Logo2} alt="Logo" className="nav-logo-container" />

        <div className="navbar-links-container">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#testimonials">Testimonials</a>
          <a href="#contact">Contact</a>
          <FaShoppingCart className="navbar-cart-icon" />
          <button className="primary-button">Booking Now</button>
        </div>

        <div className="navbar-menu-container" onClick={toggleMenu}>
          {isToggle ? <FaTimes /> : <GiHamburgerMenu />}
        </div>

        {/* Mobile Navbar - Always Rendered, animation handled via CSS */}
        <div className={`mobile-navbar-links-container ${isToggle ? "active" : ""}`}>
          <a href="#home" onClick={toggleMenu}>Home</a>
          <a href="#about" onClick={toggleMenu}>About</a>
          <a href="#testimonials" onClick={toggleMenu}>Testimonials</a>
          <a href="#contact" onClick={toggleMenu}>Contact</a>
          <button className="primary-button" onClick={toggleMenu}>Booking Now</button>
        </div>
      </nav>

      {/* Home Banner */}
      <div className="home-banner-container">
        <div className="home-text-section">
          <h2 className="primary-heading">Your Favourite Food Delivered & Fresh</h2>
          <p className="primary-text">
            Healthy Switcher Chefs do all the prep work, like peeling, chopping & marinating, so you can cook a fresh food.
          </p>
          <button className="secondary-button">Order Now</button>
        </div>
        <div className="home-image-section">
          <img src={Logo3} alt="Food Banner" />
        </div>
        <div className="home-bannerImage-container">
          <img src={Logo1} alt="Banner Background" />
        </div>
      </div>

      {/* About Section */}
      <div className="about-section-container">
        <div className="about-background-image-container">
          <img src={Logo} alt="Healthy Food" />
        </div>
        <div className="about-section-text-container">
          <p className="primary-subheading">About</p>
          <h2 className="primary-heading">Food Is An Important Part Of A Balanced Diet</h2>
          <p className="primary-text">
            Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
          </p>
          <p className="primary-text">
            Non tincidunt magna non et elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
          </p>
          <div className="about-buttons-container">
            <button className="secondary-button">Learn More</button>
            <button className="watch-video-button">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="svgClass">
                <path d="M8 5v14l11-7z" />
              </svg>
              Watch Video
            </button>
          </div>
        </div>
      </div>

      {/* Works Section */}
      <div className="work-section-wrapper">
        <div className="work-section-top">
          <h1 className="primary-heading">Works</h1>
          <p className="primary-text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate amet a animi, rem aliquam, inventore tempore fuga nobis perferendis.
          </p>
        </div>
        <div className="work-section-bottom">
          {workItems.map((item) => (
            <div className="work-section-info" key={item.id}>
              <img src={item.image} alt={item.title} />
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonial Section */}
      <div className="testimonial-section-bottom">
        <p className="primary-subheading">Testimonial</p>
        <h2 className="primary-heading">What They Are Saying</h2>
        <p className="primary-text">
          Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
        </p>
        <div className="testimonials-stars-container">
          {Array(5).fill(0).map((_, i) => (
            <svg key={i} viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.1 3.384a1 1 0 00.95.69h3.566c.969 0 1.371 1.24.588 1.81l-2.89 2.1a1 1 0 00-.364 1.118l1.1 3.384c.3.921-.755 1.688-1.54 1.118l-2.89-2.1a1 1 0 00-1.175 0l-2.89 2.1c-.784.57-1.838-.197-1.54-1.118l1.1-3.384a1 1 0 00-.364-1.118l-2.89-2.1c-.783-.57-.38-1.81.588-1.81h3.566a1 1 0 00.95-.69l1.1-3.384z" />
            </svg>
          ))}
        </div>
        <p>John Doe</p>
      </div>

      {/* Contact Footer */}
      <div className="contact-page-wrapper">
        <h1>Have Question In Mind? Let Us Help You</h1>
        <div className="contact-form-container">
          <input type="email" placeholder="yourmail@gmail.com" />
          <button className="secondary-button">Submit</button>
        </div>
      </div>

      {/* Footer */}
      <div className="footer-wrapper">
        <div className="footer-logo-container">
          <h1>FOODIE</h1>
          <div className="footer-icons">
            <FaTwitter />
            <FaLinkedinIn />
            <FaYoutube />
            <FaFacebookF />
          </div>
        </div>
        <div className="footer-section-two">
          <div className="footer-section-columns">
            <span>Quality</span>
            <span>Help</span>
            <span>Share</span>
            <span>Careers</span>
            <span>Work</span>
            <span>Testimonials</span>
          </div>
          <div className="footer-section-columns">
            <span>244-5333-7783</span>
            <span>hello@food.com</span>
            <span>press@food.com</span>
            <span>contact@food.com</span>
          </div>
          <div className="footer-section-columns">
            <span>Terms & Conditions</span>
            <span>Privacy Policy</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
