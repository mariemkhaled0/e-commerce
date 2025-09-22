import { HashRouter as Router, Route, Routes } from "react-router-dom";

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
import LoginPage from "./pages/Login";
import { Toaster } from "react-hot-toast";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./Components/ProtectedRoute";
import Profile from "./pages/Profile";
import SignupPage from "./pages/SignUp";
import { useEffect, useState } from "react";

function App() {
  const getSavedTheme = () => localStorage.getItem("theme") || "light";
  const saveTheme = (theme) => localStorage.setItem("theme", theme);
  const [darkMode, setDarkMode] = useState(getSavedTheme() === "dark");

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      saveTheme("dark");
    } else {
      document.documentElement.classList.remove("dark");
      saveTheme("light");
    }
  }, [darkMode]);
  return (
    <div className="dark:bg-black dark:text-white">
      <AuthProvider>
        <Router>
          <Header darkMode={darkMode} setDarkMode={setDarkMode} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/*" element={<NotFoundPage />} />
            <Route path="/details/:title" element={<Details />} />
            <Route path="/favourite" element={<Favourite />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signUp" element={<SignupPage />} />
            <Route
              path="/profile"
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              }
            />
          </Routes>
          <Footer />
        </Router>
      </AuthProvider>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
}

export default App;
