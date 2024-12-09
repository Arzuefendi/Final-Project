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
  const [price, setPrice] = useState([0, 300]);
  const [filter, setFilter] = useState({ inStock: false, outOfStock: false });
  const [filteredData, setFilteredData] = useState([]);
  const [sortOrder, setSortOrder] = useState("A-Z");

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
        console.log(response.data);
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    handleGet();
  }, []);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    if (!data.length) return;

    const filtered = data.filter((item) => {
      const itemPrice = parseFloat(item.price?.replace(/[^0-9.]/g, "")) || 0;

      const withinPriceRange = itemPrice >= price[0] && itemPrice <= price[1];

      const isInStock = filter.inStock && item.stock_status === "in stock";
      const isOutOfStock =
        filter.outOfStock && item.stock_status === "out of stock";

      const noStockFilter = !filter.inStock && !filter.outOfStock;

      return withinPriceRange && (isInStock || isOutOfStock || noStockFilter);
    });

    switch (sortOrder) {
      case "a-z":
        filtered.sort((a, b) => {
          const nameA = (a.name2 || "").trim().toLowerCase();
          const nameB = (b.name2 || "").trim().toLowerCase();
          return nameA.localeCompare(nameB);
        });
        break;
      case "z-a":
        filtered.sort((a, b) => {
          const nameA = (a.name2 || "").trim().toLowerCase();
          const nameB = (b.name2 || "").trim().toLowerCase();
          return nameB.localeCompare(nameA);
        });
        break;
      case "pricelow":
        filtered.sort((a, b) => {
          const priceA = parseFloat(a.price?.replace(/[^0-9.]/g, "")) || 0;
          const priceB = parseFloat(b.price?.replace(/[^0-9.]/g, "")) || 0;
          return priceA - priceB;
        });
        break;
      case "pricehigh":
        filtered.sort((a, b) => {
          const priceA = parseFloat(a.price?.replace(/[^0-9.]/g, "")) || 0;
          const priceB = parseFloat(b.price?.replace(/[^0-9.]/g, "")) || 0;
          return priceB - priceA;
        });
        break;
      default:
        break;
    }

    setFilteredData(filtered);
  }, [data, filter, price, sortOrder]);

  const indexOfFirstItem = (currentPage - 1) * itemsPerPage;
  const indexOfLastItem = indexOfFirstItem + itemsPerPage;
  const currentItems =
    filteredData.length > 0
      ? filteredData.slice(indexOfFirstItem, indexOfLastItem)
      : [];

  const handleAddToCart = (product) => {
    dispatch({ type: "ADD_TO_CART", payload: product });
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

  const toggleWishlist = (product) => {
    if (wishlist.some((item) => item.id === product.id)) {
      removeFromWishlist(product.id);
      toast.info(t("Product removed from wishlist!"));
    } else {
      addToWishlist(product);
      toast.success(t("Product added to wishlist!"));
    }
  };

  const handleFilterChange = (e) => {
    const { id } = e.target;
    setFilter({
      inStock: id === "inStock" ? true : false,
      outOfStock: id === "outOfStock" ? true : false,
    });
  };

  const handlePriceChange = (e) => {
    const value = Number(e.target.value);
    setPrice([price[0], value]);
  };

  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
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
        <form className="filter-form mt-5">
          <div className="filter-section">
            <h2>{t("Availability")}</h2>
            <div className="form-check" style={{ marginBottom: "10px" }}>
              <input
                type="checkbox"
                id="inStock"
                className="form-check-input"
                checked={filter.inStock}
                onChange={handleFilterChange}
              />
              <label htmlFor="inStock">{t("In stock")}</label>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                id="outOfStock"
                className="form-check-input"
                checked={filter.outOfStock}
                onChange={handleFilterChange}
              />
              <label htmlFor="outOfStock">{t("Out of stock")}</label>
            </div>
          </div>

          <div className="filter-section">
            <h2>{t("Price")}</h2>
            <p>
              {t("Highest Price")} $ {price[1].toLocaleString("en-US")}
            </p>
            <input
              type="range"
              className="slider"
              min="10"
              max="300"
              value={price[1]}
              onChange={handlePriceChange}
              style={{ width: "100%", accentColor: "red" }}
            />
            <div className="d-flex justify-content-between">
              <span>
                {" "}
                {t("Price")}: $ {price[0].toLocaleString("en-US")}
              </span>
              <span>$ {price[1].toLocaleString("en-US")}</span>
            </div>
          </div>
        </form>

        <div className="products-img">
          <div className="sort-container">
            <select
              name="sort"
              id="sort"
              className="sort-select"
              onChange={handleSortChange}
              defaultValue="a-z"
            >
              <option value="a-z">{t("Sort by:")} A-Z</option>
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
