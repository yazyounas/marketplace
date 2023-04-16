import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Header() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">
            BargainBay
          </Navbar.Brand>
          <Nav className="me-auto">
          <Link to="/sell" className="nav-link">Sell</Link>
            <Link to="/basket" className ="nav-link">Basket</Link>
            <Nav.Link href="#account">Account</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
