import "./ShoppingCart.css"
import MainNavbar from "../../main-navbar/MainNavbar"
import Footer from "../../footer/Footer"
import { useEffect } from "react"
import { useState } from "react"

function ShoppingCart() {
    const [products, setProducts] = useState([]);
    const [price, setPrice] = useState(0);
    const cartUrl = "http://localhost:4000/cart";
    const productsUrl = "http://localhost:4000/products";

    useEffect(() => {
        fetch(cartUrl)
            .then(response => response.json())
            .then((cartList) => { 
                
                fetch(productsUrl)
                    .then(response => response.json())
                    .then((productsList) => {
                        const productsFromList = [];
                        let totalPrice = 0;

                        for(const product of productsList) {
                            const cartProduct = cartList.find((cartProduct) => cartProduct.productId === product.id)

                            if(cartProduct) {
                                productsFromList.push({
                                    ...product,
                                    quantity: cartProduct.quantity
                                });
                                totalPrice = Number((totalPrice + product.price * cartProduct.quantity).toFixed(2))
                                setPrice(totalPrice);
                            }
                        }
                        setProducts(productsFromList);
                    })
                
                })

    }, [])

    function checkoutAlert() {
        alert("This feature will be added in the future!")
    }

    const RemoveProducts = (productId) => {

        setProducts(products.filter((product) => {
            return product.id !== productId;
        }))

        for(const product of products) {
            if(product.id === productId) {
                console.log(productId);
            }
        }
      }

    return (
    <>
    <MainNavbar/>
    <div className="cart__hero"></div>
        <div className="cart">
            <div className="cart__container">
                <h2 className="cart__title-main">Shopping Cart</h2>
                    <div className="cart__cards">
                        {
                            products.map(product => (         
                            <div className="cart__card" key={product.id}>
                                <img className="cart__image" src={product.image} alt="" />
                                <h3 className="cart__title">{product.title}</h3>
                                <h3 className="cart__quantity">Qty: {product.quantity}</h3>
                                <h3 className="cart__price">${product.price}</h3>
                                <a className="btn btn--delete" onClick={() => { RemoveProducts(product.id) }}>Delete</a>
                            </div>
                            ))
                        }
                    </div>
                    <div className="price">
                        <div className="price__container">
                            <h2 className="price__title">Total price: ${price}</h2>
                            <button className="btn btn--add" onClick={checkoutAlert}>Proceed to checkout</button>
                        </div>
                    </div>
            </div>
        </div>
    <Footer/>
    </>
  )
}

export default ShoppingCart