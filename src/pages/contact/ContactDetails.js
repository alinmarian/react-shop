import React from 'react';
import "./ContactDetails.css";
import {FaHome, FaPhone, FaEnvelope} from "react-icons/fa";

function ContactDetails() {
  return (
    <div className="contact-info">
        <div className="contact-info__container">
            <div className="address">
                <FaHome className='address__icon'/>
                <h2 className='address__title'>Location</h2>
                <p className='address__location'>Str. Lorem Ipsum, Nr. 10, Craiova</p>
            </div>
            <div className="phone">
                <FaPhone className='phone__icon'/>
                <h2 className="phone__title">Phone</h2>
                <p className="phone__number">+40.728.585.235</p>
            </div>
            <div className="email">
                <FaEnvelope className='email__icon'/>
                <h2 className="email__title">Email</h2>
                <p className="email__address">office@shop.com</p>
            </div>
        </div>
    </div>
  )
}

export default ContactDetails