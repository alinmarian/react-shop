import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MainNavbar from "../../main-navbar/MainNavbar"
import Breadcrumbs from "./Breadcrumbs";
import "./ProductDetails.css";
import Footer from "../../footer/Footer";

function ProductDetails() {
    const {id} = useParams();
    const [product, setProduct] = useState([])

    useEffect(() => {
        fetch(`http://localhost:4000/products/${id}`) 
            .then((response) => response.json())
            .then((data) => {
                setProduct(data);
            })
    }, [])

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
    <div>
        <MainNavbar />
        <Breadcrumbs title={product.title}/>
        <div className="product" key={product.id}>
            <div className="product__container">
                <div className="product__left">
                    <img src={product.image} alt="" className="product__image" />
                </div>
                <div className="product__right">
                    <h1 className="product__title">{product.title}</h1>
                    <h2 className="product__price">${product.price}</h2>
                    <p className="product__description">{product.description}</p>
                    <button className="product__rating home-products__button" value={product.id} onClick={() => {AddToCart(product.id)}}>Add to cart</button>
                </div>
            </div>
        </div>
        <div className="product__description--large">
            <h2>Description</h2>
            <p>{product.largeDescription}</p>
        </div>
        <Footer />
    </div>
  )
}

export default ProductDetails