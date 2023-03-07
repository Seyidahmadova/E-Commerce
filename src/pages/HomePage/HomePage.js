import React from "react";
import "./HomePage.css";
import { Link } from "react-router-dom";
import latestBlog1 from "../../images/home/latestBlog1.jpg";
import latestBlog2 from "../../images/home/latestBlog2.jpg";
import latestBlog3 from "../../images/home/latestBlog3.jpg";
import brand1 from "../../images/home/brand1.png";
import brand2 from "../../images/home/brand2.png";
import brand3 from "../../images/home/brand3.png";
import brand4 from "../../images/home/brand4.png";
import brand5 from "../../images/home/brand5.png";
import offer1 from "../../images/home/offer1.jpg";
import offer2 from "../../images/home/offer2.jpg";
import offer3 from "../../images/home/offer3.jpg";
import offer4 from "../../images/home/offer4.jpg";
import { FaPenNib, FaCalendarAlt } from "react-icons/fa";

export default function HomePage() {
  return (
    <div className="home">
      <div className="homeWhatOffer">
        <h1>What Hekto Offer!</h1>
        <div className="homeOffers">
          <div className="ho-offer">
            <div className="ho-offer-img">
            <img alt="offer" src={offer1}></img>
            </div>
            <p className="ho-offer-title">24/7 Support</p>
            <p className="ho-offer-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa
              purus gravida.
            </p>
          </div>
          <div className="ho-offer">
            <div className="ho-offer-img">
            <img alt="offer" src={offer2}></img>
            </div>
            <p className="ho-offer-title">24/7 Support</p>
            <p className="ho-offer-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa
              purus gravida.
            </p>
          </div>
          <div className="ho-offer">
            <div className="ho-offer-img">
            <img alt="offer" src={offer3}></img>
            </div>
            <p className="ho-offer-title">24/7 Support</p>
            <p className="ho-offer-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa
              purus gravida.
            </p>
          </div>
          <div className="ho-offer">
            <div className="ho-offer-img">
            <img alt="offer" src={offer4}></img>
            </div>
            <p className="ho-offer-title">24/7 Support</p>
            <p className="ho-offer-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa
              purus gravida.
            </p>
          </div>
        </div>
      </div>
      <div className="homeNewsletter">
        <p>Get Leatest Update By Subscribe 0ur Newslater</p>
        <Link>
          <button>Shop Now</button>
        </Link>
      </div>
      <div className="homeBrands">
        <ul>
          <ol>
            <a href="https://github.com/Cafarli">
              <img alt="brand" src={brand1}></img>
            </a>
          </ol>
          <ol>
            <a href="https://github.com/seyidahmadova">
              <img alt="brand" src={brand2}></img>
            </a>
          </ol>
          <ol>
            <a href="https://github.com/Cafarli">
              <img alt="brand" src={brand3}></img>
            </a>
          </ol>
          <ol>
            <a href="https://github.com/seyidahmadova">
              <img alt="brand" src={brand4}></img>
            </a>
          </ol>
          <ol>
            <a href="https://github.com/Cafarli">
              <img alt="brand" src={brand5}></img>
            </a>
          </ol>
        </ul>
      </div>
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
                <Link>
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
                <Link>
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
                <Link>
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
