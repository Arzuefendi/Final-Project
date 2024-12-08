import React, { useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { ThemeContext } from "../ModeContext/Mode";
import { CartContext } from "./AddToCartContext";
import "../style/cart.css";
import { MdDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { t } = useTranslation();
  const { isDarkMode } = useContext(ThemeContext);
  const { state, dispatch } = useContext(CartContext);
  const [promoCode, setPromoCode] = useState("");
  const [discount, setDiscount] = useState(0);
  const cartItems = state.cartItems || [];
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem("isAuthenticated") === "true"
  );
  const navigate = useNavigate();

  const calculateTotalPrice = () => {
    const total = cartItems.reduce((total, item) => {
      return total + parseFloat(item.price.replace("$", "")) * item.quantity;
    }, 0);

    const discountedTotal = total - total * discount;
    return discountedTotal.toFixed(2);
  };

  const handlePromoCode = (e) => {
    e.preventDefault();
    if (promoCode.trim().toLowerCase() === "discount20") {
      setDiscount(0.2);
      localStorage.setItem("promoCode", "discount20"); 
    } else {
      setDiscount(0);
      localStorage.removeItem("promoCode"); 
    }
  };
  
  useEffect(() => {
    const savedPromoCode = localStorage.getItem("promoCode");
    if (savedPromoCode === "discount20") {
      setDiscount(0.2);
    }
  }, []);
  

  const handleButtonClick = () => {
    navigate("/products");
  };

  const handleCheckout = (e) => {
    e.preventDefault();
    const total = calculateTotalPrice();
    if (isAuthenticated) {
      navigate("/checkout", { state: { total } });
    } else {
      navigate("/signin");
    }
  };

  return (
    <div className={`cart ${isDarkMode ? "dark-mode" : "light-mode"}`}>
      <div className="contact-header text-center mt-5">
        <img
          src="https://wpbingo-darion.myshopify.com/cdn/shop/files/bg-breadcrumb.jpg?v=1721207637"
          alt="background"
        />
        <h2>
          {t("Home")} / {t("Cart")}
        </h2>
      </div>

      {cartItems.length > 0 ? (
        <>
          {cartItems.map((item) => (
            <div key={item.id} className="container">
              <div className="row d-flex align-items-center justify-content-center my-5">
                <div className="col-sm-12 col-md-3 col-lg-3">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="cart-item-image"
                  />
                </div>
                <div className="col-sm-12 col-md-3 col-lg-3">
                  <h5 className="text-center">{item.name}</h5>
                </div>
                <div className="cart-item col-sm-12 col-md-3 col-lg-3 d-flex justify-content-center py-2">
                  <div class="quantity-control">
                    <div
                      class="button"
                      onClick={() =>
                        dispatch({ type: "REMOVE_FROM_CART", payload: item })
                      }
                    >
                      -
                    </div>
                    <div class="quantity" id="quantity">
                      {item.quantity}
                    </div>
                    <div
                      class="button"
                      onClick={() =>
                        dispatch({ type: "ADD_TO_CART", payload: item })
                      }
                    >
                      +
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-md-3 col-lg-3 cart-info">
                  <button
                    className="cart-item-button"
                    onClick={() =>
                      dispatch({ type: "REMOVE_FROM_CART", payload: item })
                    }
                  >
                    <MdDelete />
                  </button>
                  $
                  {(
                    parseFloat(item.price.replace("$", "")) * item.quantity
                  ).toFixed(2)}
                </div>
              </div>
            </div>
          ))}
          <div className="totalPrice">
            <div className="submitPrice">
              <h4 className="m-5">
                {t("Total Price")}: ${calculateTotalPrice()}
              </h4>
              <form className="card p-2" onSubmit={handlePromoCode}>
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Promo code: discount20"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                  />
                  <div className="input-group-append">
                    <button type="submit" className="btn btn-danger">
                      {t("Apply")}
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div className="text-center mt-5">
              <button className="btn btn-danger" onClick={handleCheckout}>
                {t("Confirm Cart")}
              </button>
            </div>
          </div>
        </>
      ) : (
        <div className="last">
          <h3>{t("Your Cart Is Empty")}</h3>
          <button onClick={handleButtonClick}>{t("Continue Shopping")}</button>
        </div>
      )}
    </div>
  );
};

export default Cart;
