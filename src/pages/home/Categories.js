import React from 'react'
import "./Categories.css"
import { Link } from 'react-router-dom'
import electronicsCategory from "../../images/electronics-category.png"
import jewelryCategory from "../../images/jewelry-category.png"
import womenCategory from "../../images/women-category.jpg"
import menCategory from "../../images/men-category.jpg"

function Categories() {
  return (
    <div className='categories'>
        <div className="categories__container">
            <div className="categories__cards">
                <div className="categories__card">
                    <img className='categories__image' src={electronicsCategory} alt="Electronics" />
                    <h3 className="categories__title">Electronics</h3>
                    <Link className="categories__link" to="/products">View Products</Link>
                </div>
                <div className="categories__card">
                    <img className='categories__image' src={jewelryCategory} alt="Jewelry" />
                    <h3 className="categories__title">Jewelry</h3>
                    <Link className="categories__link" to="/products">View Products</Link>
                </div>
                <div className="categories__card">
                    <img className='categories__image' src={womenCategory} alt="Women's Clothing" />
                    <h3 className="categories__title">Women's Clothing</h3>
                    <Link className="categories__link" to="/products">View Products</Link>
                </div>
                <div className="categories__card">
                    <img className='categories__image' src={menCategory} alt="Men's Clothing" />
                    <h3 className="categories__title">Men's Clothing</h3>
                    <Link className="categories__link" to="/products">View Products</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Categories