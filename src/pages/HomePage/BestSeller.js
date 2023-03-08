import { Link } from "react-router-dom";
import "./BestSeller.css";

export default function BestSeller(props) {
  const { img, title, price } = props;
  return (
    <div className="BestSeller owl-carousel owl-theme">
      <Link>
        <div className="bs-img">
          <img alt="best seller" src={img}></img>
        </div>
        <div className="bs-detail">
          <p className="title">{title}</p>
          <p className="price">{price}</p>
        </div>
      </Link>
    </div>
  );
}
