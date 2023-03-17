import React from "react";
import "./HomePage.css";
import { Link } from "react-router-dom";
import latestBlog1 from "../../images/home/latestBlog1.jpg";
import latestBlog2 from "../../images/home/latestBlog2.jpg";
import latestBlog3 from "../../images/home/latestBlog3.jpg";
import Brands from "../../components/Brands/Brands";
import newTrend from "../../images/home/newTrend.png";
import bestSeller from "../../images/home/bestSeller.jpg";
import newArrival from "../../images/home/newArrival.jpg";
import offeredProduct from "../../images/home/offeredProduct.png";
import { FaPenNib, FaCalendarAlt, FaCircle } from "react-icons/fa";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import OurService from "../../components/OurServices/ourService";
import NewTrendSlide from "./NewTrendSlide";
import BestSeller from "./BestSeller";
import NewArrival from "./NewArrival";

export default function HomePage() {
  const fTitle = "Best Furniture For Your Castle...";
  const title = "New Furniture Collection Trends in 2023";
  const cont =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in estadipiscing in phasellus non in justo.";

  return (
    <div className="home">
      <div className="hSlider">
        <OwlCarousel items={1} loop autoplay="3000">
          <NewTrendSlide
            img={newTrend}
            fTitle={fTitle}
            title={title}
            content={cont}
          />
          <NewTrendSlide
            img={newTrend}
            fTitle={fTitle}
            title={title}
            content={cont}
          />
          <NewTrendSlide
            img={newTrend}
            fTitle={fTitle}
            title={title}
            content={cont}
          />
          <NewTrendSlide
            img={newTrend}
            fTitle={fTitle}
            title={title}
            content={cont}
          />
        </OwlCarousel>
      </div>
      <div className="allBestSeller">
        <h1>Best Sellers</h1>
        <OwlCarousel items={3} loop autoplay="3000">
          <BestSeller
            img={bestSeller}
            title="Comfort Handy Craft"
            price="$45.99"
          />
          <BestSeller
            img={bestSeller}
            title="Comfort Handy Craft"
            price="$45.99"
          />
          <BestSeller
            img={bestSeller}
            title="Comfort Handy Craft"
            price="$45.99"
          />
          <BestSeller
            img={bestSeller}
            title="Comfort Handy Craft"
            price="$45.99"
          />
          <BestSeller
            img={bestSeller}
            title="Comfort Handy Craft"
            price="$45.99"
          />
          <BestSeller
            img={bestSeller}
            title="Comfort Handy Craft"
            price="$45.99"
          />
          <BestSeller
            img={bestSeller}
            title="Comfort Handy Craft"
            price="$45.99"
          />
          <BestSeller
            img={bestSeller}
            title="Comfort Handy Craft"
            price="$45.99"
          />
        </OwlCarousel>
      </div>
      <div className="homeWhatOffer">
        <h1>What Hekto Offer!</h1>
        <OurService/>
      </div>
      <div className="homeOfferedProduct">
        <div className="o-product">
          <span>
            <img src={offeredProduct} alt="offered product"></img>
          </span>
          <div className="op-detail">
            <h1>Unique Features Of leatest & Trending Poducts</h1>
            <p>
              <FaCircle className="circle-icon" /> All frames constructed with
              hardwood solids and laminates
            </p>
            <p>
              <FaCircle className="circle-icon" /> Reinforced with double wood
              dowels, glue, screw - nails corner blocks and machine nails
            </p>
            <p>
              <FaCircle className="circle-icon" /> Arms, backs and seats are
              structurally reinforced
            </p>
            <div className="op-addToCard">
              <Link>
                <button>Add To Card</button>
              </Link>
              <div className="op-price">
                <p>B&B Italian Sofa </p>
                <p>$32.00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="homeNewArrivals">
        <h1>New Arrivals</h1>
        <OwlCarousel items={4} loop autoplay="3000">
          <NewArrival
            img={newArrival}
            title="Comfort Handy Craft"
            price="$30.99"
          />
          <NewArrival
            img={newArrival}
            title="Comfort Handy Craft"
            price="$30.99"
          />
          <NewArrival
            img={newArrival}
            title="Comfort Handy Craft"
            price="$30.99"
          />
          <NewArrival
            img={newArrival}
            title="Comfort Handy Craft"
            price="$30.99"
          />
          <NewArrival
            img={newArrival}
            title="Comfort Handy Craft"
            price="$30.99"
          />
          <NewArrival
            img={newArrival}
            title="Comfort Handy Craft"
            price="$30.99"
          />
          <NewArrival
            img={newArrival}
            title="Comfort Handy Craft"
            price="$30.99"
          />
          <NewArrival
            img={newArrival}
            title="Comfort Handy Craft"
            price="$30.99"
          />
          <NewArrival
            img={newArrival}
            title="Comfort Handy Craft"
            price="$30.99"
          />
          <NewArrival
            img={newArrival}
            title="Comfort Handy Craft"
            price="$30.99"
          />
          <NewArrival
            img={newArrival}
            title="Comfort Handy Craft"
            price="$30.99"
          />
          <NewArrival
            img={newArrival}
            title="Comfort Handy Craft"
            price="$30.99"
          />
        </OwlCarousel>
      </div>
      <div className="homeNewsletter">
        <p>Get Leatest Update By Subscribe 0ur Newslater</p>
        <Link>
          <button>Shop Now</button>
        </Link>
      </div>
      <Brands />
      <div className="homeLatestBlog">
        <h1>Latest Blog</h1>
        <div className="hlb-allblogs">
          <div className="hlb-blog">
            <div className="hlb-blog-img">
              <img alt="blog" src={latestBlog1}></img>
            </div>
            <div className="hlb-blog-content">
              <div className="hlb-bc-authorDate">
                <p className="bc-author">
                  <FaPenNib style={{ color: "#FB2E86" }} />
                  John Smith
                </p>
                <p className="bc-date">
                  <FaCalendarAlt style={{ color: "#FFA454" }} />7 Mart,2023
                </p>
              </div>
              <div className="hlb-bc-subcontent">
                <p className="bc-sc-title">
                  <Link>Top esssential Trends in 2021</Link>
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
          <div className="hlb-blog">
            <div className="hlb-blog-img">
              <img alt="blog" src={latestBlog2}></img>
            </div>
            <div className="hlb-blog-content">
              <div className="hlb-bc-authorDate">
                <p className="bc-author">
                  <FaPenNib style={{ color: "#FB2E86" }} />
                  John Smith
                </p>
                <p className="bc-date">
                  <FaCalendarAlt style={{ color: "#FFA454" }} />7 Mart,2023
                </p>
              </div>
              <div className="hlb-bc-subcontent">
                <p className="bc-sc-title">
                  <Link>Top esssential Trends in 2021</Link>
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
          <div className="hlb-blog">
            <div className="hlb-blog-img">
              <img alt="blog" src={latestBlog3}></img>
            </div>
            <div className="hlb-blog-content">
              <div className="hlb-bc-authorDate">
                <p className="bc-author">
                  <FaPenNib style={{ color: "#FB2E86" }} />
                  John Smith
                </p>
                <p className="bc-date">
                  <FaCalendarAlt style={{ color: "#FFA454" }} />7 Mart,2023
                </p>
              </div>
              <div className="hlb-bc-subcontent">
                <p className="bc-sc-title">
                  <Link>Top esssential Trends in 2021</Link>
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
        </div>
      </div>
    </div>
  );
}
