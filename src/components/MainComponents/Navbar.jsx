import React from "react";
import "../../style/NavbarStyle.css";
import { Link, useNavigate } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { FiShoppingCart } from "react-icons/fi";
import { IoMdHeartEmpty } from "react-icons/io";
import { useTranslation } from "react-i18next";
import { Dropdown } from "react-bootstrap";
import ReactCountryFlag from "react-country-flag";

const Navbar = () => {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };
  const currentLanguage = i18n.language;
  return (
    <div>
       <div className="nav-head d-flex justify-content-between align-items-center mx-3 my-2">
       <p>Quick sale: 20% off products purchased today</p>
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
                      {t("About Us")}
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
            <div className="icon me-5 ">
              <CgProfile className="m-2" onClick={() => navigate("/profile")} />
              <IoMdHeartEmpty className="m-2" onClick={() => navigate("/wishlist")} />
              <FiShoppingCart className="m-3"onClick={() => navigate("/cart")} />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
