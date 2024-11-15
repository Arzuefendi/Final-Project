import React, { useEffect } from "react";
import "../style/Gallery.css";
import { useTranslation } from "react-i18next";
const Gallery = () => {
  const { t } = useTranslation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="gallery">
      <div className="contact-header text-center">
        <img
          src="https://wpbingo-darion.myshopify.com/cdn/shop/files/bg-breadcrumb.jpg?v=1721207637"
          alt="Background"
        />
        <h2>
          {" "}
          {t("Home")}/ {t("Gallery")}
        </h2>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-6">
            <img src="	https://vinova-furstore.myshopify.com/cdn/shop/files/img-4-8_1728x.png?v=1696904103" />
            <p className="text-center">{t("Home Interior")} </p>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6">
            <img src="https://wpbingo-darion.myshopify.com/cdn/shop/files/slider-2-1.jpg?v=1721376853" />
            <p className="text-center">{t("Decor")} </p>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-6">
            <img src="	https://wpbingo-darion.myshopify.com/cdn/shop/files/banner-17.jpg?v=1721791519" />
            <p className="text-center">{t("Furniture")} </p>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6">
            <img src="https://wpbingo-darion.myshopify.com/cdn/shop/files/banner-25.jpg?v=1721621754" />
            <p className="text-center">{t("Aesthetic")} </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
