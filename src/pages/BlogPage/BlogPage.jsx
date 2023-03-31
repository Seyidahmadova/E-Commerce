import "./BlogPage.css";
import PagePath from "../../components/PagePath/PagePath";
import Brands from "../../components/Brands/Brands";
import BlogView from "./BlogView";
import BlogSide from "../../components/BlogSide/BlogSide";

export default function BlogPage() {
  return (
    <div className="BlogPage">
      <PagePath title="Blogs" curPage="Blogs" path="/blogs" />
      <div className="allBlog-page">
        <div className="blog-area">
          <BlogView />
          <BlogView />
          <BlogView />
        </div>
        <div className="blog-additional">
          <BlogSide />
        </div>
      </div>
      <Brands />
    </div>
  );
}
