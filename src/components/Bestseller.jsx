import axios from "axios";
import React, { useEffect, useState } from "react";
import "../style/Bestseller.css";
import { useTranslation } from "react-i18next";
import { FiShoppingCart } from "react-icons/fi";
import { IoMdHeartEmpty } from "react-icons/io";

const apiKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtneGd6eWJ6cmtucHZlZXR4YmtxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjg1NzUxNDMsImV4cCI6MjA0NDE1MTE0M30.c0Kyapgbmrxify5PPgZUKhM7HPKNzTt6cfHoRdDP1T8";
const Bestseller = () => {
  const { t, i18n } = useTranslation();
  const [data, setData] = useState([]);
  useEffect(() => {
    const handleGet = async () => {
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
        console.log(response.data);
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    handleGet();
  }, []);
  return (
    <div className="bestseller-section">
      <h3>{t("Bestseller")}</h3>
      <p>{t("Experience the best products at our store!")}</p>
      <div className="container">
        <div className="row">
          {data.map((el) => {
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
                    <IoMdHeartEmpty className="img-icon" />
                    <FiShoppingCart className="img-icon" />
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
