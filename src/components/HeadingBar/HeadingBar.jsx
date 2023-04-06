import React from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { RxPerson } from "react-icons/rx";
import { BsHeart, BsCart2 } from "react-icons/bs";
import NavbarPart from "./Navbar";
import { slide as Menu } from "react-burger-menu";
import { useState, useEffect, useRef } from "react";
import "./HeadingBar.css";
import { useLayoutEffect } from "react";

export default function HeadingBar() {
  const [isOpen, setOpen] = useState(false);

  const handleIsOpen = () => {
    setOpen(!isOpen);
    console.log(isOpen);
    if (!isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };

  const refContainer = useRef();
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
            className="headerdroplistLang"
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
            className="headerdroplistCur"
          >
            <NavDropdown.Item href="/USD" className="headerdroplistitem1">
              USD
            </NavDropdown.Item>
            <NavDropdown.Item href="/AZN" className="headerdroplistitem1">
              AZN
            </NavDropdown.Item>
          </NavDropdown>

          <div className="headerdroplistitem">
            <Link to="/login" className="headerdroplistitem">
              <RxPerson className="header-icon" />
            </Link>
          </div>

          <div className="headerdroplistitem">
            <Link to="/wishlist">
              <BsHeart className="header-icon" />
            </Link>
          </div>

          <div>
            <Link to="/cart">
              <BsCart2 className="cardicon" />
            </Link>
          </div>
        </div>
      </Navbar>
      <div className="nPartBrand">
        {screenSize.dynamicWidth < 990 ? (
          <div className="burgerNav">
            <Menu
              isOpen={isOpen}
              onOpen={handleIsOpen}
              onClose={handleIsOpen}
              pageWrapId={"page-wrap"}
              outerContainerId={"outer-container"}
              className="menubar"
            >
              <NavbarPart ref={refContainer} />
            </Menu>
            <Navbar.Brand href="#" className="brand">
              Hekto
            </Navbar.Brand>
          </div>
        ) : (
          <div className="extendNav">
            <Navbar.Brand href="#" className="brand">
              Hekto
            </Navbar.Brand>
            <NavbarPart ref={refContainer} />
          </div>
        )}
      </div>
    </div>
  );
}
