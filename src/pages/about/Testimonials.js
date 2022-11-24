import "./Testimonials.css"
import person1 from "../../images/person1.jpg";
import person2 from "../../images/person2.jpg";
import person3 from "../../images/person3.jpg";
import person4 from "../../images/person4.jpg";

function Testimonials() {
  return (
    <div className="testimonials">
        <div className="testimonials__container">
            <h2 className="testimonials__main-title">Testimonials</h2>
            <div className="testimonials__cards">
                <div className="testimonial-card">
                    <div className="testimonial-card__text">
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos, quidem hic neque ipsam cupiditate omnis quam? Eos recusandae beatae excepturi!</p>
                        <span className="testimonial-card__name">Al Pacino, Store Manager</span>
                    </div>
                    <img className="testimonial-card__image" src={person1} alt="" />
                </div>
                <div className="testimonial-card">
                    <div className="testimonial-card__text">
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos, quidem hic neque ipsam cupiditate omnis quam? Eos recusandae beatae excepturi!</p>
                        <span className="testimonial-card__name">Al Pacino, Store Manager</span>
                    </div>
                    <img className="testimonial-card__image" src={person2} alt="" />
                </div>
                <div className="testimonial-card">
                    <div className="testimonial-card__text">
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos, quidem hic neque ipsam cupiditate omnis quam? Eos recusandae beatae excepturi!</p>
                        <span className="testimonial-card__name">Al Pacino, Store Manager</span>
                    </div>
                    <img className="testimonial-card__image" src={person3} alt="" />
                </div>
                <div className="testimonial-card">
                    <div className="testimonial-card__text">
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos, quidem hic neque ipsam cupiditate omnis quam? Eos recusandae beatae excepturi!</p>
                        <span className="testimonial-card__name">Al Pacino, Store Manager</span>
                    </div>
                    <img className="testimonial-card__image" src={person4} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Testimonials