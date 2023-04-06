import "./CartPage.css";
import { useState } from "react";
import PagePath from "../../components/PagePath/PagePath";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Cart from "./cart";

export default function CartPage() {
  const addedProducts = useSelector((state) => state["products"]);
  console.log("added", addedProducts);
  const [subtotal, setSubtotal] = useState(0);
  const [total, setTotal] = useState(0);
  const handleTotal = (value) => {
    setTotal(total + value);
  };
  useEffect(() => {
    addedProducts !== undefined &&
      !!addedProducts.length &&
      addedProducts
        .filter((i) => i >= 1)
        .map((product) => {
          handleTotal(product.Price);
          console.log(product.Price);
        });
  });

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
            {addedProducts !== undefined &&
              !!addedProducts.length &&
              addedProducts
                .filter((item, i) => i >= 1)
                .map((product, ind) => {
                  console.log("id", product.Id);
                  return (
                    <Cart
                      ind={ind}
                      Photo={product.Photo}
                      Title={product.Title}
                      Price={product.Price}
                      Id={product.Id}
                    />
                  );
                })}

            <tr className="grandTotal">
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>
                <p className="gt-txt">Grand Total: </p>
              </td>
              <td>
                <p className="gt-total">&#8380; {total}</p>
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
