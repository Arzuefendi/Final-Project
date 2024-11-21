import React, { useContext, useEffect } from "react";
import "../style/Faq.css";
import { useTranslation } from "react-i18next";
import { ThemeContext } from "../ModeContext/Mode";

const Faq = () => {
  const { t } = useTranslation();
  const { isDarkMode } = useContext(ThemeContext);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className={`faq ${isDarkMode ? 'dark-mode' : 'light-mode'} `}>
      <div className="contact-header text-center mt-5">
        <img
          src="https://wpbingo-darion.myshopify.com/cdn/shop/files/bg-breadcrumb.jpg?v=1721207637"
          alt="Background"
        />
        <h2 className="faq-head">
          {t("Home")} /{t("Faq")}{" "}
        </h2>
        <h2 className="text-center">{t("Frequently Asked Questions")} </h2>
      </div>

      <h3>{t("Orders & Returns")} </h3>
      <div className="faq-section">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-6">
              <div className="accordion" id="accordionExample">
                <div className="accordion-item" id="head1">
                  <h2 className="accordion-header" id="headingOne">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      {t("When do I receive my order?")}
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse show"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <p>
                        {t(
                          "When placing the order, a day of shipment is indicated. After the order has been placed, the same delivery time will also be stated on the order confirmation. It is therefore never possible that during the order, the shipping day on the website, is different than on the order confirmation."
                        )}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingTwo">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      {t(
                        "I now see the longer delivery time of (a part of) my order. How can I cancel it?"
                      )}
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      {t(
                        "If the order has a longer delivery time than you had previously seen, it is of course possible to cancel (a part of) the order. For this you can contact our customer service. They will cancel the order for you. The purchase amount will be back on your bank account within two working days. When an order has already been shipped, it can no longer be cancelled."
                      )}
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingThree">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      {t("When will I receive the invoice for my order?")}
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingThree"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <p>
                        {t(
                          "When you have paid for the order, you will not automatically receive an invoice for your order. If you wish to receive an invoice, this can be done in two ways. The first way is through your account at our store. When you log in to your account, you can see your orders and download the invoice."
                        )}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingFour">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFour"
                      aria-expanded="false"
                      aria-controls="collapseFour"
                    >
                      {t("Can I specify a time and date for delivery?")}
                    </button>
                  </h2>
                  <div
                    id="collapseFour"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingFour"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <p>
                        {t(
                          "Many furniture companies offer flexible delivery options, allowing you to specify a preferred delivery date or a time window, though this can vary. Some companies provide this service for an additional fee, especially if it requires coordination with their delivery schedule. However, specific time requests might be limited to certain days or times, based on delivery routes and logistics."
                        )}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingFive">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFive"
                      aria-expanded="false"
                      aria-controls="collapseFive"
                    >
                      {t(
                        "How to see the catalog of available furniture options?"
                      )}
                    </button>
                  </h2>
                  <div
                    id="collapseFive"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingFive"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <p>
                        {t(
                          "Visit the Website: Most furniture stores have an online catalog on their website. Look for a 'Catalog' or 'Shop' section, where you can browse different categories like living room, bedroom, office, etc."
                        )}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingSix">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseSix"
                      aria-expanded="false"
                      aria-controls="collapseSix"
                    >
                      {t("Are there any loyalty or reward programs available?")}
                    </button>
                  </h2>
                  <div
                    id="collapseSix"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingSix"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <p>
                        {t(
                          "You can earn points for every dollar spent, which canlater be redeemed for discounts, free products, or other perks."
                        )}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="faq-img col-sm-12 col-md-6 col-lg-6">
              <h3>{t("Contact us")}</h3>
              <p>
                Royal Botanic Gardens, Kew, Richmond, London TW9 3AB,{" "}
                {t("United Kingdom")}
              </p>
              <img src="https://wpbingo-darion.myshopify.com/cdn/shop/articles/blog-8.jpg?v=1721009043" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
