import aboutheroimg from "../../images/hero-img2.png"

function AboutHeroImage() {
  return (
    <div className="hero">
        <div className="hero__container">
            <img className='hero__image' src={aboutheroimg} alt="" />
        </div>
    </div>
  )
}

export default AboutHeroImage