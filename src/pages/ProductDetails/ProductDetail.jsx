import "./ProductDetail.css";
import PagePath from "../../components/PagePath/PagePath";
import Brands from "../../components/Brands/Brands";
import ShopListItemGrid from "../../components/ShopListItemGrid/ShopListItemGrid";
import ImageZoom from "react-image-zooom";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import product1 from "../../images/product/product1.jpg";
import product2 from "../../images/product/product2.jpg";
import product3 from "../../images/product/product3.jpg";
import product4 from "../../images/product/product4.jpg";
import { useState } from "react";

export default function ProductDetail() {
  const [showDesc, setShowDesc] = useState(true);
  const [showAddInfo, setShowAddInfo] = useState(false);
  const [showRew, setShowRew] = useState(false);
  const [qty, setQty] = useState(1);

  function counterMinus() {
    if (qty === 1) {
      setQty(1);
    } else {
      setQty(qty - 1);
    }
  }
  function counterPlus() {
    setQty(qty + 1);
  }

  const handleAbout = (e) => {
    console.log(e.target.id);
    const pClass = e.target.parentElement;
    if (e.target.className === "choice noncSelected") {
      for (let i = 0; i < pClass.childNodes.length; i++) {
        pClass.childNodes[i].className = "choice noncSelected";
      }
      e.target.className = "choice cSelected";
    }

    switch (e.target.id) {
      case "description":
        setShowDesc(true);
        setShowAddInfo(false);
        setShowRew(false);
        break;
      case "addInfo":
        setShowDesc(false);
        setShowAddInfo(true);
        setShowRew(false);
        break;
      case "reviewPro":
        setShowDesc(false);
        setShowAddInfo(false);
        setShowRew(true);
        break;
      default:
        break;
    }
  };
  return (
    <div className="ProductDetail">
      <PagePath title="Product" path="/product" curPage="Product" />
      <div className="product">
        <div className="productIntro">
          <div className="allImg">
            <ImageZoom src={product1} alt="product" zoom="250" />
            <div className="pi-imgs">
              <img src={product2} alt="products"></img>
              <img src={product3} alt="products"></img>
              <img src={product4} alt="products"></img>
            </div>
          </div>
          <div className="pi-info">
            <h1>Modern Handbag</h1>
            <div className="rateStar">
                <Stack spacing={1}>
                  <Rating
                    name="half-rating"
                    defaultValue={0}
                    // precision={0.5}
                  />
                </Stack>
              <p className="rateNum">(22)</p>
            </div>
            <div className="pi-proID">
              <p>ID : 9852410</p>
            </div>
            <div className="pi-price">
              <p>&#8380;50.00</p>
            </div>
            <div className="pi-about">
              <p>
                Donec bibendum enim ut elit porta ullamcorper. Vestibulum Nai
                wekemdini iaculis vitae nulla. Morbi mattis nec mi ac mollis.
              </p>
            </div>
            <div className="addCart">
              <div className="productNum">
                <p className="minus" onClick={counterMinus}>
                  -
                </p>
                <p className="value">{qty}</p>
                <p className="plus" onClick={counterPlus}>
                  +
                </p>
              </div>
              <button className="addCartBtn">Add to cart</button>
            </div>
            <div className="addWishlist">
              <p>
                <i className="fa fa-heart-o"></i>
              </p>
              <p>Add to wishlist</p>
            </div>
          </div>
        </div>
        <div className="productAbout">
          <ul className="pa-header">
            <ol
              className="choice cSelected"
              id="description"
              onClick={handleAbout}
            >
              Description
            </ol>
            <ol
              className="choice noncSelected"
              id="addInfo"
              onClick={handleAbout}
            >
              Additional Info
            </ol>
            <ol
              className="choice noncSelected"
              id="reviewPro"
              onClick={handleAbout}
            >
              Review
            </ol>
          </ul>
          {showDesc ? (
            <div className="paPart description">
              <p>
                Descrititon. Aliquam dis vulputate vulputate integer sagittis.
                Faucibus dolor ornare faucibus vel sed et eleifend habitasse
                amet. Montes, mauris varius ac est bibendum. Scelerisque a,
                risus ac ante. Velit consectetur neque, elit, aliquet. <br />
                <br />
                Non varius proin sed urna, egestas consequat laoreet diam
                tincidunt. Magna eget faucibus cras justo, tortor sed donec
                tempus. Imperdiet consequat, quis diam arcu, nulla lobortis
                justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa
                viverr .
                <br />
                <br />
                Scelerisque a, risus ac ante. Velit consectetur neque, elit,
                aliquet. Non varius proin sed urna, egestas consequat laoreet
                diam tincidunt.
              </p>
            </div>
          ) : null}

          {showAddInfo ? (
            <div className="paPart additonal">
              <p>
                Additonal info. aliquam dis vulputate vulputate integer
                sagittis. Faucibus dolor ornare faucibus vel sed et eleifend
                habitasse amet. Montes, mauris varius ac est bibendum.
                Scelerisque a, risus ac ante. Velit consectetur neque, elit,
                aliquet. <br />
                <br />
                Non varius proin sed urna, egestas consequat laoreet diam
                tincidunt. Magna eget faucibus cras justo, tortor sed donec
                tempus. Imperdiet consequat, quis diam arcu, nulla lobortis
                justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa
                viverr .
                <br />
                <br />
                Scelerisque a, risus ac ante. Velit consectetur neque, elit,
                aliquet. Non varius proin sed urna, egestas consequat laoreet
                diam tincidunt.
              </p>
            </div>
          ) : null}

          {showRew ? (
            <div className="paPart reviewPro">
              <p>
                Review. Aliquam dis vulputate vulputate integer sagittis.
                Faucibus dolor ornare faucibus vel sed et eleifend habitasse
                amet. Montes, mauris varius ac est bibendum. Scelerisque a,
                risus ac ante. Velit consectetur neque, elit, aliquet. <br />
                <br />
                Non varius proin sed urna, egestas consequat laoreet diam
                tincidunt. Magna eget faucibus cras justo, tortor sed donec
                tempus. Imperdiet consequat, quis diam arcu, nulla lobortis
                justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa
                viverr .
                <br />
                <br />
                Scelerisque a, risus ac ante. Velit consectetur neque, elit,
                aliquet. Non varius proin sed urna, egestas consequat laoreet
                diam tincidunt.
              </p>
            </div>
          ) : null}
        </div>
      </div>
      <div className="otherProducts">
        <h1>Other Products</h1>
        <OwlCarousel items={4} loop autoplay="2000">
          <ShopListItemGrid
            width="93%"
            title="Accumsan tincidunt"
            price="260.00"
          />
          <ShopListItemGrid
            width="93%"
            title="Accumsan tincidunt"
            price="260.00"
          />
          <ShopListItemGrid
            width="93%"
            title="Accumsan tincidunt"
            price="260.00"
          />
          <ShopListItemGrid
            width="93%"
            title="Accumsan tincidunt"
            price="260.00"
          />
          <ShopListItemGrid
            width="93%"
            title="Accumsan tincidunt"
            price="260.00"
          />
          <ShopListItemGrid
            width="93%"
            title="Accumsan tincidunt"
            price="260.00"
          />
        </OwlCarousel>
      </div>
      <Brands />
    </div>
  );
}
