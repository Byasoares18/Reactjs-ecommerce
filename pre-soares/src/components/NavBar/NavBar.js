import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from '../CartWidget/CartWidget';



function NavBar() {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Venus platas</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Contacto</Nav.Link>
              <NavDropdown title="Productos" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Aros</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Anillos
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Collares</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">
                  Pulseras
                </NavDropdown.Item>


              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
          
        </Container>
        <CartWidget/>
      </Navbar>
    </>
  );
}
export default NavBar

// <nav>
        //     <h3>B'Platas</h3>
        //     <>
        //         <button> Aros </button>
        //         <button> Collares </button>
        //         <button> Anillos </button>
        //         <button> Pulseras </button>
        //     </>
        // </nav>