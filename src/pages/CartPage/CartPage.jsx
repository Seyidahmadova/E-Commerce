import "./CartPage.css";
import { useState } from "react";
import PagePath from "../../components/PagePath/PagePath";
import cartImg from "../../images/cart/cartImg.jpg";
import { TiDeleteOutline } from "react-icons/ti";

export default function CartPage() {
  const [qty, setQty] = useState(1);
  function counterMinus() {
    if(qty===1){
      setQty(1)
    }
    else{
      setQty(qty - 1);
    }
  }
  function counterPlus() {
    setQty(qty + 1);
  }

  return (
    <div className="CartPage">
      <PagePath title="Cart" curPage="Cart" />
      <div className="cart">
        <table className="cartTable">
          <thead>
            <tr>
              <th className="cartProduct cpImg">IMAGE</th>
              <th className="cartProduct cpName">PRODUCT NAME</th>
              <th className="cartProduct cpPrice">PRICE</th>
              <th className="cartProduct cpQyt">QTY</th>
              <th className="cartProduct cpSub">SUBTOTAL</th>
              <th className="cartProduct cpAct">ACTION</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="proImgCol">
                <div className="proImg">
                  <img alt="product" src={cartImg}></img>
                </div>
              </td>
              <td className="proName">Twist Dining Table</td>
              <td className="proPrice">288.0</td>
              <td className="prQty">
                <div className="qtyBox">
                  <p className="qb-minus" onClick={counterMinus}>-</p>
                  <p className="qb-value" value={qty}>{qty}</p>
                  <p className="qb-plus" onClick={counterPlus}>+</p>
                </div>
              </td>
              <td className="proSub">288.0</td>
              <td className="proDel">
                <TiDeleteOutline className="proDelIcon" />
              </td>
            </tr>
            <tr>
              <td className="proImgCol">
                <div className="proImg">
                  <img alt="product" src={cartImg}></img>
                </div>
              </td>
              <td className="proName">Twist Dining Table</td>
              <td className="proPrice">288.0</td>
              <td className="prQty">
                <div className="qtyBox">
                  <p className="qb-minus" onClick={counterMinus}>-</p>
                  <p className="qb-value" value={qty}>{qty}</p>
                  <p className="qb-plus"onClick={counterPlus}>+</p>
                </div>
              </td>
              <td className="proSub">288.0</td>
              <td className="proDel">
                <TiDeleteOutline className="proDelIcon" />
              </td>
            </tr>
            <tr className="grandTotal">
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>
                <p className="gt-txt">Grand Total: </p>
              </td>
              <td>
                <p className="gt-total">&#8380;576.00</p>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="cartProcess">
          <div className="cp-coupon">
            <input placeholder="Enter your coupon code if you have one" />
            <button className="applyCoupon">Apply Coupon</button>
          </div>
          <div className="cp-buttons">
            <button className="cp-btn clearCart">Clear Cart</button>
            <button className="cp-btn shopCart">Shop</button>
          </div>
        </div>
      </div>
    </div>
  );
}
