import React, { useState } from 'react'
import "./MainNavbar.css"
import { Link } from 'react-router-dom';
import { FaBars } from "react-icons/fa"
import { ImCross } from "react-icons/im"
import logo from "../images/logo.png"

function MainNavbar() {
    const [mobile, setMobile] = useState(false);

    return (
    <nav className="main-navbar">
        <Link to="/" className='main-navbar__link'><img src={logo} alt="Shop Logo" className='main-navbar__logo'/></Link>
        <ul className={mobile ? "main-navbar__mobile" : "main-navbar__desktop"}>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/">Services</Link>
            <Link to="/">Skills</Link>
            <Link to="/">Contact</Link>
        </ul>
        <button className='main-navbar__icon' onClick={() => setMobile(!mobile)}>
            {mobile ? <ImCross/> : <FaBars />}
        </button>
    </nav>
    )
}

export default MainNavbar