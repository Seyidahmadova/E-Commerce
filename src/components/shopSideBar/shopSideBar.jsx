import { useState } from "react";
import "./shopSideBar.css";
import { IoIosArrowUp } from "react-icons/io";
import data from "./filter.json";
import Input from "./input";

export default function ShopSideBar() {
  const [show, setShow ] = useState({brands: true, discount:true,categories:false,price:false});

  return (
    <div className="shopSideBar">
      <div className="productBrandsPart ssb-part">
        <h1 className="ssb-title" id="brands" onClick={(e)=>{setShow({...show, [e.target.id]: !show.brands});}} >Product Brands <IoIosArrowUp id="brands" className="arrow-icon"/></h1>
        {show.brands ?
        <div className="allInputBrand">  
          {
            data.brands.map((el,ind)=>{
              return(
              <Input key={ind} text={el}/>)
            })
          }
       </div>
        :null}
      </div>
      

      <div className="discountOfferPart ssb-part">
        <h1 className="ssb-title" id="discount" onClick={(e)=>{setShow({...show, [e.target.id]: !show.discount});}}>Discount Offer<IoIosArrowUp id="discount" className="arrow-icon"/></h1>
        {show.discount ? 
        <div className="allInputDis">
          {
            data.discounts.map((el,ind)=>{
              return(
                <Input key={ind} text={el}/>)
            })
          }
       </div>
        :null}

      </div>


      <div className="categoriesShop ssb-part">
        <h1 className="ssb-title" id="categories" onClick={(e)=>{setShow({...show, [e.target.id]: !show.categories});}}>Categories <IoIosArrowUp id="categories" className="arrow-icon"/></h1>
        {show.categories ?
        <div className="allInputCate">
          {
            data.categories.map((el,ind)=>{
              return(
                <Input key={ind} text={el}/>)
            })
          }
       </div>
        :null}

      </div>


      <div className="priceFilterPart ssb-part">
        <h1 className="ssb-title" id="price" onClick={(e)=>{setShow({...show, [e.target.id]: !show.price});}}>Price Filter<IoIosArrowUp id="price" className="arrow-icon"/></h1>
        {show.price ?
        <div className="allInputPrice">
          {
            data.price.map((el,ind)=>{
              return(
                <Input key={ind} text={el}/>)
            })
          }
       </div>
        :null}

      </div>
    </div>
  );
}
