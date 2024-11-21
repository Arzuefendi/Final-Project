import React, { useContext, useEffect, useState } from 'react';
import axios from "axios";
import { useParams } from "react-router-dom";  // useParams ilə URL parametrini əldə edirik
import "../style/productDetails.css";
import { FaStar } from "react-icons/fa6";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { TbTruckDelivery } from "react-icons/tb";
import { MdOutlineAssignmentReturn } from "react-icons/md";
import { IoMdHeartEmpty } from "react-icons/io";
import { useTranslation } from 'react-i18next';
import { ThemeContext } from '../ModeContext/Mode';


const ProductDetails = () => {
  const { productId } = useParams();  // URL-dən məhsul ID-ni alırıq
  const [product, setProduct] = useState(null);
  const apiKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtneGd6eWJ6cmtucHZlZXR4YmtxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjg1NzUxNDMsImV4cCI6MjA0NDE1MTE0M30.c0Kyapgbmrxify5PPgZUKhM7HPKNzTt6cfHoRdDP1T8";
  const { t } = useTranslation();
  const { isDarkMode } = useContext(ThemeContext);
  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await axios.get(
          `https://kgxgzybzrknpveetxbkq.supabase.co/rest/v1/products2?id=eq.${productId}`,
          {
            headers: {
              apiKey: apiKey,
              Authorization: `Bearer ${apiKey}`,
            },
          }
        );
        setProduct(response.data[0]);  // Alınan məhsul məlumatlarını state-ə yığırıq
      } catch (error) {
        console.error("Error fetching product details", error);
      }
    };

    fetchProductDetails();
  }, [productId]);  // productId dəyişdikdə yenidən məlumatları çəkirik

  if (!product) return <div>Loading...</div>;  // Yüklənmə zamanı "Loading..." mesajı

  return (
    <div className={`product-detail ${isDarkMode ? "dark-mode" : "light-mode"} `}>
    <div className="container">
      <div className="row">
        <div className="col-sm-12 col-md-6 col-lg-12" key={product.id}>
          <div className="product-card">
            <div className="product-info">
              <img src={product.image} className="img-fluid" alt={product.name} />
            </div>
            <div className="product-description">
            <h3>{product.name}</h3>
            <FaStar /><FaStar /><FaStar /><FaStar /><FaRegStarHalfStroke />
              <h3>
                <span className="product-span">{product.underline_price}</span>{" "}
                <span> {product.price}</span>
              </h3>
              <p>{product.description}</p>
              <div className="addition-info">
              <p><TbTruckDelivery/> {t('Estimated delivery time: 10-20 days')}</p>
              <p><MdOutlineAssignmentReturn />{t("Return within 14 days")}</p>
              </div>
              <div className="product-button">
                    <button>-</button>
                    <span>1</span>
                    <button>+</button>
                    <button className='add'> {t('Add to Cart')}</button>
                    <IoMdHeartEmpty/>
               <h5>{t('Total')}: {product.price} </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default ProductDetails;
