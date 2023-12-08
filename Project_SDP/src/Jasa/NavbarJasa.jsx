import React from "react";
import { Link } from "react-router-dom";

export const NavbarJasa = () => {
  return (
    <div className="navbar">
      <div className="links">
        <Link to="/"> Home </Link>
        <Link to="/konsultasi">Konsultasi</Link>
        <Link to = "/pasang" >Pemasangan</Link>
        <Link to="/login"> Logout </Link>
      </div>
    </div>
  );
};