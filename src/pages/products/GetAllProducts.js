import { useState, useEffect } from "react";
import "./GetAllProducts.css";
import { useNavigate } from "react-router-dom";

function GetAllProducts() {
    const [products, setProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [initialProducts, setInitialProducts] = useState([]);
    const [filters, setFilters] = useState({
        men: false,
        women: false,
        electronics: false,
        jewelery: false,
      });
    const navigate = useNavigate();

    useEffect(() => {
        fetch("http://localhost:4000/products")
            .then((response => response.json()))
            .then((data) => {
                setProducts(data);
                setInitialProducts(data);
            })
    }, [])

    useEffect(() => {
        let timeout = setTimeout(() => {
          const filteredProducts = initialProducts
            .filter((product) => product.title.toLowerCase().includes(searchTerm))
            .filter(product => {
    
              if (filters.men && filters.women && filters.electronics && filters.jewelery) {
                return product.category === "men's clothing" || product.category === "women's clothing" || product.category === "electronics" || product.category === "jewelery";
              } else if (filters.men) {
                return product.category === "men's clothing";
              } else if (filters.women) {
                return product.category === "women's clothing";
              } else if (filters.electronics) {
                return product.category === "electronics";
              } else if (filters.jewelery) {
                return product.category === "jewelery";
              } else {
                return true;
              }
            })
    
            setProducts(filteredProducts);
        }, 500)
    
        return () => {
          clearTimeout(timeout);
        }
      }, [searchTerm, initialProducts, filters]);

      function searchInputHandler(event) {
        setSearchTerm(event.target.value.toLowerCase());
      }

      function filterChangedMen(event) {
        setFilters({
          ...filters,
          men: event.target.checked
        });
      }
    
      function filterChangedWomen(event) {
        setFilters({
          ...filters,
          women: event.target.checked
        });
      }

      function filterChangedElectronics(event) {
        setFilters({
          ...filters,
          electronics: event.target.checked
        });
      }

      function filterChangedJewelry(event) {
        setFilters({
          ...filters,
          jewelery: event.target.checked
        });
      }


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
    <div className='products'>
        <div className="products__container">
            <div className="filter">
                <h2 className="filter__title--search">Search products</h2>
                <input type="text" name="seach" id="search" placeholder='Enter product name...' onChange={searchInputHandler}/>
                <h2 className="filter__title">Filter by category</h2>
                <p><input type="checkbox" name="category" id="" onChange={filterChangedMen}/> Men's Clothing</p>
                <p><input type="checkbox" name="category" id="" onChange={filterChangedWomen}/> Women's Clothing</p>
                <p><input type="checkbox" name="category" id="" onChange={filterChangedElectronics} /> Electronics</p>
                <p><input type="checkbox" name="category" id="" onChange={filterChangedJewelry} /> Jewelry </p>
            </div>
            <div className="all-products">
                    {
                        products.map(product => (           
                        <div className="all-products__card" key={product.id}>
                            <img className="all-products__image" src={product.image} alt="" />
                            <h3 className="all-products__title">{product.title}</h3>
                            <h3 className="all-products__price">${product.price}</h3>
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

export default GetAllProducts