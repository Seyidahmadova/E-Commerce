import "./Wishlist.css";
import cartImg from "../../images/cart/cartImg.jpg";
import PagePath from "../../components/PagePath/PagePath";
import { TiDeleteOutline } from "react-icons/ti";

export default function Wishlist() {
  return (
    <div className="WishlistPage">
      <PagePath title="Wishlist" curPage="Wishlist" />
      <div className="wishlist">
        <table className="wishTable">
          <thead>
            <tr>
              <th className="wishProduct cpImg">IMAGE</th>
              <th className="wishProduct cpName">PRODUCT NAME</th>
              <th className="wishProduct cpPrice">PRICE</th>
              <th className="wishProduct cpSub">ADD TO CART</th>
              <th className="wishProduct cpAct">ACTION</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="wlImgCol">
                <div className="wlImg">
                  <img alt="wlduct" src={cartImg}></img>
                </div>
              </td>
              <td className="wlName">Twist Dining Table</td>
              <td className="wlPrice">288.0</td>
              <td className="wlAdding">
                <div className="wl-addCart">
                    <button>Add to Cart</button>
                </div>
                </td>              
              <td className="wlDel">
                <TiDeleteOutline className="wlDelIcon" />
              </td>
            </tr>
            
          </tbody>
        </table>
      </div>
    </div>
  );
}
