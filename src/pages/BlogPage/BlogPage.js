import "./BlogPage.css";
import { FaFacebookF, FaInstagram, FaTwitter, FaSearch } from "react-icons/fa";
import PagePath from "../../components/PagePath/PagePath";
import Brands from "../../components/Brands/Brands";
import BlogView from "./BlogView";
import LittleBlog from "./LittleBlog";

export default function BlogPage() {
  const handleSelectedCategory = (e) => {
    const pClass = e.target.parentElement;
    if (e.target.className === ("category selectedC")) {
      e.target.classList.remove("selectedC");
      e.target.classList.add("nonSelectedC")
    }
    if (e.target.className === ("category nonSelectedC")) {
      for (let i = 0; i < pClass.childNodes.length; i++) {
        if(pClass.childNodes[i].className === ("category selectedC")){
            pClass.childNodes[i].className = "category nonSelectedC";
          }
      }
      e.target.classList.remove("nonSelectedC");
      e.target.classList.add("selectedC")
    }
  };

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
          <div className="searchArea">
            <h1>Search</h1>
            <div className="searchInput">
              <input type="search" placeholder="Search For Posts" />
              <button>
                <FaSearch />
              </button>
            </div>
          </div>
          <div className="blogCategories">
            <h1>Categories</h1>
            <div className="cList">
              <p
                className="category nonSelectedC"
                onClick={handleSelectedCategory}
              >
                Hobbies (14)
              </p>
              <p className="category nonSelectedC" onClick={handleSelectedCategory}>
                Women (5)
              </p>
              <p className="category nonSelectedC" onClick={handleSelectedCategory}>
                Men (10)
              </p>
              <p className="category nonSelectedC" onClick={handleSelectedCategory}>
                Children (14)
              </p>
              <p className="category nonSelectedC" onClick={handleSelectedCategory}>
                Clothes (14)
              </p>
              <p className="category nonSelectedC" onClick={handleSelectedCategory}>
                Shoes (14)
              </p>
            </div>
          </div>
          <div className="recentPosts">
            <h1>Recent Posts</h1>
            <LittleBlog
              title="It is a long established fact"
              detail="March 12 2023"
            />
            <LittleBlog
              title="It is a long established fact"
              detail="March 12 2023"
            />
            <LittleBlog
              title="It is a long established fact"
              detail="March 12 2023"
            />
          </div>

          <div className="saleProducts">
            <h1>Sale Products</h1>
            <LittleBlog
              title="It is a long established fact"
              detail="35 &#8380;"
            />
            <LittleBlog
              title="It is a long established fact"
              detail="35 &#8380;"
            />
            <LittleBlog
              title="It is a long established fact"
              detail="35 &#8380;"
            />
          </div>

          <div className="b-smedias">
            <h1>Follow us</h1>
            <ul>
              <ol className="facebook">
                <a href="https://facebook.com">
                  <FaFacebookF className="flogo" />
                </a>
              </ol>
              <ol className="instagram">
                <a href="https://instagram.com">
                  <FaInstagram className="ilogo" />
                </a>
              </ol>
              <ol className="twitter">
                <a href="https://twitter.com">
                  <FaTwitter className="tlogo" />
                </a>
              </ol>
            </ul>
          </div>
        </div>
      </div>
      <Brands />
    </div>
  );
}
