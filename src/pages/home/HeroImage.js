import React from 'react'
import imagehero from "../../images/imagehero.jpg"
import "./HeroImage.css"

function HeroImage() {
  return (
    <div className="hero">
        <div className="hero__container">
            <img className='hero__image' src={imagehero} alt="" />
        </div>
    </div>
  )
}

export default HeroImage