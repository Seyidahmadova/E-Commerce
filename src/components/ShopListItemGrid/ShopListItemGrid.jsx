import "./ShopListItemGrid.css";
import item from "../../images/shopListItem/shopListItem.jpg";
import { FiShoppingCart, FiHeart } from "react-icons/fi";
import { BsArrowsFullscreen } from "react-icons/bs";
import { IoIosGitCompare } from "react-icons/io";
import { Link } from "react-router-dom";

export default function ShopListItemGrid(props) {
  return (
    <div className="ShopListItemGrid" style={{ width: `${props.width}` }}>
      <div className="slig-img">
        <img alt="item" src={item}></img>
        <div className="slig-adding">
            <p>
              <FiHeart className="addIcon heart" />
            </p>
            <p>
              <BsArrowsFullscreen className="addIcon fullScreen" />
            </p>
            <p>
              <IoIosGitCompare className="addIcon compare" />
            </p>
        </div>
        <div className="slig-addingCart">
          <button>
            <FiShoppingCart className="addIcon cart" />
            Add to Cart
          </button>
        </div>
      </div>
      <div className="slig-info">
        <div className="slig-title">
          <p>
            <Link to="/product">{props.title}</Link>
          </p>
        </div>
        <div className="slig-price">
          <p>&#8380;{props.price}</p>
        </div>
      </div>
    </div>
  );
}
