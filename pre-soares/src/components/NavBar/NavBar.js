// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import CartWidget from '../CartWidget/CartWidget';



// function NavBar() {
//   return (
//     <>
//       <Navbar bg="light" expand="lg">
//         <Container>
//           <Navbar.Brand href="#home">Venus platas</Navbar.Brand>
//           <Navbar.Toggle aria-controls="basic-navbar-nav" />
//           <Navbar.Collapse id="basic-navbar-nav">
//             <Nav className="me-auto">
//               <Nav.Link href="#home">Home</Nav.Link>
//               <Nav.Link href="#link">Contacto</Nav.Link>
//               <NavDropdown title="Productos" id="basic-nav-dropdown">
//                 <NavDropdown.Item href="#action/3.1">Aros </NavDropdown.Item>
//                 <NavDropdown.Item href="#action/3.2">
//                   Anillos
//                 </NavDropdown.Item>
//                 <NavDropdown.Item href="#action/3.3">Collares</NavDropdown.Item>
//                 <NavDropdown.Item href="#action/3.4">
//                   Pulseras
//                 </NavDropdown.Item>


//               </NavDropdown>
//             </Nav>
//           </Navbar.Collapse>
          
//         </Container>
//         <CartWidget/>
//       </Navbar>
//     </>
//   );
// }
// export default NavBar





import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';



const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link to="/" className="navbar-brand">
          Venus Platas
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/category/category1" className="nav-link">
                Aros
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/category/category2" className="nav-link">
                Anillos
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/category/category3" className="nav-link">
                Collares
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/category/category4" className="nav-link">
                Pulseras
              </Link>
            </li>
          </ul>
        </div>
        <CartWidget />
      </div>
    </nav>
  );
};

export default NavBar;


// const NavBar = () => {
//   return (
//     <nav className="NavBar">
//       <div className="Logo">
//         <Link to="/">Venus Platas</Link>
//       </div>
//       <ul className="NavLinks">
//         <li>
//           <Link to="/">Home</Link>
//         </li>
//         <li>
//           <Link to="/category/category1">Aros</Link>
//         </li>
//         <li>
//           <Link to="/category/category2">Anillos</Link>
//         </li>
//         <li>
//           <Link to="/category/category3">Collares</Link>
//         </li>
//         <li>
//           <Link to="/category/category4">Pulseras</Link>
//         </li>
//       </ul>
//       <CartWidget />
//     </nav>
//   );
// };

// export default NavBar;
