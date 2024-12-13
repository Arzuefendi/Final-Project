import React, { useContext, useEffect, useState } from "react";
import "../../style/Cotact.css";
import { FaLocationDot } from "react-icons/fa6";
import { MdPhoneInTalk } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { TbClockHour4Filled } from "react-icons/tb";
import { useTranslation } from "react-i18next";
import { ThemeContext } from "../../ModeContext/Mode";
import Swal from "sweetalert2";

const Contact = () => {
  const { t } = useTranslation();
  const { isDarkMode } = useContext(ThemeContext);

  const [name, setName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [email, setEmail] = useState("");
  const [additionalInfo, setAdditionalInfo] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !mobileNumber || !email || !additionalInfo) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: (t("All fields are required!")),
      });
      return;
    }

    Swal.fire({
      position: "center",
      icon: "success",
      title: (t("Successfully sent")),
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div className={`contact ${isDarkMode ? "dark-mode" : "light-mode"} `}>
      <div className="contact-header text-center mt-5">
        <img
          src="https://wpbingo-darion.myshopify.com/cdn/shop/files/bg-breadcrumb.jpg?v=1721207637"
          alt="breadcrumb"
        />
        <h2>
          {t("Home")} / {t("Contact")}
        </h2>
      </div>
      <div className="container location">
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-3">
            <FaLocationDot />
            <h4>{t("Location")}</h4>
            <p>
              Royal Botanic Gardens, Kew, Richmond, London TW9 3AB,{" "}
              {t("United Kingdom")}
            </p>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-3">
            <MdPhoneInTalk />
            <h4>{t("Phones")}</h4>
            <p>0(800) 890-90-900</p>
            <p>0(800) 890-90-990</p>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-3">
            <MdEmail />
            <h4>Email</h4>
            <p>darion@like-themes.com</p>
            <p>darion@like-themes.com</p>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-3">
            <TbClockHour4Filled />
            <h4>{t("Working Hours")}</h4>
            <p>
              {t("Wednesday")} - {t("Sunday")}
            </p>
            <p>7:00 AM - 5:00 PM</p>
          </div>
        </div>
      </div>

      <div className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093705!2d-0.3077077846820281!3d51.476895679633096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487671769d848fb3%3A0xc24b72e3c5de8f8e!2sRoyal%20Botanic%20Gardens%2C%20Kew!5e0!3m2!1sen!2sus!4v1614633243123!5m2!1sen!2sus"
          width="100%"
          height="100%"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>

      <div className="message">
        <h1>{t("Send Message")}</h1>
        <form onSubmit={handleSubmit}>
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-6 col-lg-6">
                <input
                  type="text"
                  placeholder={t("Name")}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="col-sm-12 col-md-6 col-lg-6">
                <input
                  type="number"
                  placeholder={t("Mobile Number")}
                  value={mobileNumber}
                  onChange={(e) => setMobileNumber(e.target.value)}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <input
                  type="email"
                  placeholder="Mail ID"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <textarea
                  placeholder={t("Additional Information")}
                  value={additionalInfo}
                  onChange={(e) => setAdditionalInfo(e.target.value)}
                ></textarea>
              </div>
            </div>
            <button type="submit">{t("Submit")}</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
