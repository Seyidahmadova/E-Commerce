import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./Navbar.css";

export default function NavbarPart() {
  return (
    <div className="NavbarPart">
      <div className="navPages">
        <Nav.Link href="/">Home</Nav.Link>

        <NavDropdown
          href="/pages"
          id="navbarScrollingDropdown"
          className="pagedrop"
          title="Collections"
        >
          <NavDropdown.Item className="dropdown-item1" href="#action/3.1">
            Bedroom
          </NavDropdown.Item>
          <NavDropdown.Item className="dropdown-item1" href="#action/3.2">
            Dining room
          </NavDropdown.Item>
          <NavDropdown.Item className="dropdown-item1" href="#action/3.3">
            Kitchen
          </NavDropdown.Item>
          <NavDropdown.Item className="dropdown-item1" href="#action/3.3">
            Bathroom
          </NavDropdown.Item>
          <NavDropdown.Item className="dropdown-item1" href="#action/3.3">
            Sofas
          </NavDropdown.Item>
        </NavDropdown>
        {/* <Nav.Link href="/products">Products</Nav.Link> */}
        <Nav.Link href="/blogs">Blog</Nav.Link>
        <Nav.Link href="/shop">Shop</Nav.Link>
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
