import React from "react";
import "../style/Testimotional.css";
import { BiSolidQuoteAltLeft } from "react-icons/bi";
import { useTranslation } from "react-i18next";
const Testimonial = () => {
  const { t } = useTranslation();
  return (
    <main>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-6">
            <div id="carouselExample" className="carousel slide">
              <div className="carousel-inner">
                <h2>{t("Testimonial")}</h2>

                <div className="carousel-item active">
                  <div className="text">
                    <BiSolidQuoteAltLeft fontSize="170%" />
                    <p className="d-block w-100">
                      {t(
                        " Exceptional experience at the furniture store! The quality of the products exceeded my expectations, and the personalized assistance from the knowledgeable."
                      )}
                    </p>
                  </div>
                  <p id="paragraph">ANANA - {t("Photographer")}</p>
                </div>
                <div className="carousel-item">
                  <div className="text">
                    <BiSolidQuoteAltLeft fontSize="170%" />{" "}
                    <p className="d-block w-100">
                      {t("Exceptional experience at the furniture store! The")}{" "}
                      <br />
                      {t(
                        "quality of the products exceeded my expectations, and"
                      )}{" "}
                      <br />
                      {t(
                        "the personalized assistance from the knowledgeable"
                      )}{" "}
                      <br />
                      {t("taff made the shopping process a delight.")}
                    </p>
                  </div>
                  <p id="paragraph">ANN SMITH - {t("CEO & Founder")}</p>
                </div>
                <div className="carousel-item">
                  <div className="text">
                    <BiSolidQuoteAltLeft fontSize="170%" />{" "}
                    <p className="d-block w-100">
                      {t("Exceptional experience at the furniture store! The")}{" "}
                      <br />
                      {t(
                        "quality of the products exceeded my expectations, and"
                      )}{" "}
                      <br />
                      {t(
                        "the personalized assistance from the knowledgeable"
                      )}{" "}
                      <br />
                      {t("taff made the shopping process a delight.")}
                    </p>
                  </div>
                  <p id="paragraph">LINDA - {t("Designer")}</p>
                </div>
              </div>
              <button
                className="slick-prev slick-arrow"
                aria-label="Previous"
                type="button"
                data-bs-target="#carouselExample"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="slick-next slick-arrow"
                aria-label="Next"
                type="button"
                data-bs-target="#carouselExample"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6">
            <img
              src="https://wpbingo-darion.myshopify.com/cdn/shop/files/banner-16.jpg?v=1721717190"
              width="90%"
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Testimonial;
