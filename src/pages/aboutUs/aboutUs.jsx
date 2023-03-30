import "./aboutUs.css";
import { Link } from "react-router-dom";
import photo from "../../images/aboutUs/aboutUs.jpg";
import PagePath from "../../components/PagePath/PagePath";
import OurService from "../../components/OurServices/ourService";

export default function AboutUs() {
  return (
    <div className="aboutUs">
      <PagePath title="About Us" path="/about-us" curPage="About us" />
      <div className="au-content">
        <div className="auc-img">
          <img alt="about us" src={photo}></img>
        </div>
        <div className="auc-subcontent">
          <h1>Know About Our Ecomerce Business, History</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis
            neque ultrices mattis aliquam, malesuada diam est. Malesuada sem
            tristique amet erat vitae eget dolor lobortis. Accumsan faucibus
            vitae lobortis quis bibendum quam.
          </p>
          <Link to="/contact">
            <button>Contact Us</button>
          </Link>
        </div>
      </div>
      <div className="ourFeatures">
        <h1>Our Features</h1>
        <OurService />
      </div>
    </div>
  );
}
