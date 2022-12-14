import "./GetProducts.css"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";

function GetProducts() {
    // http://localhost:4000/products?_sort=id&_order=desc&_limit=16

    // http://localhost:4000/products?category=men%27s%20clothing&_sort=id&_order=desc
    const productsPath = "http://localhost:4000/products?_sort=id&_order=desc&_limit=16";
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {

        fetch(productsPath)
            .then((response) => response.json())
            .then((data) => {
                setProducts(data);
            })

    }, [])

    function LoadDetails(id) {
        navigate(`/product/${id}`)
    }

    function AddToCart(id) {

        fetch(`http://localhost:4000/cart?productId=${id}`)
          
          .then(response => response.json())
          .then((cartProducts => {
            const [cartProduct] = cartProducts
            if(cartProduct) {
              fetch(`http://localhost:4000/cart/${cartProduct.id}`, {
                method: "PATCH",
                body: JSON.stringify( { quantity: cartProduct.quantity + 1 } ),
                headers: {"Content-Type":"application/json"}
              })
            } else {
              fetch("http://localhost:4000/cart", {
                method: "POST",
                body: JSON.stringify( {productId: id, quantity: 1} ),
                headers: {"Content-Type": "application/json"}
              })
            }
          }))
  
      }

  return (
    <div className="home-products">
        <div className="home-products__container">
            <h1 className="home-products--title">Latest Products</h1>
            <div className="home-products__grid">
        {
        products.map(product => (
            
                <div className="home-products__card" key={product.id}>
                <img className="home-products__image" src={product.image} alt="" />
                <h3 className="home-products__title">{product.title}</h3>
                <h3 className="home-products__price">${product.price}</h3>
                <button className="home-products__button details-btn" value={product.id} onClick={() => {LoadDetails(product.id)}}>View Product</button>
                <button className="home-products__button" value={product.id} onClick={() => {AddToCart(product.id)}}>Add To Cart</button>
                </div>
            
        ))
        }
        </div>
        </div>
    </div>
  )
}

export default GetProducts