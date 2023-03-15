import { Link } from "react-router-dom";
import "./NewTrendSlide.css";

export default function NewTrendSlide(props) {
  const { img, fTitle, title, content } = props;
  return (
    <div className="hNewTrendSlide owl-carousel owl-theme" style={{backgroundImage: `url(${img})` }}>
      <p className="fTitle">{fTitle}</p>
      <p className="title">{title}</p>
      <p className="cont">{content}</p>
      <Link><button>Shop Now</button></Link>
    </div>
  );
}
