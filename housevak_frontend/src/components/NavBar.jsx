import React from "react";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <nav className="navbar">
      <Link
        to="/invitado/inicio"
        className="logo"
        style={{
          fontWeight: "bold",
          fontFamily: "Arial, sans-serif",
          fontSize: "3rem",
        }}
      >
        <h1
          style={{
            fontWeight: "bold",
            fontFamily: "Arial, sans-serif",
            fontSize: "3rem",
          }}
        >
          Housevak
        </h1>
      </Link>
      <ul
        className="menu"
        style={{
          fontWeight: "bold",
          fontFamily: "Arial, sans-serif",
          fontSize: "3rem",
        }}
      >
        <li
          style={{
            fontWeight: "bold",
            fontFamily: "Arial, sans-serif",
            fontSize: "3rem",
          }}
        >
          <Link
            className="menu-link"
            to="/invitado/catalogo/renta"
            style={{
              fontWeight: "bold",
              fontFamily: "Arial, sans-serif",
              fontSize: "3rem",
            }}
          >
            Renta
          </Link>
        </li>
        <li
          style={{
            fontWeight: "bold",
            fontFamily: "Arial, sans-serif",
            fontSize: "3rem",
          }}
        >
          <Link
            className="menu-link"
            to="/invitado/catalogo/venta"
            style={{
              fontWeight: "bold",
              fontFamily: "Arial, sans-serif",
              fontSize: "3rem",
            }}
          >
            Venta
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
