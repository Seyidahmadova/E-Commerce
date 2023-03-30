import "./ShopList.css";
import ShopListItemGrid from "../../components/ShopListItemGrid/ShopListItemGrid";
import PagePath from "../../components/PagePath/PagePath";
import Brands from "../../components/Brands/Brands";
import ShopSideBar from "../../components/shopSideBar/shopSideBar";
import { HiViewGrid } from "react-icons/hi";
import { slide as Menu } from "react-burger-menu";
import { MdViewList } from "react-icons/md";
import { useState, useEffect, useRef } from "react";

export default function ShopList() {

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

  // get width of element
  const [elmWidth, setWidth] = useState(0);
  useEffect(() => {
    setWidth(refContainer.offsetWidth);
  }, []);

  return (
    <div className="ShopList">
      <PagePath title="Shop" path="/shop" curPage="Shop" />

      <div className="list-about">
        <div className="la-title">
          <h1>Fashion Item</h1>
          <p>About 9,620 results</p>
        </div>
        <div className="list-filter">
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
      <div className="allShopList">
        {screenSize.dynamicWidth < 990 ? (
          <div className="menuSideBar">
            <Menu pageWrapId={"page-wrap"} className="shopListMenu">
              <ShopSideBar ref={refContainer} />
            </Menu>
          </div>
        ) : (
          <div className="shopSideBarPart">
            <ShopSideBar ref={refContainer} />
          </div>
        )}
        <div className="gridProducts" style={{ width: `${90 - elmWidth}%` }}>
          <ShopListItemGrid title="Accumsan tincidunt" price="260.00" />
          <ShopListItemGrid title="Accumsan tincidunt" price="260.00" />
          <ShopListItemGrid title="Accumsan tincidunt" price="260.00" />
          <ShopListItemGrid title="Accumsan tincidunt" price="260.00" />
          <ShopListItemGrid title="Accumsan tincidunt" price="260.00" />
          <ShopListItemGrid title="Accumsan tincidunt" price="260.00" />
          <ShopListItemGrid title="Accumsan tincidunt" price="260.00" />
          <ShopListItemGrid title="Accumsan tincidunt" price="260.00" />
        </div>
      </div>
      <Brands />
    </div>
  );
}
