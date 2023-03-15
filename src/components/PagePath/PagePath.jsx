import { Link } from "react-router-dom";
import "./PagePath.css";

export default function PagePath(props) {
    return(
        <div className="PagePath">
            <h1>{props.title}</h1>
            <p><Link to={`/`}>Home</Link> - <Link to={`/pages`}>Pages</Link> - <Link to={props.path}><span>{props.curPage}</span></Link></p>
        </div>
    );
}