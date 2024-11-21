import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import { Route, Routes } from "react-router-dom";
import Homepage from "./components/MainComponents/Homepage.jsx";
import Navbar from "./components/MainComponents/Navbar.jsx";
import Footer from "./components/MainComponents/Footer.jsx";
import Products from "./components/MainComponents/Products.jsx";
import Blog from "./components/MainComponents/Blog.jsx";
import About from "./components/MainComponents/About.jsx";
import Contact from "./components/MainComponents/Contact.jsx";
import Faq from "./components/Faq.jsx";
import Gallery from "./components/Gallery.jsx";
import Wishlist from "./components/Wishlist.jsx";
import Cart from "./components/Cart.jsx";
import ScrollToTop from "./components/MainComponents/ScrollToTop.jsx";
import { useEffect, useState } from "react";
import Admin from "./components/Admin.jsx";
import SignUp from "./SignUp.jsx";
import SignIn from "./components/SignIn.jsx";
import { ThemeProvider } from "./ModeContext/Mode.jsx";
import "./style/darkMode.css"
import ProductDetails from "./components/ProductDetails.jsx";


function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
 
 
   

  return (
    <>
      <ThemeProvider>
      <Navbar
        isAuthenticated={isAuthenticated}
        setIsAuthenticated={setIsAuthenticated}
      />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/products" element={<Products />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:productId" element={<ProductDetails />} />

        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn setIsAuthenticated={setIsAuthenticated}/>} />
        <Route
          path="/admin"
          element={
            <Admin
              setIsAuthenticated={setIsAuthenticated}
              isAuthenticated={isAuthenticated}
            />
          }
        />
      </Routes>
      <ScrollToTop />
      <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
