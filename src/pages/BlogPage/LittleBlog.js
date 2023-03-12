import "./LittleBlog.css";
import blogImg from "../../images/blogs/blogpost.jpg";
import { Link } from "react-router-dom";

export default function LittleBlog(props) {
  return (
    <div className="LittleBlog">
      <Link to="/blog">
        <div className="lBlog-img">
          <img alt="post" src={blogImg}></img>
        </div>
        <div className="lBlogInfo">
          <p className="bTitle">{props.title}</p>
          <p className="bDetail">{props.detail}</p> 
        </div>
      </Link>
    </div>
  );
}
