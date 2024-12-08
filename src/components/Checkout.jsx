import { useLocation, useNavigate } from "react-router-dom";
import "../style/checkout.css";
import { useTranslation } from "react-i18next";
import { ThemeContext } from "../ModeContext/Mode";
import { useContext, useState } from "react";
import Swal from "sweetalert2";

const Checkout = () => {
  const { t } = useTranslation();
  const { isDarkMode } = useContext(ThemeContext);
  const navigate = useNavigate();
  const location = useLocation();
  const { total } = location.state || { total: 0 };
  const [validated, setValidated] = useState(false);
  

  const handlePayment = (e) => {
    e.preventDefault(); 
    const form = e.target;

    if (form.checkValidity() === false) {
      setValidated(true); 
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "All fields are required!",
      });
      return;
    }

    navigate("/recommended");
  };

  return (
    <div className={`checkout ${isDarkMode ? "dark-mode" : "light-mode"} `}>
      <div className="container">
        <div className="row">
          <div className="col-md-12 order-md-1">
            <form
              className="needs-validation"
              noValidate
              onSubmit={handlePayment}
              validated={validated.toString()} // Səhv mesajlarını göstərmək üçün `validated` state-ni göndəririk
            >
              <div className="row">
                <h3>{t("Contact")}</h3>
                <div className="col-md-12 mb-3">
                  <label htmlFor="emailPhone">
                    {t("Email or Phone Number")}
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="emailPhone"
                    required
                  />
                  <div className="invalid-feedback">
                    {t("Email or Phone Number is required.")}
                  </div>
                </div>
              </div>

              <div className="row">
                <h3>{t("Delivery")}</h3>
                <div className="col-md-6 mb-3">
                  <label htmlFor="firstName">{t("First Name")}</label>
                  <input
                    type="text"
                    className="form-control"
                    id="firstName"
                    required
                  />
                  <div className="invalid-feedback">
                    {t("The first name is required.")}
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="lastName">{t("Last Name")}</label>
                  <input
                    type="text"
                    className="form-control"
                    id="lastName"
                    required
                  />
                  <div className="invalid-feedback">
                    {t("The last name is required.")}
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="country">{t("Country")}</label>
                  <select
                    className="custom-select d-block w-100"
                    id="country"
                    required
                  >
                    <option value="">{t("Choose...")}</option>
                    <option>{t("United States")}</option>
                    <option>{t("Azerbaijan")}</option>
                    <option>{t("Russia")}</option>
                  </select>
                  <div className="invalid-feedback">
                    {t("Please select a valid country.")}
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="state">{t("State")}</label>
                  <select
                    className="custom-select d-block w-100"
                    id="state"
                    required
                  >
                    <option value="">{t("Choose...")}</option>
                    <option>{t("California")}</option>
                    <option>{t("Baku")}</option>
                    <option>{t("Moscow")}</option>
                  </select>
                  <div className="invalid-feedback">
                    {t("Please provide a valid state.")}
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="address">{t("Address")}</label>
                  <input
                    type="text"
                    className="form-control"
                    id="address"
                    placeholder="1234 Main St"
                    required
                  />
                  <div className="invalid-feedback">
                    {t("Please enter your shipping address.")}
                  </div>
                </div>
              </div>

              <h4 className="mb-3">{t("Payment")}</h4>

              <div className="row">
                <div className="col-md-6 mb-3">
                  <label htmlFor="cc-name">{t("Name on card")}</label>
                  <input
                    type="text"
                    className="form-control"
                    id="cc-name"
                    placeholder=""
                    required
                  />
                  <small className="text-muted">
                    {t("Full name as displayed on card")}
                  </small>
                  <div className="invalid-feedback">
                    {t("Name on card is required")}
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="cc-number">{t("Credit card number")}</label>
                  <input
                    type="text"
                    className="form-control"
                    id="cc-number"
                    placeholder=""
                    required
                  />
                  <div className="invalid-feedback">
                    {t("Credit card number is required")}
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label htmlFor="cc-expiry">{t("Expiration Date")}</label>
                  <input
                    type="text"
                    className="form-control"
                    id="cc-expiry"
                    placeholder=""
                    required
                  />
                  <div className="invalid-feedback">
                    {t("Expiration Date is required")}
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="cc-cvc">{t("Security Code")}</label>
                  <input
                    type="text"
                    className="form-control"
                    id="cc-cvc"
                    placeholder=""
                    required
                  />
                  <div className="invalid-feedback">{t("Security Code")}</div>
                </div>
              </div>
              <h3>
                {t("Total Price")}: ${total}
              </h3>
              <button
                className="btn btn-danger btn-lg btn-block"
                type="submit"
              >
                {t("Pay now")}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
