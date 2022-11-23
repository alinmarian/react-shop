import React from 'react'
import MainNavbar from '../../main-navbar/MainNavbar'
import HeroImage from './HeroImage'
import Categories from './Categories'
import GetProducts from './GetProducts'
import Banners from './Banners'
import Footer from '../../footer/Footer'

function Home() {
  return (
    <div>
        <MainNavbar />
        <HeroImage />
        <Categories />
        <GetProducts />
        <Banners />
        <Footer />
    </div>
  )
}

export default Home