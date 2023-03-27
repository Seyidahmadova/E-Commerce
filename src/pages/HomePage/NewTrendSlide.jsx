import { Link } from "react-router-dom";
import "./NewTrendSlide.css";

export default function NewTrendSlide(props) {
  const { img, fTitle, title, content } = props;
  return (
    <div className="hNewTrendSlide owl-carousel owl-theme">
      <img src={img} alt="new product"></img>
      <div className="allSlide">
        <p className="fTitle">{fTitle}</p>
        <p className="title">{title}</p>
        <div className="contBtn">
          <p className="cont">{content}</p>
        <Link to="/shop" >
          <button >Shop Now</button>
        </Link>
        </div>
      </div>
    </div>
  );
}
