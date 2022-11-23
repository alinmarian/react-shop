import "./GetProducts.css"
import { useState, useEffect } from "react"

function GetProducts() {
    // http://localhost:4000/products?_sort=id&_order=desc&_limit=16

    // http://localhost:4000/products?category=men%27s%20clothing&_sort=id&_order=desc
    const productsPath = "http://localhost:4000/products?_sort=id&_order=desc&_limit=16";
    const [products, setProducts] = useState([]);

    useEffect(() => {

        fetch(productsPath)
            .then((response) => response.json())
            .then((data) => {
                setProducts(data);
            })

    }, [])

  return (
    <div className="home-products">
        <div className="home-products__container">
            <h1 className="home-products--title">Latest Products</h1>
            <div className="home-products__grid">
        {
        products.map(product => (
            
                <div className="home-products__card">
                <img className="home-products__image" src={product.image} alt="" />
                <h3 className="home-products__title">{product.title}</h3>
                <h3 className="home-products__price">${product.price}</h3>
                <button className="home-products__button" value={product.id}>View Product</button>
                <span key={product.id}></span>
                </div>
            
        ))
        }
        </div>
        </div>
    </div>
  )
}

export default GetProducts