import React from 'react'
import MainNavbar from '../../main-navbar/MainNavbar'
import ContactHeroImage from './ContactHeroImage'
import ContactDetails from './ContactDetails'
import ContactFrom from './ContactFrom'
import GoogleMaps from './GoogleMaps'
import Footer from "../../footer/Footer"

function Contact() {
  return (
    <div>
        <MainNavbar />
        <ContactHeroImage />
        <ContactDetails />
        <ContactFrom />
        <GoogleMaps />
        <Footer />
    </div>
  )
}

export default Contact