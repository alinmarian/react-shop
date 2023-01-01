import "./AdminMenu.css"
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { FaBars } from "react-icons/fa"
import { ImCross } from "react-icons/im"
import Logo from "../../../images/logo-admin.png"
import { useNavigate } from "react-router-dom";


function AdminMenu() {

    const navigate = useNavigate()

    function logOut() {
        localStorage.removeItem("token");
        localStorage.removeItem("userId");
        navigate("/");
    }

    const [mobile, setMobile] = useState(false);

    return (
    <nav className="admin-navbar">
        <Link to="#" className='admin-navbar__link'><img src={Logo} alt="Shop Logo" className='admin-navbar__logo'/></Link>
        <ul className={mobile ? "admin-navbar__mobile" : "admin-navbar__desktop"}>
            <Link to="/dashboard">Products</Link>
            <Link to="/profile">Profile</Link>
            <Link to="/" onClick={() => {logOut()}}>Logout</Link>
        </ul>
        <button className='admin-navbar__icon' onClick={() => setMobile(!mobile)}>
            {mobile ? <ImCross/> : <FaBars />}
        </button>
    </nav>
    )
}

export default AdminMenu