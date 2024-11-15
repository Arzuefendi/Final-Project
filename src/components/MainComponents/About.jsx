import React, { useEffect } from "react";
import "../../style/About.css";
import Testimonial from "../Testimonial";
import { useTranslation } from "react-i18next";
const About = () => {
  const { t } = useTranslation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="about">
      <div className="contact-header text-center">
        <img src="	https://wpbingo-darion.myshopify.com/cdn/shop/files/bg-breadcrumb.jpg?v=1721207637" />
        <h2>
          {t("Home")}/{t("About us")}
        </h2>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-6">
            <img src="https://wpbingo-darion.myshopify.com/cdn/shop/files/banner-31.jpg?v=1721355330" />
          </div>
          <div className=" about-box col-sm-12 col-md-6 col-lg-6">
            <h2>
              {t("Comfort and Style: The Art of")} <br />
              {t("Interior Decor")}{" "}
            </h2>
            <p>
              {t(
                "Familiar furniture unexpectedly accumulates dust in the house."
              )}{" "}
              <br />
              {t(
                "Choosing and using suitable furniture is of great significance"
              )}{" "}
              <br />
              {t("in reducing the amount of dust accumulated…")}
            </p>
          </div>
        </div>
      </div>
      <div className="team-box">
        <h2>{t("Our Team")} </h2>
        <div className="container text-center">
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-3">
              <img src="https://wpbingo-darion.myshopify.com/cdn/shop/files/ourteam-1.jpg?v=1721357891" />
              <p>Crystel Casper</p>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3">
              <img src="https://wpbingo-darion.myshopify.com/cdn/shop/files/ourteam-2.jpg?v=1721357891" />
              <p>Haleigh Walter</p>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3">
              <img src="	https://wpbingo-darion.myshopify.com/cdn/shop/files/ourteam-3.jpg?v=1721357891" />
              <p>Robert Smith</p>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3">
              <img src="	https://wpbingo-darion.myshopify.com/cdn/shop/files/ourteam-4.jpg?v=1721357891" />
              <p>Kaya Luettg</p>
            </div>
          </div>
        </div>
      </div>
      <div className="img-box">
        <img src="https://wpbingo-darion.myshopify.com/cdn/shop/files/bg-1.jpg?v=1721359453" />
      </div>
      <Testimonial />
      <div className="brand">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-md-4 col-lg-2">
              <img src="	https://wpbingo-darion.myshopify.com/cdn/shop/files/brand-1.png?v=1721360672" />
            </div>
            <div className="col-sm-6 col-md-4 col-lg-2">
              <img src="	https://wpbingo-darion.myshopify.com/cdn/shop/files/brand-2.png?v=1721360672" />
            </div>
            <div className="col-sm-6 col-md-4 col-lg-2">
              <img src="	https://wpbingo-darion.myshopify.com/cdn/shop/files/brand-3.png?v=1721360672" />
            </div>
            <div className="col-sm-6 col-md-4 col-lg-2">
              <img src="	https://wpbingo-darion.myshopify.com/cdn/shop/files/brand-4.png?v=1721360672" />
            </div>
            <div className="col-sm-6 col-md-4 col-lg-2">
              <img src="	https://wpbingo-darion.myshopify.com/cdn/shop/files/brand-5.png?v=1721360672" />
            </div>
            <div className="col-sm-6 col-md-4 col-lg-2">
              <img src="https:/wpbingo-darion.myshopify.com/cdn/shop/files/brand-6.png?v=1721360672" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
