import "./ShopListItem.css";
import item from "../../images/shopListItem/shopListItem.jpg";
import circles from "../../images/shopListItem/circles.png";
import { FiShoppingCart, FiHeart } from "react-icons/fi";
import { FaSearchPlus } from "react-icons/fa";

export default function ShopListItem(props) {
  return (
    <div className="ShopListItem">
      <div className="sli-img">
        <img alt="item" src={item}></img>
      </div>
      <div className="sli-info">
        <div className="sli-title">
          <p>{props.title}</p>
          <div className="sli-circles">
            <img alt="circle" src={circles}></img>
          </div>
        </div>
        <div className="sli-price">
          <p>&#8380;{props.price}</p>
        </div>
        <div className="sli-about">
          <p>{props.about}</p>
        </div>
        <div className="sli-adding">
          <FiShoppingCart className="addIcon cart" />
          <FiHeart className="addIcon heart" />
          <FaSearchPlus className="addIcon serchPlus" />
        </div>
      </div>
    </div>
  );
}
