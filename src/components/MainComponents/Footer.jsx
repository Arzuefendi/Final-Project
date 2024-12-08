import "../../style/Footer.css";
import { RiFacebookFill } from "react-icons/ri";
import { FaTiktok } from "react-icons/fa";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { AiOutlineCopyrightCircle } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import { VscSend } from "react-icons/vsc";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
const Footer = () => {
  const { t } = useTranslation();

  const handleSendClick = () => {
    const emailInput = document.getElementById("newsletter-input");
    const emailValue = emailInput.value.trim();

    if (emailValue === "") {
      toast.error(t("Please enter a valid email address."), {
        position: "bottom-left",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    } else {
      toast.success(t("Successfully sent!"), {
        position: "bottom-left",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      emailInput.value = ""; 
    }
  };

  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="item1">
            <img
              src="https://wpbingo-darion.myshopify.com/cdn/shop/files/logo.png?crop=center&height=88&v=1720775788&width=400"
              width="25%"
              alt="Logo"
              className="mx-3"
            />
            <h5>{t("Sign up for our newsletter!")}</h5>
            <input type="text" 
            id="newsletter-input" 
            placeholder={t(" Email address")} />
            <VscSend className="send-icon" onClick={handleSendClick} />
            <div className="icon">
              <h6>{t("Follow Us:")} </h6>
              <RiFacebookFill
                onClick={() =>
                  window.open("https://www.facebook.com", "_blank")
                }
              />
              <FaTiktok
                onClick={() => window.open("https://www.tiktok.com", "_blank")}
              />
              <AiOutlineWhatsApp
                onClick={() => window.open("https://wa.me/", "_blank")}
              />
              <FaXTwitter
                onClick={() => window.open("https://x.com/", "_blank")}
              />
            </div>
          </div>
          <div className="item2">
            <h5>
              <Link to="/about" className="dropdown-item">
                {t("About us")}
              </Link>{" "}
            </h5>

            <p>
              {" "}
              <Link to="/products" className="nav-link ">
                {t("Our Shops")}
              </Link>{" "}
            </p>
            <p>
              <Link to="/contact" className="nav-link ">
                {t("Contact")}
              </Link>{" "}
            </p>
            <p>
              <Link to="/about" className="nav-link">
                {t("About us")}
              </Link>{" "}
            </p>
            <p>
              <Link to="/signin" className="nav-link">
                {t("Login")}
              </Link>{" "}
            </p>
          </div>
          <div className="item3">
            <h5>
              <Link to="/faq" className="nav-link ">
                {t("FAQ")}
              </Link>{" "}
            </h5>
            <p>
              <Link to="/blog" className="nav-link ">
                {t("Blog")}
              </Link>{" "}
            </p>
            <p>
              <Link to="/cart" className="nav-link ">
                {t("Your order")}{" "}
              </Link>
            </p>
            <p>
              <Link to="/wishlist" className="nav-link ">
                {t("Wishlist")}{" "}
              </Link>
            </p>
            <p>
              <Link to="/signup" className="nav-link">
                {t("Register")}
              </Link>{" "}
            </p>
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
