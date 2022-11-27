import "./Products.css"
import MainNavbar from "../../main-navbar/MainNavbar"
import ProductsImageHero from "./ProductsImageHero"
import GetAllProducts from "./GetAllProducts"
import Footer from "../../footer/Footer"

function Products() {
  return (
    <div>
        <MainNavbar />
        <ProductsImageHero />
        <GetAllProducts />
        <Footer />
    </div>
  )
}

export default Products