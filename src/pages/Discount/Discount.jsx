import "./Discount.css";
import DiscountCard from "./DiscountCard";

export default function Discount() {
  return (
    <div className="DiscountPage">
        <h1 className="dp-title">Campaigns</h1>
      <div className="discountCards">
        <DiscountCard
          bgImg="https://img.freepik.com/free-photo/black-friday-concept-with-alarm-cart-space_23-2147695910.jpg"
          title="Black Friday Sales"
        />
        <DiscountCard
          bgImg="https://img.freepik.com/free-photo/black-friday-concept-with-alarm-cart-space_23-2147695910.jpg"
          title="Black Friday Sales"
        />
        <DiscountCard
          bgImg="https://img.freepik.com/free-photo/black-friday-concept-with-alarm-cart-space_23-2147695910.jpg"
          title="Black Friday Sales"
        />
        <DiscountCard
          bgImg="https://img.freepik.com/free-photo/black-friday-concept-with-alarm-cart-space_23-2147695910.jpg"
          title="Black Friday Sales"
        />
        <DiscountCard
          bgImg="https://img.freepik.com/free-photo/black-friday-concept-with-alarm-cart-space_23-2147695910.jpg"
          title="Black Friday Sales"
        />

      </div>
    </div>
  );
}
