import React from "react";
import { Link } from "react-router-dom";

export default function NavbarAdmin(){

    return(
        <>
        <div className="navbar">
            <div className="links">
                <Link to="admin"> Home </Link>
                <Link to="/users">Users</Link>
                <Link to = "/add" >Add Product</Link>
                <Link to="/login"> LogOut </Link>
            </div>
        </div>
        </>
    )
}