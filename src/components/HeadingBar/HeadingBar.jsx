import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { RxPerson, RxEnvelopeClosed } from "react-icons/rx";
import { BsHeart, BsCart2 } from "react-icons/bs";
import { BiPhoneCall } from "react-icons/bi";
import "./HeadingBar.css";

export default function HeadingBar() {
  return (
    <Navbar className="HeadingBar">
      <Container>
        <div>
          <Nav className="innerheading">
            <Nav className="phoneandmail">
              <div className="mailcol">
                <RxEnvelopeClosed className="header-icon" />
                <Nav.Link
                  className="mail"
                  href="mailto: ayselturkana@gmail.com"
                >
                  ayselturkana@gmail.com
                </Nav.Link>
              </div>

              <div className="phonecol">
                <BiPhoneCall className="header-icon" />
                <Nav.Link className="phone" href="tel:+994-051-505-00-00">
                  (994) 051 505 00 00
                </Nav.Link>
              </div>
            </Nav>

            <Nav className="headerdroplist">
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
                <Nav.Link href="/login" className="headerdroplistitem">
                  Login
                </Nav.Link>
                <RxPerson className="header-icon" />
              </div>

              <div className="headerdroplistitem">
                <Nav.Link href="/wishlist" className="headerdroplistitem">
                  Wishlist
                </Nav.Link>
                <BsHeart className="header-icon" />
              </div>

              <div>
                <BsCart2 className="header-icon cardicon" />
              </div>
            </Nav>
          </Nav>
        </div>
      </Container>
    </Navbar>
  );
}
