import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavbarAdmin from "./AdminNavbar";
import Users from "./Users";
import AddProduct from "./addProduct";

export default function AdminHome(){

    return(
        <>
            <Router>
                <NavbarAdmin />
                <Routes>
                    <Route path="/" element={<Users />} />
                    <Route path="/x" element={<AddProduct />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </Router>
        </>
    )
};