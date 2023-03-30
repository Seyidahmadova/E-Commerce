import { Link } from "react-router-dom";
import "./DiscountCard.css";

export default function DiscountCard(props) {
    return(
        <div className="DiscountCardPage">
            <img src={props.bgImg} alt="discount"></img>
            <div className="dcp-content">
                <h1>{props.title}</h1>
                <Link><button className="startShop">Start shop</button></Link>
            </div>
        </div>
    );
}