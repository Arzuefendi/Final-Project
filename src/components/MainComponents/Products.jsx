import React, { useEffect, useState } from "react";
import "../../style/Products.css";
import axios from "axios";
import { useTranslation } from "react-i18next";
const Products = () => {
  const { t } = useTranslation();
  const apiKey =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtneGd6eWJ6cmtucHZlZXR4YmtxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjg1NzUxNDMsImV4cCI6MjA0NDE1MTE0M30.c0Kyapgbmrxify5PPgZUKhM7HPKNzTt6cfHoRdDP1T8";
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;
  const [price, setPrice] = useState(10);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
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
        console.error(error);
      }
    };

    handleGet();
  }, []);
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

  const handleSliderChange = (event) => {
    setPrice(event.target.value);
  };
  return (
    <div className="products">
      <div className="contact-header text-center">
        <img
          src="https://wpbingo-darion.myshopify.com/cdn/shop/files/bg-breadcrumb.jpg?v=1721207637"
          alt="Background"
        />
        <h2>{t('Home')} /{t('Products')}</h2>
      </div>
      <div className="products-section">
        <form>
          <h4 className="my-4">{t('Filter')} </h4>
          <h5 className="mb-3">{t('Availability')} </h5>

          <div className="form-check">
            <input
              name="inStock"
              type="checkbox"
              id="inStock"
              className="form-check-input"
            />
            <label htmlFor="inStock" className="form-check-label">
              {t('In stock')}
            </label>
          </div>

          <div className="form-check">
            <input
              name="outOfStock"
              type="checkbox"
              id="outOfStock"
              className="form-check-input"
            />
            <label htmlFor="outOfStock" className="form-check-label">
              {t('Out of stock')}
            </label>
          </div>

          <h5 className="mt-5">{t('Price')} </h5>
          <p>{t('Selected price')}: ${price}</p>
          <input
            type="range"
            className="slider"
            min="10"
            max="300"
            value={price}
            onChange={handleSliderChange}
          />

          <div className="d-flex justify-content-between">
            <span>$10</span>
            <span>$300</span>
          </div>
          <div className="brand-box">
            <button>{t('Bathroom')} </button>
            <button>{t('Chair')} </button>
            <button>{t('Decor')}</button>
            <button>{t('Lamp')} </button>
            <button>{t('Table')} </button>
          </div>
        </form>
        <div className="products-img">
          <div className="sort-container">
            <select name="sort" id="sort" className="sort-select">
              <option value="a-z">{t('Sort by:')} A-Z</option>
              <option value="z-a">{t('Sort by:')} Z-A</option>
              <option value="pricelow">{t('Price')} : {t('Low to High')}</option>
              <option value="pricehigh">{t('Price')}: {t('High to Low')}</option>
            </select>
          </div>
          <div className="container">
            <div className="row">
              {currentItems.map((el) => (
                <div className="col-sm-12 col-md-6 col-lg-4" key={el.id}>
                  <div className="product-card">
                    <img src={el.image} className="img-fluid" alt={el.name} />
                    <p className="text-center">{el.name}</p>
                    <p className="text-center">
                      <span className="product-span">{el.underline_price}</span>{" "}
                      <span>{el.price}</span>
                    </p>
                  </div>
                </div>
              ))}
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
