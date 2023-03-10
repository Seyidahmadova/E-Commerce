import "./NotFound.css";
import photo from "../../images/notfound/notFound.png";
import PagePath from "../../components/PagePath/PagePath";
import Brands from "../../components/Brands/Brands";
import { Link } from "react-router-dom";

export default function NotFound() {
    return(
        <div className="notFound">
            <PagePath title="404 Not Found" path="/not-found" curPage="404 Not Found"/>
            <div className="nf-content">
                <img alt="notfound" src={photo}></img>
                <p>Oops! The page you requested was not found!</p>
                <Link to="/"><button>Back to Home</button></Link>
            </div>
            <Brands/>
        </div>
    );
}