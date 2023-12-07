import { NavbarJasa } from "./NavbarJasa";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



export default function HomeJasa(){


     return(
        <>
            <Router>
                <NavbarJasa />
                <Routes>
                    <Route path="/" element={<Users />} />
                    <Route path="/x" element={<AddProduct />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </Router>
        </>
     )
}