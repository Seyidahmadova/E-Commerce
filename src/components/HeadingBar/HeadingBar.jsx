import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { RxPerson } from "react-icons/rx";
import { BsHeart, BsCart2 } from "react-icons/bs";
import "./HeadingBar.css";

export default function HeadingBar() {
  return (
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
  );
}
