import "./ShopListItemGrid.css";
import item from "../../images/shopListItem/shopListItem.jpg";
import { FiShoppingCart, FiHeart } from "react-icons/fi";
import { FaSearchPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function ShopListItemGrid(props) {
  return (
    <div className="ShopListItemGrid" style={{width: `${props.width}`}}>
      <div className="slig-img">
        <img alt="item" src={item}></img>
        <div className="slig-adding">
          <p><FiShoppingCart className="addIcon cart" /></p>
          <p><FiHeart className="addIcon heart" /></p>
          <p><FaSearchPlus className="addIcon serchPlus" /></p>
        </div>
      </div>  
      <div className="slig-info">
        <div className="slig-title">
          <p><Link to='/product'>{props.title}</Link></p>
        </div>
        <div className="slig-price">
          <p>&#8380;{props.price}</p>
        </div>
        
      </div>
    </div>
  );
}
