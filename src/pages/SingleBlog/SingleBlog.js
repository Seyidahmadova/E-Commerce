import "./SingleBlog.css";
import PagePath from "../../components/PagePath/PagePath";
import Brands from "../../components/Brands/Brands";
import BlogSide from "../../components/BlogSide/BlogSide";

export default function SingleBlog() {

  return (
    <div className="SingleBlog">
      <PagePath title="Single Blog" curPage="Single Blog" path="/single-blog" />
      <div className="allBlog-page">
        <div className="blog-additional">
            <BlogSide/>
        </div>
      </div>
      <Brands />
    </div>
  );
}
