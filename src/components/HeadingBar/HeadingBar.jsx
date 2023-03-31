import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { RxPerson } from "react-icons/rx";
import { BsHeart, BsCart2 } from "react-icons/bs";
import NavbarPart from "./Navbar";
import { slide as Menu } from "react-burger-menu";
import { useState, useEffect, useRef } from "react";
import "./HeadingBar.css";

export default function HeadingBar() {

  const [fixed,setFixed] = useState(true);
  
  const handleBody= ()=> {
    if(screenSize.dynamicWidth < 990){
    setFixed(!fixed);
    if(!fixed){
      document.body.style.overflow ="hidden"
    }
    else {
      document.body.style.overflow ="auto"

    }
  }
  }

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
    <div className="HeadNav">
    <Navbar className="HeadingBar">
      <div className="headerdroplist">
        <NavDropdown
          title="English"
          id="collasible-nav-dropdown"
          className="headerdroplist1"
        >
          <NavDropdown.Item href="/en" className="headerdroplistitem1">
            English
          </NavDropdown.Item>
          <NavDropdown.Item href="/az" className="headerdroplistitem1">
            Azerbaijan
          </NavDropdown.Item>
        </NavDropdown>

        <NavDropdown
          title="USD"
          id="collasible-nav-dropdown"
          className="headerdroplist1"
        >
          <NavDropdown.Item href="/USD" className="headerdroplistitem1">
            USD
          </NavDropdown.Item>
          <NavDropdown.Item href="/AZN" className="headerdroplistitem1">
            AZN
          </NavDropdown.Item>
        </NavDropdown>

        <div className="headerdroplistitem">
          <Nav.Link href="/login" className="headerdroplistitem"></Nav.Link>
          <RxPerson className="header-icon" />
        </div>

        <div className="headerdroplistitem">
          <Nav.Link href="/wishlist" className="headerdroplistitem"></Nav.Link>
          <BsHeart className="header-icon" />
        </div>

        <div>
          <BsCart2 className="cardicon" />
        </div>
      </div>
    </Navbar>
    <div className="nPartBrand">

    {screenSize.dynamicWidth < 990 ? 
    <div className="burgerNav">
      <Menu
        onStateChange={handleBody}
        pageWrapId={"page-wrap"}
        outerContainerId={"outer-container"}
        className="menubar"
      >
        <NavbarPart  ref={refContainer}  />
      </Menu>
      <Navbar.Brand href="#" className="brand">
        Hekto
      </Navbar.Brand> 
    </div>
    :
    (
    <div className="extendNav">
      <Navbar.Brand href="#" className="brand">
        Hekto
      </Navbar.Brand> 
      <NavbarPart ref={refContainer} />
    </div>)
    }
    
    </div>
    </div>
  );
}
