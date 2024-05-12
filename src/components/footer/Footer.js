import React from 'react'
import './Footer.css'
import img1 from '../assets/navbar/logo (2).svg'
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";

function Footer() {
  return (
    <div className='footer'>
      <div className="footer__img">
        <img src={img1} alt="" />
      </div>

      <div className="footer__list">
        <div className="footer_list__child">
          <p>Looking for Nokia licensed products support?</p>
          <h5>Explore consumer devices</h5>
        </div>
        <div className="footer_list__child">
          <p>Sustainability</p>
          <p>Customer success</p>
        </div>
        <div className="footer_list__child">
          <p>Standardization</p>
          <p>Nokia EDU and training</p>
        </div>
        <div className="footer_list__child">
          <p>Experience centers</p>
        </div>
      </div>

      <div className="footer__information">
        <div className="information">
          <h3>Contact us</h3>
          <h3>Support</h3>
          <h3>Extrant access</h3>
        </div>
        <div className="footer__button">
          <button>Subscribe for our latest news</button>
          <div className="footer__icons">
            <i><FaInstagram /></i>
          </div>
          <div className="footer__icons">
            <i><FaYoutube /> </i>
          </div>
          <div className="footer__icons">
            <i><FaFacebookF /></i>
          </div>
          <div className="footer__icons">
            <i><FaLinkedinIn /></i>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer 