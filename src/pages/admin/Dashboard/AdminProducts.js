import "./AdminProducts.css";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function AdminProducts() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:4000/products")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setProducts(data);
      });
  }, []);

  const EditProducts = (productId) => {
      navigate(`/product/edit/${productId}`);
  }

  const RemoveProducts = (productId) => {
    if (window.confirm('Do you want to delete this product?')) {
        fetch("http://localhost:4000/products/" + productId, {
            method: "DELETE"
        }).then((response) => {
            alert('Removed successfully.')
            window.location.reload();
        }).catch((err) => {
            console.log(err.message)
        })
    }
  }

  return (
    <div className="admin__products">
        <Link to="/product/create" className="btn btn--add">Add Product (+)</Link>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Image</th>
              <th>Title</th>
              <th>Price</th>
              <th>Category</th>
              <th>Actions</th>
            </tr>
          </thead>
      {products.map((product) => (
        
          <tbody key={product.id}>
            <tr>
              <td>{product.id}</td>
              <td>
                <img className="admin__image" src={product.image} alt="" />
              </td>
              <td>{product.title}</td>
              <td>${product.price}</td>
              <td>{product.category}</td>
              <td>
                <a className="btn btn--edit" onClick={() => { EditProducts(product.id) }}>Edit</a>
                <a className="btn btn--delete" onClick={() => { RemoveProducts(product.id) }}>Delete</a>
              </td>
            </tr>
          </tbody>
        
      ))}
      </table>
    </div>
  );
}

export default AdminProducts;
