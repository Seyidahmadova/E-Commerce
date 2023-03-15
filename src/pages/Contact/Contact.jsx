import "./Contact.css";
import PagePath from "../../components/PagePath/PagePath";
import photo from "../../images/contact/getTouch.png";

export default function Contact() {
  return (
    <div className="contact">
      <PagePath title="Contact Us" path="/contact" curPage="Contact" />
      <div className="contact-info">
        <div className="ci-aboutUs">
          <h1>Information About Us</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis
            neque ultrices mattis aliquam, malesuada diam est. Malesuada sem
            tristique amet erat vitae eget dolor lobortis. Accumsan faucibus
            vitae lobortis quis bibendum quam.
          </p>
          <div className="circles">
            <span className="circle cFirst"></span>
            <span className="circle cSecond"></span>
            <span className="circle cThird"></span>
          </div>
        </div>
        <div className="ci-contWay">
          <h1>Contact Way</h1>
          <div className="contWays">
            <div className="cwFirst way">
              <div className="cTelEmail">
                <span style={{ backgroundColor: "#5726DF" }}></span>
                <p>
                  Tel: 877-67-88-99
                  <br />
                  E-Mail: <a href="mailto:shop@store.com">shop@store.com</a>
                </p>
              </div>
              <div className="cSupport">
                <span style={{ backgroundColor: "#FB2E86" }}></span>
                <p>Support Forum for 24hr</p>
              </div>
            </div>
            <div className="cwSecond way">
              <div className="cLocation">
                <span style={{ backgroundColor: "#FFB265" }}></span>
                <p>20 Margaret st, London, Great britain, 3NM98-LK</p>
              </div>
              <div className="cShipping">
                <span style={{ backgroundColor: "#1BE982" }}></span>
                <p>Free standard shipping on all orders.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="contact-getTouch">
        <form className="cgt-content">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis
            neque ultrices tristique amet erat vitae eget dolor los vitae
            lobortis quis bibendum quam.
          </p>
          <div className="cgt-mailBox">
            <div className="mbNameEmail">
              <input type="text" placeholder="Your Name*" required />
              <input type="mail" placeholder="Your Email*" required />
            </div>
            <div className="mbSubject">
              <input type="text" placeholder="Subject*" required />
            </div>
            <div className="mbMessage">
              <textarea type="text" placeholder="Type Your Message*" required />
            </div>
            <button>Send Mail</button>
          </div>
        </form>
        <div className="cgt-image">
          <img alt="get touch" src={photo}></img>
        </div>
      </div>
    </div>
  );
}
