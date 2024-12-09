import React, { useContext, useEffect, useState } from "react";
import "../../style/NavbarStyle.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { FiShoppingCart } from "react-icons/fi";
import { IoMdHeartEmpty } from "react-icons/io";
import { useTranslation } from "react-i18next";
import { Modal, Form, Button } from "react-bootstrap";
import { CartContext } from "../AddToCartContext";
import { WishlistContext } from "../WishlistContext";

const Navbar = ({ isAuthenticated, setIsAuthenticated }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { t, i18n } = useTranslation();
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [showSignIn, setShowSignIn] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({ email: "", password: "" });
  const [loginError, setLoginError] = useState("");
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [cartCount, setCartCount] = useState(0);
  const { state } = useContext(CartContext);
  const { wishlistCount } = useContext(WishlistContext);

  const handleNavToggle = () => {
    setIsNavOpen((prev) => !prev);
  };

  const handleSignInModalOpen = () => setShowSignIn(true);
  const handleSignInModalClose = () => {
    setShowSignIn(false);
    setErrors({ email: "", password: "" });
    setLoginError("");
  };


  useEffect(() => {
    const authStatus = localStorage.getItem("isAuthenticated");
    const storedUsername = localStorage.getItem("username");
    const storedEmail = localStorage.getItem("email");
    const isAdmin = localStorage.getItem("isAdmin");
  
    if (isAdmin === "true") {
      setIsAuthenticated(true);
      setUsername("Admin");
      setEmail("arzuefendi@gmail.com");
    } else if (authStatus === "true") {
      setIsAuthenticated(true);
      setUsername(storedUsername);
      setEmail(storedEmail);
    } else {
      setIsAuthenticated(false);
    }
  }, [setIsAuthenticated, location]);
  

  useEffect(() => {
    setIsNavOpen(false);
  }, [location]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
    setLoginError("");
  };

  const handleSignIn = (e) => {
    e.preventDefault();
  
    const { email, password } = credentials;
    let formIsValid = true;
    const newErrors = { email: "", password: "" };
  
    if (!email) {
      newErrors.email = "Email doldurulmalıdır";
      formIsValid = false;
    }
    if (!password) {
      newErrors.password = "Şifrə doldurulmalıdır";
      formIsValid = false;
    }
  
    setErrors(newErrors);
  
    if (!formIsValid) return;
  
    const storedUserData = JSON.parse(localStorage.getItem("users")) || [];
  
    const user =
      storedUserData.find(
        (user) =>
          user.email === credentials.email &&
          user.password === credentials.password
      );
  
    if (credentials.email === "arzuefendi@gmail.com" && credentials.password === "adminPassword") {
      localStorage.setItem("isAdmin", "true");
      setUsername("Admin");
      setEmail("arzuefendi@gmail.com");
      setIsAuthenticated(true);
      handleSignInModalClose();
    } else if (user) {
      localStorage.setItem("isAuthenticated", "true");
      localStorage.setItem("username", user.username);
      localStorage.setItem("email", user.email);
      setUsername(user.username);
      setEmail(user.email);
      setIsAuthenticated(true);
      handleSignInModalClose();
    } else {
      setLoginError("Invalid email or password");
    }
  };
  
  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("isAdmin");
    localStorage.removeItem("username");
    localStorage.removeItem("email");
    setShowProfile(false);
    setUsername("");
    setEmail("");
    navigate("/"); 
  };
  

  return (
    <div>
      <nav className="navbar navbar-expand-lg fixed-top">
        <div className="container-fluid ms-5">
          <img
            src="https://wpbingo-darion.myshopify.com/cdn/shop/files/logo.png?crop=center&height=88&v=1720775788&width=400"
            width="8%"
            alt="Logo"
          />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={`collapse navbar-collapse justify-content-end ${isNavOpen ? "show" : ""}`}
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link" onClick={handleNavToggle}>
                  {t("Home")}
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  onClick={handleNavToggle}
                >
                  {t("Pages")}
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link to="/about" className="dropdown-item" onClick={handleNavToggle}>
                      {t("About us")}
                    </Link>
                  </li>
                  <li>
                    <Link to="/faq" className="dropdown-item" onClick={handleNavToggle}>
                      {t("FAQ")}
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link to="/blog" className="nav-link" onClick={handleNavToggle}>
                  {t("Blog")}
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  to="/products"
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  onClick={handleNavToggle}
                >
                  {t("Shop")}
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link to="/products" className="dropdown-item" onClick={handleNavToggle}>
                      {t("Products")}
                    </Link>
                  </li>
                  <li>
                    <Link to="/cart" className="dropdown-item" onClick={handleNavToggle}>
                      {t("Cart")}
                    </Link>
                  </li>
                  <li>
                    <Link to="/wishlist" className="dropdown-item" onClick={handleNavToggle}>
                      {t("Wishlist")}
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link" onClick={handleNavToggle}>
                  {t("Contact")}
                </Link>
              </li>
            </ul>
            <div className="icon d-flex align-items-center">
              <div className="heart-icon position-relative mx-3">
                <IoMdHeartEmpty
                  onClick={() => navigate("/wishlist")}
                  className="icon-size cursor-pointer"
                />
                {wishlistCount > 0 && (
                  <span className="badge position-absolute top-0 end-0">
                    {wishlistCount}
                  </span>
                )}
              </div>

              <div className="cart-icon position-relative mx-3">
                <FiShoppingCart
                  onClick={() => navigate("/cart")}
                  className="icon-size cursor-pointer"
                />
                {state.cartCount > 0 && (
                  <span className="badge position-absolute top-0 end-0">
                    {state.cartCount}
                  </span>
                )}
              </div>

              <div className="profile-icon">
                {isAuthenticated ? (
                  <button
                    variant="outline-light"
                    className="profile-button d-flex align-items-center"
                    onClick={() => setShowProfile(true)}
                  >
                    <CgProfile className="m-2" />
                    {username}
                  </button>
                ) : (
                  <CgProfile
                    className="m-2 icon-size cursor-pointer"
                    onClick={handleSignInModalOpen}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Sign In Modal */}
      <Modal show={showSignIn} onHide={handleSignInModalClose} centered>
        <Modal.Header closeButton className="bg-black text-white">
          <Modal.Title className="w-100 text-center fs-2">
            {t("Sign In")}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-black">
          <Form onSubmit={handleSignIn}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="email"
                name="email"
                placeholder={t("Email address")}
                className="p-2"
                value={credentials.email}
                onChange={handleChange}
              />
              {errors.email && (
                <p className="text-danger text-start mt-2">{errors.email}</p>
              )}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control
                type="password"
                name="password"
                placeholder={t("Password")}
                className="p-2"
                value={credentials.password}
                onChange={handleChange}
              />
              {errors.password && (
                <p className="text-danger text-start mt-2">{errors.password}</p>
              )}
              {loginError && (
                <p className="text-danger text-center mt-3">{loginError}</p>
              )}
            </Form.Group>

            <Button
              variant="primary"
              type="submit"
              className="w-50 d-block ms-auto me-auto mt-4 "
              style={{
                backgroundColor: "rgb(239, 238, 238)",
                border: "none",
                color: "black",
              }}
            >
              {t("Sign In")}
            </Button>
          </Form>
          <div className="text-center mt-3">
            <p className="text-white">
              {t("Don't have an account?")}{" "}
              <Link
                to="/signup"
                className="text-white sign-up"
                onClick={handleSignInModalClose}
              >
                {t("Sign Up")}
              </Link>
            </p>
          </div>
        </Modal.Body>
      </Modal>

      {/* Profile Modal */}
      <Modal show={showProfile} onHide={() => setShowProfile(false)} centered>
        <Modal.Header closeButton className="bg-black text-white">
          <Modal.Title className="w-100 text-center fs-2 ms-3">
            {t("PROFILE")}:
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-black">
          <p className="text-white fs-5">
            {t("USERNAME")}: {username || ""}
          </p>
          <p className="text-white fs-5">
            {t("EMAIL")}: {email || ""}
          </p>
          <Button
            onClick={handleLogout}
            variant="danger"
            className="w-50 d-block ms-auto me-auto mt-4"
          >
            {t("LOG_OUT")}
          </Button>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Navbar;