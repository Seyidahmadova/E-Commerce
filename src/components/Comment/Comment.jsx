import "./Comment.css";
import comment from "../../images/singleBlog/comment.jpg";

export default function Comment() {
  return (
    <div className="Comment">
      <div className="commentImg">
        <img alt="comment" src={comment}></img>
      </div>
      <div className="commentInfo">
        <div className="cTitle">
          <p className="cUser">Valeh Salehov</p>
          <p className="cDate">13 March 2023</p>
        </div>
        <div className="cText">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit
            dapibus est, nunc, montes, lacus consequat integer viverra.
          </p>
        </div>
      </div>
    </div>
  );
}
