import React, { useContext, useEffect, useState } from "react";
import "../../style/NavbarStyle.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { FiShoppingCart } from "react-icons/fi";
import { IoMdHeartEmpty } from "react-icons/io";
import { useTranslation } from "react-i18next";
import { Dropdown } from "react-bootstrap";
import ReactCountryFlag from "react-country-flag";
import { Modal, Form, Button } from "react-bootstrap";
import { ThemeContext } from "../../ModeContext/Mode";
import { MdDarkMode, MdOutlineDarkMode } from "react-icons/md";

const Navbar = ({ isAuthenticated, setIsAuthenticated }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { t, i18n } = useTranslation();
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };
  const currentLanguage = i18n.language;
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  const [showSignIn, setShowSignIn] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  // const [menuOpen, setMenuOpen] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({ email: "", password: "" });
  const [loginError, setLoginError] = useState("");
  // const [navBackground, setNavBackground] = useState(false);
  const [credentials, setCredentials] = useState({ email: "", password: "" });

  const handleSignInModalOpen = () => setShowSignIn(true);
  const handleSignInModalClose = () => {
    setShowSignIn(false);
    setErrors({ email: "", password: "" });
    setLoginError("");
  };
  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.setItem("isAuthenticated", "false");
    localStorage.removeItem("username");
    localStorage.removeItem("email");
    setShowProfile(false);
    setUsername("");
    setEmail("");
  };
  // useEffect(() => {
  //   setMenuOpen(false);
  // }, [location]);
  // useEffect(() => {
  //   const handleScroll = () => {
  //       if (window.scrollY > 70) {
  //           setNavBackground(true);
  //       } else {
  //           setNavBackground(false);
  //       }
  //   };

  //   window.addEventListener('scroll', handleScroll);

  //   return () => {
  //       window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

  useEffect(() => {
    const authStatus = localStorage.getItem("isAuthenticated");
    const storedUsername = localStorage.getItem("username");
    const storedEmail = localStorage.getItem("email");
    if (authStatus === "true") {
      setIsAuthenticated(true);
      if (storedUsername && storedEmail) {
        setUsername(storedUsername);
        setEmail(storedEmail);
      }
    } else {
      setIsAuthenticated(false);
    }
  }, [setIsAuthenticated, location]);

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

    const storedUserData = JSON.parse(localStorage.getItem("users"));

    const user =
      storedUserData &&
      storedUserData.find(
        (user) =>
          user.email === credentials.email &&
          user.password === credentials.password
      );

    if (user) {
      setIsAuthenticated(true);
      localStorage.setItem("isAuthenticated", "true");
      localStorage.setItem("username", user.username);
      localStorage.setItem("usernamee", user.username);
      localStorage.setItem("email", user.email);
      setUsername(user.username);
      setEmail(user.email);
      handleSignInModalClose();
    } else {
      setLoginError("Invalid email or password");
    }
  };

  return (
    <div>
      <div className="nav-head d-flex justify-content-between align-items-center mx-3 my-2">
        <p>{t("Quick sale: 20% off products purchased today")}</p>
        <Dropdown>
          <Dropdown.Toggle
            className="custom-dropdown-toggle"
            id="dropdown-basic"
          >
            <ReactCountryFlag
              countryCode={
                currentLanguage === "az"
                  ? "AZ"
                  : currentLanguage === "ru"
                  ? "RU"
                  : "GB"
              }
              svg
              style={{ marginRight: "10px" }}
            />
            {currentLanguage === "az"
              ? "Az"
              : currentLanguage === "ru"
              ? "Rus"
              : "En"}
          </Dropdown.Toggle>

          <Dropdown.Menu className="custom-dropdown-menu text-end">
            {["az", "ru", "en"].map(
              (lang) =>
                currentLanguage !== lang && (
                  <Dropdown.Item
                    onClick={() => changeLanguage(lang)}
                    key={lang}
                  >
                    <ReactCountryFlag
                      countryCode={
                        lang === "az" ? "AZ" : lang === "ru" ? "RU" : "GB"
                      }
                      svg
                      style={{ marginRight: "10px" }}
                    />
                    {lang === "az" ? "Az" : lang === "ru" ? "Rus" : "En"}
                  </Dropdown.Item>
                )
            )}
          </Dropdown.Menu>
          <button
            variant="outline-light"
            className="fs-5 icons"
            onClick={toggleTheme}
          >
            {isDarkMode ? <MdDarkMode /> : <MdOutlineDarkMode />}
          </button>
        </Dropdown>
      </div>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid ms-5">
          <img
            src="https://wpbingo-darion.myshopify.com/cdn/shop/files/logo.png?crop=center&height=88&v=1720775788&width=400"
            width="8%"
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
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  {t("Home")}
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {t("Pages")}
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link to="/about" className="dropdown-item">
                      {t("About us")}
                    </Link>
                  </li>
                  <li>
                    <Link to="/faq" className="dropdown-item">
                      {t("FAQ")}
                    </Link>
                  </li>
                  <li>
                    <Link to="/gallery" className="dropdown-item">
                      {t("Gallery")}
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link to="/blog" className="nav-link">
                  {t("Blog")}
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  to="/products"
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {t("Shop")}
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link to="/products" className="dropdown-item">
                      {t("Products")}
                    </Link>
                  </li>
                  <li>
                    <Link to="/cart" className="dropdown-item">
                      {t("Cart")}
                    </Link>
                  </li>
                  <li>
                    <Link to="/wishlist" className="dropdown-item">
                      {t("Wishlist")}
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link">
                  {t("Contact")}
                </Link>
              </li>
            </ul>
            <div className="icon me-5">
              <IoMdHeartEmpty
                className="m-2"
                onClick={() => navigate("/wishlist")}
              />
              <FiShoppingCart
                className="m-3"
                onClick={() => navigate("/cart")}
              />
              {isAuthenticated ? (
                username && (
                  <button
                    variant="outline-light"
                    className="profile-button"
                    onClick={() => setShowProfile(true)}
                  >
                    <CgProfile />
                    {username}
                  </button>
                )
              ) : (
                <>
                  <CgProfile className="m-2" onClick={handleSignInModalOpen} />
                </>
              )}
            </div>
          </div>
        </div>
      </nav>
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
                placeholder={t("Email adress")}
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
              {t("Dont have an account?")}{" "}
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
