import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import "../style/Bestseller.css";
import { useTranslation } from "react-i18next";
import { FiShoppingCart } from "react-icons/fi";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoMdHeart } from "react-icons/io"; 
import { CartContext } from "./AddToCartContext";
import { WishlistContext } from "./WishlistContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const apiKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtneGd6eWJ6cmtucHZlZXR4YmtxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjg1NzUxNDMsImV4cCI6MjA0NDE1MTE0M30.c0Kyapgbmrxify5PPgZUKhM7HPKNzTt6cfHoRdDP1T8";

const Bestseller = () => {
  const { t, i18n } = useTranslation();
  const [data, setData] = useState([]);
  const { dispatch } = useContext(CartContext);
  const { wishlist, addToWishlist, removeFromWishlist } =
    useContext(WishlistContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://kgxgzybzrknpveetxbkq.supabase.co/rest/v1/productss?select=*",
          {
            headers: {
              apiKey: apiKey,
              Authorization: `Bearer ${apiKey}`,
            },
          }
        );
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const handleAddToCart = (el) => {
    dispatch({ type: "ADD_TO_CART", payload: el });
    toast.success(t("Successfully added to cart!"), {
      position: "bottom-left",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "colored",
    });
  };

  const toggleWishlist = (el) => {
    const isInWishlist = wishlist.some((item) => item.id === el.id);

    if (isInWishlist) {
      removeFromWishlist(el.id); 
      toast.info("Product removed from wishlist!", {
        position: "bottom-left",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
      });
    } else {
      addToWishlist(el); 
      toast.success("Product added to wishlist!", {
        position: "bottom-left",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
      });
    }
  };

  return (
    <div className="bestseller-section">
      <h3>{t("Bestseller")}</h3>
      <p>{t("Experience the best products at our store!")}</p>
      <div className="container">
        <div className="row">
          {data.map((el) => {
             const isInWishlist = wishlist.some((item) => item.id === el.id);
             
            const productNameKey = `product_name_${el.id}_${i18n.language}`;
            const translatedName = t(productNameKey, { defaultValue: el.name });

            return (
              <div className="col-sm-12 col-md-6 col-lg-3" key={el.id}>
                <div className="product-card">
                  <img
                    src={el.image}
                    className="img-fluid"
                    alt={translatedName}
                  />
                  <div className="bestseller-icons">
                  {isInWishlist ? (
                      <IoMdHeart
                        className="img-icon heart-icon active"
                        onClick={() => toggleWishlist(el)}
                      />
                    ) : (
                      <IoMdHeartEmpty
                        className="img-icon heart-icon"
                        onClick={() => toggleWishlist(el)}
                      />
                    )}
                    <FiShoppingCart
                      className="img-icon"
                      onClick={() => handleAddToCart(el)}
                    />
                  </div>
                  <p className="text-center">{translatedName}</p>
                  <p className="text-center">
                    <span>{el.underline_price}</span> <span>{el.price}</span>
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Bestseller;

