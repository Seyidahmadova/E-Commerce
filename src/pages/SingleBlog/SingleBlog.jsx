import "./SingleBlog.css";
import blogimg from "../../images/singleBlog/singleBlog.jpg";
import blogimg2 from "../../images/singleBlog/singleBlog2.jpg";
import { ImPen } from "react-icons/im";
import { IoMdCalendar } from "react-icons/io";
import PagePath from "../../components/PagePath/PagePath";
import Brands from "../../components/Brands/Brands";
import BlogSide from "../../components/BlogSide/BlogSide";
import Comment from "./Comment";

export default function SingleBlog() {
  return (
    <div className="SingleBlog">
      <PagePath title="Single Blog" curPage="Single Blog" path="/single-blog" />
      <div className="single-blog">
        <div className="sBlogComment">
          <div className="sBlogPart">
            <div className="sb-img">
              <img alt="blog" src={blogimg}></img>
            </div>
            <div className="blog-autDate">
              <p>
                <ImPen className="icon pen" />
                <span className="b-author">Sevil Qajarova</span>
              </p>
              <p>
                <IoMdCalendar className="icon calendar" />
                <span className="b-date">13 March 2023</span>
              </p>
            </div>
            <div className="sb-content">
              <h1>Mauris at orci non vulputate diam tincidunt nec.</h1>
              <p className="sbc-firstPart">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit
                dapibus est, nunc, montes, lacus consequat integer viverra. Sit
                morbi etiam quam rhoncus.
                <br />
                <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit
                dapibus est, nunc, montes, lacus consequat integer viverra. Sit
                morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante
                posuere malesuada.Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Velit dapibus est, nunc, montes, lacus
                consequat integer viverra. Sit morbi etiam quam rhoncus. Velit
                in arcu platea donec vitae ante posuere malesuada.Lorem ipsum
                dolor sit amet, consectetur adipiscing elit. Velit dapibus est,
                nunc,
              </p>
              <div className="sbc-videoImg">
                <img className="sbc-Img" alt="blog" src={blogimg2}></img>
                <iframe
                  className="sbc-Video"
                  src="https://www.youtube.com/embed/6crbMnZGrX4"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
              <p className="sbc-secondPart">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit
                dapibus est, nunc, montes, lacus consequat integer viverra. Sit
                morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante
                posuere malesuada.Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Velit dapibus est, nunc, montes, lacus
                consequat integer viverra. Sit morbi etiam quam rhoncus. Velit
                in arcu platea donec vitae ante posuere malesuada.Lorem ipsum
                dolor sit amet, consectetur adipiscing elit. Velit dapibus est,
                nunc,
              </p>
            </div>
          </div>
          <div className="sCommentPart">
            <div className="scp-comments">
              <Comment />
              <Comment />
            </div>
            <form className="commentForm">
              <h1>Add a comment</h1>
              <textarea type="text" placeholder="Your Comment" />
              <button type="submit" className="submit">
                Send Comment
              </button>
            </form>
          </div>
        </div>
        <div className="sideBar">
          <BlogSide />
        </div>
      </div>
      <Brands />
    </div>
  );
}
