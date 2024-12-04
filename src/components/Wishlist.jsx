import { useContext } from "react";
import { useTranslation } from "react-i18next";
import { ThemeContext } from "../ModeContext/Mode";
import "../style/wishlist.css";
import { FiShoppingCart } from "react-icons/fi";
import { CartContext } from "./AddToCartContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { WishlistContext } from "./WishlistContext";

const Wishlist = () => {
  const { t } = useTranslation();
  const { isDarkMode } = useContext(ThemeContext);
  const { dispatch } = useContext(CartContext);
  const { wishlist, removeFromWishlist } = useContext(WishlistContext);
  const handleAddToCart = (item) => {
    dispatch({ type: "ADD_TO_CART", payload: item });
    toast.success("Successfully added to cart!", {
      position: "bottom-left",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "colored",
    });
  };

  return (
    <div className={`wishlist ${isDarkMode ? "dark-mode" : "light-mode"}`}>
      <div className="contact-header text-center mt-5">
        <img
          src="https://wpbingo-darion.myshopify.com/cdn/shop/files/bg-breadcrumb.jpg?v=1721207637"
          alt=""
        />
        <h2>
          {t("Home")} / {t("Wishlist")}
        </h2>
      </div>
      <div className="wishlist-items">
  {wishlist && wishlist.length === 0 ? (  
    <div className="last">
      <h3>{t("Your Wishlist Is Empty")}</h3>
      <button>{t("Continue Shopping")}</button>
    </div>
  ) : (
    <div className="wishlist-container">
      {wishlist.map((item) => (
        <div key={item.id} className="wishlist-item">
          <img src={item.image} alt={item.name} />
          <div className="wishlist-icon">
            <FiShoppingCart
              className="img-icon"
              onClick={() => handleAddToCart(item)}
            />
          </div>
          <p>{item.name}</p>
          <p>{item.price}</p>
          <button className="remove" onClick={() => removeFromWishlist(item.id)}>
            {t("Remove")}
          </button>
        </div>
      ))}
    </div>
  )}
</div>

    </div>
  );
};
export default Wishlist;
