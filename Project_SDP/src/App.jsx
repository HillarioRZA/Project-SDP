import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar";
// import { Shop } from "./pages/shop/shop";
import { ImageFilter } from "./imageFilter";
import { Contact } from "./pages/contact";
import { Histories } from "./pages/history";
import { Cart } from "./pages/cart/cart";
import { ShopContextProvider } from "./context/shop-context";
import { Checkout } from "./pages/checkout";

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<ImageFilter />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/history" element={<Histories/>}/>
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;