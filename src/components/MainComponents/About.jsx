import React, { useContext, useEffect } from "react";
import "../../style/About.css";
import Testimonial from "../Testimonial";
import { useTranslation } from "react-i18next";
import { ThemeContext } from "../../ModeContext/Mode";
import { RiFacebookFill } from "react-icons/ri";
import { FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
const About = () => {
  const { t } = useTranslation();
  const { isDarkMode } = useContext(ThemeContext);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className={`about ${isDarkMode ? "dark-mode" : "light-mode"} `}>
      <div className="contact-header text-center mt-5">
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
              <div className="social-icons">
                <RiFacebookFill
                  onClick={() =>
                    window.open("https://www.facebook.com", "_blank")
                  }
                />
                <FaTiktok
                  onClick={() =>
                    window.open("https://www.tiktok.com", "_blank")
                  }
                />
                <FaXTwitter
                  onClick={() => window.open("https://x.com/", "_blank")}
                />
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3">
              <img src="https://wpbingo-darion.myshopify.com/cdn/shop/files/ourteam-2.jpg?v=1721357891" />
              <p>Haleigh Walter</p>
              <div className="social-icons">
                <RiFacebookFill
                  onClick={() =>
                    window.open("https://www.facebook.com", "_blank")
                  }
                />
                <FaTiktok
                  onClick={() =>
                    window.open("https://www.tiktok.com", "_blank")
                  }
                />
                <FaXTwitter
                  onClick={() => window.open("https://x.com/", "_blank")}
                />
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3">
              <img src="	https://wpbingo-darion.myshopify.com/cdn/shop/files/ourteam-3.jpg?v=1721357891" />
              <p>Robert Smith</p>
              <div className="social-icons">
                <RiFacebookFill
                  onClick={() =>
                    window.open("https://www.facebook.com", "_blank")
                  }
                />
                <FaTiktok
                  onClick={() =>
                    window.open("https://www.tiktok.com", "_blank")
                  }
                />
                <FaXTwitter
                  onClick={() => window.open("https://x.com/", "_blank")}
                />
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3">
              <img src="	https://wpbingo-darion.myshopify.com/cdn/shop/files/ourteam-4.jpg?v=1721357891" />
              <p>Kaya Luettg</p>
              <div className="social-icons">
                <RiFacebookFill
                  onClick={() =>
                    window.open("https://www.facebook.com", "_blank")
                  }
                />
                <FaTiktok
                  onClick={() =>
                    window.open("https://www.tiktok.com", "_blank")
                  }
                />
                <FaXTwitter
                  onClick={() => window.open("https://x.com/", "_blank")}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="about-img-box">
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
