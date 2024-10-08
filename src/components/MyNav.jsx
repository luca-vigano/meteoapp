import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

function MyNav() {
  return (
    <Navbar collapseOnSelect expand="md" bg="primary" data-bs-theme="dark">
      <Container fluid>
        <Link to="/">
          <Navbar.Brand href="#home">MyMeteo</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#features">Previsioni</Nav.Link>
            <Nav.Link href="#pricing">Regioni</Nav.Link>
            <Nav.Link href="#pricing">Notizie</Nav.Link>
            <Nav.Link href="#pricing">Info</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNav;
