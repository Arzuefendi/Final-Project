
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js"
import { Route, Routes } from "react-router-dom";
import Homepage from "./components/MainComponents/Homepage.jsx";
import Navbar from "./components/MainComponents/Navbar.jsx";
import Footer from "./components/MainComponents/Footer.jsx";
import Products from "./components/MainComponents/Products.jsx";
import Blog from "./components/MainComponents/Blog.jsx";
import About from "./components/MainComponents/About.jsx";
import Contact from "./components/MainComponents/Contact.jsx";
import Faq from "./components/Faq.jsx";
import Gallery from "./components/Gallery.jsx"
import Wishlist from "./components/Wishlist.jsx"
import Cart from "./components/Cart.jsx";
import ScrollToTop from "./components/MainComponents/ScrollToTop.jsx";
import Profile from "./components/Profile.jsx";

function App() {
  return (
    <>
     <Navbar/>
  <Routes>
   
    <Route path="/" element = {<Homepage/>}/>
    <Route path="/products" element = {<Products/>}/>
    <Route path="/blog" element = {<Blog/>}/>
    <Route path="/about" element = {<About/>}/>
    <Route path="/contact" element = {<Contact/>}/>
    <Route path="/faq" element = {<Faq/>}/>
    <Route path="/gallery" element = {<Gallery/>}/>
    <Route path="/products" element = {<Products/>}/>
    <Route path="/wishlist" element = {<Wishlist/>}/>
    <Route path="/cart" element = {<Cart/>}/>
    <Route path="/profile" element = {<Profile/>}/>
  </Routes>
  <ScrollToTop/>
  <Footer/>
  </>
  );
}

export default App;
