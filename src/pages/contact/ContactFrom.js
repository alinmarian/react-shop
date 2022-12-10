import React from 'react'
import "./ContactForm.css";
import contactImage from "../../images/contact-img.webp"

function ContactFrom() {

  function stopPropagation(event) {
    event.preventDefault();
  }

  return (
    <div className='message'>
        <div className="message__container">
            <div className="contact-form">
                <h2 className='contact-form__title'>Send us a message</h2>
                <form action="">
                  <label htmlFor="name">Name</label>
                  <div><input type="text" name="name" id="name" /></div>
                  <label htmlFor="email">Email</label>
                  <div><input type="email" name="name" id="email" /></div>
                  <label htmlFor="subject">Subject</label>
                  <div><input type="text" name="name" id="subject" /></div>
                  <label htmlFor="message">Message</label>
                  <div><textarea name="" id="message" cols="30" rows="10"></textarea></div>
                  <button type="submit" className='home-products__button' onClick={stopPropagation}>Send</button>
                </form>
            </div>
            <div>
                <img src={contactImage} alt="Message Image" className="message__image" />
            </div>
        </div>
    </div>
  )
}

export default ContactFrom