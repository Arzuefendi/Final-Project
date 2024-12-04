import axios from "axios";
import React, { useEffect, useState } from "react";
import "../style/Category.css";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Category = () => {
  const apiKey =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtneGd6eWJ6cmtucHZlZXR4YmtxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjg1NzUxNDMsImV4cCI6MjA0NDE1MTE0M30.c0Kyapgbmrxify5PPgZUKhM7HPKNzTt6cfHoRdDP1T8";
  const [data, setData] = useState([]);
  const { t } = useTranslation();
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
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    handleGet();
  }, []);
  return (
    <div className="category-box">
      <h2>{t("Our Categories")}</h2>
      <p className="paragraph">
        {t("From home to contract, get inspired and design!")}
      </p>
      <div className="container">
        <div className="row">
          {data.map((el) => (
            <div className="col-sm-12 col-md-6 col-lg-3" key={el.id}>
              <Link to={`/product/${el.id}`} className="product-card-link">
                <div className="product-card">
                  <img
                    src={el.category_img}
                    className="img-fluid"
                    alt={el.category_name}
                  />
                  <p className="text-center">{el.category_name}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
