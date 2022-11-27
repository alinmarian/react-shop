import "./ProductImageHero.css"
import ProductHeroImg from "../../images/products-hero-img.jpg";

function ProductsImageHero() {
  return (
    <img className="products__img" src={ProductHeroImg} alt="" />
  )
}

export default ProductsImageHero