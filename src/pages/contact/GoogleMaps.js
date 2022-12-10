import React from 'react'

function GoogleMaps() {
  return (
    <div className='maps'>
        <div className="maps__container">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d91339.27500546255!2d23.736625252187213!3d44.32326336269432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4752d70e6d6dcd07%3A0x4650f2eadbde99f9!2sCraiova!5e0!3m2!1sen!2sro!4v1670091495101!5m2!1sen!2sro" width="100%" height="450" frameBorder="0" style={{border:0}} allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
        </div>
    </div>
  )
}

export default GoogleMaps