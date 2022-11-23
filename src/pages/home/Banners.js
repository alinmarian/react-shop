import "./Banners.css"
import banner1 from "../../images/offers1.jpg"
import banner2 from "../../images/offers2.jpg"

function Banners() {
  return (
    <div className="banners">
        <div className="banners__container">
            <img className="banners__image" src={banner1} alt="First Offer" />
            <img className="banners__image" src={banner2} alt="First Offer" />
        </div>
    </div>
  )
}

export default Banners