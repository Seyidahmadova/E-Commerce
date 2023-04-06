import "./CartPage.css";
import { useState } from "react";
import { TiDeleteOutline } from "react-icons/ti";
import { useDispatch } from "react-redux";
import { removeCartAction } from "../../redux/action/actions";
import { useEffect } from "react";

export default function Cart(props) {
    const [subtotal, setSubtotal ] = useState(0)
  const [total, setTotal] = useState(0);
  const handleTotal = (value) => {
    setTotal(total + value);
  };

  const dispatch = useDispatch();
  const [qty, setQty] = useState(1);
  function counterMinus() {
    if (qty === 1) {
      setQty(1);
    } else {
      setQty(qty - 1);
    }
  }
  function counterPlus() {
    setQty(qty + 1);
  }

  return (
    <tr key={props.ind}>
      <td className="proImgCol">
        <div className="proImg">
          <img alt="product" src={props.Photo}></img>
        </div>
      </td>
      <td className="proName">{props.Title}</td>
      <td className="proPrice">{props.Price}</td>
      <td className="prQty">
        <div className="qtyBox">
          <p className="qb-minus" onClick={counterMinus}>
            -
          </p>
          <p className="qb-value" value={qty}>
            {qty}
          </p>
          <p className="qb-plus" onClick={counterPlus}>
            +
          </p>
        </div>
      </td>
      <td className="proSub"> {qty * props.Price}</td>
      <td className="proDel">
        <TiDeleteOutline
          onClick={() => dispatch(removeCartAction(props.Id))}
          className="proDelIcon"
        />
      </td>
    </tr>
  );
}
