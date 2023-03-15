import "./OrderComp.css";
import orderComp from "../../images/orderComp/orderComp.png";
import PagePath from "../../components/PagePath/PagePath";
import Brands from "../../components/Brands/Brands";
import { Link } from "react-router-dom";

export default function OrderComp() {
  return (
    <div className="OrderComp">
      <PagePath
        title="Order Completed!"
        curPage="Order Completed"
        path="/order-completed"
      />
      <div className="isCompleted">
        <img alt="icon" src={orderComp}></img>
        <h1>Your Order Is Completed!</h1>
        <p>
          Thank you for your order! Your order is being processed and will be
          completed within 3-6 hours. You will receive an email confirmation
          when your order is completed.
        </p>
        <Link><button>Continue Shopping</button></Link>
      </div>
        <Brands/>
    </div>
  );
}
