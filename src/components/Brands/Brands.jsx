import "./Brands.css";
import brand1 from "../../images/home/brand1.png";
import brand2 from "../../images/home/brand2.png";
import brand3 from "../../images/home/brand3.png";
import brand4 from "../../images/home/brand4.png";
import brand5 from "../../images/home/brand5.png";

export default function Brands() {
    return(
        <div className="Brands">
        <ul>
          <ol>
            <a href="https://github.com/Cafarli">
              <img alt="brand" src={brand1}></img>
            </a>
          </ol>
          <ol>
            <a href="https://github.com/seyidahmadova">
              <img alt="brand" src={brand2}></img>
            </a>
          </ol>
          <ol>
            <a href="https://github.com/Cafarli">
              <img alt="brand" src={brand3}></img>
            </a>
          </ol>
          <ol>
            <a href="https://github.com/seyidahmadova">
              <img alt="brand" src={brand4}></img>
            </a>
          </ol>
          <ol>
            <a href="https://github.com/Cafarli">
              <img alt="brand" src={brand5}></img>
            </a>
          </ol>
        </ul>
      </div>
    );
}