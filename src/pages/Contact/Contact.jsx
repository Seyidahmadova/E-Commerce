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
      <div className="map">
        <iframe
        title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d97236.6236057238!2d49.78474799369314!3d40.394571267599446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d6bd6211cf9%3A0x343f6b5e7ae56c6b!2sBaku!5e0!3m2!1sen!2saz!4v1679080766246!5m2!1sen!2saz"
          width="80%"
          height="450px"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}
