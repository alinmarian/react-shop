import "./AboutIntroSection.css"
import image from "../../images/store-image.jpg";

function AboutIntroSection() {
  return (
    <div className="about-intro">
        <div className="about-intro__container">
            <div className="about-intro__text">
                <h2 className="about-intro__title">About Us</h2>
                <p className="about-intro__description">
                Lorem ipsum dolor sit amet, simul zril cetero eu eum, sit nisl scripserit te. In sit dico tritani, te eum nulla invenire. Id iudico perfecto salutandi vel, graece blandit tincidunt te eos. Mundi quodsi nominavi in eum, bonorum patrioque nam at. Nihil utroque cu mei, an aliquam sanctus eum, eos vero movet voluptatibus in.
                </p>
                <p className="about-intro__description">
                At has nostrud forensibus, ullum adipiscing incorrupte te per. Cum ex iriure prompta. Pro aliquid oportere forensibus cu, mel erat velit nulla ne, no labitur appareat quo. Ad nam aperiri dissentias. An usu esse expetendis inciderint, percipit praesent ei per.
                </p>
                <p className="about-intro__description">
                Ei pro integre veritus, eam eu veniam possim interesset, nam id audire menandri platonem. Ex eam eruditi reprehendunt, ex saperet probatus vel. Consetetur adversarium pro ea, sit delectus sententiae ex, hinc munere recteque te vel. Inermis expetenda necessitatibus in nam, eu eum liber graeco prodesset, vim ei appareat postulant. Id laudem laboramus pro, sed ad omnes luptatum. Te mei nulla debet scaevola, probatus efficiantur no vel. Ad sit possit volumus intellegat.
                </p>
            </div>
            <div>
                <img src={image} alt="" className="about-intro__image" />
            </div>
        </div>
    </div>
  )
}

export default AboutIntroSection