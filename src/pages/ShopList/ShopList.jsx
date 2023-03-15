import "./ShopList.css";
import ShopListItem from "../../components/ShopListItem/ShopListItem";
import PagePath from "../../components/PagePath/PagePath";
import Brands from "../../components/Brands/Brands";

export default function ShopList() {
  return (
    <div className="ShopList">
    <PagePath title="Shop" path="/shop" curPage="shop" />
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
      <Brands />
    </div>
  );
}
