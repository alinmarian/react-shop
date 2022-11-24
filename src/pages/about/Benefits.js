import "./Benefits.css";
import {FaTachometerAlt} from "react-icons/fa"
import {FaThumbsUp} from "react-icons/fa"
import {FaStar} from "react-icons/fa"


function Benefits() {
  return (
    <div className="benefits">
        <div className="benefits__container">
            <div className="benefits__card">
                <FaTachometerAlt className="benefits__icon"/>
                <h2 className="benefits__title">Benefits</h2>
                <p className="benefits__description">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis sunt asperiores blanditiis ea tempora natus aspernatur corrupti harum at debitis.
                </p>
            </div>
            <div className="benefits__card">
                <FaThumbsUp className="benefits__icon"/>
                <h2 className="benefits__title">Benefits</h2>
                <p className="benefits__description">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis sunt asperiores blanditiis ea tempora natus aspernatur corrupti harum at debitis.
                </p>
            </div>
            <div className="benefits__card">
                <FaStar className="benefits__icon"/>
                <h2 className="benefits__title">Benefits</h2>
                <p className="benefits__description">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis sunt asperiores blanditiis ea tempora natus aspernatur corrupti harum at debitis.
                </p>
            </div>
        </div>
    </div>
  )
}

export default Benefits