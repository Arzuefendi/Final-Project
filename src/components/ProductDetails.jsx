import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { FaStar, FaRegStarHalfStroke } from "react-icons/fa6";
import { TbTruckDelivery } from "react-icons/tb";
import { MdOutlineAssignmentReturn } from "react-icons/md";
import { IoMdHeart, IoMdHeartEmpty } from "react-icons/io";
import { useTranslation } from "react-i18next";
import { ThemeContext } from "../ModeContext/Mode";
import { CartContext } from "./AddToCartContext";
import { toast } from "react-toastify";
import { WishlistContext } from "./WishlistContext";

const ProductDetails = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const { t } = useTranslation();
  const { isDarkMode } = useContext(ThemeContext);
  const [count, setCount] = useState(1);
  const navigate = useNavigate();
  const { dispatch } = useContext(CartContext);
  const { wishlist, addToWishlist, removeFromWishlist } = useContext(WishlistContext);

  const apiKey =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtneGd6eWJ6cmtucHZlZXR4YmtxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjg1NzUxNDMsImV4cCI6MjA0NDE1MTE0M30.c0Kyapgbmrxify5PPgZUKhM7HPKNzTt6cfHoRdDP1T8";

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await axios.get(
          `https://kgxgzybzrknpveetxbkq.supabase.co/rest/v1/products2?id=eq.${productId}`,
          {
            headers: {
              apiKey: apiKey,
              Authorization: `Bearer ${apiKey}`,
            }
          }
        );
        setProduct(response.data[0]);
      } catch (error) {
        console.error("Error fetching product details", error);
      }
    };

    fetchProductDetails();
  }, [productId]);

  if (!product) return <div>Loading...</div>;

  const increment = () => setCount(count + 1);
  const decrement = () => count > 1 && setCount(count - 1);

  const handleShopNow = () => navigate("/checkout");
  const handleAddToCart = () => {
    dispatch({
      type: "ADD_TO_CART",
      payload: { ...product, quantity: count }
    });
    toast.success(`Successfully added ${count} item(s) to cart!`);
  };

  const isInWishlist = wishlist.some((item) => item.id === product.id);

  const toggleWishlist = () => {
    if (isInWishlist) {
      removeFromWishlist(product.id);
      toast.info(t("Product removed from wishlist!"));
    } else {
      addToWishlist(product);
      toast.success(t("Product added to wishlist!"));
    }
  };

  return (
   <div className="product-detail">
     <div className={`container  ${isDarkMode ? "bg-dark text-white" : ""}`}
      style={{ marginTop: "150px", marginBottom: "100px" }}>
      <div className="row g-4">
        <div className="col-md-6 col-sm-12">
          <img
            src={product.image}
            className="product-img-fluid rounded"
            alt={product.name}
            style={{ width: "100%", height: "75vh" }}
          />
        </div>
        <div className="col-md-6">
          <h3>{product.name}</h3>
          <div className="d-flex align-items-center mb-3">
            <FaStar className="text-warning" />
            <FaStar className="text-warning" />
            <FaStar className="text-warning" />
            <FaStar className="text-warning" />
            <FaRegStarHalfStroke className="text-warning" />
          </div>
          <h4>
            <del className="text-danger">{product.underline_price}</del>{" "}
            <span className="text-dark">{product.price}</span>
          </h4>
          <p>{product.description}</p>
          <div className="mb-3">
            <p>
              <TbTruckDelivery className="me-2" />
              {t("Estimated delivery time: 10-20 days")}
            </p>
            <p>
              <MdOutlineAssignmentReturn className="me-2" />
              {t("Return within 14 days")}
            </p>
          </div>
          <div className="d-flex align-items-center mb-3">
            <button
              className="btn btn-outline-secondary me-2"
              onClick={decrement}
            >
              -
            </button>
            <span className="fw-bold mx-2">{count}</span>
            <button
              className="btn btn-outline-secondary"
              onClick={increment}
            >
              +
            </button>
          </div>
          <div className="d-grid gap-2 mb-3">
            <button
              className="btn btn-dark"
              onClick={handleAddToCart}
            >
              {t("Add to Cart")}
            </button>
            <button
              className="btn btn-dark"
              onClick={handleShopNow}
            >
              {t("Shop now")}
            </button>
          </div>
          <button
            className="btn btn-outline-danger mb-3"
            onClick={toggleWishlist}
          >
            {isInWishlist ? (
              <IoMdHeart className="me-2" />
            ) : (
              <IoMdHeartEmpty className="me-2" />
            )}
            {isInWishlist ? t("Remove from Wishlist") : t("Add to Wishlist")}
          </button>
          <h5>
            {t("Total")}: ${parseFloat(product.price.replace("$", "")) * count}
          </h5>
        </div>
      </div>
    </div>
   </div>
  );
};

export default ProductDetails;
