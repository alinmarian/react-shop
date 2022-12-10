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

  // const LoadDetails = (id) => {
  //     navigate("/employee/detail/" + id);
  // }

  return (
    <div className="admin__products">
        <Link className="btn btn--add">Add Product (+)</Link>
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
                <Link className="btn btn--edit">Edit</Link>
                <Link className="btn btn--delete">Delete</Link>
                <Link className="btn btn--view">View</Link>
              </td>
            </tr>
          </tbody>
        
      ))}
      </table>
    </div>
  );
}

export default AdminProducts;
