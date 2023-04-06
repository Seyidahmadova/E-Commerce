import "./ShopList.css";
import ShopListItemGrid from "../../components/ShopListItemGrid/ShopListItemGrid";
import PagePath from "../../components/PagePath/PagePath";
import Brands from "../../components/Brands/Brands";
import ShopSideBar from "../../components/shopSideBar/shopSideBar";
import { HiViewGrid } from "react-icons/hi";
import { MdViewList, MdOutlineFilterList, MdClose } from "react-icons/md";
import { useSelector } from "react-redux";
import { useState, useEffect, useRef } from "react";

export default function ShopList() {
  const [product, setProduct] = useState();
  const addedProducts = useSelector((state)=>state['products']);
  console.log(addedProducts);
  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((res) => res.json())
      .then((json) => setProduct(json));
  }, []);

  // filter
  const [filterShow, setFilterShow] = useState(false);
  const handleFilterShow = () => {
    setFilterShow(!filterShow);
    if(filterShow){
      document.body.style.overflow="auto";
    }
    else {
      document.body.style.overflow="hidden";
    }
  };
 
  // ------
  const refContainer = useRef(null);
  // get width of window
  const [screenSize, getDimension] = useState({
    dynamicWidth: window.innerWidth,
    dynamicHeight: window.innerHeight,
  });
  const setDimension = () => {
    getDimension({
      dynamicWidth: window.innerWidth,
      dynamicHeight: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", setDimension);

    return () => {
      window.removeEventListener("resize", setDimension);
    };
  }, [screenSize]);



  return (
    <div className="ShopList">
      {/* <PagePath title="Shop" path="/shop" curPage="Shop" /> */}

      <div className="list-about">
        <div className="la-title">
          <h1>Fashion Item</h1>
          <p>About 9,620 results</p>
        </div>
        <div className="list-filter">
          <div className="filterButton">
            <button
              onClick={handleFilterShow}
            >
              <MdOutlineFilterList className="filterIcon-shop" />
              Filter
            </button>
          </div>

          <div className="views">
            <p className="grid-view">
              <HiViewGrid />
            </p>
            <p className="list-view">
              <MdViewList />
            </p>
          </div>
          <select className="select-button">
            <option value="Featured1">Featured</option>
            <option value="newest_arrivals">Newest Arrivals</option>
            <option value="price_low_to_high">Price (Low to High)</option>
            <option value="price_high _to_low">Price (High to Low)</option>
          </select>
        </div>
      </div>
      <div className="allShopList" style={{width: filterShow ? "100%" : "85%"}}>
        {screenSize.dynamicWidth < 991 ? (
          <div className="menuSideBar" style={{width: filterShow ? "100%" : "0%"}}>
            {filterShow ? (
              <div className="filterMenu">
                <div className="close-menu" onClick={handleFilterShow}>
                  <MdClose />
                </div>
                <ShopSideBar ref={refContainer} />
              </div>
            ) : null}
          </div>
        ) : (
          <div className="shopSideBarPart">
            <ShopSideBar ref={refContainer} />
          </div>
        )}

        <div className="gridProducts" >
        {product !== undefined &&
          !!product.length &&
          product
            .filter((p, i) => i < 12)
            .map((pr, index) => {
              return (
                <ShopListItemGrid
                  key={index}
                  id={pr["id"]}
                  title={pr["title"]}
                  price={pr["price"]}
                  photo={pr["images"]}
                />
              );
            })}
          {/* <ShopListItemGrid id='1' title="Accumsan tincidunt" price="260.00" /> */}
          {/* <ShopListItemGrid title="Accumsan tincidunt" price="260.00" />
          <ShopListItemGrid title="Accumsan tincidunt" price="260.00" />
          <ShopListItemGrid title="Accumsan tincidunt" price="260.00" />
          <ShopListItemGrid title="Accumsan tincidunt" price="260.00" />
          <ShopListItemGrid title="Accumsan tincidunt" price="260.00" />
          <ShopListItemGrid title="Accumsan tincidunt" price="260.00" />
          <ShopListItemGrid title="Accumsan tincidunt" price="260.00" /> */}
        </div>
      </div>
      <Brands />
    </div>
  );
}
