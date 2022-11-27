import "./Breadcrumbs.css"
import { Link } from "react-router-dom" 

function Breadcrumbs({title}) {
  return (
    <div className="breadcrumbs">
        <div className="breadcrumbs__container">
            <Link className="breadcrumbs__links" to="/">Home</Link> / <Link className="breadcrumbs__links" to="/products">Products</Link> / <span className="breadcrumbs__title" >{title}</span>
        </div>
    </div>
  )
}

export default Breadcrumbs