import "./BlogSide.css";
import { FaFacebookF, FaInstagram, FaTwitter, FaSearch } from "react-icons/fa";
import LittleBlog from "./LittleBlog";

export default function BlogSide() {
    const handleSelectedCategory = (e) => {
        const pClass = e.target.parentElement;
        if (e.target.className === ("category selectedC")) {
          e.target.classList.remove("selectedC");
          e.target.classList.add(" nonSelectedC")
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

    return(
    <div className="BlogSide">
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
                Hobbies <span>(14)</span>
              </p>
              <p className="category nonSelectedC" onClick={handleSelectedCategory}>
                Women <span>(14)</span>
              </p>
              <p className="category nonSelectedC" onClick={handleSelectedCategory}>
                Men <span>(14)</span>
              </p>
              <p className="category nonSelectedC" onClick={handleSelectedCategory}>
                Children <span>(14)</span>
              </p>
              <p className="category nonSelectedC" onClick={handleSelectedCategory}>
                Clothes <span>(14)</span>
              </p>
              <p className="category nonSelectedC" onClick={handleSelectedCategory}>
                Shoes <span>(14)</span>
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
);}