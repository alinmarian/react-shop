import React from 'react'
import ContactHeroImg from "../../images/contact-us.jpg";
import "./ContactHeroImage.css"

function ContactHeroImage() {
  return (
    <div>
        <img src={ContactHeroImg} alt="Contact Hero Image" className='contact-hero__image' />
    </div>
  )
}

export default ContactHeroImage