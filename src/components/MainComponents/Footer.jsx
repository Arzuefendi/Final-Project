import React from "react";
import "../../style/Footer.css";
import { RiFacebookFill } from "react-icons/ri";
import { FaTiktok } from "react-icons/fa";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { AiOutlineCopyrightCircle } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="item1">
            <h5>{t("Subscribe to our newsletter!")}</h5>
            <input type="text" placeholder={t("Email adress...")} />
            <button className="endButton"  onClick={() => alert("Göndərildi!")}>{t("Send")} </button>

            <div className="icon">
              <h6>{t("Follow Us:")} </h6>
              <RiFacebookFill onClick={() => window.open('https://www.facebook.com', '_blank')} />
              <FaTiktok onClick={() => window.open('https://www.tiktok.com', '_blank')} />
              <AiOutlineWhatsApp onClick={() => window.open('https://wa.me/', '_blank')}/>
              <FaXTwitter  onClick={() => window.open('https://x.com/', '_blank')} />
            </div>
          </div>
          <div className="item2">
            <h5><Link to="/about" className="dropdown-item">
                      {t("About Us")}
                    </Link> </h5>

            <p> <Link to="/products" className="nav-link ">{t("Our Shops")}</Link> </p>
            <p><Link to="/contact" className="nav-link ">{t("Contact")}</Link> </p>
            <p><Link to="/about" className="nav-link">
                      {t("About Us")}
                    </Link> </p>
            <p><Link to="/gallery" className="nav-link ">{t("Gallery")}</Link> </p>
          </div>
          <div className="item3">
            <h5><Link to="/" className="dropdown-item">
            {t("Customer Services")}
                    </Link> </h5>

            <p><Link to="/faq" className="nav-link ">{t("FAQ")}</Link> </p>
            <p><Link to="/blog" className="nav-link ">{t("Blog")}</Link> </p>
            <p><Link to="/cart" className="nav-link ">{t("Your order")} </Link></p>
            <p><Link to="/profile" className="nav-link ">{t("My account")} </Link></p>
          </div>
        </div>
      </div>
      <hr />
      <p className="text-center">
        {t("Copyright")} <AiOutlineCopyrightCircle /> 2024.{" "}
        {t("All Right Reserved")}
      </p>
    </footer>
  );
};

export default Footer;
