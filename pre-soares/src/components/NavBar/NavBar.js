
import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import { NavLink, Link } from 'react-router-dom';


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
              <NavLink to="/" className="nav-link">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/category/category1" className="nav-link">
                Aros
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/category/category2" className="nav-link">
                Anillos
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/category/category3" className="nav-link">
                Collares
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/category/category4" className="nav-link">
                Pulseras
              </NavLink>
            </li>
          </ul>
        </div>
        <CartWidget />
      </div>
    </nav>
  );
};

export default NavBar;


