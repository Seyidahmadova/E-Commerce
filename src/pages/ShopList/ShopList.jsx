import "./ShopList.css";
import ShopListItem from "../../components/ShopListItem/ShopListItem";
import PagePath from "../../components/PagePath/PagePath";
import Brands from "../../components/Brands/Brands";
import ShopSideBar from "../../components/shopSideBar/shopSideBar";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

export default function ShopList() {
  return (
    <div className="ShopList">
      <PagePath title="Shop" path="/shop" curPage="Shop" />

      <div className="list-about">
        <div className="la-title">
          <h1>Fashion Item</h1>
          <p>About 9,620 results</p>
        </div>
        <div className="list-filter">
          <DropdownButton className="dropdown-button" title="Featured">
            <Dropdown.Item href="#/action-1">Newest Arrivals</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Price: low to high</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Price: high to low</Dropdown.Item>
          </DropdownButton>
        </div>
      </div>
      <div className="allShopList">
        <div className="shopSideBarPart">
        <ShopSideBar/>
        </div>
        <div className="listProducts">
          <ShopListItem
            title="Accumsan tincidunt"
            price="260.00"
            about="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo."
          />
          <ShopListItem
            title="Accumsan tincidunt"
            price="260.00"
            about="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo."
          />
          <ShopListItem
            title="Accumsan tincidunt"
            price="260.00"
            about="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo."
          />
          <ShopListItem
            title="Accumsan tincidunt"
            price="260.00"
            about="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo."
          />
          <ShopListItem
            title="Accumsan tincidunt"
            price="260.00"
            about="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo."
          />
        </div>
      </div>
      <Brands />
    </div>
  );
}
