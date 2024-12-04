import React, { useContext, useEffect, useState } from "react";
import "../../style/Home.css";
import Bestseller from "../Bestseller";
import Testimonial from "../Testimonial";
import Category from "../Category";
import { useTranslation } from "react-i18next";
import { ThemeContext } from "../../ModeContext/Mode";
import { useNavigate } from "react-router-dom";
const Homepage = () => {
  const { t } = useTranslation();
  const { isDarkMode } = useContext(ThemeContext);
  const navigate = useNavigate();


  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleButtonClick = () => {
    navigate("/products");
  };
  return (
    <div className={`main ${isDarkMode ? "dark-mode" : "light-mode"}`}>
      <div
        id="carouselExampleAutoplaying"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://wpbingo-darion.myshopify.com/cdn/shop/files/slider-1-3.jpg?v=1721019421"
              alt=""
            />
            <div className="text-box">
              <h3>{t("Seating Statements")}</h3>
              <p>
                {t(
                  "Feeling comfortable and airy when sitting all day.To own space"
                )}
              </p>
              <button className="btn" onClick={handleButtonClick}>
                {t("Shop now")}
              </button>
            </div>
          </div>

          <div className="carousel-item">
            <img
              src="https://wpbingo-darion.myshopify.com/cdn/shop/files/slider-1-1.jpg?v=1721019421"
              alt=""
            />
            <div className="text-box">
              <h3>{t("Elevate Your Space")}</h3>
              <p>
                {t("Experience Choose a beautiful bed for you and your family")}
              </p>
              <button className="btn" onClick={handleButtonClick}>
                {t("Shop now")}
              </button>
            </div>
          </div>

          <div className="carousel-item">
            <img
              src="https://wpbingo-darion.myshopify.com/cdn/shop/files/slider-1-2.jpg?v=1721019421"
              alt=""
            />
            <div className="text-box">
              <h3>{t("Comfort Redefined")}</h3>
              <p>
                {t(
                  "Let's experience and see extremely beautiful sofa models..."
                )}
              </p>
              <button className="btn" onClick={handleButtonClick}>
                {t("Shop now")}
              </button>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className="info-box">
        <div className="container ms-auto me-auto">
          <div className="row d-flex flex-wrap">
            <div className="col-6 col-md-3  p-2 text-center ">
              <img
                src="https://wpbingo-darion.myshopify.com/cdn/shop/files/shipping-w.svg?v=1721787602"
                alt=""
                width="20%"
              />
              <span className="p-2">{t("Free Shipping")}</span>
            </div>
            <div className="col-6 col-md-3 d-none d-sm-block p-2 text-center">
              <img
                src="	https://wpbingo-darion.myshopify.com/cdn/shop/files/quality-w.svg?v=1721787675"
                alt=""
                width="13%"
              />
              <span className="p-2">{t("Quality Assurance")}</span>
            </div>
            <div className="col-6 col-md-3 d-none d-sm-block p-2 text-center  ">
              <img
                src="	https://wpbingo-darion.myshopify.com/cdn/shop/files/return-w.svg?v=1721787674"
                alt=""
                width="15%"
              />
              <span className="p-2">{t("Return within 14 days")}</span>
            </div>
            <div className="col-6 col-md-3 d-none d-sm-block p-2 text-center ">
              <img
                src="	https://wpbingo-darion.myshopify.com/cdn/shop/files/support-w.svg?v=1721787675"
                alt=""
                width="15%"
              />
              <span className="p-2">{t("Support 24/7")}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="img-box">
        <img
          src="https://wpbingo-darion.myshopify.com/cdn/shop/files/lookbook-2.jpg?v=1721876202"
          alt=""
        />
      </div>
      <Category />
      <Bestseller/>
      <Testimonial />
    </div>
  );
};

export default Homepage;
