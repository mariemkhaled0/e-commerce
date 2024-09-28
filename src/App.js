import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./common/Header";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Shop from "./pages/Shop";
import Contact from "./pages/Contact";
import AboutUs from "./pages/AboutUs";
import NotFoundPage from "./pages/NotFoundPage";
import Footer from "./common/Footer";
import Details from "./pages/Details";
import Favourite from "./pages/Favourite";

function App() {
  return (
    <div className="">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/*" element={<NotFoundPage />} />
          <Route path="/details/:title" element={<Details />} />
          <Route path="/favourite" element={<Favourite />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
