

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Header() {

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">BargainBay</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Sell</Nav.Link>
            <Nav.Link href="#features">Basket</Nav.Link>
            <Nav.Link href="#pricing">Account</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}




export default Header;
