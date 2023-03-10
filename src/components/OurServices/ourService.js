import "./ourService.css";
import offer1 from "../../images/home/offer1.jpg";
import offer2 from "../../images/home/offer2.jpg";
import offer3 from "../../images/home/offer3.jpg";
import offer4 from "../../images/home/offer4.jpg";

export default function OurService() {
    return(
        <div className="ourService">
          <div className="os-offer">
            <div className="os-offer-img">
              <img alt="offer" src={offer1}></img>
            </div>
            <p className="os-offer-title">24/7 Support</p>
            <p className="os-offer-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa
              purus gravida.
            </p>
          </div>
          <div className="os-offer">
            <div className="os-offer-img">
              <img alt="offer" src={offer2}></img>
            </div>
            <p className="os-offer-title">24/7 Support</p>
            <p className="os-offer-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa
              purus gravida.
            </p>
          </div>
          <div className="os-offer">
            <div className="os-offer-img">
              <img alt="offer" src={offer3}></img>
            </div>
            <p className="os-offer-title">24/7 Support</p>
            <p className="os-offer-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa
              purus gravida.
            </p>
          </div>
          <div className="os-offer">
            <div className="os-offer-img">
              <img alt="offer" src={offer4}></img>
            </div>
            <p className="os-offer-title">24/7 Support</p>
            <p className="os-offer-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa
              purus gravida.
            </p>
          </div>
        </div>
    );
}