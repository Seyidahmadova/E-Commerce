import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./Navbar.css";

export default function NavbarPart() {
  return (
    <div className="NavbarPart">
      <div className="navPages">
        <NavDropdown
          title="Home"
          id="navbarScrollingDropdown"
          className="homedrop"
        >
          <NavDropdown.Item className="dropdown-item1" href="#action/3.1">
            Action
          </NavDropdown.Item>
          <NavDropdown.Item className="dropdown-item1" href="#action/3.2">
            Another action
          </NavDropdown.Item>
          <NavDropdown.Item className="dropdown-item1" href="#action/3.3">
            Something
          </NavDropdown.Item>
        </NavDropdown>

        <Nav.Link href="#pages">Pages</Nav.Link>
        <Nav.Link href="#products">Products</Nav.Link>
        <Nav.Link href="#blog">Blog</Nav.Link>
        <Nav.Link href="#shop">Shop</Nav.Link>
        <Nav.Link href="#contact">Contact</Nav.Link>
      </div>
        <div className="nSearcArea">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-success">Search</Button>
        </div>

    </div>
  );
}
