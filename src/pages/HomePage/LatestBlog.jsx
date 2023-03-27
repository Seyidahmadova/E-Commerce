import "./LatestBlog.css";
import { FaPenNib, FaCalendarAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function LatestBlog(props) {
    return(
        <div className="hlb-blog">
            <div className="hlb-blog-img">
              <img alt="blog" src={props.img}></img>
            </div>
            <div className="hlb-blog-content">
              <div className="hlb-bc-authorDate">
                <p className="bc-author">
                  <FaPenNib style={{ color: "#FB2E86", marginRight:"3%"  }} />
                  John Smith
                </p>
                <p className="bc-date">
                  <FaCalendarAlt style={{ color: "#FFA454", marginRight:"3%" }} />7 Mart,2023
                </p>
              </div>
              <div className="hlb-bc-subcontent">
                <p className="bc-sc-title">
                  <Link to="/single-blog">Top esssential Trends in 2021</Link>
                </p>
                <p className="bc-sc-text">
                  More off this less hello samlande lied much over tightly circa
                  horse taped mightly
                </p>
                <Link to="/single-blog">
                  <button>Read More</button>
                </Link>
              </div>
            </div>
          </div>
    );
}