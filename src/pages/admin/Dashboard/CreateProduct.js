import AdminMenu from "../AdminMenu/AdminMenu";
import Footer from "../../../footer/Footer";
import "./CreateProduct.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function CreateProduct() {

    const[title, setTitle] = useState("");
    const[price, setPrice] = useState("");
    const[description, setDescription] = useState("");
    const[image, setImage] = useState("");
    const[category, setCategory] = useState("");
    const[largeDescription, setlargeDescription] = useState("");

    const navigate = useNavigate();

    function handleSubmit(event) {
        event.preventDefault();
        const productData = {title, price, description, image, category, largeDescription};

        fetch("http://localhost:4000/products", {
            method:"POST",
            headers:{"content-type":"application/json"},
            body:JSON.stringify(productData)
        }).then((response) => {
            alert("Saved succesfully!")
            navigate("/dashboard")
        })



    }

  return (
    <>
      <AdminMenu />
      <div className="create-product">
        <div className="create-product__container">
          <h2>Add a new product</h2>
          <form className="create-product__form">
            <div className="form-field">
              <p>
                <label htmlFor="name">Title</label>
              </p>
              <input type="text" name="name" id="name" value={title} onChange={event => setTitle(event.target.value)}/>
            </div>

            <div className="form-field">
              <p>
                <label htmlFor="price">Price</label>
              </p>
              <input type="text" name="price" id="price" value={price} onChange={event => setPrice(event.target.value)} />
            </div>

            <div className="form-field">
              <p>
                <label htmlFor="shortDescription">Short Description</label>
              </p>
              <textarea
                name="shortDescription"
                id="shortDescription"
                cols="30"
                rows="6"
                value={description}
                onChange={event => setDescription(event.target.value)}
              ></textarea>
            </div>

            <div className="form-field">
              <p>
                <label htmlFor="image">Image URL</label>
              </p>
              <input type="text" name="image" id="image" value={image} onChange={event => setImage(event.target.value)} />
            </div>

            <div className="form-field">
              <p>
                <label htmlFor="categorySelect">Category</label>
              </p>
              <select id="categorySelect" name="category" value={category} onChange={event => setCategory(event.target.value)}>
                <option name="category"></option>
                <option name="category" value="men's clothing">men's clothing</option>
                <option name="category" value="jewelery">jewelery</option>
                <option name="category" value="electronics">electronics</option>
                <option name="category" value="women's clothing">women's clothing</option>
              </select>
            </div>

            <div className="form-field">
              <p>
                <label htmlFor="longDescription">Long Description</label>
              </p>
              <textarea
                name="longDescription"
                id="longDescription"
                cols="30"
                rows="10"
                value={largeDescription}
                onChange={event => setlargeDescription(event.target.value)}
              ></textarea>
            </div>

            <button className="btn-form" type="submit" onClick={handleSubmit}>Add product</button>

            <Link to="/dashboard" className="btn btn--delete">Back</Link>

          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default CreateProduct;
