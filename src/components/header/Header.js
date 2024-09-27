import logo from '../../assets/images/logoSVG.svg';
import { useState } from 'react';

import './header.scss'


const Header = () => {
  return (
    <header className="header header--main">
      <div className="container">
        <div className="header__inner">
          <a href="/" aria-label="Custom EVA mats for the interior of your car" className="header__logo logo">
            <img src={logo} alt="Evacode logo" />
          </a>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item">
                <a href="/" className="header__nav-link">Home</a>
              </li>
              <li className="header__nav-item">
                <a href="about_product.html" className="header__nav-link">What is Eva?</a>
              </li>
              <li className="header__nav-item">
                <a href="index.html#price-constructor" className="header__nav-link">Price</a>
              </li>
              <li className="header__nav-item">
                <a href="#home" className="header__nav-link">Warranty</a>
              </li>
              <li className="header__nav-item">
                <a href="delivery.html" className="header__nav-link">Delivery</a>
              </li>
              <li className="header__nav-item">
                <a href="aboutUs.html" className="header__nav-link">About us</a>
              </li>
            </ul>
            <SocialList />
          </nav>
          <img className="burger-btn" src="static/images/burgerBtn.svg" alt="" />
        </div>
      </div>
    </header>
  )
}

const SocialList = () => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <div className="header__social">
      <button
        className="header__social-btn header__social-btn--main"
        onClick={() => setShowInfo(!showInfo)}
      >
        Contact Us
        <svg id="arrow" className={`${showInfo ? 'rotate' : null}`} width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M0 1.40051L5.96734 7.00272L6.00006 6.97063L6.031 7.00097L12 1.40051L10.5718 0.000421405L5.99867 4.2912L1.42778 0L0 1.40051Z" fill="white" />
        </svg>
      </button>
      <div className={`header__social-list header__social-list--main ${showInfo ? 'fadeIn' : 'fadeOut'}`}>
        <a aria-label="Custom EVA mats phone"
          href="tel:+16139857956"
          target="_blank"
          className="header__social-link header__social-text header__social-text--main">
          +1 613-985-7956
        </a>
        <a aria-label="Custom EVA mats gmail"
          href="mailto:vi.carmats@gmail.com"
          target="_blank"
          className="header__social-link header__social-text header__social-text--main">
          vi.carmats@gmail.com
        </a>
        <div className="header__social-icon">
          <a aria-label="Custom EVA mats facebook"
            href="https://www.facebook.com/people/VI-CarMats/61556124253098/?mibextid=sCpJLy"
            target="_blank"
            className="header__social-link header__social-link--main">
            <i className="icon-facebook"></i>
          </a>
          <a aria-label="Custom EVA mats instagram"
            href="https://www.instagram.com/vi.carmats?igsh=ZXl0cHY5eDA1ZHVv" target="_blank"
            className="header__social-link header__social-link--main">
            <i className="icon-instagram"></i>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Header;

