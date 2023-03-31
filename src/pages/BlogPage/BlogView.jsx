import "./BlogView.css";
import blogImg from "../../images/blogs/blog.jpg";
import { ImPen } from "react-icons/im";
import { IoMdCalendar } from "react-icons/io";
import { Link } from "react-router-dom";

export default function BlogView() {
  return (
    <div className="BlogView">
        <div className="blog-img">
          <img alt="blog" src={blogImg}></img>
        </div>
        <div className="blogInfo">
          <div className="bv-autDate">
            <p><ImPen className="icon pen" /><span className="bad-author">              
              Ali Ahmedov </span>
            </p>
            <p><IoMdCalendar className="icon calendar" /><span className="bad-date">
              12 March 2023</span>
            </p>
          </div>
          <div className="blog-content">
            <h1>Mauris at orci non vulputate diam tincidunt nec.</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit
              facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu
              malesuada vitae ultrices in in neque, porta dignissim. Adipiscing
              purus, cursus vulputate id id dictum at.
            </p>
            <Link to="/single-blog"><button>Read More</button></Link>
          </div>
        </div>
    </div>
  );
}
