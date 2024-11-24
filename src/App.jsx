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
import SignUp from "./SignUp.jsx";
import SignIn from "./components/SignIn.jsx";
import { ThemeProvider } from "./ModeContext/Mode.jsx";
import "./style/darkMode.css"
import ProductDetails from "./components/ProductDetails.jsx";
import AdminLogin from "./components/AdminLogin.jsx";
import AdminPanel from "./components/AdminPanel.jsx";
import { ToastContainer } from "react-toastify";  // Import ToastContainer here
import 'react-toastify/dist/ReactToastify.css'; // Import Toastify CSS
import { useState } from "react";
import Recommended from "./components/Recommended.jsx";
import Checkout from "./components/Checkout.jsx";


function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [wishlist, setWishlist] = useState([]);

  // Wishlistə məhsul əlavə etmə funksiyası
  const handleAddToWishlist = (product) => {
    if (!wishlist.some((item) => item.id === product.id)) {
      setWishlist([...wishlist, product]);
    }
  };
  return (
    <>
      <ThemeProvider>
        <Navbar
          isAuthenticated={isAuthenticated}
          setIsAuthenticated={setIsAuthenticated}
        />
        {/* ToastContainer component */}
        <ToastContainer position="bottom-left" autoClose={1500} hideProgressBar={false} newestOnTop={false} closeOnClick pauseOnFocusLoss draggable pauseOnHover />
        
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/products" element={<Products />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/product/:productId" element={<ProductDetails />} />
          <Route path="/wishlist" element={<Wishlist wishlist={wishlist}/>} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn setIsAuthenticated={setIsAuthenticated}/>} />
          <Route path="/admin" element={<AdminLogin setIsAuthenticated={setIsAuthenticated} isAuthenticated={isAuthenticated} />} />
          <Route path="/adminpanel" element={<AdminPanel />} />
          <Route path="/adminpanel" element={<AdminPanel />} />
          <Route path="/checkout" element={<Checkout/>} />
          <Route path="/recommended" element={<Recommended/>} />
        </Routes>
        
        <ScrollToTop />
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
