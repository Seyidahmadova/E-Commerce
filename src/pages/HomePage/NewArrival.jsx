import { Link } from "react-router-dom";
import "./NewArrival.css";

export default function NewArrival(props) {
  const { img, title, price } = props;
  return (
    <div className="NewArrival owl-carousel owl-theme">
      <Link>
        <div className="na-img">
          <img alt="new arrival" src={img}></img>
        </div>
        <div className="na-detail">
          <p className="title">{title}</p>
          <p className="price">{price}</p>
        </div>
      </Link>
    </div>
  );
}
