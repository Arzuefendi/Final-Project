import React, { useContext, useEffect, useState } from "react";
import "../../style/Products.css";
import axios from "axios";
import { useTranslation } from "react-i18next";
import { ThemeContext } from "../../ModeContext/Mode";
import { FiShoppingCart } from "react-icons/fi";
import { IoMdHeart, IoMdHeartEmpty } from "react-icons/io";
import { Link } from "react-router-dom";
import { CartContext } from "../AddToCartContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { WishlistContext } from "../WishlistContext";

const Products = () => {
  const { t } = useTranslation();
  const { isDarkMode } = useContext(ThemeContext);
  const { dispatch } = useContext(CartContext);
  const { wishlist, addToWishlist, removeFromWishlist } =
    useContext(WishlistContext);
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;
  const [price, setPrice] = useState(10);
  const [availability, setAvailability] = useState("all");
  const apiKey =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtneGd6eWJ6cmtucHZlZXR4YmtxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjg1NzUxNDMsImV4cCI6MjA0NDE1MTE0M30.c0Kyapgbmrxify5PPgZUKhM7HPKNzTt6cfHoRdDP1T8";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handleGet = async () => {
      try {
        const response = await axios.get(
          "https://kgxgzybzrknpveetxbkq.supabase.co/rest/v1/products2?select=*",
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

    handleGet();
  }, []);

  const filteredData = data.filter((product) => {
    const meetsPriceCriteria = product.price <= price;
    const meetsAvailabilityCriteria =
      availability === "all" ||
      (availability === "inStock" && product.inStock) ||
      (availability === "outOfStock" && !product.inStock);
    return meetsPriceCriteria && meetsAvailabilityCriteria;
  });

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleSliderChange = (event) => setPrice(event.target.value);

  const handleAvailabilityChange = (event) => setAvailability(event.target.id);

  const handleAddToCart = (product) => {
    dispatch({ type: "ADD_TO_CART", payload: product });
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

  const toggleWishlist = (product) => {
    if (wishlist.some((item) => item.id === product.id)) {
      removeFromWishlist(product.id);
      toast.info("Product removed from wishlist!");
    } else {
      addToWishlist(product);
      toast.success("Product added to wishlist!");
    }
  };

  return (
    <div className={`products ${isDarkMode ? "dark-mode" : "light-mode"} `}>
      <div className="contact-header text-center mt-5">
        <img
          src="https://wpbingo-darion.myshopify.com/cdn/shop/files/bg-breadcrumb.jpg?v=1721207637"
          alt="Background"
        />
        <h2>
          {t("Home")} /{t("Products")}
        </h2>
      </div>

      <div className="products-section">
        <form className="filter-form">
          <div className="filter-section">
            <h5>{t("Availability")}</h5>
            <div className="form-check">
              <input
                type="radio"
                id="all"
                className="form-check-input"
                checked={availability === "all"}
                onChange={handleAvailabilityChange}
              />
              <label htmlFor="all">{t("All")}</label>
            </div>
            <div className="form-check">
              <input
                type="radio"
                id="inStock"
                className="form-check-input"
                checked={availability === "inStock"}
                onChange={handleAvailabilityChange}
              />
              <label htmlFor="inStock">{t("In stock")}</label>
            </div>
            <div className="form-check">
              <input
                type="radio"
                id="outOfStock"
                className="form-check-input"
                checked={availability === "outOfStock"}
                onChange={handleAvailabilityChange}
              />
              <label htmlFor="outOfStock">{t("Out of stock")}</label>
            </div>
          </div>

          <div className="filter-section">
            <h5>{t("Price")}</h5>
            <input
              type="range"
              min="10"
              max="300"
              value={price}
              onChange={handleSliderChange}
            />
            <p>
              {t("Selected price")}: ${price}
            </p>
          </div>
        </form>

        <div className="products-img">
          <div className="sort-container">
            <select name="sort" id="sort" className="sort-select">
              <option value="a-z">{t("Sort by:")} A-Z</option>
              <option value="z-a">{t("Sort by:")} Z-A</option>
              <option value="pricelow">
                {t("Price")} : {t("Low to High")}
              </option>
              <option value="pricehigh">
                {t("Price")}: {t("High to Low")}
              </option>
            </select>
          </div>
          <div className="container">
            <div className="row">
              {currentItems.map((product) => {
                const isInWishlist = wishlist.some(
                  (item) => item.id === product.id
                );

                return (
                  <div className="col-sm-12 col-md-6 col-lg-4" key={product.id}>
                    <div className="product-card">
                      <Link to={`/product/${product.id}`}>
                        <img
                          src={product.image}
                          className="img-fluid"
                          alt={product.name}
                        />
                      </Link>
                      <div className="bestseller-icons">
                        {isInWishlist ? (
                          <IoMdHeart
                            className="img-icon heart-icon active"
                            onClick={() => toggleWishlist(product)}
                          />
                        ) : (
                          <IoMdHeartEmpty
                            className="img-icon heart-icon"
                            onClick={() => toggleWishlist(product)}
                          />
                        )}
                        <FiShoppingCart
                          className="img-icon"
                          onClick={() => handleAddToCart(product)}
                        />
                      </div>
                      <p className="text-center">{product.name}</p>
                      <p className="text-center">
                        <span className="product-span">
                          {product.underline_price}
                        </span>{" "}
                        <span>{product.price}</span>
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <nav aria-label="Page navigation example">
            <ul className="pagination">
              <li className="page-item">
                <button
                  className="page-link"
                  onClick={() => handlePageChange(1)}
                  disabled={currentPage === 1}
                >
                  &laquo;
                </button>
              </li>
              <li className="page-item">
                <button
                  className="page-link"
                  onClick={() => handlePageChange(1)}
                  disabled={currentPage === 1}
                >
                  1
                </button>
              </li>
              <li className="page-item">
                <button
                  className="page-link"
                  onClick={() => handlePageChange(2)}
                  disabled={currentPage === 2}
                >
                  2
                </button>
              </li>
              <li className="page-item"></li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Products;
