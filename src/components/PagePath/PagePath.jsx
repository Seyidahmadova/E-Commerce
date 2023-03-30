import { Link } from "react-router-dom";
import "./PagePath.css";

export default function PagePath(props) {
    return(
        <div className="PagePath">
            <h1>{props.title}</h1>
            <p><Link to={`/`}>HOME</Link> / <span>{props.curPage}</span></p>
        </div>
    );
}